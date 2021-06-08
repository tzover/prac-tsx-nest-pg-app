import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Card, CardHeader, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { InputTextValue } from '../../providers/InputTextProvider'
import '../../../styles/index.css'

// interface

// styled-components
const ResultsContainar = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0 10px;
  margin-bottom: 10px;
`

const CardStyle = styled(Card)`
  width: 250px;
  height: 250px;
`

// Functions and variables initialize

// MainComponents

const ReceiveImage = () => {
  const { endPoint, stateChange, setStateChange } = useContext(InputTextValue)
  const [result, setResult] = useState([''])

  const GetAllData = async () => {
    await axios
      .get(`${endPoint}v1/image`)
      .then((res) => {
        const texts = res.data
        setResult(texts)
      })
      .catch((err) => {
        if (err.response) {
          console.log(err)
        }
      })
  }

  const DeleteImage = async (id, name) => {
    await axios
      .delete(`${endPoint}v1/image/${id}`)
      .then((res) => {
        // GetAllData()
      })
      .catch((err) => {
        if (err.response) {
          console.log(err)
        }
      })
    const newName = name.replace(/\./g, ' ')
    await axios
      .delete(`${endPoint}v1/image/file/${newName}`)
      .then((res) => {
        GetAllData()
      })
      .catch((err) => {
        if (err.response) {
          console.log(err)
        }
      })
  }

  useEffect(() => {
    GetAllData()
    setStateChange(null)

    // const name = 'docker.png'
    // const newName = name.replace(/\./g, '-')
    // console.log(newName)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateChange])

  return (
    <div>
      <h1>ReceiveImage</h1>
      <ResultsContainar>
        {result &&
          result.map((result) => (
            <CardStyle key={result.id}>
              <CardHeader
                title={result.originalname}
                subheader={`type:${result.mimetype}, ${result.filename}`}
                action={
                  <IconButton
                    type='button'
                    aria-label='deleteButton'
                    color='secondary'
                    onClick={() => DeleteImage(result.id, result.filename)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              />
              <img
                className='imgStyle'
                src={`${endPoint}v1/image/${result.filename}`}
                alt='images'
                onError={(e) => (e.target.style.display = 'none')}
              />
            </CardStyle>
          ))}
      </ResultsContainar>
    </div>
  )
}

export default ReceiveImage
