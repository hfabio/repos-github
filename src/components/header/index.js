import React, { Component } from 'react';

import './style.css';

export default class header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            git_name: (this.props.github_name) ? this.props.github_name : 'hfabio'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let git_name = document.querySelector('#git_name');
        console.log(git_name.value);
        this.setState({ git_name: git_name.value });
        git_name.value = '';
    }

    render() {
        return (
            <div className='header'>
                <p>Olá, {this.state.git_name}, estes são os teus repositórios</p>
                <button type="submit" onClick={this.handleClick} >buscar</button>
                <input type="text" placeholder='insert your github user' id='git_name' />
            </div>
        );
    }
}
