import React from 'react'
import renderer from 'react-test-renderer'
import ArtistQuestionScreen from './artist-question-screen'
import questions from '../../mocks/questions'

it(`ArtistQuestionScreen correctly renders after relaunch`, () => {
    const tree = renderer
        .create(<ArtistQuestionScreen 
            questions={questions[0]}
            onStartButtonClick={jest.fn()}
        />).toJSON();
    expect(tree).toMatchSnapshot();
})