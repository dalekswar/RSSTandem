type Props = {
  error: Error;
};

export const ErrorMessage = (props: Props) => (
  <div className="error">
    <p className="error__message">{props.error.message}</p>
    <button className="error__button error__button_reset" onClick={() => window.location.reload()}>
      Reset
    </button>
  </div>
);
