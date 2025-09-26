export default function TemplatesLoading() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Header skeleton */}
      <div className="mb-8">
        <div className="h-8 bg-gray-200 rounded-lg w-64 mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded-lg w-96 animate-pulse"></div>
      </div>

      {/* Search bar skeleton */}
      <div className="mb-6">
        <div className="h-10 bg-gray-200 rounded-lg w-full max-w-md animate-pulse"></div>
      </div>

      {/* Template grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="bg-white border rounded-lg p-6 shadow-sm animate-pulse">
            <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
            <div className="flex gap-2 mb-4">
              <div className="h-5 bg-gray-200 rounded-full w-16"></div>
              <div className="h-5 bg-gray-200 rounded-full w-20"></div>
            </div>
            <div className="h-9 bg-gray-200 rounded w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}