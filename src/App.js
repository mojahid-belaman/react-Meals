import "./index.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  )
}

export default App;
