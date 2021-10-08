import React from 'react';

const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios')
        setStorageChange(true)
      }
    })

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={setStorageChange}
      />
    )
  }
}

export { withStorageListener }