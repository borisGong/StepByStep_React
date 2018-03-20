import React from 'react';

function Menus(props) {
    return (
        <ul>
            {
                //Cannot read property 'map' of undefined 这个错误犯得还是真low,因为menus写成了Menus
                props.data.map((m) =>
                    <li key={m.id}>
                        {m.Name}
                    </li>
                )}
        </ul>
    )
}

class Component_Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [{ id: 1, Name: "吐槽大会" }, { id: 2, Name: "脱口秀大会" }, { id: 3, Name: "金星秀" }]
        }
    }

    render() {
        return (
            <Menus data={this.state.menus} />
        )
    }
}

export default Component_Menu