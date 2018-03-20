import React from 'react';

class Component_Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            objectLevel: ""
        }
    }

    //note: multi input can use the comomon method , but select can`t share it  
    valueChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    selectChange(event) {
        this.setState({
            objectLevel: event.target.value
        })
    }

    formSubmit() {
        alert("A name was submitted: " + this.state.name);
        alert("A descpription was submitted" + this.state.description);
        alert("A objectLevel was submitted" + this.state.objectLevel);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(e) => this.formSubmit(e)}>
                <label>
                    Name:
                    <input name="name" type="text" value={this.state.name} onChange={(e) => this.valueChange(e)} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea name="description" value={this.state.description} onChange={(e) => this.valueChange(e)}></textarea>
                </label>
                <br />
                <label>
                    ObjectLevel:
                    <select value={this.state.objectLevel} onChange={(e) => this.selectChange(e)}>
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

export default Component_Form