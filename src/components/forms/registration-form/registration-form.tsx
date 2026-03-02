import { FormRow } from '../form-row';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, type RegistrationFormValues } from './registration.schema';
import { useMutation } from '@tanstack/react-query';
import { signUpUser } from '../../../api';
import type { ApiError, RegistrationSuccessResponse, SignUpDto } from '../../../types';
import { useDispatch } from 'react-redux';
import { singleToasts } from '../../../utils/toast.util';
import { auth } from '../../../redux/reducers';
import { AuthForm } from '../auth-form';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({ resolver: zodResolver(registrationSchema) });
  const dispatch = useDispatch();
  const mutation = useMutation<RegistrationSuccessResponse, ApiError, SignUpDto>({
    mutationKey: ['signUpUser'],
    mutationFn: signUpUser,
    onSuccess: data => {
      dispatch(auth({ login: data.login }));
      singleToasts(`Регистрация прошла успешно!`, 'success');
    },
    onError: err => singleToasts(`${err.message || err}`, 'error'),
  });

  function onSubmit(data: RegistrationFormValues) {
    console.log(data);
    mutation.mutate(data);
  }

  return (
    <AuthForm
      onSubmit={handleSubmit(onSubmit)}
      isPending={mutation.isPending}
      submitMessage="Sign Up"
    >
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
