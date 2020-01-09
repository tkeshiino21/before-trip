import React from 'react'
import { BackgroundImage } from './layout/BackgroundImage'
import { Layer } from './layout/Layer'
import Title from './layout/Title'
import styled from 'styled-components'
import { OutlinedButton } from './layout/Button'
import { Link }from 'react-router-dom'

const Form = styled.form `
  display: flex;
  margin-top: 20px;
  justify-content: center;
`

const Label = styled.label `
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  justify-content: center;
`

export default function index() {
  return (
    <BackgroundImage>
      <Layer>
        <Title />
        <Form>
          <Label>レベル:</Label>
          <Label><input type="radio" name="radio"/>初級</Label>
          <Label><input type="radio" name="radio"/>中級</Label>
          <Label><input type="radio" name="radio"/>上級</Label>
        </Form>
          <OutlinedButton>
            <Link to="/pt">
              START
            </Link>
          </OutlinedButton>
      </Layer>
    </BackgroundImage>
  )
}