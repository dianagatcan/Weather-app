// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from "./App"


test('render input', () => {
   const {getByTestId} = render(<App />)
   const input = getByTestId('input')
   expect(input).toBeInTheDocument()
  
  })
  