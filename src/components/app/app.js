import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {ActionCreator} from '../../reducer'
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen'
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen'
import WelcomeScreen from '../welcome-screen'

const Type = {
    ARTIST: 'game--artist',
    GENRE: 'game--genre'
}
export default class App extends Component {
    _getScreen(question) {
        if(!question) {
            const {maxMistakes, gameTime, onWelcomeScreenClick} = this.props;
            return <WelcomeScreen 
                error={maxMistakes} 
                time={gameTime} 
                onStartButtonClick={onWelcomeScreenClick} 
            />
        }
        const {onUserAnswer, mistakes, maxMistakes} = this.props;
        switch(question.type) {
            case 'genre': return <GenreQuestionScreen 
                questions={question}
                onStartButtonClick={(userAnswer) => onUserAnswer(
                    userAnswer,
                    question,
                    mistakes,
                    maxMistakes
                )}
            />
            case 'artist': return <ArtistQuestionScreen 
                questions={question}
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