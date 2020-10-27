import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AudioPlayer from './audio-player'

Enzyme.configure({ adapter: new Adapter() });

it(`AudioPlayer correctly renders after relaunch`, () => {
    const clickHandler = jest.fn()
    const audioPlayer = shallow(<AudioPlayer 
        isPlaying={true}
        src={'https://cdn7.sefon.pro/files/prev/103/Skillet%20-%20Awake%20and%20Alive%20%28192kbps%29.mp3'}
    />)
    const startButton = audioPlayer.find('button')
    startButton.simulate('click')
    expect(clickHandler).toHaveBeenCalledTimes()
})