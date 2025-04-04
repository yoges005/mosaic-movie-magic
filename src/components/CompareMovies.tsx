
import { useState, useEffect } from "react";
import { Movie, CompareItem } from "@/types/movie";
import { movies } from "@/data/movies";
import { Button } from "@/components/ui/button";
import { StarIcon, X, Film, Compare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CompareMoviesProps {
  initialMovies?: Movie[];
}

const CompareMovies: React.FC<CompareMoviesProps> = ({ initialMovies = [] }) => {
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>(initialMovies);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const results = movies.filter(movie => 
      movie.title.toLowerCase().includes(term) &&
      !selectedMovies.some(selected => selected.id === movie.id)
    ).slice(0, 5);
    
    setSearchResults(results);
  }, [searchTerm, selectedMovies]);
  
  const addMovie = (movie: Movie) => {
    if (selectedMovies.length < 3) {
      setSelectedMovies([...selectedMovies, movie]);
      setSearchTerm("");
      setSearchResults([]);
    }
  };
  
  const removeMovie = (movieId: number) => {
    setSelectedMovies(selectedMovies.filter(movie => movie.id !== movieId));
  };
  
  const clearComparison = () => {
    setSelectedMovies([]);
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 bg-movie-secondary">
          <Compare className="h-4 w-4" />
          Compare Movies
        </Button>
      </DialogTrigger>
      
      <DialogContent className="bg-movie-primary text-white border-movie-secondary max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Compare Movies</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {selectedMovies.length < 3 && (
            <div className="space-y-2">
              <label htmlFor="movie-search" className="block text-white">
                Add movie to compare ({selectedMovies.length}/3)
              </label>
              <div className="relative">
                <input
                  id="movie-search"
                  type="text"
                  placeholder="Search for a movie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded p-2 text-white"
                />
                
                {searchResults.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-movie-primary border border-white/20 rounded shadow-lg">
                    {searchResults.map(movie => (
                      <div
                        key={movie.id}
                        className="p-2 hover:bg-white/10 cursor-pointer flex items-center gap-2"
                        onClick={() => addMovie(movie)}
                      >
                        <img
                          src={movie.poster_path}
                          alt={movie.title}
                          className="w-8 h-12 object-cover"
                        />
                        <span>{movie.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          
          {selectedMovies.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedMovies.map(movie => (
                  <div key={movie.id} className="bg-white/5 rounded border border-white/10 relative">
                    <button
                      onClick={() => removeMovie(movie.id)}
                      className="absolute top-2 right-2 bg-black/50 rounded-full p-1"
                    >
                      <X className="h-4 w-4 text-white" />
                    </button>
                    
                    <div className="p-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={movie.poster_path}
                          alt={movie.title}
                          className="w-16 h-24 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-medium text-white">{movie.title}</h3>
                          <div className="flex items-center mt-1">
                            <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                            <span>{movie.vote_average}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="my-3 bg-white/20" />
                      
                      <ScrollArea className="h-[300px] pr-4">
                        <div className="space-y-3">
                          <div>
                            <span className="text-gray-400 text-sm">Genres</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {movie.genres.map((genre, i) => (
                                <Badge key={i} variant="outline" className="bg-white/10 text-white">
                                  {genre}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm">Release Date</span>
                            <p>{movie.release_date}</p>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm">Runtime</span>
                            <p>{movie.runtime || "Not available"}</p>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm">Director</span>
                            <p>{movie.director || "Not available"}</p>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm">Language</span>
                            <p>{movie.language || "Not available"}</p>
                          </div>
                          
                          <div>
                            <span className="text-gray-400 text-sm">Country</span>
                            <p>{movie.country || "Not available"}</p>
                          </div>
                          
                          {movie.cast && movie.cast.length > 0 && (
                            <div>
                              <span className="text-gray-400 text-sm">Cast</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {movie.cast.slice(0, 4).map((actor, i) => (
                                  <Badge key={i} variant="outline" className="bg-white/10 text-white">
                                    {actor}
                                  </Badge>
                                ))}
                                {movie.cast.length > 4 && (
                                  <Badge variant="outline" className="bg-white/10 text-white">
                                    +{movie.cast.length - 4} more
                                  </Badge>
                                )}
                              </div>
                            </div>
                          )}
                          
                          {movie.reviews && movie.reviews.length > 0 && (
                            <div>
                              <span className="text-gray-400 text-sm">User Review</span>
                              <div className="bg-white/10 p-2 rounded mt-1">
                                <div className="flex items-center">
                                  <StarIcon className="h-3 w-3 text-yellow-400 mr-1" />
                                  <span>{movie.reviews[0].rating}/10</span>
                                </div>
                                <p className="text-sm mt-1">{movie.reviews[0].comment}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  onClick={clearComparison}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Clear All
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <Film className="h-12 w-12 text-white/50 mx-auto mb-3" />
              <h3 className="text-xl font-medium">No Movies Selected</h3>
              <p className="text-gray-400 mt-2">
                Search and add up to 3 movies to compare their details
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompareMovies;
