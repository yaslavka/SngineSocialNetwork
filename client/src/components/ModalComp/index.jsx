import React from 'react'
import * as appActions from '../../actions/app.actions'
import { useDispatch } from 'react-redux'

function ModalComp({ onClick, children }) {
  const dispatch = useDispatch()
  return (
    <div id="modal" className="modal fade show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">
              <i className="fa fa-crop-alt mr5"></i>
              Обрезать картинку
            </h6>
            <button
              onClick={() => dispatch(appActions.toggleCropperAvatar(false))}
              id="closeCropper"
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-light" data-dismiss="modal" onClick={() => dispatch(appActions.toggleCropperAvatar(false))}>Отмена</button>
            <button onClick={onClick} type="button" className="btn btn-primary js_crop-picture" data-handle="user"
                    data-id="16">Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComp
