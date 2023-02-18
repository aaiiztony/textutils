import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";

function Header(props) {
  return (
    // add a logo on the left corner of the nav bar
  <nav className={`d-flex py-2 justify-content-between bg-${props.mode}`}>
  <div className="align-items-center">
    <Link className={`text-decoration-none mx-2 text-${props.mode==='white'?'primary':'success'}`} to="/">TextUtils</Link>
    <Link  className={`text-decoration-none text-${props.mode==='white'?'dark':'white'}`}  aria-current="page" to="/about">About</Link>
    <Link className={`text-decoration-none mx-2 text-${props.mode==='white'?'dark':'white'}`} to="/contact">Contact</Link>
  </div>
  <div className='form-check form-switch'>
    <input type="checkbox"
    id="custom-switch" className="px-2 form-check-input" onClick={props.toggleMode}/>
    </div>
</nav>
      );
    }
    
export default Header;

// we add a propType to check only the selected data type (string; here) is only passed on to the dom via the variable  (link1; here)

Header.propTypes = {
  link1: PropTypes.string
}

// Helps us pass a default value for the element if we do not give any value in the main file (app.js; here) for the variable (link1; here)
Header.defaultProps = {
  link1: "Set Link Name"
}

