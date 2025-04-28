import { useState } from "react";
import { ChevronIcon } from "../ui/ChevronIcon";

export const ProblemFilters = ({ filters, setFilters, sortBy, setSortBy, patterns, allTags, allCompanies }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-bg-card rounded-lg border border-border-color">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-4 py-2 flex justify-between items-center text-text-primary hover:bg-bg-card-hover transition-colors rounded-lg"
            >
                <span className="font-medium">Filters</span>
                <ChevronIcon open={isExpanded} />
            </button>
            {isExpanded && (
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-border-color">
                    <input
                        type="text"
                        placeholder="Search problems..."
                        value={filters.searchTerm}
                        onChange={(e) => setFilters(prev => ({...prev, searchTerm: e.target.value}))}
                        className="px-4 py-2 rounded-lg bg-bg-card border border-border-color focus:border-primary focus:outline-none text-text-primary placeholder-text-secondary"
                    />
                    <select
                        value={filters.difficulty}
                        onChange={(e) => setFilters(prev => ({...prev, difficulty: e.target.value}))}
                        className="px-4 py-2 rounded-lg bg-bg-card border border-border-color focus:border-primary focus:outline-none text-text-primary"
                    >
                        <option value="all">All Difficulties</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <select
                        value={filters.pattern}
                        onChange={(e) => setFilters(prev => ({...prev, pattern: e.target.value}))}
                        className="px-4 py-2 rounded-lg bg-bg-card border border-border-color focus:border-primary focus:outline-none text-text-primary"
                    >
                        <option value="all">All Patterns</option>
                        {patterns.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                    <select
                        value={filters.company}
                        onChange={(e) => setFilters(prev => ({...prev, company: e.target.value}))}
                        className="px-4 py-2 rounded-lg bg-bg-card border border-border-color focus:border-primary focus:outline-none text-text-primary"
                    >
                        <option value="all">All Companies</option>
                        {allCompanies.map(company => (
                            <option key={company} value={company}>{company}</option>
                        ))}
                    </select>
                    <select
                        value={filters.tag}
                        onChange={(e) => setFilters(prev => ({...prev, tag: e.target.value}))}
                        className="px-4 py-2 rounded-lg bg-bg-card border border-border-color focus:border-primary focus:outline-none text-text-primary"
                    >
                        <option value="all">All Tags</option>
                        {allTags.map(tag => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-bg-card border border-border-color focus:border-primary focus:outline-none text-text-primary"
                    >
                        <option value="frequency">Sort by Frequency</option>
                        <option value="difficulty">Sort by Difficulty</option>
                        <option value="title">Sort by Title</option>
                    </select>
                </div>
            )}
        </div>
    );
}; 