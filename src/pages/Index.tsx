
import { useState } from "react";
import { movies, getMoviesByCategory, getTrendingMovies } from "@/data/movies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MovieGrid from "@/components/MovieGrid";
import CategoryFilters from "@/components/CategoryFilters";
import CompareMovies from "@/components/CompareMovies";
import { Film, TrendingUp, Star } from "lucide-react";

const Index = () => {
  // Get a featured movie (first one for simplicity)
  const featuredMovie = movies[0];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get all unique categories from movies
  const categories = [...new Set(movies.map(movie => movie.category || ""))].filter(Boolean);
  
  // Filter movies based on selected category
  const filteredMovies = selectedCategory 
    ? getMoviesByCategory(selectedCategory)
    : movies;
  
  // Get trending movies
  const trendingMovies = getTrendingMovies();
  
  return (
    <div className="page-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title={featuredMovie.title}
          description={featuredMovie.overview}
          imageUrl={featuredMovie.backdrop_path}
          movieId={featuredMovie.id}
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-movie-accent" /> Trending Now
            </h2>
            <CompareMovies />
          </div>
          
          <MovieGrid movies={trendingMovies} />
          
          <div className="my-12">
            <CategoryFilters 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Film className="mr-2 h-5 w-5 text-movie-accent" /> 
                {selectedCategory ? `${selectedCategory} Movies` : "All Movies"}
              </h2>
              <div className="flex items-center gap-2 text-white">
                <span className="text-sm bg-white/10 px-2 py-1 rounded">{filteredMovies.length} movies</span>
              </div>
            </div>
            
            <MovieGrid movies={filteredMovies} />
          </div>
          
          <div className="my-16 glass-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to Movie Lens</h2>
            <p className="text-gray-200 mb-6">
              Discover the latest blockbusters, timeless classics, and hidden gems all in one place.
              Our curated collection brings you the best of cinema from around the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-movie-primary/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Extensive Library</h3>
                <p className="text-gray-300">Access thousands of movies across all genres and eras</p>
              </div>
              <div className="bg-movie-primary/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Personalized Recommendations</h3>
                <p className="text-gray-300">Discover new favorites based on your viewing history</p>
              </div>
              <div className="bg-movie-primary/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">HD Streaming</h3>
                <p className="text-gray-300">Enjoy crystal clear video and immersive audio quality</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
