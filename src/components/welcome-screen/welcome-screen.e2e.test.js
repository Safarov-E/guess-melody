import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WelcomeScreen from './welcome-screen'

Enzyme.configure({ adapter: new Adapter() });

it(`WelcomeScreen correctly renders after relaunch`, () => {
    const clickHandler = jest.fn()
    const welcomeScreen = shallow(<WelcomeScreen time={7} error={4} onClick={clickHandler} />)
    const startButton = welcomeScreen.find('button')
    startButton.simulate('click')
    expect(clickHandler).toHaveBeenCalledTimes(1)
})