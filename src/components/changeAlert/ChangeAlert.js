import React from 'react';
import { withStorageListener } from './withStorageListener.js'

const ChangeAlert = ({ show, toggleShow }) => {
  if(show) {
    return (
      <div>
        <p>Hubo algo</p>
        <button
          onClick={() => toggleShow(false)}
        >
          Volver a cargar
        </button>
      </div>
    )
  }
  return null
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }