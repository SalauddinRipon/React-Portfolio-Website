import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
{/* html |css Project */}
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Grid>
          <Cell col={4} >
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle className="card-title" style={{color: '#000', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStO_iQ1GzfwrppoATn1D47NNGf27XSs0XR7lSwKHanUegmx-9-w) center / cover'}} ></CardTitle>
            <CardText>
              Responsive Landing Page For App . Created Html | Css | Bootstrap | Jqueary
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/SalauddinRipon/Responsive-Website-For-App" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
              <Button colored>CodePen</Button>
              <Button colored><a href="http://salauddinripon.com/portfolio/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
          </Grid>

          {/* Project 2 */}
          <Grid>
          <Cell col={4} >
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle className="card-title" style={{color: '#000', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStO_iQ1GzfwrppoATn1D47NNGf27XSs0XR7lSwKHanUegmx-9-w) center / cover'}} ></CardTitle>
            <CardText>
             Responsive Portfolio Website.Created Html | Css | Bootstrap | Jqueary
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/SalauddinRipon/Responsive-Portfolio-Website" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
              <Button colored>CodePen</Button>
              <Button colored><a href="https://github.com/SalauddinRipon/Responsive-Website-For-App" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </Cell>
          </Grid>

          {/* Project 3 */}
          <Grid>
          <Cell col={4} >
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle className="card-title" style={{color: '#000', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStO_iQ1GzfwrppoATn1D47NNGf27XSs0XR7lSwKHanUegmx-9-w) center / cover'}} ></CardTitle>
            <CardText>
             Responsive Portfolio Website.Created Html | Css | Bootstrap | Jqueary
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/SalauddinRipon/Responsive-Portfolio-Website" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
              <Button colored>CodePen</Button>
              <Button colored><a href="https://github.com/SalauddinRipon/Responsive-Website-For-App" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
</Cell>
</Grid>
        </div>


      )
      {/* javascript Project */}
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Grid>
        <Cell col={4}>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cms-assets.tutsplus.com/uploads/users/48/posts/32467/preview_image/practice-javascript-and-learn-functions-400x277.png) center / cover'}} ></CardTitle>
          <CardText>
          Javscript Animated Responsive Navbar for Mobile  Device
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/SalauddinRipon/Animated-Responsive-Navbar" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
            <Button colored>CodePen</Button>
            <Button colored><a href="https://javascript-responsive-navbar.netlify.com/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </Cell>
</Grid>
        {/* Project 2 */}
        <Grid>
        <Cell col={4}>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cms-assets.tutsplus.com/uploads/users/48/posts/32467/preview_image/practice-javascript-and-learn-functions-400x277.png) center / cover'}} ></CardTitle>
          <CardText>
          Javascript Music App Project
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/SalauddinRipon/Music-App-With-Js" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
            <Button colored>CodePen</Button>
            <Button colored><a href="https://javascript-music-app.netlify.com/?_ga=2.89917778.87239313.1566188006-1075772819.1565853434" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </Cell>
        </Grid>

        {/* Project 3 */}
        <Grid>
        <Cell col={4}>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cms-assets.tutsplus.com/uploads/users/48/posts/32467/preview_image/practice-javascript-and-learn-functions-400x277.png) center / cover'}} ></CardTitle>
          <CardText>
          Weather App with Vanila Javascript
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/SalauddinRipon/Wather-App-With-Vanila-Javascript" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
            <Button colored>CodePen</Button>
            <Button colored><a href="https://weather-app-vanila-javascript.netlify.com" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </Cell>
        </Grid>
      </div>
      )
      {/* React Project */}
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Grid>
        <Cell col={4}>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
          <CardText>
           Stop Watch Application with React
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/SalauddinRipon/Stop-Watch-Application" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
            <Button colored>CodePen</Button>
            <Button colored><a href="https://stop-watch-application.netlify.com/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </Cell>
        </Grid>

        {/* Project 2 */}
        <Grid>
        <Cell col={4}>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
          <CardText>
          React Ecommerce Webiste 
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/SalauddinRipon/React-Ecommerce-Website" rel="noopener noreferrer" target="_blank" >GitHub</a></Button>
            <Button colored>CodePen</Button>
            <Button colored><a href="https://react-phone-ecommerce-website.netlify.com" rel="noopener noreferrer" target="_blank" >Live Demo</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
</Cell>
</Grid>
        {/* Project 3 */}
        <Grid>
        <Cell col={4}>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
          <CardText>
          React Todo App 
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/SalauddinRipon/Todo-List-Web-App-With-React" rel="noopener noreferrer" target="_blank" >GitHub</a></Button>
            <Button colored>CodePen</Button>
            <Button colored><a href="https://react-todo-apps.netlify.com/" rel="noopener noreferrer" target="_blank" >Live Demo</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </Cell>
        </Grid>
      </div>
      )
      {/* React-Redux Project */}
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Grid>
        <Cell col={4}>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hackernoon.com/hn-images/1*bs6W6c6yYS36PcD9joLVtw.png) center / cover'}} ></CardTitle>
          <CardText>
          Upcoming
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
</Cell>
</Grid>
        {/* Project 2 */}
        <Grid>
        <Cell col={4}>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hackernoon.com/hn-images/1*bs6W6c6yYS36PcD9joLVtw.png) center / cover'}} ></CardTitle>
          <CardText>
            Upcoming
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
</Cell>
</Grid>
        {/* Project 3 */}
        <Grid>
        <Cell col={4}>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hackernoon.com/hn-images/1*bs6W6c6yYS36PcD9joLVtw.png) center / cover'}} ></CardTitle>
          <CardText>
          Upcoming
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </Cell>
        </Grid>
      </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Html | Css </Tab>
          <Tab>Javascript</Tab>
          <Tab>React</Tab>
          <Tab>React-Redux</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
