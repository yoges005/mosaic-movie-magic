
import { useState } from "react";
import { Movie } from "@/types/movie";
import MovieCard from "@/components/MovieCard";
import CompareMovies from "@/components/CompareMovies";
import { useToast } from "@/components/ui/use-toast";

interface MovieGridProps {
  movies: Movie[];
  title?: string;
  isCompareMode?: boolean;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, title, isCompareMode = false }) => {
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);
  const { toast } = useToast();
  
  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovies(prev => {
      // If movie is already selected, remove it
      if (prev.some(m => m.id === movie.id)) {
        return prev.filter(m => m.id !== movie.id);
      }
      
      // If we already have 3 movies, show an error
      if (prev.length >= 3) {
        toast({
          title: "Maximum Movies Reached",
          description: "You can compare up to 3 movies at a time",
          variant: "destructive"
        });
        return prev;
      }
      
      // Add the movie
      toast({
        title: "Movie Added",
        description: `${movie.title} added to comparison`
      });
      return [...prev, movie];
    });
  };
  
  return (
    <div>
      {title && <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>}
      
      {isCompareMode && selectedMovies.length > 0 && (
        <div className="mb-6">
          <CompareMovies initialMovies={selectedMovies} />
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            isCompareMode={isCompareMode}
            onCompareSelect={isCompareMode ? handleMovieSelect : undefined}
          />
        ))}
      </div>
      
      {movies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-300 text-lg">No movies found</p>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;
