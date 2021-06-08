import React, { useState, useRef, useContext, useEffect } from 'react'
import axios from 'axios'
// import FormData from 'form-data'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { InputTextValue } from '../../providers/InputTextProvider'

// styled-components
const InputArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 10px;
  gap: 20px;
`
const MsgArea = styled.div`
  font-size: 1.2em;
`
const InputAreaButton = styled(Button)`
  width: 10%;
`
const SelectedArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
`

// Functions and variables initialize
const SendImageMsg = '送信するImageを選択してください'
const sendButtonMsg = 'Upload'
const SelectedImageMsg = '送信するImageは　→　'

const SendImage = () => {
  const { setStateChange, endPoint } = useContext(InputTextValue)

  const [files, setFiles] = useState(null)
  const [sendState, setSendState] = useState(false)
  const inputRef = useRef(null)

  const onImageInputChange = (event) => {
    console.log('OnChange!')
    // console.log(event.target.files[0])
    setFiles(event.target.files[0])
  }

  const imageUpload = () => {
    console.log(inputRef.current)
    inputRef.current.click()
  }

  const resetImage = () => {
    setFiles(null)
  }

  const onClickSendButton = async () => {
    const formData = new FormData()

    if (!files) return

    formData.append('files', files, files.name)

    await axios
      .post(`${endPoint}v1/image`, formData)
      .then((res) => {
        console.log(res)
        setSendState(!sendState)
      })
      .catch((err) => {
        if (err.response) {
          console.log(err)
        }
      })
    return setStateChange('change!')
  }

  useEffect(() => {
    setFiles(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendState])

  return (
    <>
      <InputArea>
        <MsgArea>{SendImageMsg}</MsgArea>
        <Button type='button' variant='contained' onClick={imageUpload}>
          選択
        </Button>
        <Button type='button' variant='contained' onClick={resetImage}>
          Reset
        </Button>
        <input
          hidden
          ref={inputRef}
          type='file'
          accept='image/*'
          onChange={onImageInputChange}
        />

        {/* 送信ボタン */}
        <InputAreaButton
          type='button'
          variant='contained'
          color='primary'
          onClick={onClickSendButton}
        >
          {sendButtonMsg}
        </InputAreaButton>
      </InputArea>
      <SelectedArea>
        <MsgArea>{SelectedImageMsg}</MsgArea>
        <MsgArea>
          <ul>
            {files ? (
              <>
                <li>Name: {files.name}</li>
                <li>Type: {files.type}</li>
                <li>Size: {files.size}</li>
              </>
            ) : (
              ''
            )}
          </ul>
        </MsgArea>
      </SelectedArea>
    </>
  )
}

export default SendImage
