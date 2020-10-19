import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArtistQuestionScreen from './artist-question-screen'
import questions from '../../mocks/questions'

Enzyme.configure({ adapter: new Adapter() });

it(`WelcomeScreen correctly renders after relaunch`, () => {
    const clickHandler = jest.fn()
    const artistQuestionScreen = shallow(<ArtistQuestionScreen 
        questions={questions[1]}
        onStartButtonClick={clickHandler} 
    />)
    const startButton = artistQuestionScreen.find('.game__artist')
    startButton.simulate('change')
    expect(clickHandler).toHaveBeenCalledTimes(1)
})