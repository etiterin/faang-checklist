import { useState, useEffect, useMemo } from "react";
import { problems, filterProblems, sortProblems } from "../data/problems";
import { patterns, getAllTags, getAllCompanies } from "../data/patterns";
import { getCachedFilteredProblems } from "../utils/filterCache";
import { Header } from "./checklist/Header";
import { ProblemFilters } from "./checklist/ProblemFilters";
import { CategoryNav } from "./checklist/CategoryNav";
import { ProblemCard } from "./ui/ProblemCard";
import { SettingsModal } from "./ui/SettingsModal";

const COOKIE_KEY = "faang-progress";
const ONE_YEAR = 60 * 60 * 24 * 365;

function readCookie() {
    const match = document.cookie.split("; ").find(row => row.startsWith(COOKIE_KEY + "="));
    if (!match) return {};
    try {
        return JSON.parse(decodeURIComponent(match.split("=")[1]));
    } catch {
        return {};
    }
}

function writeCookie(data) {
    document.cookie = `${COOKIE_KEY}=${encodeURIComponent(JSON.stringify(data))}; path=/; max-age=${ONE_YEAR}`;
}

export default function FAANGChecklist() {
    const [tab, setTab] = useState("problems");
    const [checked, setChecked] = useState(() => readCookie());
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filters, setFilters] = useState({
        searchTerm: "",
        difficulty: "all",
        pattern: "all",
        company: "all",
        tag: "all"
    });
    const [sortBy, setSortBy] = useState("frequency");

    useEffect(() => {
        writeCookie(checked);
    }, [checked]);

    const toggle = (id) => setChecked((prev) => ({...prev, [id]: !prev[id]}));
    const reset = () => {
        setChecked({});
        writeCookie({});
    };
    const download = () => {
        const blob = new Blob([JSON.stringify(checked, null, 2)], {type: "application/json"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "faang-progress.json";
        a.click();
        URL.revokeObjectURL(url);
    };

    const filteredProblems = useMemo(() => 
        getCachedFilteredProblems(problems, filters, sortBy),
        [filters, sortBy]
    );

    const categories = useMemo(() => 
        ["all", ...new Set(problems.map(p => p.category))],
        []
    );

    const problemsByCategory = useMemo(() => 
        selectedCategory === "all" 
            ? filteredProblems 
            : filteredProblems.filter(p => p.category === selectedCategory),
        [filteredProblems, selectedCategory]
    );

    const progress = useMemo(() => ({
        total: problems.length,
        completed: Object.values(checked).filter(Boolean).length,
        percentage: Math.round((Object.values(checked).filter(Boolean).length / problems.length) * 100)
    }), [checked]);

    const allTags = useMemo(() => getAllTags(problems), []);
    const allCompanies = useMemo(() => getAllCompanies(problems), []);

    return (
        <div className="min-h-screen bg-bg-dark text-text-primary flex flex-col">
            <div className="w-full max-w-6xl mx-auto px-4 py-2">
                <Header progress={progress} onSettingsClick={() => setSettingsOpen(true)} />
            </div>

            <div className="flex-1 w-full max-w-6xl mx-auto px-4">
                <nav className="flex gap-2 justify-center mb-4">
                    {['problems', 'patterns'].map((id) => (
                        <button
                            key={id}
                            onClick={() => setTab(id)}
                            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                tab === id
                                    ? "bg-primary text-white hover:bg-primary-hover"
                                    : "bg-bg-card hover:bg-bg-card-hover text-text-secondary"
                            }`}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </button>
                    ))}
                </nav>

                {tab === "problems" && (
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <ProblemFilters
                                filters={filters}
                                setFilters={setFilters}
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                                patterns={patterns}
                                allTags={allTags}
                                allCompanies={allCompanies}
                            />
                            <CategoryNav
                                categories={categories}
                                selectedCategory={selectedCategory}
                                onSelectCategory={setSelectedCategory}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {problemsByCategory.map(problem => (
                                <ProblemCard
                                    key={problem.id}
                                    problem={problem}
                                    checked={checked[problem.id]}
                                    onToggle={toggle}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {tab === "patterns" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {patterns.map(pattern => (
                            <div key={pattern.id} className="rounded-xl bg-bg-card border border-border-color p-4">
                                <h3 className="text-lg font-semibold text-text-primary">{pattern.name}</h3>
                                <p className="mt-2 text-text-secondary">{pattern.description}</p>
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-text-secondary mb-2">Key Points:</h4>
                                        <ul className="space-y-1">
                                            {pattern.keyPoints.map((point, index) => (
                                                <li key={index} className="text-text-primary">• {point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-text-secondary mb-2">Examples:</h4>
                                        <ul className="space-y-1">
                                            {pattern.examples.map((example, index) => (
                                                <li key={index} className="text-text-primary">• {example}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-sm font-medium text-text-secondary mb-2">Complexity:</h4>
                                    <div className="text-text-primary">
                                        Time: {pattern.timeComplexity} | Space: {pattern.spaceComplexity}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-sm font-medium text-text-secondary mb-2">Related Problems:</h4>
                                    <ul className="space-y-1">
                                        {pattern.problems.map(problem => (
                                            <li key={problem} className="text-text-primary">
                                                {problem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <SettingsModal
                isOpen={settingsOpen}
                onClose={() => setSettingsOpen(false)}
                onReset={reset}
                onDownload={download}
            />
        </div>
    );
}
