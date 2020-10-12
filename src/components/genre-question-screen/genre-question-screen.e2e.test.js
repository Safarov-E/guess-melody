import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GenreQuestionScreen from './genre-question-screen'
import questions from '../../mocks/questions'

Enzyme.configure({ adapter: new Adapter() });

it(`WelcomeScreen correctly renders after relaunch`, () => {
    const clickHandler = jest.fn()
    const genreQuestionScreen = shallow(<GenreQuestionScreen 
        questions={questions[1]} 
        onStartButtonClick={clickHandler} 
    />)
    const startButton = genreQuestionScreen.find('.game__tracks')
    startButton.simulate('submit', {preventDefault(){}})
    expect(clickHandler).toHaveBeenCalledTimes(1)
})