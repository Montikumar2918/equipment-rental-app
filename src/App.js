import "./App.css";

import checkProduct from "./Components/checkProduct";


import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";


import NotFound from "./Components/NotFound";

function App() {
  
  return (
    
    <BrowserRouter>
    
    

          <Switch>
    <Route path="/" exact component={Home}  />
    <Route path="/about" component={About}  />
    <Route path="/checkProduct" component={checkProduct}  />
   

    <Route path="/home"> 
    <Redirect to="/"  />
    </Route>
    <Route path="*" component={NotFound}  />
    </Switch>
    
     
    
    </BrowserRouter>
    
  );
}

export default App;
