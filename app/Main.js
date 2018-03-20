import React from 'react';
import ReactDom from 'react-dom';
// import Component_Es6 from './components/Component_Es6';
// import Component_React from './components/Component_React';
// import Component_Clock from './components/Component_Clock';
// import Toggle from './components/Component_Event'
// import ConditionalRendering from './components/Component_ConditionalRendering'
// import Component_Menu from './components/Component_Menu'
// import Component_Form from './components/Component_Form'
//  import Component_FileInput from './components/Component_FileInput'
 import Component_Input from './components/Component_Input'
// import Component_LiftStateUp from './components/Component_LiftStateUp'


function App() { 
    return <div>
        {/* <Component_Es6 name="Es6" />
        <Component_React name="React" />
        <Component_Clock />
        <Toggle />
        <ConditionalRendering />
        <Component_Menu />
        <Component_Form /> */}
        {/* <Component_FileInput /> */}
        <Component_Input/>
        {/* <Component_LiftStateUp /> */}
    </div>
}


ReactDom.render(
    <App />,
    document.getElementById('content')
); 
