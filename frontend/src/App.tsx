export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-700 text-center">
        <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold border border-blue-500/20">
          🧵
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Dheera Stitches
        </h1>
        <p className="text-slate-400 text-sm mb-6">
          Tailwind CSS successfully configured ho chuka hai!
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Tailwind CSS v4 Ready
        </div>
      </div>
    </div>
  )
}

