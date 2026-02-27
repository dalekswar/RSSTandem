type Props = {
  error: Error;
};

export function ErrorMessage(props: Props) {
  return (
    <div className="error">
      <p className="error__message">{props.error.message}</p>
      <button
        className="error__button error__button_reset"
        onClick={() => window.location.reload()}
      >
        Reset
      </button>
    </div>
  );
}
