import React, { Component } from 'react';
import './styles/BadgesList.css';

class BadgeListItem extends Component {
    render(){
        return (
            <div className="BadgesListItem">
                <img className="BadgesListItem__avatar" src={this.props.badge.avatarUrl} alt={`${this.props.badge.firstName}''${this.props.badge.lastName}`}
                />

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
        return (
            <div className="BadgesList">
                <ul>
                    {this.props.badges.map(badge => {
                        return (
                            <li key={badge.id}>
                                <BadgeListItem badge={badge}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;