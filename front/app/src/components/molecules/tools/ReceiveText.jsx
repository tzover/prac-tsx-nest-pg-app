import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { InputTextValue } from '../../providers/InputTextProvider'

// interfaces

// styled-components
const ResultsContainar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 20px; */
  margin: 0 10px;
  margin-bottom: 20px;
`

const ResultText = styled.div`
  display: flex;
  /* border: solid; */
  /* gap: 10px; */
  margin-bottom: 10px;
`

const TextArea = styled.div`
  margin: auto;
`
const DeleteButton = styled(Button)`
  width: 10%;
  margin: 0 10px;
`

// Functions and variables initialize

// MainComponents
const ReceiveText = () => {
  const { TextValue, endPoint } = useContext(InputTextValue)
  const [result, setResult] = useState([''])

  const GetAllData = () => {
    axios
      .get(`${endPoint}v1/text`)
      .then((res) => {
        console.log(res.data)
        const texts = res.data
        setResult(texts)
      })
      .catch((err) => {
        if (err.response) {
          console.log(err)
        }
      })
  }

  const DeleteText = (id) => {
    console.log(id)
    axios
      .delete(`${endPoint}v1/text/${id}`)
      .then((res) => {
        console.log('res', res)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TextValue])

  return (
    <div>
      <h1>ReceiveText</h1>
      <ResultsContainar>
        {result.map((result) => (
          <ResultText>
            <TextArea key={result.id}>{result.text}</TextArea>
            <DeleteButton
              type='button'
              color='secondary'
              variant='contained'
              id={result.id}
              onClick={() => DeleteText(result.id)}
            >
              Delete
            </DeleteButton>
          </ResultText>
        ))}
      </ResultsContainar>
      {/* {TextValue.map((text, idx) => (
        <h1 key={idx}>{text}</h1>
      ))} */}
    </div>
  )
}

export default ReceiveText
