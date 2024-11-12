//Style//
import "./App.css";

//Elements//
import MyNav from "./components/MyNav/MyNav.componets";
import MyFooter from "./components/MyFooter/MyFooter.componets";
import Welcome from "./components/Welcome/Welcome.components";
import AllTheBooks from "./components/AllTheBooks/AllTheBooks.components";

function App() {
  return (
    <div className="main-content">
      <MyNav />
      <Welcome/>
      <AllTheBooks/>
      <MyFooter/>
      
    </div>
  );
}

export default App;
