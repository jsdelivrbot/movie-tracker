import { connect } from 'react-redux';

import { toggleAuth } from '../redux/auth.js';
import Header from '../components/Header.jsx';

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps, { toggleAuth })(Header);
