import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { List, ListItem, ListItemText } from '@material-ui/core'

// interface

// styled-components
const ListParent = styled(List)`
  width: 80%;
`
const SendListItemText = styled(ListItemText)`
  text-align: center;
  height: 80px;
  /* margin: auto; */
  & span {
    font-size: 1.5em;
    padding: 1.2em;
    &:hover {
      font-weight: bold;
    }
  }
`
// Functions and variables initialize

// MainComponents
const SimpleItemList = () => {
  const history = useHistory()

  const ArrayListItems = [
    { name: 'Text', type: 'text' },
    { name: 'File', type: 'file' },
    { name: 'Image', type: 'image' },
    { name: 'Csv', type: 'csv' },
    { name: 'Movie', type: 'movie' },
  ]

  const NextPage = (type) =>
    type ? history.push(`/tools/send/${type}`) : history.push('/')

  return (
    <ListParent aria-label='none'>
      {ArrayListItems.map((item) => (
        <ListItem button key={item.name} onClick={() => NextPage(item.type)}>
          <SendListItemText primary={item.name} />
        </ListItem>
      ))}
    </ListParent>
  )
}

export default SimpleItemList
