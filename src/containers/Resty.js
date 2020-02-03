import React, { Component } from 'react';
import Requests from '../components/requests/Requests';
import RestyForm from '../components/requests/RestyForm';

export default class RestyApp extends Component {
  state = {
    loading: true,
    requests: [],
    url: ''
  } 
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => ({
      requests: [...state.requests, {
        url: state.url
      }]
    }));
  }
  componet

  render() {
    const { requests, url } = this.state;
    return (
      <>
        <Requests requests={requests} />
        <RestyForm 
          url={url}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Div></Div>
      </>
    );
  }
}
