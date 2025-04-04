
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Film } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="page-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="glass-card p-8 text-center max-w-lg">
          <Film className="h-16 w-16 text-movie-accent mx-auto mb-4" />
          
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-6">Page Not Found</h2>
          
          <p className="text-gray-300 mb-8">
            The movie you're looking for might have been moved, deleted, or never existed in our universe.
          </p>
          
          <Link to="/">
            <Button className="bg-movie-secondary hover:bg-movie-secondary/80">
              <Home className="mr-2 h-4 w-4" /> Return to Homepage
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
