import { Link } from 'react-router';

export const ErrorPage = () => {
  return (
    <section className="error">
      <p>Something went wrong!</p>
      <button>
        <Link to="..">Go back!</Link>
      </button>
    </section>
  );
};
