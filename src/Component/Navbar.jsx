import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, PhoneCall, Search } from "lucide-react";

export default function Navbar() {

  const navigate = useNavigate()

  const [isSticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <header
      className={`w-full z-50 top-0 ${
        isSticky ? "fixed bg-white shadow-md" : "absolute"
      } transition-all`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-2"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </Link>

        <ul className="hidden lg:flex space-x-6 text-base font-medium text-gray-700">
          <li>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Services
            </Link>
          </li>
          {/* <li>
            <Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Blog
            </Link>
          </li> */}
          <li>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-sm font-medium text-gray-700">
          </div>
          <button onClick={() => navigate('/contact')} className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-full text-sm flex items-center space-x-1 hover:bg-blue-700">
            Request a Quote
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
            <li>
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Services
              </Link>
            </li>
            {/* <li>
              <Link
                to="/blog"
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Blog
              </Link>
            </li> */}
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact
              </Link>
            </li>

<button
      onClick={() => {
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/contact"); 
      }}
      className="w-full bg-blue-600 text-white px-4 py-2 rounded-full text-sm mt-2 hover:bg-blue-700"
    >
      Request a Quote
    </button>
          </ul>
        </div>
      )}
    </header>
  );
}
