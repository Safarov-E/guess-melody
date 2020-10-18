import React, {Component} from 'react'

export default class AudioPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            isPlaying: props.isPlaying
        }
        this._audioRef = React.createRef();
    }
    componentDidMount() {
        const {src} = this.props;
        const audio = this._audioRef.current;
        audio.src = src;

        audio.oncanplaythrough = () => this.setState({
            isLoading: false
        })
        audio.onplay = () => {
            this.setState({
                isPlaying: true
            })
        }
        audio.onpause = () => this.setState({
            isPlaying: false
        })
    }
    componentDidUpdate() {
        const audio = this._audioRef.current;

        if(this.state.isPlaying) {
            audio.play()
        } else {
            audio.pause()
        }
    }
    componentWillUnmount() {
        const audio = this._audioRef.current;

        audio.oncanplaythrough = null;
        audio.onplay = null;
        audio.onpause = null;
    }
    _onPlayButtonClick = () => {
        this.setState({isPlaying: !this.state.isPlaying})
    }
    render() {
        const { isLoading, isPlaying } = this.state;
        console.log('state', this.state.isPlaying)
        console.log('props', this.props.isPlaying)
        return (
            <>
                <button 
                    className={`track__button track__button--${isPlaying ? 'pause' : 'play'}`}
                    type="button"
                    disabled={isLoading}
                    onClick={this._onPlayButtonClick}
                />
                <div className="track__status">
                    <audio ref={this._audioRef}/>
                </div>
            </>
        )
    }
}