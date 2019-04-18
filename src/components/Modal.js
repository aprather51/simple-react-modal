import React from 'react';

const Modal = ({ children, handleClose, show }) => {
	const showHideClassName = show ? 'modal show' : 'modal hide';

	return (
		<div className={showHideClassName}>
			<div className="container">
				<div className="btn close" onClick={handleClose}>
					Close
				</div>
				<div className="modal-main">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
