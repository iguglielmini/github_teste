import React, { Component } from 'react'
import axios from "axios"
//scss
import './styles.scss'
//Animation
import FadeIn from 'react-fade-in'
//components
import Header from '../../Components/Header'
import ResultSearch from '../../Components/ResultSearch'


class Home extends Component {
    state = {
        user: "",
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
            const { data: repos } = await axios.get(
                `https://api.github.com/users/${user}/repos`
            );

            console.log(repos);

            this.setState({ repos, error: "", loading: false });
        } catch (error) {
            this.setState({
                error: "Usuário não encontrado",
                repos: [],
                loading: false
            });
        }
    };
    render() {
        const { user, repos, error, loading } = this.state;
        return (
            <FadeIn>
                <div className="container">
                    <div className="content">
                        <Header
                            changeUser={this.changeUser}
                            user={user}
                            error={error}
                            loading={loading}
                            buttonAction={this.searchUser}
                        />
                        <div className="result-data">
                            <ResultSearch
                                repos={repos}
                            />
                        </div>
                    </div>
                </div>
            </FadeIn >
        )
    }

}
export default Home;