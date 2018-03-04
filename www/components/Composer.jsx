import React from 'react';

class Composer extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const user = event.target[0].value;
    const message = event.target[1].value;
    this.props.onCompose(message, user);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" name="user" placeholder="User" />
        <input type="text" name="message" placeholder="Message" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Composer;