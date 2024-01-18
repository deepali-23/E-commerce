import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Table from "./customer/components/Table/table";
import Tailwind from "./customer/components/Tailwind/tailwind";
import Header from "./customer/components/Header/header";
function App() {
  return (
    <div className="App">
      {/* <Navigation />
      <div>
        <HomePage />
      </div> */}
       {/* <Table/> */}
       <Header/>
       <Tailwind/>
     </div>
  );
}

export default App;
