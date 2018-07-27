import * as React from 'react';

// interface Props {
//     handleInput: () => void,
//     handleSubmit: () => void
// }

interface State {
    login: string,
    password: string
}

class App extends React.Component<{}, State> {
    static state = {
        login: '',
        password: ''
    };

    public handleInput = (e: any) => {
        const {name, value} = e.target;
        // tslint:disable-next-line:no-console
        console.log(name, value);

        // this.setState({
        //     [name]: value
        // });
    };

    // public handleSend = (e: any) => {
    //     e.preventDefault();
    //     this.props.actions.loginRequest(this.state.login, this.state.password);
    // };

    public render(): JSX.Element {
        // tslint:disable-next-line:no-console
        console.log(this.props);
        return (
            <form>
                <input onChange={this.handleInput} name="login" type='text' placeholder="Login"/>
                <input onChange={this.handleInput} name="password" type='password' placeholder="Password"/>
                <button type="submit">Send</button>
            </form>
        );
    };
}

export default App;
