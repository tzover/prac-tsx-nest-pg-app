import React from 'react'
import {
  FlexMainColumnContainer,
  ToolsMainTitle,
} from '../../styles/GlobalStyles'
import SimpleItemList from '../molecules/SimpleItemList'

// interface

// styled-components

// Functions and variables initialize

// MainComponents
const ToolBox = () => {
  return (
    <FlexMainColumnContainer>
      <ToolsMainTitle title='What do you want to send ?' />
      <SimpleItemList />
    </FlexMainColumnContainer>
  )
}

export default ToolBox
