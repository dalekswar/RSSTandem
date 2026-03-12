import { FormRow } from '../form-row';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, type RegistrationFormValues } from './registration.schema';
import { AuthForm } from '../auth-form';
import { useNavigate } from 'react-router-dom';
import { useSignUpUserMutation } from '../../../redux/api/usersAPI';
import { Paths } from '../../../constants';
import styles from './register-form.module.css';
export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({ resolver: zodResolver(registrationSchema) });
  const [signUpUser, { isLoading }] = useSignUpUserMutation();
  const navigate = useNavigate();

  const onSubmit = async (authData: RegistrationFormValues) => {
    await signUpUser(authData);
    navigate(Paths.LOGIN);
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} isLoading={isLoading} submitMessage="Sign Up">
      <FormRow label="Email" error={errors.email}>
        <input type="email" id="lastname" placeholder="your@email.com" {...register('email')} />
      </FormRow>

      <FormRow label="Login" error={errors.login}>
        <input type="text" id="login" placeholder="SuperUser" {...register('login')} />
      </FormRow>

      <div className={styles.userName}>
        <FormRow label="First Name" error={errors.firstName} isOptional={true}>
          <input type="text" id="firstname" placeholder="Alex" {...register('firstName')} />
        </FormRow>
        <FormRow label="Last Name" error={errors.lastName} isOptional={true}>
          <input type="text" id="email" placeholder="Smith" {...register('lastName')} />
        </FormRow>
      </div>

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
