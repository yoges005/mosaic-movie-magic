
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Film 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-movie-primary/80 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Film className="h-8 w-8 text-movie-accent" />
              <span className="ml-2 text-xl font-bold">Mosaic Movie Magic</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Your ultimate destination for movie discovery and entertainment.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/movies" className="text-gray-300 hover:text-white">All Movies</Link></li>
              <li><Link to="/search" className="text-gray-300 hover:text-white">Search</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Top Rated</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Coming Soon</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-gray-300 hover:text-white">Login</Link></li>
              <li><Link to="/register" className="text-gray-300 hover:text-white">Register</Link></li>
              <li><Link to="/profile" className="text-gray-300 hover:text-white">My Profile</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Watchlist</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">DMCA Notice</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Mosaic Movie Magic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
