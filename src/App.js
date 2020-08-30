import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" 
        title={<Link style={{textDecoration: 'Bold', color: 'black'}} 
        to="/"><h3><div className="mp-name">MyPortfolio</div></h3></Link>}
        scroll>

            <Navigation>{/* upper nav bar for wider screens */}
           
              <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>

        {/* Side drawer for mobile views */}
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/"><h3><div className="mp-name">MyPortfolio</div></h3></Link>}>
            <Navigation>
           
              <Link to="/aboutme">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
              
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
