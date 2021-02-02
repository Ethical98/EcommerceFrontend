import React from 'react';

const Description = () => {
  return <div>{window.location.href.split('description/')[1]}</div>;
};

export default Description;
