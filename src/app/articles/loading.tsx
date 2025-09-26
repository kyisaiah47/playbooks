export default function ArticlesLoading() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Header skeleton */}
      <div className="text-center mb-12">
        <div className="h-10 bg-gray-200 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded-lg w-96 mx-auto animate-pulse"></div>
      </div>

      {/* Article list skeleton */}
      <div className="space-y-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <article key={i} className="bg-white border rounded-lg p-6 shadow-sm animate-pulse">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-5 bg-gray-200 rounded-full w-16"></div>
                  <div className="h-5 bg-gray-200 rounded-full w-20"></div>
                  <div className="h-5 bg-gray-200 rounded-full w-12"></div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}