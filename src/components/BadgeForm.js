import React from "react";

class BadgeForm extends React.Component {
//   state = {}; //Setting  state object as empty

//   handleChange = e => {
//     //console.log({name: e.target.name , value: e.target.value});
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

  handleClick = e => {
    console.log("Button was clicked");
  };

  /* handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  }; */

  render() {
    return (
      <div>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />

            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />

            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />

            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />

            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
          {this.props.error && <div className="alert alert-danger mt-3" role="alert">{this.props.error.message}</div>}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
