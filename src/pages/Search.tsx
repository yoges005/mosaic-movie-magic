
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { movies, getMoviesByActor } from "@/data/movies";
import { Movie } from "@/types/movie";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Group, Film } from "lucide-react";
import CompareMovies from "@/components/CompareMovies";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("q") || "";
  const actorQuery = queryParams.get("actor") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [searchType, setSearchType] = useState<"title" | "actor">(actorQuery ? "actor" : "title");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchType === "actor") {
      navigate(`/search?actor=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  useEffect(() => {
    // Update search query if actor query is present
    if (actorQuery) {
      setSearchQuery(actorQuery);
      setSearchType("actor");
    }
  }, [actorQuery]);
  
  useEffect(() => {
    // Update search results based on query
    if (initialQuery) {
      const query = initialQuery.toLowerCase();
      const results = movies.filter(movie => 
        movie.title.toLowerCase().includes(query) || 
        movie.overview.toLowerCase().includes(query) ||
        movie.genres.some(genre => genre.toLowerCase().includes(query))
      );
      setSearchResults(results);
    } else if (actorQuery) {
      const results = getMoviesByActor(actorQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [initialQuery, actorQuery]);
  
  return (
    <div className="page-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <SearchIcon className="mr-3 h-6 w-6 text-movie-accent" /> Search
            </h1>
            <CompareMovies />
          </div>
          
          <div className="glass-card p-8 mb-12">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md ${
                    searchType === "title"
                      ? "bg-movie-secondary text-white"
                      : "bg-white/10 text-white"
                  }`}
                  onClick={() => setSearchType("title")}
                >
                  <Film className="h-4 w-4 inline mr-2" />
                  By Title/Genre
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md ${
                    searchType === "actor"
                      ? "bg-movie-secondary text-white"
                      : "bg-white/10 text-white"
                  }`}
                  onClick={() => setSearchType("actor")}
                >
                  <Group className="h-4 w-4 inline mr-2" />
                  By Actor
                </button>
              </div>
              
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder={searchType === "actor" 
                    ? "Search by actor name..." 
                    : "Search by movie title, description or genre..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1"
                />
                <Button type="submit" className="bg-movie-secondary hover:bg-movie-secondary/80">
                  <SearchIcon className="h-4 w-4 mr-2" /> Search
                </Button>
              </div>
            </form>
          </div>
          
          {(initialQuery || actorQuery) && (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                {searchType === "actor" 
                  ? `Movies with actor "${actorQuery}"` 
                  : `Search results for "${initialQuery}"`}
              </h2>
              
              {searchResults.length > 0 ? (
                <MovieGrid 
                  movies={searchResults} 
                  isCompareMode={true} 
                />
              ) : (
                <div className="glass-card p-8 text-center">
                  <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
                  <p className="text-gray-300 mb-4">
                    We couldn't find any movies matching your search term.
                  </p>
                  <p className="text-gray-400">
                    Try using different keywords or check for typos.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
