import React from 'react'
import styled from 'styled-components'
import SenderOutputBox from '../molecules/SenderOutputBox'

// interfaces

// styled-components
const OutputAreaContainer = styled.div`
  width: 80%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  background: #b6c0c2;
`

const AreaMsgStyle = styled.p`
  font-size: 1.5em;
  text-align: left;
  padding: 10px;
  border-bottom: 2px solid #efefef;
`

// Functions and variables initialize
const OutputMsg = 'Output '

// MainComponents
const SenderOutput = () => {
  return (
    <OutputAreaContainer>
      <AreaMsgStyle>{OutputMsg}</AreaMsgStyle>
      <SenderOutputBox />
    </OutputAreaContainer>
  )
}

export default SenderOutput
