import React, {Component} from 'react'
import WelcomeScreen from '../welcome-screen'
import PropTypes from 'prop-types';

export default class App extends Component {
    render() {
        const {errorCount, gameTime, questions} = this.props;
        return (
            <>
                <WelcomeScreen time={gameTime} error={errorCount} />
            </>
        )
    }
}

App.propTypes = {
    errorCount: PropTypes.number.isRequired,
    gameTime: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired
}