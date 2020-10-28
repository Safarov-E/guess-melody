import {createStore} from 'redux'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import questions from './mocks/questions'
import {reducer} from './reducer'
import './assets/styles/style.css'

const gmaeSettings = {
    gameTime: 5,
    errorCount: 3
}

const init = (gameQuestions) => {
    const {errorCount, gameTime} = gmaeSettings

    ReactDOM.render(<Provider store={store}>
            <App 
                errorCount={errorCount}
                gameTime={gameTime}
                questions={gameQuestions}
            />
        </Provider>,
        document.getElementById('root')
    )
}
init(questions)