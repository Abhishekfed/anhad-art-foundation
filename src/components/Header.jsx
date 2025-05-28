import { Link } from 'react-router-dom';
 import logo from '../assets/logo.webp';

const Header = () => (
  <header className="bg-white shadow p-4">
    <div className="container mx-auto flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
      {/* Logo and title group */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Anhad Arts Foundation logo" className="w-10 h-10 object-contain" />
        <h1 className="text-xl font-bold text-gray-800 whitespace-nowrap">Anhad Arts Foundation</h1>
      </div>

    
<nav className="flex flex-wrap md:flex-nowrap gap-4">
  <Link to="/" className="relative text-black whitespace-nowrap transition-all duration-300 hover:text-black before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full">Home</Link>
  <Link to="/about" className="relative text-black whitespace-nowrap transition-all duration-300 hover:text-black before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full">About Us</Link>
  <Link to="/programs" className="relative text-black whitespace-nowrap transition-all duration-300 hover:text-black before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full">Programs</Link>
  <Link to="/events" className="relative text-black whitespace-nowrap transition-all duration-300 hover:text-black before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full">Events</Link>
  <Link to="/artists" className="relative text-black whitespace-nowrap transition-all duration-300 hover:text-black before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full">Artists</Link>
  <Link to="/get-involved" className="relative text-black whitespace-nowrap transition-all duration-300 hover:text-black before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full">Get Involved</Link>
  <Link to="/contact" className="relative text-black whitespace-nowrap transition-all duration-300 hover:text-black before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full">Contact</Link>
</nav>

    </div>
  </header>
);

export default Header;