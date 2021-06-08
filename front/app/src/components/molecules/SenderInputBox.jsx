import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { InputTextValue } from '../providers/InputTextProvider'
import SendText from './tools/SendText'
import SendFile from './tools/SendFile'
import SendImage from './tools/SendImage'

// interfaces

// styled-components

// Functions and variables initialize

// MainComponents
const SenderInputBox = () => {
  const { TextValue } = useContext(InputTextValue)
  const [dirPath, setDirPath] = useState('')
  const location = useLocation()

  const variousSendFunc = () => {
    switch (dirPath) {
      case '/tools/send/text':
        return <SendText />
      case '/tools/send/file':
        return <SendFile />
      case '/tools/send/image':
        return <SendImage />
      default:
        return
    }
  }

  useEffect(() => {
    setDirPath(location.pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TextValue])

  return <>{variousSendFunc()}</>
}

export default SenderInputBox
