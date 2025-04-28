export const CategoryNav = ({ categories, selectedCategory, onSelectCategory }) => (
    <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-bg-card-hover scrollbar-track-transparent">
        {categories.map(category => (
            <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-bg-card hover:bg-bg-card-hover text-text-secondary"
                }`}
            >
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
        ))}
    </div>
); 