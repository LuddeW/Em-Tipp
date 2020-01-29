import './hot-load-config'

import React from 'react'
import { render } from 'react-dom'

import EMTippApp from './EMTippApp'
import createEMTippStore from './store/createStore'

import './styles/main.scss'

const rootElement = document.querySelector('#app')

const store = createEMTippStore()

render(<EMTippApp store={store} />, rootElement)
