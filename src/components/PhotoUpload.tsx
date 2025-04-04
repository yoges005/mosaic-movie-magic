
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Camera } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PhotoUploadProps {
  initialPhotoURL?: string;
  onPhotoChange: (photoURL: string) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ initialPhotoURL, onPhotoChange }) => {
  const [photoURL, setPhotoURL] = useState<string | undefined>(initialPhotoURL);
  const [isHovering, setIsHovering] = useState(false);
  const { toast } = useToast();
  
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image under 5MB",
          variant: "destructive"
        });
        return;
      }
      
      // Create a URL for the image
      const objectUrl = URL.createObjectURL(file);
      setPhotoURL(objectUrl);
      onPhotoChange(objectUrl);
      
      toast({
        title: "Photo updated",
        description: "Your profile photo has been updated"
      });
    }
  };
  
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Avatar className="w-24 h-24 border-2 border-movie-secondary">
          {photoURL ? (
            <AvatarImage src={photoURL} alt="Profile" />
          ) : (
            <AvatarFallback className="bg-movie-secondary text-white text-2xl">
              {getInitials("User")}
            </AvatarFallback>
          )}
        </Avatar>
        
        <div
          className={`absolute inset-0 bg-black/50 rounded-full flex items-center justify-center transition-opacity ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <label htmlFor="photo-input" className="cursor-pointer">
            <Camera className="text-white w-8 h-8" />
          </label>
        </div>
        
        <input
          type="file"
          id="photo-input"
          accept="image/*"
          onChange={handlePhotoChange}
          className="hidden"
        />
      </div>
      
      <div className="text-center">
        <h3 className="text-white font-medium">Profile Photo</h3>
        <p className="text-gray-400 text-sm">Click to change</p>
      </div>
    </div>
  );
};

// Helper function to get initials from a name
const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map(part => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
};

export default PhotoUpload;
