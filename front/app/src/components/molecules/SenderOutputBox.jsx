import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { InputTextValue } from '../providers/InputTextProvider'
import ReceiveText from './tools/ReceiveText'
import ReceiveFile from './tools/ReceiveFile'
import ReceiveImage from './tools/ReceiveImage'

const SenderOutputBox = () => {
  const { ChangeTextValue, TextValue } = useContext(InputTextValue)

  const [dirPath, setDirPath] = useState('')
  const location = useLocation()

  const variousSendFunc = () => {
    switch (dirPath) {
      case '/tools/send/text':
        return <ReceiveText />
      case '/tools/send/file':
        return <ReceiveFile />
      case '/tools/send/image':
        return <ReceiveImage />
      default:
        return
    }
  }

  useEffect(() => {
    setDirPath(location.pathname)
    ChangeTextValue('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TextValue])

  return <>{variousSendFunc()}</>
}

export default SenderOutputBox
