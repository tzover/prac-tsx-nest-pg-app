import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

// interface

// styled-components
const HeaderLogo = styled.div`
  width: 15%;
  height: 40px;

  margin: 1rem;
  padding: 1rem;

  background: white;
`
const HeaderArea = styled.div`
  width: 100%;
  height: 8vh;

  display: flex;
  align-items: center;

  background: #88ccff;

  position: fixed;
  top: 0;
  z-index: 1;
  //
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
      <HeaderLogo onClick={onClickAsnImg}>Top page</HeaderLogo>
      <HeaderMsgArea>
        <p>{title}</p>
      </HeaderMsgArea>
    </HeaderArea>
  )
}

export default Header
