import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Salauddin Ripon</h2>
            <h4 style={{color: 'grey'}}>Frontend Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a Front-end Developer. I have 2 years commercial experience providing front-end development, producing high quality responsive websites and exceptional user experience.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>lakshmipur,raipur</p>
            <h5>Phone</h5>
            <p>01778457406</p>
            <h5>Email</h5>
            <p>salauddinripon85@gmail.com</p>
            <h5>Web</h5>
            <p>salauddinripon.com/portfolio</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2010}
              endYear={2014}
              schoolName="Mollar Hat High Scholl"
              schoolDescription="i complete my secondary study at the scholl"
               />

               <Education
                 startYear={2015}
                 endYear={2017}
                 schoolName="Rustom Ali Degree College"
                 schoolDescription="i complete my Intermediet study at the college"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

              <Experience
                startYear={2016}
                endYear={2019}
                jobName="Working internet markettplace"
                jobDescription="I am a Front-end Developer. I have 2 years commercial experience providing front-end development, producing high quality responsive websites and exceptional user experience."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />

              <Skills
                skill="javascript"
                progress={70}
                />
               
                  <Skills
                    skill="React"
                    progress={85}
                    />
                    <Skills
                      skill="React-Redux"
                      progress={60}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
