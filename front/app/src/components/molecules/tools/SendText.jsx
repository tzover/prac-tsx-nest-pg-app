import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { InputTextValue } from '../../providers/InputTextProvider'
import { Button } from '@material-ui/core'

// interfaces

// styled-components
const InputArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`
const InputTextBox = styled(TextField)`
  width: 70%;
`

const InputAreaButton = styled(Button)`
  font-size: 2em;
  width: 20%;
`

// Functions and variables initialize
const sendButtonMsg = 'Send'

// MainComponents
const SendText = () => {
  const {
    OnChangeTextValue,
    ChangeTextValue,
    addTextValue,
    TextValue,
    endPoint,
  } = useContext(InputTextValue)

  const onChangeText = (e) => {
    ChangeTextValue(e.target.value)
  }

  // const onClickSendButton = () => addTextValue(OnChangeTextValue)
  const onClickSendButton = async () => {
    await axios
      .post(
        `${endPoint}v1/text`,
        {
          text: OnChangeTextValue,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
      .then((res) => {
        const { text, id } = res.data
        console.log(text, id)
      })
      .catch((err) => {
        if (err.response) {
          console.log(err)
        }
      })
    return addTextValue(OnChangeTextValue)
  }
  useEffect(() => {
    ChangeTextValue('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TextValue])
  return (
    <InputArea>
      <InputTextBox
        id='filled-basic'
        label='Input Text Msg'
        variant='filled'
        onChange={onChangeText}
        value={OnChangeTextValue}
      />
      <InputAreaButton
        type='button'
        variant='contained'
        color='primary'
        onClick={onClickSendButton}
      >
        {sendButtonMsg}
      </InputAreaButton>
    </InputArea>
  )
}

export default SendText
