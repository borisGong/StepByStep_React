import React from 'react';

function LoginButton(props) {
    return (
        <div onClick={props.onClick}>
            Login
        </div>
    );
}

function LogoutButton(props) {
    return (
        <div onClick={props.onClick}>
            Logout
        </div>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        //名称不对不能bind上，会提示不能读取bind属性
        this.handleLogin = this.handleLoginClick.bind(this);
        this.state = { isLoggedIn: false }
    }

    //有个疑问就是如何将这两个方法放在一个命名空间内
    handleLoginClick() {
        //this.setState = { isLoggedIn: false }; 没有带有小括号竟然不报错
        this.setState({ isLoggedIn: true })
    }

    handleLogout() {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={(e) => this.handleLogout(e)} />;
        } else {
            button = <LoginButton onClick={this.handleLogin} />;
        }

        return (
            <div>
                {button}
            </div>
        );
    }
}

export default LoginControl