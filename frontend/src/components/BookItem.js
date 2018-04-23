import React, { Component } from 'react';
import ListingFeed from './ListingFeed';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './BookItem.css';

class BookItem extends Component {

  render() {
    const { title, authors, industryIdentifiers, listing_ids, thumbnail } = this.props;

    return (
<<<<<<< HEAD
      <Card style={{'margin-bottom': '1vh'}}>
        <div className="book_container">
          <img src={imageLinks.thumbnail} style={ {'padding-left': '10px', 'padding-top': '10px', width: '15%', height: '10%', } } alt="pic" />
=======
      <Card style={{'marginBottom': '1vh'}}>
        <div className="book_container">
          <img src={thumbnail} style={ {'paddingLeft': '10px', 'paddingTop': '10px', width: '15%', height: '10%' }} alt="pic" />
>>>>>>> 1635e66573965797d1cc74df5002b325121497cf
          <div className="info_box">
            <h2>{title}</h2>
            <h4>{authors}</h4>
          </div>
        </div>
        <CardHeader
          subtitle={'View Listings'}
          actAsExpander={true}
          showExpandableButton={true}
<<<<<<< HEAD
          style={{'text-align': 'right'}}
        />
        <ListingFeed expandable={true} listingIds={listingIds} />
=======
          style={{'textAlign': 'right'}}
        />
        <ListingFeed expandable={true} listingIds={listing_ids} />
>>>>>>> 1635e66573965797d1cc74df5002b325121497cf
      </Card>
    );
  }
}

export default BookItem;
