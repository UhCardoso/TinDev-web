import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Match.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Match({match}) {
    const [users, setUsers] = useState([]);
    const [showUsers, setShowUsers] = useState(true);

    useEffect(() => {
        async function LoadUsers() {
            const response = await api.get('/dev', {
                headers: {
                    user: match.params.id
                }
            });
            setUsers(response.data);
            setShowUsers(false);
            console.log(response.data)

        }
        LoadUsers();

    }, [match.params.id])

    function handleOpenGithub(usergit) {
        window.open(`https://github.com/${usergit}`, '_blank');
    }

    return (
        <div className="list-match-container">
            <header>
                <Link to="/">
                    <img src={logo} alt="Tindev" />
                </Link>
                <nav>
                    <Link to={`/dev/${match.params.id}`}>
                        <span>Início</span>
                    </Link>
                    <Link>
                        <span className="selected">Matches</span>
                    </Link>
                </nav>
            </header>
            <ul>
            {users.map(user => {
                return (
                    <li onClick={() => {handleOpenGithub(user.user)}}>
                        <img src={user.avatar}/>
                        <p>{user.name}</p>
                        <p className="bio">{user.bio}</p>
                    </li>
                )
            })}

            {showUsers && 
                <h2 className="match-none">:( Nenhum match até o momento...</h2>
            }

            </ul>
        </div>
    )
}