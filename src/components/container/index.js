import React, { Component } from 'react';
import Card from '../card';
import './style.css';

export default class container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: []
        }
    }

    render() {
        const repositories = this.state.repos.map((repo) => {
            //console.log(repo);
            return <Card title={repo.name} key={repo.id} description={repo.description} />
        });
        return (
            <div className='container' >
                {repositories}
            </div>
        );
    }

    componentWillMount() {
        this.getRepos();
    }

    getRepos() {
        fetch('https://api.github.com/users/hfabio/repos')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res);
                this.setState({ repos: res });
            });
    }
}
