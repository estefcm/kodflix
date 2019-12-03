import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from "../gallery-get";
import './Details.css';



export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      Tvshow: {}
    };
  }

  componentDidMount() {
    let TvshowId = this.props.match.params.TvshowId;
    let Tvshow = getGallery().find((Tvshow) => Tvshow.id === TvshowId);

    this.setState({ Tvshow });
  }

  render() {
    if (this.state.Tvshow === undefined) {
      return <Redirect to='/not-found' />;
    } else {
      return (
        <div className='Details'>
          <h1>{this.state.Tvshow.name}</h1>
          <div className='content'>
           <div className='text'>
             <div>{this.state.Tvshow.details}</div>
            </div>
            <img className='image'
              src={this.state.Tvshow.logo}
              alt={this.state.Tvshow.name} />
          </div>
          <Link to='/'>Back to home page</Link>
        </div>
      );
    }
  }
}