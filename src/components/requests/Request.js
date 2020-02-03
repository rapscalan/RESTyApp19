import React from 'react';
import PropTypes from 'prop-types';

const Request = ({ request }) => (
  <section>
    <h2>{request.method}</h2>
    <p>{request.url}</p>
  </section>
);

Request.propTypes = {
  request: PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default Request;
