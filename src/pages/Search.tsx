
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { movies } from "@/data/movies";
import { Movie } from "@/types/movie";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };
  
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
    } else {
      setSearchResults([]);
    }
  }, [initialQuery]);
  
  return (
    <div className="page-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="glass-card p-8 mb-12">
            <h1 className="text-3xl font-bold text-white mb-6">Search Movies</h1>
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="Search by movie title, description or genre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1"
              />
              <Button type="submit" className="bg-movie-secondary hover:bg-movie-secondary/80">
                <SearchIcon className="h-4 w-4 mr-2" /> Search
              </Button>
            </form>
          </div>
          
          {initialQuery && (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Search results for "{initialQuery}"
              </h2>
              
              {searchResults.length > 0 ? (
                <MovieGrid movies={searchResults} />
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
