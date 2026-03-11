import { LoginForm } from '../../../components/forms/login-form';
import { AuthLayout } from '../../../app/layouts/auth-layout';
import { Paths } from '../../../constants';

export const LoginPage = () => (
  <AuthLayout
    title="Welcome Back"
    subtitle="Log in to your account"
    footerText="Don't have an account?"
    footerLinkText="Sign Up"
    footerLinkTo={Paths.REGISTER}
  >
    <LoginForm />
  </AuthLayout>
);
