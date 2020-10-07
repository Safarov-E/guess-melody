import React, {Component} from 'react'

export default class ArtistQuestionScreen extends Component {
    render() {
        return (
            <section class="game game--artist">
                <header class="game__header">
                    <a class="game__back" href="#">
                        <span class="visually-hidden">Сыграть ещё раз</span>
                        <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
                    </a>

                    <div class="timer__value">
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

                <section class="game__screen">
                    <h2 class="game__title">Кто исполняет эту песню?</h2>
                    <div class="game__track">
                        <div class="track">
                            <button class="track__button track__button--play" type="button" />
                            <div class="track__status">
                                <audio />
                            </div>
                        </div>
                    </div>

                    <form class="game__artist">
                        <div class="artist">
                            <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1" />
                            <label class="artist__name" for="answer-1">
                            <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея" />
                            Пелагея
                            </label>
                        </div>

                        <div class="artist">
                            <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-2" id="answer-2" />
                            <label class="artist__name" for="answer-2">
                            <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея" />
                            Краснознаменная дивизия имени моей бабушки
                            </label>
                        </div>

                        <div class="artist">
                            <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3" />
                            <label class="artist__name" for="answer-3">
                            <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея" />
                            Lorde
                            </label>
                        </div>
                    </form>
                </section>
            </section>
        )
    }
}