
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

const App = () => {
   return (
      <div className='app-wrapper'>
         <Header />
         <Navigation />
         <Content />
      </div>
   );
}

export default App;
