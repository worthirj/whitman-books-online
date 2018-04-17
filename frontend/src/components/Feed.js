import React, { Component } from 'react';
import { List } from 'material-ui/List';
import Loader from './Loader';

class Feed extends Component {
  render() {
    const { loading, feedList, FeedItem, children } = this.props;

    if (!feedList) {
      return null;
    }

    if (loading) {
      return <Loader type="bars" color="#333" />;
    }

    return (
      <List>
        {Object.keys(feedList).map((key) => {
          const value = feedList[key];
          return (
            <FeedItem key={key} {...value}> //Usually ListingItem is passed as FeedItem
              {this.props.children}
            </FeedItem>
          );
        })}
      </List>
    );
  }
}

export default Feed;
