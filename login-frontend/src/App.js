import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Footer";

import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import LandingPage from "./MainScreen";


function App() {
  
  return (
    <Router>
      
      <main className="App">
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        
      </main>
      <Footer />
    </Router>
  );
}

export default App;
