import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import logo from '../../images/Aisin_logo.svg'

// interface

// styled-components
const HeaderArea = styled.div`
  width: 100%;
  height: 8vh;

  display: flex;
  align-items: center;

  background: #88ccff;

  position: fixed;
  top: 0;
  z-index: 1;
`
const HeaderImg = styled.img`
  width: 15%;
  margin: 1em;
  padding: 1em;
`
const HeaderMsgArea = styled.div`
  flex: 1;
  & p {
    font-size: 1.8em;
    font-weight: bold;
  }
`
// Functions and variables initialize

// MainComponents
const Header = ({ title }) => {
  const history = useHistory()

  const onClickAsnImg = useCallback(() => {
    history.push('/')
  }, [history])

  return (
    <HeaderArea>
      <HeaderImg src={logo} alt='logo' onClick={onClickAsnImg} />
      <HeaderMsgArea>
        <p>{title}</p>
      </HeaderMsgArea>
    </HeaderArea>
  )
}

export default Header
