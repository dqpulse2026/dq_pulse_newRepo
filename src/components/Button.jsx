import "./Button.css";

function Button({ children, onClick, disabled, kind = "primary", type = "button" }) {
  return (
    <button className={`btn btn-${kind}`} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
}

export default Button;
