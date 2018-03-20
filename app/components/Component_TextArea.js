import React from 'react';

class Component_TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        }
    }
    DescriptionChange(event) {
        this.setState({ description: event.target.value })
    }
    FormSubmit() {
        alert("A descpription was submitted" + this.state.description);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={(e) => this.FormSubmit(e)}>
                <label>
                    Description:
                    <textarea value={this.state.description} onChange={(e) => this.DescriptionChange(e)}></textarea>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Component_TextArea