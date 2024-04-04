import Navbar from './Navbar';

const Header = ({ onPageChange }) => {
   return (
      <header className="header">
         <div className='header-content'>
            <Navbar onPageChange={onPageChange} />
         </div>
      </header>
       );
    }


export default Header;