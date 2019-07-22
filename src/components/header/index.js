import React, { Component } from 'react';

import './style.css';

export default class header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: (this.props.user) ? this.props.user : 'hfabio'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let git_name = document.querySelector('#git_name');
        this.setState({ user: git_name.value });
        this.props.changeUser(git_name.value);
        git_name.value = '';
    }

    render() {
        return (
            <header>
                <div className='header'>
                    <p>Olá, {this.state.user}, estes são os teus repositórios</p>
                    <button type="submit" onClick={this.handleClick} >Buscar</button>
                    <input type="text" placeholder='insert your github user' id='git_name' />
                </div>
            </header>
        );
    }
}
