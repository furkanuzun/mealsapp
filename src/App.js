import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Categories from './pages/Categories';
import MealDetail from './pages/MealDetail';
import CategoryDetail from './pages/CategoryDetail';
import RandomMeal from './pages/RandomMeal';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/categories" component={Categories} />

        <Route path="/category/:category_id" component={CategoryDetail} />

        <Route path="/meal/:meal_id" component={MealDetail} />
        <Route path="/random-meal" component={RandomMeal} />
        <Route path="/contact" component={Contact} />

        <Route path="/" component={Login} />

      </Switch>
    </Router>
  );
}

export default App;
