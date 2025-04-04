
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movies } from "@/data/movies";
import { Movie } from "@/types/movie";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, Calendar, Clock, Heart, Share2, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [relatedMovies, setRelatedMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Find the movie with the matching ID
    const movieId = parseInt(id || "0");
    const foundMovie = movies.find(m => m.id === movieId);
    
    if (foundMovie) {
      setMovie(foundMovie);
      
      // Get related movies (movies with at least one matching genre)
      const related = movies
        .filter(m => 
          m.id !== movieId && 
          m.genres.some(genre => foundMovie.genres.includes(genre))
        )
        .slice(0, 4);
        
      setRelatedMovies(related);
    } else {
      navigate("/not-found");
    }
  }, [id, navigate]);
  
  if (!movie) {
    return (
      <div className="page-background min-h-screen flex flex-col items-center justify-center">
        <div className="loader">Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="page-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div 
          className="h-[70vh] bg-cover bg-center relative"
          style={{ backgroundImage: `linear-gradient(to top, #121212, transparent), linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${movie.backdrop_path})` }}
        >
          <div className="container mx-auto px-4 h-full flex items-end pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
              <div className="hidden md:block">
                <img 
                  src={movie.poster_path} 
                  alt={movie.title} 
                  className="rounded-lg shadow-2xl w-full max-w-xs mx-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1518877593221-1f28583780b4";
                  }}
                />
              </div>
              
              <div className="md:col-span-2">
                <Button 
                  variant="ghost" 
                  className="mb-4 text-white hover:bg-white/10"
                  onClick={() => navigate(-1)}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{movie.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 w-5 h-5 mr-1" />
                    <span className="text-white">{movie.vote_average}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{movie.release_date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>120 min</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {movie.genres.map((genre, index) => (
                    <Badge key={index} className="bg-movie-secondary/20 hover:bg-movie-secondary/30 text-white border-movie-secondary/30">
                      {genre}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-gray-200 mb-8 max-w-2xl">{movie.overview}</p>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-movie-accent hover:bg-movie-accent/80 text-white">
                    <Play className="mr-2 h-4 w-4" /> Watch Trailer
                  </Button>
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                    <Heart className="mr-2 h-4 w-4" /> Add to Favorites
                  </Button>
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                    <Share2 className="mr-2 h-4 w-4" /> Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:hidden">
              <img 
                src={movie.poster_path} 
                alt={movie.title} 
                className="rounded-lg shadow-xl w-full max-w-xs mx-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1518877593221-1f28583780b4";
                }}
              />
            </div>
            
            <div className="glass-card p-6 h-fit">
              <h3 className="text-xl font-semibold text-white mb-4">Movie Info</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-400 text-sm">Director</h4>
                  <p className="text-white">Christopher Nolan</p>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Cast</h4>
                  <p className="text-white">Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page</p>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Writers</h4>
                  <p className="text-white">Christopher Nolan</p>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Release Date</h4>
                  <p className="text-white">{movie.release_date}</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="glass-card p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Synopsis</h3>
                <p className="text-gray-200">{movie.overview}</p>
              </div>
              
              {relatedMovies.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">You May Also Like</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {relatedMovies.map((relatedMovie) => (
                      <div 
                        key={relatedMovie.id} 
                        className="movie-card cursor-pointer"
                        onClick={() => navigate(`/movie/${relatedMovie.id}`)}
                      >
                        <img 
                          src={relatedMovie.poster_path} 
                          alt={relatedMovie.title} 
                          className="movie-poster rounded-t-lg"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1518877593221-1f28583780b4";
                          }}
                        />
                        <div className="p-3">
                          <h4 className="font-medium text-white truncate">{relatedMovie.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MovieDetails;
