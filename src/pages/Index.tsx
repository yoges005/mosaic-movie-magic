
import { movies } from "@/data/movies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MovieGrid from "@/components/MovieGrid";

const Index = () => {
  // Get a featured movie (first one for simplicity)
  const featuredMovie = movies[0];
  
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
          <MovieGrid movies={movies} title="Popular Movies" />
          
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
