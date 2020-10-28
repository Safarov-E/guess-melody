import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {ActionCreator} from '../../reducer'
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen'
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen'
import WelcomeScreen from '../welcome-screen'

import melodyLogo from '../../assets/img/melody-logo-ginger.png'

const Type = {
    ARTIST: 'game--artist',
    GENRE: 'game--genre'
}
class App extends Component {
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
                onStartButtonClick={(userAnswer) => onUserAnswer(
                    userAnswer,
                    question,
                    mistakes,
                    maxMistakes
                )}
            />
        }
        return null
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
        const { questions, step } = this.props;
        return (
            <section class="game game--genre">
                <header class="game__header">
                    <a class="game__back" href="#">
                        <span class="visually-hidden">Сыграть ещё раз</span>
                        <img class="game__logo" src={melodyLogo} alt="Угадай мелодию" />
                    </a>

                    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
                        <circle class="timer__line" cx="390" cy="390" r="370"
                                style={{filter: "url(#blur)", transform: "rotate(-90deg) scaleY(-1)", transformOrigin: "center"}}/>
                    </svg>

                    <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
                        <span class="timer__mins">05</span>
                        <span class="timer__dots">:</span>
                        <span class="timer__secs">00</span>
                    </div>

                    <div class="game__mistakes">
                        <div class="wrong"></div>
                        <div class="wrong"></div>
                        <div class="wrong"></div>
                    </div>
                </header>
                {this._getScreen(questions[step])}
            </section>
        )
    }
}

App.propTypes = {
    mistakes: PropTypes.number.isRequired,
    maxMistakes: PropTypes.number.isRequired,
    gameTime: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired,
    step: PropTypes.number.isRequired,
    onUserAnswer: PropTypes.func.isRequired,
    onWelcomeScreenClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    step: state.step,
    mistakes: state.mistakes
})

const mapDispatchToProps = (dispatch) => ({
    onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

    onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
        dispatch(ActionCreator.incrementStep())
        dispatch(ActionCreator.incrementMistake(
            userAnswer,
            question,
            mistakes,
            maxMistakes
        ))
    }
})

export {App}

export default connect(mapStateToProps, mapDispatchToProps)(App)