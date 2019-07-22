import React, { Component } from 'react';
import Card from '../card';
import './style.css';

export default class container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            user: 'hfabio'
        }
    }

    render() {
        const repositories = this.state.repos.map((repo) => {
            //console.log(repo);
            return <Card title={repo.name} key={repo.id} description={repo.description} link={repo.html_url} />
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

    updateUser() {
        this.setState({ user: this.props.user }, () => {
            //console.log(this.state.user);
            this.getRepos();
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            this.updateUser();
        }
    }

    getRepos() {
        //console.log(`https://api.github.com/users/${this.state.user}/repos`);
        fetch(`https://api.github.com/users/${this.state.user}/repos`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                //console.log(res);
                this.setState({ repos: res });
            });
    }
}
