import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
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
    setMenuOpen(false); // auto-close menu on route change
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-full text-sm flex items-center space-x-1 hover:bg-blue-700"
          >
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

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
        />
      )}

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between px-6 py-4">
          <div>
            <div className="flex justify-between items-center mb-6">
              <img src="/logo.png" alt="Logo" className="w-14 h-14 object-contain" />
              <button onClick={() => setMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <ul className="space-y-6 text-lg font-semibold text-gray-800">
              {["Home", "About", "Services", "Contact"].map((label) => (
                <li key={label}>
                  <Link
                    to={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
                    onClick={() => {
                      setMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/contact");
              }}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-full text-base font-medium hover:bg-blue-700"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
