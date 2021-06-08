import React from 'react'
import Page404 from '../pages/Page404'
import VariousSender from '../pages/VariousSender'

// interfaces

// styled-components

// Functions and variables initialize

// MainComponents
const SenderToolsRouters = [
  {
    path: '/',
    exact: true,
    children: <VariousSender />,
  },
  {
    path: '/text',
    exact: false,
    children: <VariousSender />,
  },
  {
    path: '/file',
    exact: false,
    children: <VariousSender />,
  },
  {
    path: '/image',
    exact: false,
    children: <VariousSender />,
  },
  {
    path: '/csv',
    exact: false,
    children: <VariousSender />,
  },
  {
    path: '/movie',
    exact: false,
    children: <VariousSender />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
]

export default SenderToolsRouters
