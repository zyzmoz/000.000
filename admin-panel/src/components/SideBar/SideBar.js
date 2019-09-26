import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
  return (
    <div style={styles.container}>      
      <Link to="/">
        <div style={styles.button}>
          Home
        </div>
      </Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '250px',
    background: '#000',
    height: '100%'
  },
  button: {
    width: '100%',
    padding: ' 20px 0 20px 0',
    textAlign: 'center'
    
  }
}

export default SideBar;