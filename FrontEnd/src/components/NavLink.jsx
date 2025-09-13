import PropTypes from "prop-types";

export default function NavLink({ children, onClick }) {
  return (
    <button onClick={onClick} className="nav-link-btn">
      {children}
    </button>
  );
}

NavLink.propTypes = {
  onClick: PropTypes.func,
};
