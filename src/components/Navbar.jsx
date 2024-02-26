const Navbar = ({ onPageChange }) => {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => onPageChange('about')}>About Me</li>
        <li onClick={() => onPageChange('contact')}>Contact Me</li>
        <li onClick={() => onPageChange('portfolio')}>Portfolio</li>
        <li onClick={() => onPageChange('resume')}>Resume</li>
      </ul>
    </nav>
  );
};

export default Navbar;