import "./App.css";

function App() {
  return (
    <form
      action="submit"
      className="flex flex-col gap-y-8 mt-64 justify-center items-center bg-slate-600 p-12"
    >
      <input type="text" className="p-4 bg-white text-slate-950 rounded-xl" />
      <button className="py-2 px-12 bg-green-500 text-slate-900 rounded-xl hover:bg-green-600">
        Submit
      </button>
    </form>
  );
}

export default App;
