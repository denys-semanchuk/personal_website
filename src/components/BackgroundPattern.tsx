export const BackgroundPattern = ({ className = '' }) => (
  <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
    <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
      </pattern>
      <rect width="100" height="100" fill="url(#grid)" />
    </svg>
  </div>
);