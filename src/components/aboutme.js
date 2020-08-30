import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return( <div>
      <Grid>
        <Cell col={4}>
          <div style={{textAlign: 'center'}}>
            <img
              
              src="Capture.jpg"
              alt="avatar"
              style={{height: '200px',paddingTop: '5em'}} /* image */
               />
          </div>
{/* left  */}
          <h2 style={{paddingTop: '1em', textAlign: 'center'}} >Arun Veebhuti</h2>
          <h4 style={{color: 'grey', textAlign: 'center'}}>Big Data Enthusiast</h4>
         
         
        </Cell>
        {/* right box */}
        <Cell className="resume-right-col" col={8} style={{paddingTop: '3em'}}>
        
          <center> 
          <h6>DOB : 3rd April 2000</h6>
          <h6>Full Name : VEEBHUTI ARUN SAI TEJA</h6>
          <h6>Father's Name : Kumara Swamy</h6>
          <h6>Mother's Name : Anna Purna</h6>
          <h6>Country : India</h6>
          <h6>Cell : 8332945194,8309870613</h6>
          <h6>Hometown : Srikakulam, Andhra Pradesh</h6>
          
          </center>



          </Cell>
      </Grid>
    </div>
    )
  }
}

export default About;
