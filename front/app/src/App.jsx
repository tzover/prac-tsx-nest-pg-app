import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'

import Routers from './components/route/Router'

import { AppContainer } from './styles/GlobalStyles'
import InputTextProvider from './components/providers/InputTextProvider'

// interfaces

// styled-components

// Functions and variables initialize
const appName = 'Tools Development'
const creater = '© 2021'

// MainComponents
const App = () => (
  <AppContainer>
    <BrowserRouter>
      <Header title={appName} />
      <InputTextProvider>
        <Routers />
      </InputTextProvider>
      <Footer title={creater} />
    </BrowserRouter>
  </AppContainer>
)
export default App
