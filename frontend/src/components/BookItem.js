import React, { Component } from 'react';
import ListingFeed from './ListingFeed';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './BookItem.css';

class BookItem extends Component {

  render() {
    console.log(this.props);
    const { title, authors, industryIdentifiers, listingIds, imageLinks } = this.props;

    return (
      <Card>
        <div className="book_container">
          <img src={imageLinks.thumbnail} style={ {'padding-left': '10px', 'padding-top': '10px', width: '10%', height: '10%', } } alt="pic" />
          <div className="info_box">
            <h2>{title}</h2>
            <h4>{authors}</h4>
          </div>
        </div>
        <CardHeader
          actAsExpander={true}
          showExpandableButton={true}
        />
        <ListingFeed expandable={true} listingIds={listingIds} />
      </Card>
    );
  }
}

export default BookItem;
