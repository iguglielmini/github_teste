import React from 'react'

//image
import LogoGit from '../../assets/logo_git.png'
import AvatarImg from '../../assets/eu.png'
//scss
import './styles.scss'
//component Material Ui
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'


export default function Header() {
    return (
        <div className="header">
            <div className="git-search">
                <img src={LogoGit} alt="Github" />
                <TextField
                    id="outlined-basic"
                    className="input-search"
                    label="Search User for github"
                    variant="outlined" />
                <button className="btn-buscar">
                    Buscar
            </button>
            </div>
            <div className="dev-developer">
                <div className="user-dev">
                    <Avatar alt="Italo Guglielmini" src={AvatarImg} />
                    <div className="Username">
                        <h3>Ítalo Guglielmini</h3>
                        <span>italo.guglielmini@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
