import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render(){
        return <div>
            <div>
                <img src={confLogo} alt="Conference Logo"/>
            </div>

            <div>
                <img src="" alt="Avatar"/>
                <h1>Philippa <br/> Georgiou</h1>
            </div>

            <div>
                <p>USS Shenzhou Captain</p>
                <p>@CaptainGeorgiou</p>
            </div>
        </div>
    }
}

export default Badge;