import React from 'react';

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(event) {
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        return (
            <fieldset>
                <input type="text" 
                    value={this.props.temperature} 
                    onChange={(e) => this.handleChange(e)} />
            </fieldset>
        )
    }
}

class Caculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: ""
        }
    }

    handleCelsiusChange(temperature) {
        this.setState({ temperature: temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ temperature: temperature });
    }


    render() {
        return (
            <div>
                <TemperatureInput 
                    temperature={this.state.temperature} 
                    onTemperatureChange={(e) => this.handleCelsiusChange(e)} />
                <TemperatureInput 
                    temperature={this.state.temperature} 
                    onTemperatureChange={(e) => this.handleFahrenheitChange(e)} />
            </div>
        )
    }
}

export default Caculator



