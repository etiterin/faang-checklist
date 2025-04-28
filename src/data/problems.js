export const problems = [
    // Arrays / HashMap
    {
        id: "two-sum",
        title: "Two Sum",
        url: "https://leetcode.com/problems/two-sum/",
        category: "Arrays / HashMap",
        difficulty: "Easy",
        pattern: "HashMap",
        tags: ["array", "hash-table"],
        companies: ["Amazon", "Google", "Microsoft", "Apple", "Meta"],
        frequency: 5,
        notes: "Most common first interview question. Focus on hash table solution.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },
    {
        id: "best-time-to-buy-and-sell-stock",
        title: "Best Time to Buy and Sell Stock",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        category: "Arrays / HashMap",
        difficulty: "Easy",
        pattern: "Dynamic Programming",
        tags: ["array", "dynamic-programming"],
        companies: ["Amazon", "Google", "Microsoft", "Apple", "Meta"],
        frequency: 4,
        notes: "Keep track of minimum price seen so far and maximum profit possible.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    {
        id: "product-of-array-except-self",
        title: "Product of Array Except Self",
        url: "https://leetcode.com/problems/product-of-array-except-self/",
        category: "Arrays / HashMap",
        difficulty: "Medium",
        pattern: "Arrays",
        tags: ["array", "prefix-sum"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Use prefix and suffix products. Can be done with O(1) space.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    {
        id: "group-anagrams",
        title: "Group Anagrams",
        url: "https://leetcode.com/problems/group-anagrams/",
        category: "Arrays / HashMap",
        difficulty: "Medium",
        pattern: "HashMap",
        tags: ["string", "hash-table", "sorting"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Sort each string and use as key in hash map.",
        timeComplexity: "O(n × k log k)",
        spaceComplexity: "O(n × k)"
    },
    {
        id: "top-k-frequent-elements",
        title: "Top K Frequent Elements",
        url: "https://leetcode.com/problems/top-k-frequent-elements/",
        category: "Arrays / HashMap",
        difficulty: "Medium",
        pattern: "HashMap",
        tags: ["array", "hash-table", "heap", "sorting"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Use hash map to count frequencies, then heap to get top k.",
        timeComplexity: "O(n log k)",
        spaceComplexity: "O(n)"
    },
    
    // Stack
    {
        id: "valid-parentheses",
        title: "Valid Parentheses",
        url: "https://leetcode.com/problems/valid-parentheses/",
        category: "Stack",
        difficulty: "Easy",
        pattern: "Stack",
        tags: ["stack", "string"],
        companies: ["Amazon", "Google", "Microsoft"],
        frequency: 4,
        notes: "Classic stack problem. Watch for edge cases with empty stack.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },
    {
        id: "min-stack",
        title: "Min Stack",
        url: "https://leetcode.com/problems/min-stack/",
        category: "Stack",
        difficulty: "Medium",
        pattern: "Stack",
        tags: ["stack", "design"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 3,
        notes: "Use two stacks or store pairs of (value, min).",
        timeComplexity: "O(1)",
        spaceComplexity: "O(n)"
    },
    {
        id: "evaluate-reverse-polish-notation",
        title: "Evaluate Reverse Polish Notation",
        url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        category: "Stack",
        difficulty: "Medium",
        pattern: "Stack",
        tags: ["stack", "math"],
        companies: ["Amazon", "Google", "Microsoft"],
        frequency: 3,
        notes: "Use stack to evaluate postfix expression.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },
    {
        id: "daily-temperatures",
        title: "Daily Temperatures",
        url: "https://leetcode.com/problems/daily-temperatures/",
        category: "Stack",
        difficulty: "Medium",
        pattern: "Stack",
        tags: ["stack", "monotonic-stack"],
        companies: ["Amazon", "Google", "Microsoft"],
        frequency: 3,
        notes: "Use monotonic stack to find next greater element.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },
    {
        id: "largest-rectangle-in-histogram",
        title: "Largest Rectangle in Histogram",
        url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        category: "Stack",
        difficulty: "Hard",
        pattern: "Stack",
        tags: ["stack", "monotonic-stack", "array"],
        companies: ["Amazon", "Google", "Microsoft"],
        frequency: 4,
        notes: "Use monotonic stack to find boundaries for each bar.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },
    
    // Intervals
    {
        id: "merge-intervals",
        title: "Merge Intervals",
        url: "https://leetcode.com/problems/merge-intervals/",
        category: "Intervals",
        difficulty: "Medium",
        pattern: "Intervals",
        tags: ["array", "sorting", "intervals"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Sort by start time first. Watch for overlapping intervals.",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)"
    },
    {
        id: "insert-interval",
        title: "Insert Interval",
        url: "https://leetcode.com/problems/insert-interval/",
        category: "Intervals",
        difficulty: "Medium",
        pattern: "Intervals",
        tags: ["array", "sorting", "intervals"],
        companies: ["Amazon", "Google", "Microsoft"],
        frequency: 3,
        notes: "Find where to insert and merge overlapping intervals.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },
    {
        id: "meeting-rooms",
        title: "Meeting Rooms",
        url: "https://leetcode.com/problems/meeting-rooms/",
        category: "Intervals",
        difficulty: "Easy",
        pattern: "Intervals",
        tags: ["array", "sorting", "intervals"],
        companies: ["Amazon", "Google", "Microsoft"],
        frequency: 3,
        notes: "Sort by start time and check for overlaps.",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(1)"
    },
    {
        id: "meeting-rooms-ii",
        title: "Meeting Rooms II",
        url: "https://leetcode.com/problems/meeting-rooms-ii/",
        category: "Intervals",
        difficulty: "Medium",
        pattern: "Intervals",
        tags: ["array", "sorting", "intervals", "heap"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Use min-heap to track end times of ongoing meetings.",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)"
    },
    {
        id: "non-overlapping-intervals",
        title: "Non-overlapping Intervals",
        url: "https://leetcode.com/problems/non-overlapping-intervals/",
        category: "Intervals",
        difficulty: "Medium",
        pattern: "Intervals",
        tags: ["array", "sorting", "intervals", "greedy"],
        companies: ["Amazon", "Google", "Microsoft"],
        frequency: 3,
        notes: "Sort by end time and use greedy approach.",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(1)"
    },
    
    // Trees
    {
        id: "binary-tree-level-order",
        title: "Binary Tree Level Order Traversal",
        url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        category: "Trees",
        difficulty: "Medium",
        pattern: "BFS",
        tags: ["tree", "breadth-first-search", "binary-tree"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Use queue for BFS. Remember to track level size.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },
    {
        id: "maximum-depth-of-binary-tree",
        title: "Maximum Depth of Binary Tree",
        url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        category: "Trees",
        difficulty: "Easy",
        pattern: "DFS",
        tags: ["tree", "depth-first-search", "binary-tree"],
        companies: ["Amazon", "Google", "Microsoft", "Apple"],
        frequency: 3,
        notes: "Recursive DFS or iterative with stack.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(h)"
    },
    {
        id: "validate-binary-search-tree",
        title: "Validate Binary Search Tree",
        url: "https://leetcode.com/problems/validate-binary-search-tree/",
        category: "Trees",
        difficulty: "Medium",
        pattern: "DFS",
        tags: ["tree", "depth-first-search", "binary-search-tree"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Use inorder traversal or pass min/max bounds.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(h)"
    },
    {
        id: "lowest-common-ancestor",
        title: "Lowest Common Ancestor of a Binary Tree",
        url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        category: "Trees",
        difficulty: "Medium",
        pattern: "DFS",
        tags: ["tree", "depth-first-search", "binary-tree"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Recursive DFS with path tracking or bottom-up approach.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(h)"
    },
    {
        id: "binary-tree-maximum-path-sum",
        title: "Binary Tree Maximum Path Sum",
        url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        category: "Trees",
        difficulty: "Hard",
        pattern: "DFS",
        tags: ["tree", "depth-first-search", "dynamic-programming"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Use DFS to find max path through each node.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(h)"
    },
    
    // Graphs
    {
        id: "number-of-islands",
        title: "Number of Islands",
        url: "https://leetcode.com/problems/number-of-islands/",
        category: "Graphs",
        difficulty: "Medium",
        pattern: "DFS",
        tags: ["array", "depth-first-search", "matrix"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 5,
        notes: "DFS or BFS both work. Remember to mark visited cells.",
        timeComplexity: "O(m × n)",
        spaceComplexity: "O(m × n)"
    },
    {
        id: "clone-graph",
        title: "Clone Graph",
        url: "https://leetcode.com/problems/clone-graph/",
        category: "Graphs",
        difficulty: "Medium",
        pattern: "DFS",
        tags: ["graph", "depth-first-search", "hash-table"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 3,
        notes: "Use hash map to track cloned nodes and DFS to build connections.",
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)"
    },
    {
        id: "course-schedule",
        title: "Course Schedule",
        url: "https://leetcode.com/problems/course-schedule/",
        category: "Graphs",
        difficulty: "Medium",
        pattern: "DFS",
        tags: ["graph", "depth-first-search", "topological-sort"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Detect cycles using DFS or use Kahn's algorithm for topological sort.",
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V + E)"
    },
    {
        id: "word-ladder",
        title: "Word Ladder",
        url: "https://leetcode.com/problems/word-ladder/",
        category: "Graphs",
        difficulty: "Hard",
        pattern: "BFS",
        tags: ["graph", "breadth-first-search", "string"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Use BFS to find shortest path. Consider bidirectional BFS for optimization.",
        timeComplexity: "O(N × M²)",
        spaceComplexity: "O(N × M)"
    },
    {
        id: "alien-dictionary",
        title: "Alien Dictionary",
        url: "https://leetcode.com/problems/alien-dictionary/",
        category: "Graphs",
        difficulty: "Hard",
        pattern: "DFS",
        tags: ["graph", "depth-first-search", "topological-sort", "string"],
        companies: ["Amazon", "Google", "Microsoft"],
        frequency: 3,
        notes: "Build graph from word order, then use topological sort.",
        timeComplexity: "O(C)",
        spaceComplexity: "O(1)"
    },
    
    // Strings
    {
        id: "longest-substring",
        title: "Longest Substring Without Repeating Characters",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        category: "Strings",
        difficulty: "Medium",
        pattern: "Sliding Window",
        tags: ["string", "sliding-window", "hash-table"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 5,
        notes: "Use sliding window with hash map. Watch for window shrinking.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(min(m, n))"
    },
    {
        id: "longest-palindromic-substring",
        title: "Longest Palindromic Substring",
        url: "https://leetcode.com/problems/longest-palindromic-substring/",
        category: "Strings",
        difficulty: "Medium",
        pattern: "Dynamic Programming",
        tags: ["string", "dynamic-programming"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Expand around center or use DP approach.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    },
    {
        id: "valid-anagram",
        title: "Valid Anagram",
        url: "https://leetcode.com/problems/valid-anagram/",
        category: "Strings",
        difficulty: "Easy",
        pattern: "HashMap",
        tags: ["string", "hash-table", "sorting"],
        companies: ["Amazon", "Google", "Microsoft", "Apple"],
        frequency: 3,
        notes: "Count characters or sort strings.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    {
        id: "longest-common-prefix",
        title: "Longest Common Prefix",
        url: "https://leetcode.com/problems/longest-common-prefix/",
        category: "Strings",
        difficulty: "Easy",
        pattern: "Strings",
        tags: ["string", "trie"],
        companies: ["Amazon", "Google", "Microsoft"],
        frequency: 3,
        notes: "Horizontal scanning or vertical scanning approach.",
        timeComplexity: "O(S)",
        spaceComplexity: "O(1)"
    },
    {
        id: "word-break",
        title: "Word Break",
        url: "https://leetcode.com/problems/word-break/",
        category: "Strings",
        difficulty: "Medium",
        pattern: "Dynamic Programming",
        tags: ["string", "dynamic-programming", "trie"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Use DP to track if substring can be broken into words.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(n)"
    },
    
    // Arrays
    {
        id: "container-with-most-water",
        title: "Container With Most Water",
        url: "https://leetcode.com/problems/container-with-most-water/",
        category: "Arrays",
        difficulty: "Medium",
        pattern: "Two Pointers",
        tags: ["array", "two-pointers", "greedy"],
        companies: ["Amazon", "Google", "Microsoft"],
        frequency: 3,
        notes: "Two pointers from ends. Move pointer with smaller height.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    {
        id: "3sum",
        title: "3Sum",
        url: "https://leetcode.com/problems/3sum/",
        category: "Arrays",
        difficulty: "Medium",
        pattern: "Two Pointers",
        tags: ["array", "two-pointers", "sorting"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Sort first. Use two pointers. Watch for duplicates.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(n)"
    },
    {
        id: "trapping-rain-water",
        title: "Trapping Rain Water",
        url: "https://leetcode.com/problems/trapping-rain-water/",
        category: "Arrays",
        difficulty: "Hard",
        pattern: "Two Pointers",
        tags: ["array", "two-pointers", "dynamic-programming"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Use two pointers or DP approach.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },
    {
        id: "find-first-and-last-position",
        title: "Find First and Last Position of Element in Sorted Array",
        url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        category: "Arrays",
        difficulty: "Medium",
        pattern: "Binary Search",
        tags: ["array", "binary-search"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 4,
        notes: "Use binary search twice to find first and last occurrence.",
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },
    {
        id: "rotate-array",
        title: "Rotate Array",
        url: "https://leetcode.com/problems/rotate-array/",
        category: "Arrays",
        difficulty: "Medium",
        pattern: "Arrays",
        tags: ["array", "math"],
        companies: ["Amazon", "Google", "Microsoft", "Meta"],
        frequency: 3,
        notes: "Reverse entire array, then reverse parts.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    }
];

// Helper functions for filtering and sorting
export const filterProblems = (problems, filters) => {
    return problems.filter(problem => {
        if (filters.searchTerm) {
            const searchLower = filters.searchTerm.toLowerCase();
            const matchesSearch = 
                problem.title.toLowerCase().includes(searchLower) ||
                problem.category.toLowerCase().includes(searchLower) ||
                problem.tags.some(tag => tag.toLowerCase().includes(searchLower));
            if (!matchesSearch) return false;
        }
        
        if (filters.difficulty && filters.difficulty !== 'all') {
            if (problem.difficulty.toLowerCase() !== filters.difficulty) return false;
        }
        
        if (filters.pattern && filters.pattern !== 'all') {
            if (problem.pattern.toLowerCase() !== filters.pattern.toLowerCase()) return false;
        }
        
        if (filters.company && filters.company !== 'all') {
            if (!problem.companies.includes(filters.company)) return false;
        }
        
        if (filters.tag && filters.tag !== 'all') {
            if (!problem.tags.includes(filters.tag)) return false;
        }
        
        return true;
    });
};

export const sortProblems = (problems, sortBy) => {
    return [...problems].sort((a, b) => {
        switch (sortBy) {
            case 'frequency':
                return b.frequency - a.frequency;
            case 'difficulty':
                const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
                return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
            case 'title':
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });
}; 