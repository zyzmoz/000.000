import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';


const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <Header />
        <div style={styles.workspace}>
          <SideBar />
          <div style={styles.view} >
            <Switch>

              <Route exact path="/" component={HomePage} />
              <Route path="/settings" component={SettingsPage} />

            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  workspace: {
    display: 'flex',
    height: '100%'
  },
  view: {
    flex: 1,
    padding: '8px'
  }

}



export default App;