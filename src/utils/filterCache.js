// Cache for filtered results
const filterCache = new Map();

export const getCachedFilteredProblems = (problems, filters, sortBy) => {
    const cacheKey = JSON.stringify({ filters, sortBy });
    
    if (filterCache.has(cacheKey)) {
        return filterCache.get(cacheKey);
    }

    const filtered = problems.filter(problem => {
        if (filters.searchTerm && !problem.title.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
            return false;
        }
        if (filters.difficulty !== 'all' && problem.difficulty.toLowerCase() !== filters.difficulty) {
            return false;
        }
        if (filters.pattern !== 'all' && problem.pattern !== filters.pattern) {
            return false;
        }
        if (filters.company !== 'all' && !problem.companies.includes(filters.company)) {
            return false;
        }
        if (filters.tag !== 'all' && !problem.tags.includes(filters.tag)) {
            return false;
        }
        return true;
    });

    const sorted = [...filtered].sort((a, b) => {
        switch (sortBy) {
            case 'frequency':
                return b.frequency - a.frequency;
            case 'difficulty':
                return a.difficulty === 'Easy' ? -1 : a.difficulty === 'Hard' ? 1 : 0;
            case 'title':
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });

    filterCache.set(cacheKey, sorted);
    return sorted;
}; 