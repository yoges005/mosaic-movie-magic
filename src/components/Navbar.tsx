
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  User, 
  LogOut, 
  Menu, 
  X, 
  Film 
} from "lucide-react";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <nav className="bg-movie-primary/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center">
              <Film className="h-8 w-8 text-movie-accent" />
              <span className="ml-2 text-xl font-bold text-white">Movie Lens</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search movies..."
                  className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0 text-white"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
              
              <Link to="/movies">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  Movies
                </Button>
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link to="/profile">
                    <Button variant="ghost" className="text-white hover:bg-white/10">
                      <User className="mr-2 h-4 w-4" />
                      {user?.name}
                    </Button>
                  </Link>
                  <Button variant="ghost" className="text-white hover:bg-white/10" onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost" className="text-white hover:bg-white/10">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button className="bg-movie-secondary hover:bg-movie-secondary/80 text-white">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-movie-primary/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <form onSubmit={handleSearch} className="relative mb-3">
              <Input
                type="text"
                placeholder="Search movies..."
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 text-white"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            <Link to="/movies" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                Movies
              </Button>
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-white hover:bg-white/10" 
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full justify-start bg-movie-secondary hover:bg-movie-secondary/80 text-white">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
