import React, {Component} from 'react'

export default class AudioPlayer extends Component {
    render() {
        const { src } = this.props;
        return (
            <audio src={src} />
        )
    }
}