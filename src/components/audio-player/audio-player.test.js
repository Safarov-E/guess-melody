import React from 'react'
import renderer from 'react-test-renderer'
import AudioPlayer from './audio-player'

it(`AudioPlayer correctly renders after relaunch`, () => {
    const tree = renderer
        .create(<AudioPlayer
            isPlaying={true}
            src={'https://cdn7.sefon.pro/files/prev/103/Skillet%20-%20Awake%20and%20Alive%20%28192kbps%29.mp3'}
        />).toJSON();
    expect(tree).toMatchSnapshot();
})