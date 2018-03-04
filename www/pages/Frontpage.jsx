import React from 'react';
import Axios from 'axios';
import RantList from '../components/RantList';
import Composer from '../components/Composer';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.onCompose = this.onCompose.bind(this);
    this.onUpvoteClick = this.onUpvoteClick.bind(this);
    this.onDownvoteClick = this.onDownvoteClick.bind(this);
    this.state = {
      rants: []
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3001/latest')
      .then((res) => this.setState({ rants: res.data }))
      .catch((err) => console.log(err));
  }

  onCompose(message, user) {
    Axios.post('http://localhost:3001/compose', { message, user })
      .then((res) => {
        this.setState({
          rants: [ ...this.state.rants, res.data ]
        });
        console.log(res.data);
      });
  }

  onUpvoteClick(id) {
    Axios.post('http://localhost:3001/upvote', { id })
    .then((res) => {
      const modifiedRants = this.state.rants.map((rant) => (
        (rant.id === id) ? Object.assign({}, rant, {numVotes: rant.numVotes + 1}) : rant
      ));
      this.setState({ rants: modifiedRants });
    });
  }

  onDownvoteClick(id) {
    Axios.post('http://localhost:3001/downvote', { id })
    .then((res) => {
      const modifiedRants = this.state.rants.map((rant) => (
        (rant.id === id) ? Object.assign({}, rant, {numVotes: rant.numVotes - 1}) : rant
      ));
      this.setState({ rants: modifiedRants });
    });
  }

  render() {
    return (
      <div>
        <Composer onCompose={this.onCompose} />
        <RantList rants={this.state.rants} onUpvoteClick={this.onUpvoteClick} onDownvoteClick={this.onDownvoteClick} />
      </div>
    );
  }
}

export default FrontPage;