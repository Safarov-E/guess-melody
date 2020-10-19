import React, {Component} from 'react'
import melodyLogoGinger from '../../assets/img/melody-logo-ginger.png'
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player'

export default class ArtistQuestionScreen extends Component {
    render() {
        const { questions, onStartButtonClick } = this.props
        const { answers, song } = questions
        return (
            <section className="game game--artist">
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
                    <h2 className="game__title">Кто исполняет эту песню?</h2>
                    <div className="game__track">
                        <div className="track">
                            <AudioPlayer
                                isPlaying={true}
                                src={song.src}
                            />
                        </div>
                    </div>

                    <form className="game__artist" onChange={onStartButtonClick}>
                        {
                            answers.map((it, i) => {
                                return (
                                    <div className="artist" key={`answer-${i}`}>
                                        <input className="artist__input visually-hidden" type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
                                        <label className="artist__name" htmlFor={`answer-${i}`}>
                                        <img className="artist__picture" src={it.picture} alt={it.artist} />
                                        {it.artist}
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </form>
                </section>
            </section>
        )
    }
}

ArtistQuestionScreen.propTypes = {
    questions: PropTypes.object.isRequired,
    onStartButtonClick: PropTypes.func.isRequired
}