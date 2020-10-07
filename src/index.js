import React from 'react'
import ReactDOM from 'react-dom'
import questions from './mocks/questions'
import App from './components/app'
import './assets/styles/style.css'

const init = (gameQuestions) => {
    const settings = {
        gameTime: 5,
        errorCount: 3
    }
    ReactDOM.render(
        <App 
            errorCount={settings.errorCount}
            gameTime={settings.gameTime}
            questions={gameQuestions}
        />,
        document.getElementById('root')
    )
}
init(questions)