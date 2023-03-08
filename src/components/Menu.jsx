import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink
        //className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        // style={({ isActive }) => (isActive ? { color: 'lightgreen' } : {})}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        // className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        // style={({ isActive }) => (isActive ? { color: 'lightgreen' } : {})}
        to="/about"
      >
        About
      </NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink
        //className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        // style={({ isActive }) => (isActive ? { color: 'lightgreen' } : {})}
        to="/contacts"
      >
        Contacts
      </NavLink>
     
    </nav>
  );
};

export default Menu;
