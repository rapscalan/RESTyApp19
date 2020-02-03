import React from 'react';
import PropTypes from 'prop-types';
import Request from './Request';

const Requests = ({ requests }) => {
  const requestElements = requests.map((request, i) => (
    <li key={i}>
      <Request request={request} />
    </li>
  ));

  return (
    <ul>
      {requestElements}
    </ul>
  );
};

Requests.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default Requests;
