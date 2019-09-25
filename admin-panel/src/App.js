import React from 'react';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';


const App = () => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.workspace}>
        <SideBar />
      </div>

    </div>
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
  }

}



export default App;