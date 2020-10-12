import React from 'react'
import renderer from 'react-test-renderer'
import GenreQuestionScreen from './genre-question-screen'
import questions from '../../mocks/questions'

it(`GenreQuestionScreen correctly renders after relaunch`, () => {
    const tree = renderer
        .create(<GenreQuestionScreen 
            questions={questions[1]}
            onStartButtonClick={jest.fn()}
        />).toJSON();
    expect(tree).toMatchSnapshot();
})