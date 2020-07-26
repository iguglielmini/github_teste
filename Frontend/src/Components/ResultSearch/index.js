import React from 'react'
//scss
import './styles.scss'
//icons
import BookIcon from '@material-ui/icons/Book';

//component Material Ui
import Avatar from '@material-ui/core/Avatar'
import Pagination from '@material-ui/lab/Pagination';


const ResultSearch = ({ repos, infoUser, error }) => {
    return (
        <div className="container-result-search" >
            <p className="errorText">
                {error}
            </p>
            {
                infoUser.name && (
                    <div className="card-user">
                        <Avatar
                            className="avatar-user"
                            alt={infoUser.name}
                            src={infoUser.avatar_url} />
                        <h3>{infoUser.name}</h3>
                        <span>{infoUser.login}</span>
                        <span>{infoUser.location}</span>


                        <Pagination
                            size="small" 
                            count={1}
                             />
                    </div>
                )
            }
            {
                repos.length > 0 && (
                    <div className="repository-user" >
                        {
                            repos.map((repo, index) => {
                                const key = index
                                return (
                                    <div
                                        key={key}
                                        className="card-repository"
                                    >
                                        <BookIcon className="icon-repository" />
                                        <h5>{repo.name}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}
export default ResultSearch;