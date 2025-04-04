
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Pages
import Index from "./pages/Index";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import CompareMoviesPage from "./pages/CompareMoviesPage";

// Set global CSS variables for theme
import { useEffect } from "react";

const ThemeSetup = () => {
  useEffect(() => {
    // Set CSS variables for theme switching
    document.documentElement.style.setProperty('--dark-background', 'url("https://m.media-amazon.com/images/I/A1hBTf09UkL._AC_UF1000,1000_QL80_.jpg")');
    document.documentElement.style.setProperty('--light-background', 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("https://m.media-amazon.com/images/I/A1hBTf09UkL._AC_UF1000,1000_QL80_.jpg")');
    
    // Apply initial theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    const isDark = 
      savedTheme === "dark" || 
      (savedTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.style.setProperty("--page-background", "var(--dark-background)");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.setProperty("--page-background", "var(--light-background)");
    }
  }, []);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <ThemeSetup />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/register" replace />} />
            <Route path="/home" element={<Index />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/compare" element={<CompareMoviesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
