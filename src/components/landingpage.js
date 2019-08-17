import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from './salauddin.png'


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img src={profile} alt="avatar" className="avatar-img" />
            {/* <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              /> */}

            <div className="banner-text">
              <h1>Frontend Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | Redux | React-Redux</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/salauddin-ripon-a815b6153/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/SalauddinRipon" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href="https://web.facebook.com/ripon.gazi.200.10.200" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/SalauddinRipon1" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
