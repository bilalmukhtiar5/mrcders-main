import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/aboutus" style={styles.navLink}>About Us</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/products" style={styles.navLink}>Products</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/todoslistings" style={styles.navLink}>TodosListings</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}


const styles = {
    navbar: {
      backgroundColor: '#333',
      padding: '10px',
    },
    navList: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'space-around',
    },
    navItem: {
      margin: 0,
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
    },
  };
  

export default Navbar