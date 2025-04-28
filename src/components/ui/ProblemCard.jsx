export const ProblemCard = ({ problem, checked, onToggle }) => (
    <div className="flex items-center gap-3 p-4 rounded-lg bg-bg-card border border-border-color hover:bg-bg-card-hover transition-colors">
        <input
            type="checkbox"
            checked={checked || false}
            onChange={() => onToggle(problem.id)}
            className="w-5 h-5 rounded border-border-color text-primary focus:ring-primary"
        />
        <div className="flex-1">
            <a
                href={problem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-primary transition-colors"
            >
                {problem.title}
            </a>
            <div className="flex flex-wrap gap-2 mt-1">
                <span className={`text-xs px-2 py-1 rounded ${
                    problem.difficulty === 'Easy' ? 'bg-success/20 text-success' :
                    problem.difficulty === 'Medium' ? 'bg-warning/20 text-warning' :
                    'bg-danger/20 text-danger'
                }`}>
                    {problem.difficulty}
                </span>
                <span className="text-xs px-2 py-1 rounded bg-accent/20 text-accent">
                    {problem.pattern}
                </span>
                {problem.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                        {tag}
                    </span>
                ))}
                {problem.companies.map(company => (
                    <span key={company} className="text-xs px-2 py-1 rounded bg-bg-card-hover text-text-secondary">
                        {company}
                    </span>
                ))}
            </div>
            <div className="mt-2 text-sm text-text-secondary">
                <div>Time: {problem.timeComplexity} | Space: {problem.spaceComplexity}</div>
                <div className="mt-1">{problem.notes}</div>
            </div>
        </div>
    </div>
); 