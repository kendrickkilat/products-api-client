// import CreateProductForm from "./components/create-product-form";
import { BrowserRouter as Router } from 'react-router-dom';
import SideMenu from "./components/sidebar";

function App() {
  return (
    <Router>
      <div style={{height: '100vh'}} > 
        {/* <CreateProductForm /> */}
        <SideMenu />
      </div>
    </Router>
  );
}

export default App;
