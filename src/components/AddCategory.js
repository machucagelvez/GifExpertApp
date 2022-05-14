import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('') //El estado se pone como '' para evitar el warning de componente no controlado

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault() //previene que se actualice toda la página cuanto e hace el submit

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [...cats, inputValue]) //setCategories tiene el estado anterior, que se está recibiendo en cats
      setInputValue('') // Borra lo que se acaba de enviar
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
