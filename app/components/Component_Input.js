import React from 'react';

class Component_Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        }
    }
    NameChange(event) {
        this.setState({ name: window.gSp.context });
    }

    render() {
        return (
            <form onSubmit={(e) => this.FormSubmit(e)}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={(e) => this.NameChange(e)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Component_Input