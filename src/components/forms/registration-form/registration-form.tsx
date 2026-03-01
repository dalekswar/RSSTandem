import { type FC } from 'react';
import { FormRow } from '../form-row';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, type RegistrationFormValues } from './registration.schema';
import { useMutation } from '@tanstack/react-query';
import { signUpUser } from '../../../api';
import type { ApiError, RegistrationSuccessResponse, SignUpDto } from '../../../types';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/reducers';
import styles from './registration-form.module.css';

export const RegistrationForm: FC = () => {
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
      console.log(data);
      dispatch(registerUser({ email: data.email, login: data.login }));
      toast.success(`Регистрация прошла успешно!`);
    },
    onError: err => toast.error(`${err.message || err}`),
  });

  function onSubmit(data: RegistrationFormValues) {
    console.log(data);
    mutation.mutate(data);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

      <button type="submit" className={styles.form__submit} disabled={mutation.isPending}>
        {mutation.isPending ? 'Sending Data...' : 'Sign Up Now'}
      </button>
    </form>
  );
};
