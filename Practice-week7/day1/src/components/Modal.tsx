 interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
 
 function Modal ( { isOpen, onClose, onConfirm }: ModalProps ) {
if (!isOpen) return null;
 
  return (
    <div className= "modal-overlay">
        <div className= "modal-content">
            <h2> Confirmation </h2>

            <p> Are you sure want to continue </p>

            <button onClick={onClose}>Cancel</button>
            <button onClick={onConfirm}>Confirm</button>
        </div>
    </div>
  );
}

export default Modal;