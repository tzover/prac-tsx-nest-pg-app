import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { InputTextValue } from '../providers/InputTextProvider'
import styled from 'styled-components'
import SenderInputBox from '../molecules/SenderInputBox'

// interfaces

// styled-components
const InputAreaContainer = styled.div`
  width: 80%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: #c2c2f0;
`
const AreaMsgStyle = styled.p`
  font-size: 1.5em;
  text-align: left;
  padding: 10px;
  border-bottom: 2px solid #efefef;
`

// Functions and variables initialize
const InputMsg = 'Input'

// MainComponents
const SenderInput = () => {
  const [connectCheck, setConnectCheck] = useState('')
  const { endPoint } = useContext(InputTextValue)

  useEffect(() => {
    axios
      .get(endPoint)
      .then((res) => {
        console.log(res.data)
        setConnectCheck('DB Connect!')
      })
      .catch((err) => {
        if (err.response) {
          console.log(err)
        }
        setConnectCheck('DB DisConnect...')
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <InputAreaContainer>
      <AreaMsgStyle>
        {InputMsg} ({connectCheck})
      </AreaMsgStyle>
      <SenderInputBox />
    </InputAreaContainer>
  )
}

export default SenderInput
