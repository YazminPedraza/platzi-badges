import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render(){
        return (
            <div className="Badge">
                <div className= "Badge__header">
                    <img src={confLogo} alt="Conference Logo"/>
                </div>

                <div className= "Badge__section-name">
                    <img className= "Badge__avatar" src="https://cudebi.files.wordpress.com/2018/01/image0025.png" alt="Avatar"/>
                    <h1>Philippa <br/> Georgiou</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>USS Shenzhou Captain</h3>
                    <div>@CaptainGeorgiou</div>
                </div>

                <div className="Badge__footer">#platziconf</div>
            </div>
        )
    }
}

export default Badge;