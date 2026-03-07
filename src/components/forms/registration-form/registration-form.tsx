import { FormRow } from '../form-row';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, type RegistrationFormValues } from './registration.schema';
import { singleToast } from '../../../utils/toast.util';
import { AuthForm } from '../auth-form';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../app/router';
import { useSignUpUserMutation } from '../../../redux/api/usersAPI';
import type { ApiError } from '../../../types';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({ resolver: zodResolver(registrationSchema) });
  const [signUpUser, { isLoading }] = useSignUpUserMutation();
  const navigate = useNavigate();

  const onSubmit = async (authData: RegistrationFormValues) => {
    try {
      const data = await signUpUser(authData).unwrap();
      singleToast(data.message, 'success');
      navigate(Paths.LOGIN);
      singleToast(`Регистрация прошла успешно!`, 'success');
    } catch (error) {
      singleToast((error as { data: ApiError })?.data?.message || 'Failed to sign up', 'error');
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} isLoading={isLoading} submitMessage="Sign Up">
      <FormRow label="Email" error={errors.email}>
        <input type="email" id="email" placeholder="your@email.com" {...register('email')} />
      </FormRow>

      <FormRow label="Login" error={errors.login}>
        <input type="text" id="login" placeholder="SuperUser" {...register('login')} />
      </FormRow>

      <FormRow label="Password" error={errors.password}>
        <input type="password" id="password" placeholder="••••••••" {...register('password')} />
      </FormRow>

      <FormRow label="Confirm password" error={errors.passwordConfirm}>
        <input
          type="password"
          id="passwordConfirm"
          placeholder="••••••••"
          {...register('passwordConfirm')}
        />
      </FormRow>
    </AuthForm>
  );
};
