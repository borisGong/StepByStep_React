import React from 'react';

class Component_FileInput extends React.Component {
    constructor(props) {
        super(props);
    }

    submitFile() {
        alert(`selected file - ${
            this.Component_FileInput.files[0]
            }`
        );
        event.preventDefault;
    }

    render() {
        return (
            <form onSubmit={(e) => this.submitFile(e)}>
                <label>
                    Upload file:
                    <input type="file" ref={input => { this.Component_FileInput = input }} />
                </label>
                <input type="submit" value="提交文件" />
            </form>
        )
    }
}

export default Component_FileInput