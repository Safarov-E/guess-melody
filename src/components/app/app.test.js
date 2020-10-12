import React from 'react'
import renderer from 'react-test-renderer'
import questions from '../../mocks/questions'
import App from './app'

it(`App correctly renders after relaunch`, () => {
    const tree = renderer.create(<App 
        errorCount={5}
        gameTime={3}
        questions={questions}
    />).toJSON();
    expect(tree).toMatchSnapshot();
})