import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

import './styles/BadgesList.css';

class BadgeListItem extends Component {
    render(){
        return (
            <div className="BadgesListItem">
                <Gravatar className="BadgesListItem__avatar" email={this.props.badge.email} alt={`${this.props.badge.firstName}''${this.props.badge.lastName}`}/>
                {/* <img className="BadgesListItem__avatar" src={this.props.badge.avatarUrl} alt={`${this.props.badge.firstName}''${this.props.badge.lastName}`}
                /> */}

                <div className="BadgesListItem__info">
                    <strong>
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                        <br/>
                        <img className="twitter-logo" src="https://img.icons8.com/color/48/000000/twitter.png"/>
                        @{this.props.badge.twitter}
                        <br/>
                        {this.props.badge.jobTitle}
                </div>
            </div>
        );
    }
}


class BadgesList extends Component {
    render() {
        if(this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create new badge</Link>
                </div>
            );
        }
        return (
            <div className="BadgesList">
                <ul>
                    {this.props.badges.map(badge => {
                        return (
                            <li key={badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                                    <BadgeListItem badge={badge}/>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;