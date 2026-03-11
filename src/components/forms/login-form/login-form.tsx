import type { LoginRequest } from '../../../types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './login.schema';

import { FormRow } from '../form-row';
import { AuthForm } from '../auth-form';
import { useLoginUserMutation } from '../../../redux/api/users-api';

export const LoginForm = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const onSubmit = async (authData: LoginRequest) => {
    await loginUser(authData);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} isLoading={isLoading} submitMessage="Login">
      <FormRow label="Login" error={errors.login}>
        <input type="text" placeholder="SuperUser" {...register('login')} />
      </FormRow>

      <FormRow label="Password" error={errors.password}>
        <input type="password" placeholder="••••••••" {...register('password')} />
      </FormRow>
    </AuthForm>
  );
};
