import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../../api';
import type { LoginDto } from '../../../types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './login.schema';
import { auth } from '../../../redux/reducers';
import { singleToasts } from '../../../utils/toast.util';
import { FormRow } from '../form-row';
import { AuthForm } from '../auth-form';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationKey: ['loginUser'],
    mutationFn: loginUser,
    onSuccess: data => {
      dispatch(auth({ login: data.login }));
      singleToasts(`Вы успешно вошли в свой аккаунт!`, 'success');
    },
    onError: err => singleToasts(`${err.message || err}`, 'error'),
  });

  function onSubmit(authData: LoginDto) {
    mutation.mutate(authData);
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  return (
    <AuthForm
      onSubmit={handleSubmit(onSubmit)}
      isPending={mutation.isPending}
      submitMessage="Login"
    >
      <FormRow label="Login" error={errors.login}>
        <input type="text" id="login" placeholder="SuperUser" {...register('login')} />
      </FormRow>

      <FormRow label="Password" error={errors.password}>
        <input type="password" id="password" placeholder="••••••••" {...register('password')} />
      </FormRow>
    </AuthForm>
  );
};
