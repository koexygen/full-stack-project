import HeaderProfile from "./HeaderProfile";
import { logoutUser } from "../../actions/session_action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  return {
    currentUser: currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderProfile);
