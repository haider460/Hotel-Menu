import "./App.css";
import FoodDetails from "./component/FoodDetails";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MachineInfoComponent from "./component/MachineInfoComponent";
import Menu from "./component/Menu";
import TakeOutDeliveryComponent from "./component/TakeOutDeliveryComponent";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <TakeOutDeliveryComponent />
      <MachineInfoComponent />
      <FoodDetails />
      <Footer />
    </div>
  );
}

export default App;
