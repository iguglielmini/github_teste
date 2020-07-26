import React from 'react'

//image
import LogoGit from '../../assets/logo_git.png'
import AvatarImg from '../../assets/eu.png'
//scss
import './styles.scss'
//component Material Ui
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress';
//icons
import BackspaceIcon from '@material-ui/icons/Backspace';


const Header = ({ user, loading, buttonAction, changeUser }) => (
    <div className="header">
        <div className="git-search">
            <img src={LogoGit} alt="Github" />
            <TextField
                value={user}
                variant="outlined"
                id="outlined-basic"
                className="input-search"
                label="Pesquisar Usuário do Github"
                onChange={e => changeUser(e.target.value)} />

            <button
                className="btn-buscar"
                onClick={buttonAction}>
                {loading ?
                    <CircularProgress
                        style={{ width: 15, height: 15 }}
                    />
                    : "Buscar"
                }
            </button>
            <button className="btn-clear">
                <BackspaceIcon />
                    Limpar
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
export default Header;