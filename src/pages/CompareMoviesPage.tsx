
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompareMovies from "@/components/CompareMovies";
import { Compare } from "lucide-react";

const CompareMoviesPage = () => {
  return (
    <div className="page-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Compare className="mr-3 h-6 w-6 text-movie-accent" /> Compare Movies
          </h1>
          
          <div className="glass-card p-8 mb-8">
            <p className="text-gray-200 mb-6">
              Select and compare up to 3 movies side by side to help you decide what to watch next.
              Compare ratings, runtime, cast, and more to make the best choice for your movie night.
            </p>
            
            <CompareMovies />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold text-white mb-4">How to Compare</h2>
              <ol className="space-y-3 text-gray-200 list-decimal pl-5">
                <li>Search for movies you want to compare using the search function</li>
                <li>Add up to 3 movies to your comparison</li>
                <li>View detailed information side by side</li>
                <li>Make your decision based on ratings, cast, runtime, and more</li>
              </ol>
            </div>
            
            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Why Compare?</h2>
              <ul className="space-y-3 text-gray-200 list-disc pl-5">
                <li>Save time deciding what to watch</li>
                <li>Make informed decisions based on your preferences</li>
                <li>Discover similarities between movies</li>
                <li>Find movies with your favorite actors or directors</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompareMoviesPage;
