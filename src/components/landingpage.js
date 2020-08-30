import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img
              src="Capture.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Big Data Enthusiast</h1>

            <hr/>

          <p>Big Data | AWS | RPA | HTML/CSS | JavaScript | React | MongoDB | Tableau </p>

        <div className="social-links">
       
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/arunveebhuti/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/arunveebhuti" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
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
