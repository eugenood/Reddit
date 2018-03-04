import React from 'react';
import RantItem from './RantItem';

const RantList = ({ rants, onUpvoteClick, onDownvoteClick }) => {
  const rantItems = rants.map((rant) => (
    <RantItem key={rant.id} rant={rant} onUpvoteClick={onUpvoteClick} onDownvoteClick={onDownvoteClick} />
  ));

  return <div>{rantItems.reverse()}</div>;
}

export default RantList;