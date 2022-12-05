import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

document.addEventListener('DOMContentLoaded', function () {
  const element = document.getElementById('wprk-admin-app')
  if (typeof element !== 'undefined' && element !== null) {
    ReactDOM.render(<App />, document.getElementById('wprk-admin-app'))
  }
})
