import React from 'react';
import Voter from './Voter';

const RantItem = ({ rant, onUpvoteClick, onDownvoteClick }) => (
  <div className="rant-item">
    <h1 className="rant-title">{rant.message}</h1>
    <p><em>published by {rant.user}</em></p>
    <Voter rant={rant} onUpvoteClick={onUpvoteClick} onDownvoteClick={onDownvoteClick} />
  </div>
);

export default RantItem;