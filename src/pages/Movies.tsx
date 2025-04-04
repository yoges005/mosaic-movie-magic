
import { useState } from "react";
import { movies } from "@/data/movies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Film } from "lucide-react";

const Movies = () => {
  // Extract all unique genres from movies
  const allGenres = [...new Set(movies.flatMap(movie => movie.genres))].sort();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  
  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre) 
        : [...prev, genre]
    );
  };
  
  const clearFilters = () => {
    setSelectedGenres([]);
  };
  
  // Filter movies based on selected genres
  const filteredMovies = selectedGenres.length > 0 
    ? movies.filter(movie => 
        selectedGenres.some(genre => movie.genres.includes(genre))
      )
    : movies;
  
  return (
    <div className="page-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <Film className="mr-2 h-6 w-6 text-movie-accent" /> Movies Collection
            </h1>
          </div>
          
          <div className="glass-card p-6 mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-white font-medium">Filter by genre:</span>
              {allGenres.map(genre => (
                <Badge 
                  key={genre}
                  className={`cursor-pointer ${
                    selectedGenres.includes(genre) 
                      ? 'bg-movie-secondary text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                  onClick={() => toggleGenre(genre)}
                >
                  {genre}
                </Badge>
              ))}
              {selectedGenres.length > 0 && (
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/10 text-sm h-8"
                  onClick={clearFilters}
                >
                  Clear filters
                </Button>
              )}
            </div>
            <p className="text-gray-300 text-sm">
              {filteredMovies.length} movies found
              {selectedGenres.length > 0 ? ` for selected genres: ${selectedGenres.join(', ')}` : ''}
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-movie-primary/50 border border-white/10">
              <TabsTrigger value="all" className="data-[state=active]:bg-movie-secondary">All</TabsTrigger>
              <TabsTrigger value="top-rated" className="data-[state=active]:bg-movie-secondary">Top Rated</TabsTrigger>
              <TabsTrigger value="newest" className="data-[state=active]:bg-movie-secondary">Newest</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <MovieGrid movies={filteredMovies} />
            </TabsContent>
            <TabsContent value="top-rated">
              <MovieGrid 
                movies={filteredMovies.filter(movie => movie.vote_average >= 8.5).sort((a, b) => b.vote_average - a.vote_average)} 
              />
            </TabsContent>
            <TabsContent value="newest">
              <MovieGrid 
                movies={filteredMovies.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime())} 
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Movies;
