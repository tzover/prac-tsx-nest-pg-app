import React, { createContext, useState } from 'react'

// interfaces

// styled-components

// Functions and variables initialize
const InputTextDefaultValues = {
  OnChangeTextValue: '',
  ChangeTextValue: () => {},
  TextValue: [],
  addTextValue: () => {},
}

export const InputTextValue = createContext(InputTextDefaultValues)

// MainComponents
const InputTextProvider = ({ children }) => {
  const [TextValue, setTextValue] = useState(InputTextDefaultValues.TextValue)
  const [OnChangeTextValue, setOnChangeTextValue] = useState(
    InputTextDefaultValues.OnChangeTextValue,
  )
  const [stateChange, setStateChange] = useState(null)

  const endPoint = 'http://localhost:5050/'

  const addTextValue = (text) => setTextValue([...TextValue, text])
  const ChangeTextValue = (text) => setOnChangeTextValue(text)

  return (
    <InputTextValue.Provider
      value={{
        OnChangeTextValue,
        ChangeTextValue,
        TextValue,
        addTextValue,
        endPoint,
        stateChange,
        setStateChange,
      }}
    >
      {children}
    </InputTextValue.Provider>
  )
}

export default InputTextProvider
