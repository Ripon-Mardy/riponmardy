// app/projects/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        
        {/* spinner */}
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>

        <p className="text-gray-600 text-sm">
          Loading projects...
        </p>

      </div>
    </div>
  );
}