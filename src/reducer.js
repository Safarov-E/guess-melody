const isArtistAnswerCorrect = (userAnswer, question) =>
    userAnswer.artist === question.song.artist

const isGenreAnswerCorrect = (userAnswer, question) => 
    userAnswer.every((it, i) => it === (
        question.answers[i].genre === question.genre
    ))

const initialState = {
    step: -1,
    mistakes: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

    }
    return state
}