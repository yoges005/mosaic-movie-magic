
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SunMoon } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

type Theme = "dark" | "light" | "system";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  
  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);
  
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const isDark = 
      newTheme === "dark" || 
      (newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    if (isDark) {
      root.classList.add("dark");
      document.body.style.setProperty("--page-background", "var(--dark-background)");
    } else {
      root.classList.remove("dark");
      document.body.style.setProperty("--page-background", "var(--light-background)");
    }
  };
  
  const setActiveTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <SunMoon className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-movie-primary border-movie-secondary">
        <DropdownMenuItem 
          onClick={() => setActiveTheme("light")}
          className={`cursor-pointer text-white hover:bg-white/10 ${theme === "light" ? "bg-movie-secondary/40" : ""}`}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setActiveTheme("dark")}
          className={`cursor-pointer text-white hover:bg-white/10 ${theme === "dark" ? "bg-movie-secondary/40" : ""}`}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setActiveTheme("system")}
          className={`cursor-pointer text-white hover:bg-white/10 ${theme === "system" ? "bg-movie-secondary/40" : ""}`}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
