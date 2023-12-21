
const ConfirmationDialog = ({isOpen, onCancel, onConfirm}) => {
  return ( 
    isOpen && (
      <div className="confirmation">
        <div className="confirmation__wrapper">
          <p className="confirmation__text">Are you sure you want to delete this course?</p>
          <div className="confirmation-dialog-buttons">
            <button className="confirmation__button" onClick={onCancel}>Cancel</button>
            <button className="confirmation__button confirmation__button--delete" onClick={onConfirm}>Confirm</button>
          </div>
        </div>
      </div>
    )
  );
}

export default ConfirmationDialog;