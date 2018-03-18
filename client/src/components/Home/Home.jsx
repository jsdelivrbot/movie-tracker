import React, { Component } from 'react';

export default class Home extends Component {
  componentDidMount() {
    this.props.fetchRecentMovies();
  }

  render() {
    // if (this.props.recentMovies) {
    console.log(this.props.recentMovies);
    // }
    return <div>Home</div>;
  }
}
