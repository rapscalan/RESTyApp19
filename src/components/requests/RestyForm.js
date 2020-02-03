import React from 'react';
import PropTypes from 'prop-types';

const RestyForm = ({ url, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="url" placeholder="Url" value={url}onChange={onChange} />
    <p>
      <input type="radio" name="httpVerb" value="GET" onChange={onChange} />
      <input type="radio" name="httpVerb" value="POST" onChange={onChange} />
      <input type="radio" name="httpVerb" value="PUT" onChange={onChange} />
      <input type="radio" name="httpVerb" value="PATCH" onChange={onChange} />
      <input type="radio" name="httpVerb" value="DELETE" onChange={onChange} />
    </p>
    <input type="textarea" name="headerInput" onChange={onChange}>Raw JSON Body</input>
    <button>Go!</button>
  </form>
);
RestyForm.propTypes = {
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default RestyForm;
