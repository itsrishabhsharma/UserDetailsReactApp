import React, { Component } from 'react';
import {connect} from 'react-redux'

class ContactDetail extends Component {
	render() {
		if (!this.props.contact) {
			return (
				<div>Click one of the contacts to see details.</div>
				
			);
		}
		return (
			<div>
				<h4>Details for: {this.props.contact.name}</h4>
				<div>index: {this.props.contact.index}</div>
				<div>guid: {this.props.contact.guid}</div>
				<div>isActive: {this.props.contact.isActive}</div>
				<div>balance: {this.props.contact.balance}</div>
				<div>picture: {this.props.contact.picture}</div>
				<div>eyeColor: {this.props.contact.eyeColor}</div>
				<div>gender: {this.props.contact.gender}</div>
				<div>company: {this.props.contact.company}</div>
				<div>email: {this.props.contact.email}</div>
				<div>age: {this.props.contact.age}</div>
				<div>phone: {this.props.contact.phone}</div>
				<div>address: {this.props.contact.address}</div>
				<div>about: {this.props.contact.about}</div>
				<div>registered: {this.props.contact.registered}</div>
				<div>latitude: {this.props.contact.latitude}</div>
				<div>longitude: {this.props.contact.longitude}</div>
				<div>tags: {this.props.contact.tags}</div>
				<div>friends: {this.props.contact.friends}</div>
				<div>greeting: {this.props.contact.greeting}</div>
				<div>favoriteFruit: {this.props.contact.favoriteFruit}</div>
				
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    contact: state.activeContact
  };
}

export default connect(mapStateToProps)(ContactDetail)
