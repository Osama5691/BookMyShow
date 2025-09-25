import "../../css/ExitModal.css"


const ExitModal = ({ show, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
   <div className="exit-modal-overlay">
                <div className="exit-modal-content">
                  <img src="./exit.png" alt="exit" className="exit-img" />
                  <h3>Are you sure you want to exit?</h3>
                  <div className="exit-modal-buttons">
                    <button className="exit-no-btn" onClick={onCancel}>No</button>
                    <button className="exit-yes-btn" onClick={onConfirm}>Yes</button>
                  </div>
                </div>
              </div>
  );
};

export default ExitModal;
