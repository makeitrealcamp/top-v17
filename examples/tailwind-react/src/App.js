
function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="px-8 py-12">
        <img className="h-10 mb-6" src="/logo.svg" alt="Workcation" />
        <img className="mb-6 rounded-lg shadow-xl" src="/beach-work.jpeg" alt="Beach" />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          You can work from anywhere.
          <span className="text-indigo-600"> Take advantage of it.</span>
        </h1>
        <p className="text-gray-600 mb-4">
          Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
          nice weather even when you're not on vacation.
        </p>
        <div >
          <a
            className="inline-block px-5 bg-indigo-500 hover:bg-indigo-800 text-white rounded-lg py-3 uppercase shadow-lg font-semibold tracking-wider text-sm"
            href="/"
          >Book you escape</a>
        </div>
      </div>

    </div>
  );
}

export default App;
