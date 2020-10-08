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
        return <div>
            <GenreQuestionScreen questions={questions[question]} onStartButtonClick={this.onStartButtonClick} />
        </div>
    }
    state = {
        question: -1
    }
    onStartButtonClick = () => {
        this.setState((prevState) => ({
            ...prevState,
            question: prevState.question + 1
        }))
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