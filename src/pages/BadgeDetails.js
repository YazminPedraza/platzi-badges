import React from "react";
import confLogo from "../images/platziconfLogo.svg";

import "./styles/BadgeDetails.css";
import Badge from "../components/Badge";
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import { Link } from "react-router-dom";

const BadgeDetails = (props) => {
  const {badgeData} = props;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badgeData.firstName} {badgeData.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badgeData.firstName}
              lastName={badgeData.lastName}
              email={badgeData.email}
              twitter={badgeData.twitter}
              jobTitle={badgeData.jobTitle}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badgeData.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick = {props.onOpenModal} className="btn btn-danger">Delete</button>
                <DeleteBadgeModal 
                    isOpen = {props.modalIsOpen}
                    onClose = {props.onCloseModal}
                    onDeleteBadge = {props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeDetails;
