export const Header = ({ progress, onSettingsClick }) => (
    <header className="flex justify-between items-center py-2">
        <div>
            <h1 className="text-2xl font-bold text-primary">FAANG Interview Checklist</h1>
            <p className="text-sm text-text-secondary">Track your progress through essential problems</p>
        </div>
        <div className="flex items-center gap-4">
            <div className="text-right">
                <div className="text-sm text-text-secondary">Progress</div>
                <div className="font-semibold text-primary">{progress.completed}/{progress.total} ({progress.percentage}%)</div>
            </div>
            <button
                onClick={onSettingsClick}
                className="p-2 rounded-lg bg-bg-card hover:bg-bg-card-hover transition-colors"
                aria-label="Settings"
            >
                ⚙️
            </button>
        </div>
    </header>
); 