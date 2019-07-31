import React, { Component } from 'react';

import './style.css';

export default class card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Titulo',
            description: 'Descrição',
            link: ''
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-title">{this.state.title}</div>
                <div className="card-body">
                    <div className="card-text">
                        <p>
                            {this.state.description}
                        </p>
                        <a href={this.state.link} target='_blank' rel="noopener" >Acesse aqui</a>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let propis = this.props;
        this.setState({ title: propis.title, description: propis.description, link: propis.link });
    }
}
