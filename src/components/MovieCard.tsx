
import { Link } from "react-router-dom";
import { Movie } from "@/types/movie";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon, Info, Group } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

interface MovieCardProps {
  movie: Movie;
  onCompareSelect?: (movie: Movie) => void;
  isCompareMode?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onCompareSelect, isCompareMode }) => {
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <>
      <Card className="movie-card h-full flex flex-col relative group">
        {isCompareMode && (
          <Button 
            className="absolute top-2 right-2 z-10 bg-movie-secondary opacity-0 group-hover:opacity-100 transition-opacity"
            size="sm"
            onClick={() => onCompareSelect && onCompareSelect(movie)}
          >
            Compare
          </Button>
        )}
        
        <CardContent className="p-0 relative">
          <Link to={`/movie/${movie.id}`}>
            <img 
              src={movie.poster_path} 
              alt={movie.title} 
              className="movie-poster w-full h-64 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1518877593221-1f28583780b4";
              }}
            />
          </Link>
          
          <Button 
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
            onClick={() => setShowInfo(true)}
          >
            <Info className="h-4 w-4" />
          </Button>
          
          <Link to={`/search?actor=${encodeURIComponent(movie.cast?.[0] || '')}`} className="absolute top-2 left-2">
            <Button 
              variant="ghost"
              size="icon"
              className="bg-black/50 hover:bg-black/70 text-white"
            >
              <Group className="h-4 w-4" />
            </Button>
          </Link>
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
          {movie.category && (
            <Badge className="bg-movie-accent/80 text-white mt-1">
              {movie.category}
            </Badge>
          )}
        </CardFooter>
      </Card>
      
      <Dialog open={showInfo} onOpenChange={setShowInfo}>
        <DialogContent className="bg-movie-primary border-movie-secondary text-white">
          <DialogHeader>
            <DialogTitle className="text-xl text-white">{movie.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <p><span className="font-semibold">Release Date:</span> {movie.release_date}</p>
            <p><span className="font-semibold">Runtime:</span> {movie.runtime || "Unknown"}</p>
            <p><span className="font-semibold">Director:</span> {movie.director || "Unknown"}</p>
            
            {movie.cast && movie.cast.length > 0 && (
              <div>
                <p className="font-semibold">Cast:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {movie.cast.map((actor, index) => (
                    <Badge key={index} variant="outline" className="bg-white/10 text-white">
                      {actor}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <p><span className="font-semibold">Language:</span> {movie.language || "Unknown"}</p>
            <p><span className="font-semibold">Country:</span> {movie.country || "Unknown"}</p>
            
            {movie.reviews && movie.reviews.length > 0 && (
              <div className="mt-3">
                <p className="font-semibold">Reviews:</p>
                {movie.reviews.map((review, index) => (
                  <div key={index} className="bg-white/10 p-2 rounded mt-2">
                    <div className="flex items-center gap-2">
                      {review.user.photoURL && (
                        <img src={review.user.photoURL} alt={review.user.name} className="w-8 h-8 rounded-full" />
                      )}
                      <div>
                        <p className="font-medium">{review.user.name}</p>
                        <div className="flex items-center">
                          <StarIcon className="w-3 h-3 text-yellow-400" />
                          <span className="ml-1 text-sm">{review.rating}/10</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MovieCard;
