import { RegistrationForm } from '../../../components/forms/registration-form';
import { AuthLayout } from '../../../app/layouts/auth-layout';
import { Paths } from '../../../constants';

export const RegisterPage = () => {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Fill in your details to register"
      footerText="Already have an account?"
      footerLinkText="Log In"
      footerLinkTo={Paths.LOGIN}
    >
      <RegistrationForm />
    </AuthLayout>
  );
};
