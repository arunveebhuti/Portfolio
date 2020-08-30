import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img 
                src="Capture.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 /> {/* image */}
            </div>

            <h2 style={{paddingTop: '2em'}}>Arun Veebhuti</h2>    
            <h4 style={{color: 'grey'}}>Big Data Enthusiast</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> {/* left side info */}
            <p>Enthusiastic, highly-motivated Computer science and engineering student with
proven leadership capabilities, who likes to take initiative and seek out new
challenges. Strong background in project management and customer relations.
Experienced with all stages of the development cycle for dynamic projects.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Jalandhar, Punjab</p>
            <h5>Phone</h5>
            <p>(+91) 8332945195</p>
            <h5>Email</h5>
            <p>sarunveebhuti123@gmail.com</p>
           
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>  
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>   {/* right box info */}
            <Education
              startYear={2005}
              endYear={2017}
              schoolName="Kendriya Vidyalaya"
              schoolDescription="Completed 12 years of schooling (10th and 12th) at the same school at my hometown Vizag"
               />

               <Education
                 startYear={2017}
                 endYear={2021}
                 schoolName="Lovely Professional University"
                 schoolDescription="Currently Persuing my B.tech degree in computerscience and engineering" />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

           2 Months Summer Internship - RINL - Vizag Steel Plant (SDE-Intern)
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Hadoop/MapReduce/Spark/Hive/pig (Bigdata Frameworks)"
                progress={70}
                />
                <Skills
                  skill="HTML/CSS/React"
                  progress={80}
                  />
                  <Skills
                  skill="AWS"
                  progress={60}
                  />
                  <Skills
                  skill="Robotic Process Automation - Automation Anywhere"
                  progress={70}
                  />
                 
                  


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
