import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'

// interface

// styled-components
const FooterArea = styled.div`
  width: 100%;
  height: 8vh;

  display: flex;
  align-items: center;
  text-align: center;

  background: #efefef;

  position: fixed;
  bottom: 0;

  opacity: 0.6;
`
const FooterMsgArea = styled.div`
  flex: 1;
  & p {
    font-size: 0.8em;
  }
`
const PageBackButton = styled(Button)``
const PageBackIcon = styled(KeyboardReturnIcon)`
  padding: 20px;
`
// Functions and variables initialize

// MainComponents
const Footer = ({ title }) => {
  const history = useHistory()

  const BackHome = useCallback(() => {
    history.goBack()
  }, [history])

  return (
    <FooterArea>
      <FooterMsgArea>
        <p>{title}</p>
      </FooterMsgArea>
      <PageBackButton onClick={BackHome}>
        <PageBackIcon />
      </PageBackButton>
    </FooterArea>
  )
}

export default Footer
