import Navbar from './Navbar';

const Header = ({ onPageChange }) => {
   return (
      <header className="header">
         <div className='header-content'>
            Jacob Kueck
            <Navbar onPageChange={onPageChange} />
         </div>
      </header>
       );
    }


export default Header;