import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from "../components/Navbar";
import Badge from "../components/Badge"

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Philippa" lastName="Georgiou" jobTitle="USS Shenzhou Captain" twitter="captainGeorgiou" avatar="https://cudebi.files.wordpress.com/2018/01/image0025.png"/>   
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default BadgeNew;