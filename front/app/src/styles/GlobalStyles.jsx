import React, { memo } from 'react'
import styled from 'styled-components'

// interfaces

// styled-components
const AppContainerStyle = styled.div`
  min-height: 600px;
  margin: 10em 0;
  text-align: center;
`
const FlexMainColumnContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: lightgray; // test */
`
const ToolsMainTitleStyle = styled.div`
  font-size: 3em;
  font-weight: bold;
`
// Functions and variables initialize

// MainComponents

export const AppContainer = memo(({ children }) => (
  <AppContainerStyle>{children}</AppContainerStyle>
))

export const ToolsMainTitle = memo(({ title, children }) => (
  <ToolsMainTitleStyle>
    {title}
    {children}
  </ToolsMainTitleStyle>
))

export const FlexMainColumnContainer = memo(({ children }) => (
  <FlexMainColumnContainerStyle>{children}</FlexMainColumnContainerStyle>
))
