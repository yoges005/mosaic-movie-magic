
import { useState } from "react";
import { movies } from "@/data/movies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Film, TrendingUp, Star } from "lucide-react";
import CategoryFilters from "@/components/CategoryFilters";
import CompareMovies from "@/components/CompareMovies";

const Movies = () => {
  // Extract all unique genres from movies
  const allGenres = [...new Set(movies.flatMap(movie => movie.genres))].sort();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const allCategories = [...new Set(movies.map(movie => movie.category || ""))].filter(Boolean);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCompareMode, setIsCompareMode] = useState(false);
  
  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre) 
        : [...prev, genre]
    );
  };
  
  const clearFilters = () => {
    setSelectedGenres([]);
    setSelectedCategory(null);
  };
  
  // Filter movies based on selected genres and category
  const filteredMovies = movies.filter(movie => {
    const matchesGenres = selectedGenres.length === 0 || 
      selectedGenres.some(genre => movie.genres.includes(genre));
    
    const matchesCategory = !selectedCategory || 
      movie.category === selectedCategory;
    
    return matchesGenres && matchesCategory;
  });
  
  return (
    <div className="page-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <Film className="mr-2 h-6 w-6 text-movie-accent" /> Movies Collection
            </h1>
            <div className="flex items-center gap-3">
              <Button 
                variant={isCompareMode ? "secondary" : "outline"} 
                onClick={() => setIsCompareMode(!isCompareMode)}
                className={isCompareMode 
                  ? "bg-movie-secondary text-white" 
                  : "border-white/20 text-white hover:bg-white/10"
                }
              >
                {isCompareMode ? "Exit Compare Mode" : "Enable Compare Mode"}
              </Button>
              <CompareMovies />
            </div>
          </div>
          
          <CategoryFilters 
            categories={allCategories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
          
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
              {(selectedGenres.length > 0 || selectedCategory) && (
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
              {selectedCategory ? ` in category: ${selectedCategory}` : ''}
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-movie-primary/50 border border-white/10">
              <TabsTrigger value="all" className="data-[state=active]:bg-movie-secondary">All</TabsTrigger>
              <TabsTrigger value="top-rated" className="data-[state=active]:bg-movie-secondary">Top Rated</TabsTrigger>
              <TabsTrigger value="newest" className="data-[state=active]:bg-movie-secondary">Newest</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <MovieGrid movies={filteredMovies} isCompareMode={isCompareMode} />
            </TabsContent>
            <TabsContent value="top-rated">
              <MovieGrid 
                movies={filteredMovies.filter(movie => movie.vote_average >= 8.5).sort((a, b) => b.vote_average - a.vote_average)} 
                isCompareMode={isCompareMode}
              />
            </TabsContent>
            <TabsContent value="newest">
              <MovieGrid 
                movies={filteredMovies.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime())} 
                isCompareMode={isCompareMode}
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
