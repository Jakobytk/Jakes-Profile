const Navbar = ({ onPageChange }) => {
  return (
    <nav className="navbar">
      <ul id="navbar-ul">
        <li onClick={() => onPageChange('about')}>Jacob Kueck</li>
        <li>/</li>
        {/* <li onClick={() => onPageChange('contact')}>Contact Me</li>
        <li>/</li> */}
        <li onClick={() => onPageChange('portfolio')}>Portfolio</li>
        <li>/</li>
        <li onClick={() => onPageChange('resume')}>Resume</li>
      </ul>
    </nav>
  );
};

export default Navbar;