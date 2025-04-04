
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
  movieId?: number;
}

const Hero = ({ title, description, imageUrl, movieId }: HeroProps) => {
  return (
    <div 
      className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${imageUrl})` }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
          <p className="text-lg text-gray-200 mb-8 line-clamp-3 md:line-clamp-none">{description}</p>
          <div className="flex flex-wrap gap-4">
            {movieId ? (
              <>
                <Button className="bg-movie-accent hover:bg-movie-accent/80 text-white">
                  <Play className="mr-2 h-4 w-4" /> Watch Trailer
                </Button>
                <Link to={`/movie/${movieId}`}>
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                    <Info className="mr-2 h-4 w-4" /> More Info
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/movies">
                <Button className="bg-movie-accent hover:bg-movie-accent/80 text-white">
                  Browse Movies
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
