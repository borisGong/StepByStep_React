import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isToggleOn: true
        }
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    handleClick1(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div>
                {this.state.isToggleOn ? "Yes" : "No"}
                <div onClick={this.handleClick}>
                    button
                </div>
                <div onClick={(e) => this.handleClick1(e)}>
                    Click me
                </div>
            </div>
        );
    }
}

export default Toggle