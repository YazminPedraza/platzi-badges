import React, { Component } from "react";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

import api from "../api";

class BadgeDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true })
  };

  handleCloseModal = e => {
      this.setState( {modalIsOpen: false })
  };

  handleDeleteBadge = async e => {
      this.setState({ loading: true, error: null });

      try {
          await api.badges.remove(this.props.match.params.badgeId);
          this.setState({ loading: false});
          this.props.history.push('/badges');

      } catch (error) {
          this.setState({ loading: false, error: error});
      }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    const badgeData = this.state.data;

    return (
      <div>
        <BadgeDetails 
        badgeData={badgeData}
        onCloseModal = {this.handleCloseModal}
        onOpenModal = {this.handleOpenModal}
        modalIsOpen = {this.state.modalIsOpen}
        onDeleteBadge = {this.handleDeleteBadge}
        />
      </div>
    );
  }
}

export default BadgeDetailsContainer;
