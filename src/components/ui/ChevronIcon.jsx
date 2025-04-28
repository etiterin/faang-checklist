export const ChevronIcon = ({ open }) => (
    <svg
        className={`h-5 w-5 transform transition-transform duration-200 ${open ? "rotate-90" : "rotate-0"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
    </svg>
); 