import React from 'react'
//scss
import './styles.scss'
//icons
import BookIcon from '@material-ui/icons/Book';

//component Material Ui
import Avatar from '@material-ui/core/Avatar'



export default function ResultSearch() {
    return (
        <div className="container-result-search">
            <div className="card-user">
                <Avatar
                    className="avatar-user"
                    alt="Italo Guglielmini"
                    src="" />
                <h3>Italo Guglielmini</h3>
                <span>iguglielmini</span>
                <span>Brazil</span>
            </div>
            <div className="repository-user">
                <div className="card-repository">
                    <BookIcon className="icon-repository"/>
                    <h5>Save animals</h5>
                </div>
            </div>
        </div>
    )
}
