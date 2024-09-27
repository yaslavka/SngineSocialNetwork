import React from 'react';

function ModalComp({ onClick, onClickCancel, icon, title, submitText, children }) {
  return (
    <div id='modal' className='modal fade show' style={{ display: 'block' }}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h6 className='modal-title'>
              {icon && <>{icon}</>}
              {title}
            </h6>
            <button
              onClick={onClickCancel}
              id='closeCropper'
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'>
              <span aria-hidden='true'>×</span>
            </button>
          </div>
          <div className='modal-body'>{children}</div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-light' data-dismiss='modal' onClick={onClickCancel}>
              Отмена
            </button>
            <button
              onClick={onClick}
              type='button'
              className='btn btn-primary js_crop-picture'
              data-handle='user'
              data-id='16'>
              {submitText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComp;
