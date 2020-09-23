import React, {Component} from 'react'
import WelcomeScreen from '../welcome-screen'

export default class extends Component {
    render() {
        return (
            <>
                <WelcomeScreen time={7} error={4}/>
            </>
        )
    }
}