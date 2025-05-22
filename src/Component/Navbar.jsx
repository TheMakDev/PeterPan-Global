import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, PhoneCall, Search } from "lucide-react";

export default function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 top-0 ${isSticky ? "fixed bg-white shadow-md" : "absolute"} transition-all`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4">

        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <div className="text-white font-bold text-sm">⚙️</div>
          </div>
          <span className="text-2xl font-bold text-gray-800">PeterPan</span>
        </Link>

        <ul className="hidden lg:flex space-x-6 text-base font-medium text-gray-700">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>


        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-sm font-medium text-gray-700">
            <PhoneCall className="text-blue-600" size={18} />
            <span>+234 703 923 7226</span>
          </div>
          <button className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-full text-sm flex items-center space-x-1 hover:bg-blue-700">
            Read More
          </button>
          <Search className="text-blue-600 cursor-pointer" />
        </div>


        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

    
      {menuOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 shadow-md">
          <ul className="space-y-3 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li className="flex items-center space-x-2">
              <PhoneCall className="text-blue-600" size={18} />
              <span>+234 703 923 7226</span>
            </li>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full text-sm mt-2 hover:bg-blue-700">
              Read More →
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
