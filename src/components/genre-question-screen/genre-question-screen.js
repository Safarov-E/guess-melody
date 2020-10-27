import React, {Component} from 'react'
import melodyLogoGinger from '../../assets/img/melody-logo-ginger.png'
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player'

export default class GenreQuestionScreen extends Component {
    state = {
        userAnswer: new Array(this.props.questions.answers.length).fill(false)
    }
    render() {
        const { questions, onStartButtonClick } = this.props
        const { answers, genre } = questions
        return (
            <section className="game game--genre">
                <header className="game__header">
                    <a className="game__back" href="#">
                        <span className="visually-hidden">Сыграть ещё раз</span>
                        <img className="game__logo" src={melodyLogoGinger} alt="Угадай мелодию" />
                    </a>

                    <div className="timer__value">
                        <span className="timer__mins">05</span>
                        <span className="timer__dots">:</span>
                        <span className="timer__secs">00</span>
                    </div>

                    <div className="game__mistakes">
                        <div className="wrong"></div>
                        <div className="wrong"></div>
                        <div className="wrong"></div>
                    </div>
                </header>

                <section className="game__screen">
                    <h2 className="game__title">Выберите {genre} треки</h2>
                    <form className="game__tracks" onSubmit={(evt) => {
                        evt.preventDefault();
                        onStartButtonClick()
                    }}>
                    {answers.map((it, i) => {
                        return (
                            <div key={`answer-${i}`} className="track">
                                <AudioPlayer
                                    isPlaying={i === 0}
                                    src={it.src}
                                    id={i}
                                />
                                <div className="game__answer">
                                    <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
                                    <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                                </div>
                            </div>
                        )
                    })}

                    <button className="game__submit button" type="submit">Ответить</button>
                    </form>
                </section>
            </section>
        )
    }
}

GenreQuestionScreen.propTypes = {
    questions: PropTypes.object.isRequired,
    onStartButtonClick: PropTypes.func.isRequired
}