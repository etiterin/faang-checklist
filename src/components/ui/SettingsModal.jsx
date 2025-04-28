export const SettingsModal = ({ isOpen, onClose, onReset, onDownload }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-bg-dark/80 flex items-center justify-center">
            <div className="bg-bg-card rounded-xl p-6 max-w-md w-full mx-4">
                <h2 className="text-xl font-semibold text-text-primary mb-4">Settings</h2>
                <div className="space-y-4">
                    <button
                        onClick={onReset}
                        className="w-full px-4 py-2 rounded-lg bg-danger/20 text-danger hover:bg-danger/30 transition-colors"
                    >
                        Reset Progress
                    </button>
                    <button
                        onClick={onDownload}
                        className="w-full px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                    >
                        Download Progress
                    </button>
                    <button
                        onClick={onClose}
                        className="w-full px-4 py-2 rounded-lg bg-bg-card-hover text-text-primary hover:bg-bg-card transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}; 