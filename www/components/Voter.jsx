import React from 'react';

class Voter extends React.Component {
  constructor(props) {
    super(props);
    this.onUpvoteClick = this.onUpvoteClick.bind(this);
    this.onDownvoteClick = this.onDownvoteClick.bind(this);
  }

  onUpvoteClick(event) {
    event.preventDefault();
    this.props.onUpvoteClick(this.props.rant.id);
  }

  onDownvoteClick(event) {
    event.preventDefault();
    this.props.onDownvoteClick(this.props.rant.id);
  }

  render() {
    return (
      <div className="voter">
        <button onClick={this.onDownvoteClick}>-1</button>
        <button onClick={this.onUpvoteClick}>+1</button>
        <p className="voter-count">{this.props.rant.numVotes} votes</p>
      </div>
    );
  }
}

export default Voter;