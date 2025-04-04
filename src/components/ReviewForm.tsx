
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StarIcon } from "lucide-react";
import { Movie, Review } from "@/types/movie";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface ReviewFormProps {
  movieId: number;
  onReviewSubmit: (review: Review) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ movieId, onReviewSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hoveredRating, setHoveredRating] = useState(0);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const { toast } = useToast();
  const { user } = useAuth();
  
  const handleRatingClick = (value: number) => {
    setRating(value);
  };
  
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhoto(file);
      
      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rating) {
      toast({
        title: "Rating Required",
        description: "Please select a rating before submitting",
        variant: "destructive"
      });
      return;
    }
    
    if (!comment.trim()) {
      toast({
        title: "Comment Required",
        description: "Please write a comment before submitting",
        variant: "destructive"
      });
      return;
    }
    
    // Create the review object
    const newReview: Review = {
      id: Date.now(),
      user: {
        name: user?.name || "Anonymous User",
        photoURL: photoPreview || user?.photoURL
      },
      rating,
      comment,
      date: new Date().toISOString().split('T')[0]
    };
    
    onReviewSubmit(newReview);
    
    // Reset form
    setRating(0);
    setComment("");
    setPhoto(null);
    setPhotoPreview(null);
    
    toast({
      title: "Review Submitted",
      description: "Thank you for your review!",
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="glass-card p-5 space-y-4">
      <h3 className="text-xl font-medium text-white">Write a Review</h3>
      
      <div className="flex items-center gap-1">
        <span className="text-white mr-2">Rating:</span>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => handleRatingClick(value)}
            onMouseEnter={() => setHoveredRating(value)}
            onMouseLeave={() => setHoveredRating(0)}
            className="focus:outline-none"
          >
            <StarIcon
              className={`w-5 h-5 ${
                value <= (hoveredRating || rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-400"
              }`}
            />
          </button>
        ))}
        <span className="text-white ml-2">
          {rating > 0 ? `${rating}/10` : ""}
        </span>
      </div>
      
      <div>
        <label className="block text-white mb-1">Your Review</label>
        <Textarea
          placeholder="Share your thoughts about this movie..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="bg-white/10 border-white/20 text-white"
          rows={4}
        />
      </div>
      
      <div>
        <label className="block text-white mb-1">Add Photo (optional)</label>
        <div className="flex items-center gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
            id="photo-upload"
          />
          <label
            htmlFor="photo-upload"
            className="cursor-pointer bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-md px-4 py-2"
          >
            Choose Photo
          </label>
          {photoPreview && (
            <div className="relative">
              <img
                src={photoPreview}
                alt="Preview"
                className="w-16 h-16 object-cover rounded"
              />
              <button
                type="button"
                onClick={() => {
                  setPhoto(null);
                  setPhotoPreview(null);
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          )}
        </div>
      </div>
      
      <Button
        type="submit"
        className="bg-movie-secondary hover:bg-movie-secondary/80"
      >
        Submit Review
      </Button>
    </form>
  );
};

export default ReviewForm;
