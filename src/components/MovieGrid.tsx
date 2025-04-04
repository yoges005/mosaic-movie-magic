
import { useState } from "react";
import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface MovieGridProps {
  movies: Movie[];
  title?: string;
}

const MovieGrid = ({ movies, title }: MovieGridProps) => {
  const [visibleMovies, setVisibleMovies] = useState(8);
  
  const loadMore = () => {
    setVisibleMovies((prev) => Math.min(prev + 8, movies.length));
  };
  
  return (
    <div className="py-8">
      {title && (
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {movies.slice(0, visibleMovies).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
      {visibleMovies < movies.length && (
        <div className="mt-8 text-center">
          <Button 
            onClick={loadMore} 
            variant="outline" 
            className="border-movie-secondary/50 text-white hover:bg-movie-secondary/20"
          >
            Load More <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;
