
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="glass-card p-4 mb-6">
      <h2 className="text-white font-medium mb-3">Categories</h2>
      <ScrollArea className="max-w-full pb-2">
        <div className="flex space-x-2">
          <Badge
            className={`cursor-pointer ${
              selectedCategory === null
                ? "bg-movie-secondary text-white"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
            onClick={() => onCategorySelect(null)}
          >
            All
          </Badge>
          
          {categories.map((category) => (
            <Badge
              key={category}
              className={`cursor-pointer whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-movie-secondary text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryFilters;
