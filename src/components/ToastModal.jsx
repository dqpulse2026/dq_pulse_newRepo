import Button from "./Button";
import "./ToastModal.css";

function ToastModal({ open, useCase, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <h3>Opening in ActivateIQ</h3>
        <p>{useCase?.title} will open in a new experience.</p>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}

export default ToastModal;
