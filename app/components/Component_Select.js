import React from 'react';

class Component_Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objectLevel: ""
        }
    }
    ObjectLevelChange(event) {
        this.setState({ objectLevel: event.target.value })
    }
    FormSubmit() {
        alert("A objectLevel was submitted" + this.state.objectLevel);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={(e) => this.FormSubmit(e)}>
                <label>
                    ObjectLevel:
                    <select value={this.state.objectLevel} onChange={(e) => this.ObjectLevelChange(e)}>
                        <option value="pitaya">Pitaya</option>
                        <option value="passion">Passion</option>
                        <option value="mangosteen">Mangosteen</option>
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Component_Select