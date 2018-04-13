import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from './Page';
import { logout } from '../redux/auth/actions';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import './Profile.css';
import Paper from 'material-ui/Paper';

class Profile extends Component {
  render() {
    const {
      isAuthenticated,
      profileObj,
      logout,
      userId,
    } = this.props;
    const {
      givenName,
      familyName,
      email,
      imageUrl,
      googleId,
    } = profileObj;

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <div class="container">
          <Paper zDepth={1} style={{width: '100%'}} class="container">
            <div class="box">
              <Avatar
                class="picture"
                src={imageUrl}
              />
            </div>
            <div class="box">
              <h1>{`${givenName} ${familyName}`}</h1>
              <h3>{email}</h3>
            </div>
            <div class="box" style={ {float: 'right'}}>
              <RaisedButton
                style={ {float: 'right'}}
                label="Sign Out"
                onClick={logout}
              />
            </div>
          </Paper>
        </div>
        <h1 class="listing-header">Your Listings</h1>
        <p class="listing-header">Books you are selling go here.</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { profileObj, isAuthenticated } = state.authReducer;
  return { profileObj, isAuthenticated };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ logout }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
