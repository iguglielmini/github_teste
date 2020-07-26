import React, { Component } from 'react'
//scss
import './styles.scss'
//Animation
import FadeIn from 'react-fade-in'
//components
import Header from '../../Components/Header'
import ResultSearch from '../../Components/ResultSearch'
//helps
import { api } from '../../helps'

class Home extends Component {
    state = {
        user: "",
        infoUser: {},
        repos: [],
        error: "",
        loading: false
    };
    changeUser = user => {
        this.setState({ user });
    };

    searchUser = async () => {
        const { user } = this.state;
        this.setState({ loading: true });

        try {
            const { data: { name, avatar_url, login, location } } = await api.get(`/users/${user}`);
            const { data: repos } = await api.get(`/users/${user}/repos`);

            console.log(repos, name);

            this.setState({
                repos, error: "",
                loading: false,
                infoUser: { name, avatar_url, login, location },
            });

        } catch (error) {
            this.setState({
                error: "Usuário não encontrado",
                repos: [],
                infoUser: {},
                loading: false,
            });
        }
    };
    render() {
        const { user, repos, error, loading, infoUser } = this.state;
        return (
                <div className="container">
                    <div className="content">
                        <Header
                            changeUser={this.changeUser}
                            user={user}
                            loading={loading}
                            buttonAction={this.searchUser}
                        />
                        <div className="result-data">
                            <FadeIn>
                                <ResultSearch
                                    infoUser={infoUser}
                                    repos={repos}
                                    error={error}
                                />
                            </FadeIn>
                        </div>
                    </div>
                </div>
        )
    }

}
export default Home;