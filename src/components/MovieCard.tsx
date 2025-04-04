
import { Link } from "react-router-dom";
import { Movie } from "@/types/movie";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Card className="movie-card h-full flex flex-col">
        <CardContent className="p-0">
          <img 
            src={movie.poster_path} 
            alt={movie.title} 
            className="movie-poster w-full h-64 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1518877593221-1f28583780b4";
            }}
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 p-3">
          <div className="flex justify-between w-full">
            <h3 className="font-semibold text-white truncate">{movie.title}</h3>
            <div className="flex items-center">
              <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="text-white text-sm">{movie.vote_average}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {movie.genres.slice(0, 2).map((genre, index) => (
              <Badge key={index} variant="outline" className="bg-movie-secondary/20 text-white border-movie-secondary/30">
                {genre}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default MovieCard;
