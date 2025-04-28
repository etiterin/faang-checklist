export const patterns = [
    {
        id: "sliding-window",
        name: "Sliding Window",
        description: "Maintain a window over a subsection of the data structure. Useful for substring/subarray problems.",
        problems: ["Longest Substring Without Repeating Characters"],
        keyPoints: [
            "Window size can be fixed or variable",
            "Use two pointers to maintain window boundaries",
            "Often used with hash maps for tracking window contents",
            "Good for substring/subarray problems"
        ],
        timeComplexity: "Usually O(n)",
        spaceComplexity: "Usually O(k) where k is window size",
        examples: [
            "Finding longest substring with unique characters",
            "Finding minimum window containing all elements",
            "Finding maximum sum subarray of size k"
        ],
        color: "text-blue-500"
    },
    {
        id: "two-pointers",
        name: "Two Pointers",
        description: "Use two pointers moving at different speeds or from different ends to find a relation.",
        problems: ["Container With Most Water", "3Sum"],
        keyPoints: [
            "Pointers can move in same or opposite directions",
            "Often used with sorted arrays",
            "Can be used to find pairs or triplets",
            "Good for space optimization"
        ],
        timeComplexity: "Usually O(n)",
        spaceComplexity: "Usually O(1)",
        examples: [
            "Finding pair sum in sorted array",
            "Finding container with most water",
            "Finding three numbers that sum to target"
        ],
        color: "text-purple-500"
    },
    {
        id: "bfs",
        name: "BFS (Breadth-First Search)",
        description: "Explore all nodes at the present depth before moving to nodes at the next depth level.",
        problems: ["Binary Tree Level Order Traversal"],
        keyPoints: [
            "Uses queue data structure",
            "Good for level-wise traversal",
            "Guarantees shortest path in unweighted graphs",
            "Memory intensive for wide trees"
        ],
        timeComplexity: "O(V + E) where V is vertices and E is edges",
        spaceComplexity: "O(V) in worst case",
        examples: [
            "Level order traversal of binary tree",
            "Shortest path in unweighted graph",
            "Word ladder problem"
        ],
        color: "text-green-500"
    },
    {
        id: "dfs",
        name: "DFS (Depth-First Search)",
        description: "Explore as far as possible along each branch before backtracking.",
        problems: ["Number of Islands"],
        keyPoints: [
            "Uses stack (recursion or explicit)",
            "Good for path finding and backtracking",
            "Memory efficient for deep trees",
            "Can be used for cycle detection"
        ],
        timeComplexity: "O(V + E) where V is vertices and E is edges",
        spaceComplexity: "O(H) where H is height of recursion tree",
        examples: [
            "Finding connected components",
            "Path finding in maze",
            "Topological sorting"
        ],
        color: "text-teal-500"
    },
    {
        id: "stack",
        name: "Stack",
        description: "Use a stack to keep track of elements in a last-in-first-out manner.",
        problems: ["Valid Parentheses"],
        keyPoints: [
            "LIFO (Last In First Out) principle",
            "Good for matching pairs",
            "Useful for nested structures",
            "Can be used for reversing order"
        ],
        timeComplexity: "Usually O(n)",
        spaceComplexity: "Usually O(n)",
        examples: [
            "Matching parentheses",
            "Next greater element",
            "Min stack implementation"
        ],
        color: "text-orange-500"
    },
    {
        id: "hashmap",
        name: "HashMap",
        description: "Use a hash map to store and retrieve values in O(1) time.",
        problems: ["Two Sum"],
        keyPoints: [
            "O(1) average case lookup",
            "Good for frequency counting",
            "Useful for pair finding",
            "Can trade space for time"
        ],
        timeComplexity: "Usually O(n)",
        spaceComplexity: "Usually O(n)",
        examples: [
            "Finding pairs with given sum",
            "Frequency counting",
            "Grouping similar elements"
        ],
        color: "text-red-500"
    },
    {
        id: "dynamic-programming",
        name: "Dynamic Programming",
        description: "Solve complex problems by breaking them down into simpler subproblems.",
        problems: ["Best Time to Buy and Sell Stock"],
        keyPoints: [
            "Optimal substructure",
            "Overlapping subproblems",
            "Memoization or tabulation",
            "Often used for optimization problems"
        ],
        timeComplexity: "Varies by problem",
        spaceComplexity: "Varies by problem",
        examples: [
            "Fibonacci numbers",
            "Knapsack problem",
            "Longest common subsequence"
        ],
        color: "text-indigo-500"
    },
    {
        id: "binary-search",
        name: "Binary Search",
        description: "Search a sorted array by repeatedly dividing the search interval in half.",
        problems: ["Find First and Last Position of Element in Sorted Array"],
        keyPoints: [
            "Requires sorted array",
            "O(log n) time complexity",
            "Can be used for range queries",
            "Can be modified for rotated arrays"
        ],
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)",
        examples: [
            "Finding element in sorted array",
            "Finding first/last occurrence",
            "Finding peak element"
        ],
        color: "text-yellow-500"
    },
    {
        id: "greedy",
        name: "Greedy",
        description: "Make locally optimal choices at each step to find global optimum.",
        problems: ["Non-overlapping Intervals"],
        keyPoints: [
            "Makes locally optimal choice",
            "Doesn't guarantee global optimum",
            "Often used for scheduling",
            "Usually requires proof of correctness"
        ],
        timeComplexity: "Varies by problem",
        spaceComplexity: "Varies by problem",
        examples: [
            "Activity selection",
            "Huffman coding",
            "Fractional knapsack"
        ],
        color: "text-pink-500"
    }
];

// Helper function to get all unique tags from problems
export const getAllTags = (problems) => {
    const tags = new Set();
    problems.forEach(problem => {
        problem.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
};

// Helper function to get all companies from problems
export const getAllCompanies = (problems) => {
    const companies = new Set();
    problems.forEach(problem => {
        problem.companies.forEach(company => companies.add(company));
    });
    return Array.from(companies).sort();
}; 