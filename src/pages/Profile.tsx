
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Save, User, Film, Lock } from "lucide-react";
import PhotoUpload from "@/components/PhotoUpload";
import ThemeToggle from "@/components/ThemeToggle";

const Profile = () => {
  const { user, isAuthenticated, loading } = useAuth();
  
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Redirect to login if not authenticated
  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (loading) {
    return (
      <div className="page-background min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-white" />
      </div>
    );
  }
  
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false);
    }, 1000);
  };
  
  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false);
    }, 1000);
  };
  
  return (
    <div className="page-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-white mb-8 flex items-center">
            <User className="mr-3 h-6 w-6 text-movie-accent" /> My Profile
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="mb-6 bg-movie-primary/50 border border-white/10">
                  <TabsTrigger value="profile" className="data-[state=active]:bg-movie-secondary">
                    Profile Information
                  </TabsTrigger>
                  <TabsTrigger value="security" className="data-[state=active]:bg-movie-secondary">
                    Security
                  </TabsTrigger>
                  <TabsTrigger value="preferences" className="data-[state=active]:bg-movie-secondary">
                    Preferences
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile">
                  <Card className="glass-card border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col md:flex-row gap-8 mb-8">
                        <PhotoUpload 
                          initialPhotoURL={photoURL} 
                          onPhotoChange={setPhotoURL} 
                        />
                        
                        <div className="flex-1">
                          <form onSubmit={handleProfileUpdate} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="name" className="text-white">Full Name</Label>
                                <Input
                                  id="name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  className="bg-white/10 border-white/20 text-white"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email" className="text-white">Email</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="bg-white/10 border-white/20 text-white"
                                />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="bio" className="text-white">Bio</Label>
                              <textarea
                                id="bio"
                                rows={4}
                                className="w-full rounded-md bg-white/10 border-white/20 text-white p-2"
                                placeholder="Tell us about yourself and your movie preferences..."
                              />
                            </div>
                            
                            <Button 
                              type="submit" 
                              className="bg-movie-secondary hover:bg-movie-secondary/80"
                              disabled={isUpdating}
                            >
                              {isUpdating ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating
                                </>
                              ) : (
                                <>
                                  <Save className="mr-2 h-4 w-4" /> Save Changes
                                </>
                              )}
                            </Button>
                          </form>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="security">
                  <Card className="glass-card border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Change Password</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handlePasswordUpdate} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword" className="text-white">Current Password</Label>
                          <Input
                            id="currentPassword"
                            type="password"
                            className="bg-white/10 border-white/20 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword" className="text-white">New Password</Label>
                          <Input
                            id="newPassword"
                            type="password"
                            className="bg-white/10 border-white/20 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword" className="text-white">Confirm New Password</Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            className="bg-white/10 border-white/20 text-white"
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="bg-movie-secondary hover:bg-movie-secondary/80"
                          disabled={isUpdating}
                        >
                          {isUpdating ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating
                            </>
                          ) : (
                            <>
                              <Lock className="mr-2 h-4 w-4" /> Update Password
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="preferences">
                  <Card className="glass-card border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Viewing Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-white mb-4">Theme Settings</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-white">Switch theme:</span>
                          <ThemeToggle />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-white mb-4">Favorite Genres</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller"].map((genre) => (
                            <div key={genre} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`genre-${genre}`}
                                className="mr-2 h-4 w-4"
                              />
                              <Label htmlFor={`genre-${genre}`} className="text-white">
                                {genre}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        type="button" 
                        className="bg-movie-secondary hover:bg-movie-secondary/80"
                      >
                        <Save className="mr-2 h-4 w-4" /> Save Preferences
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Film className="mr-2 h-5 w-5 text-movie-accent" /> Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="glass-card p-3 bg-white/5">
                      <p className="text-white text-sm">You watched <span className="font-medium">Inception</span></p>
                      <p className="text-gray-400 text-xs">2 days ago</p>
                    </div>
                    <div className="glass-card p-3 bg-white/5">
                      <p className="text-white text-sm">You added <span className="font-medium">The Matrix</span> to favorites</p>
                      <p className="text-gray-400 text-xs">1 week ago</p>
                    </div>
                    <div className="glass-card p-3 bg-white/5">
                      <p className="text-white text-sm">You reviewed <span className="font-medium">Interstellar</span></p>
                      <p className="text-gray-400 text-xs">2 weeks ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
