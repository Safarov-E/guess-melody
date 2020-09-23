import React, {Component} from 'react'
import logo from '../../assets/img/melody-logo.png'

export default class extends Component {
    render() {
        const { time, error } = this.props;
        return (
            <section className="welcome">
                <div className="welcome__logo">
                    <img src={logo} alt="Угадай мелодию" width="186" height="83" />
                </div>
                <button className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
                <h2 className="welcome__rules-title">Правила игры</h2>
                <p className="welcome__text">Правила просты:</p>
                <ul className="welcome__rules-list">
                    <li>За {time} минут нужно ответить на все вопросы.</li>
                    <li>Можно допустить {error} ошибки.</li>
                </ul>
                <p className="welcome__text">Удачи!</p>
            </section>
        )
    }
}