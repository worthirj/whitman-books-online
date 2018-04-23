import React, { Component } from 'react';
import UserItem from './UserItem';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from '../redux/users/actions';
import { getUserById } from '../redux/users/selectors';
import sampleData from '../redux/sampleData';
import Loader from './Loader';
<<<<<<< HEAD
<<<<<<< HEAD
import {Card, CardHeader} from 'material-ui/Card';
=======
import { Card, CardHeader } from 'material-ui/Card';
>>>>>>> 833978193a3e7e48dc353bd416a131698621b92c
import Paper from 'material-ui/Paper';
import './ListingItem.css'

=======
import { Card, CardHeader } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import './ListingItem.css';
>>>>>>> 1635e66573965797d1cc74df5002b325121497cf

class ListingItem extends Component {
  render() {
    const { price, condition, userId, user, profileObj } = this.props;

    return (
<<<<<<< HEAD
<<<<<<< HEAD
		  <Paper style={{margin:'1vh'}}>
          <div className='price_cond'>
              <div className='price_box'>
                {/*<h3 style={{color:'#58ab43'}}>${price}</h3>*/}
                ${price}
              </div>
              <div className='cond_box'>
                <h4>{condition}</h4>
              </div>
=======
      <Paper style={{ margin: '1vh' }}>
        <div className='price_cond'>
          <div className='price_box'>
            {/*<h3 style={{color:'#58ab43'}}>${price}</h3>*/}
            ${price}
>>>>>>> 833978193a3e7e48dc353bd416a131698621b92c
          </div>
          <div className='cond_box'>
            <h4>{condition}</h4>
          </div>
<<<<<<< HEAD
		  </Paper>
=======
      <Paper style={{ margin: '1vh' }}>
        <div className='price_cond'>
          <div className='price_box'>
            {/*<h3 style={{color:'#58ab43'}}>${price}</h3>*/}
            ${price}
          </div>
          <div className='cond_box'>
            <h4>{condition}</h4>
          </div>
        </div>
        <div style={{ 'paddingTop': '1vh', 'paddingLeft': '1vh' }}>
          <UserItem user={user} profileObj={profileObj} />
        </div>
      </Paper>
>>>>>>> 1635e66573965797d1cc74df5002b325121497cf
=======
        </div>
        <div style={{ 'padding-top': '1vh', 'padding-left': '1vh' }}>
          <UserItem user={user} profileObj={profileObj} />
        </div>
      </Paper>
>>>>>>> 833978193a3e7e48dc353bd416a131698621b92c
    );
  }
}

const makeMapStateToProps = () => {
  const mapStateToProps = (state, props) => {
    return {
      user: getUserById(state, props),
      profileObj: state.authReducer.profileObj,
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUser }, dispatch);

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(ListingItem));
