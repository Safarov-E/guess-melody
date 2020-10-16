import React, {Component} from 'react'
import WelcomeScreen from '../welcome-screen'
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen'
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen'
import PropTypes from 'prop-types';

export default class App extends Component {
    static getScreen(question, props, onUserAnswer) {
        if(question === -1) {
            const {gameTime, errorCount} = props;
            return <WelcomeScreen 
                time={gameTime} 
                error={errorCount} 
                onStartButtonClick={onUserAnswer} 
            />
        }
        const {questions} = props;
        const currentQuestion = questions[question]
        switch(currentQuestion.type) {
            case 'genre': return <GenreQuestionScreen 
                questions={currentQuestion}
                onStartButtonClick={onUserAnswer}
            />
            case 'artist': return <ArtistQuestionScreen 
                questions={currentQuestion}
                onStartButtonClick={onUserAnswer}
            />
        }
        return null
    }
    state = {
        question: -1
    }
    onStartButtonClick = () => {
        this.setState((prevState) => {
            const nextIndex = prevState.question + 1;
            const isEnd = nextIndex >= this.props.questions.length
            return {
                question: !isEnd ? nextIndex : -1
            }
        })
    }
    render() {
        const { question } = this.state;
        return (
            App.getScreen(question, this.props, this.onStartButtonClick)
        )
    }
}

App.propTypes = {
    errorCount: PropTypes.number.isRequired,
    gameTime: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired
}