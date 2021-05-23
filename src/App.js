import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PageNotFound } from './pages/PageNotFound'
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MealList } from './pages/MealList';
import { MealRecipe } from './pages/MealRecipe';
import { SearchRecipe } from './pages/SearchRecipe'

function App() {
  return (
    <>
      <Router basename='/react-foods'>
        <Header />
        <main className='container main-container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/meallist/:category" component={MealList} />
            <Route path="/meal/:id" component={MealRecipe} />
            <Route path="/mealsearch/:name" component={SearchRecipe} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
