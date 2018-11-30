import React from 'react';
import PropTypes from 'prop-types';

 class Contact extends React.Component {
 state = {
  showContactInfo: false
 };

 onDeleteClick = () => {
this.props.deleteClickHandler();
 };

  render() {
    const { name,email,phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4> { name }{' '}
         <i
         onClick= { () => this.setState({ showContactInfo: !this.state.showContactInfo })}
         className= "fas fa-chevron-circle-down"
         style = {{ cursor: 'pointer '}}
          />
          <i
            className = "fas fa-trash-alt"
            style = {{ cursor: 'pointer', float: 'right', color:'gray'}}
              onClick = {this.onDeleteClick}
            />
          </h4>
         { showContactInfo ? (
        <ul className= "list-group">
          <li className="list-group-item">Email: { email }</li>
          <li className="list-group-item">Phone: { phone }</li>
        </ul>
      ) :null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};
export default Contact;
