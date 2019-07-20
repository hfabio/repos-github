import React, { Component } from 'react';

import './style.css';

export default class card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Titulo',
            description: 'Descrição'
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-title">{this.state.title}</div>
                <div className="card-body">
                    <p>{this.state.description}</p>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setState({ title: this.props.title });
        this.setState({ description: this.props.description });
    }
}
