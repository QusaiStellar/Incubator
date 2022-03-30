import './App.css';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

const App = () => {
   return (
      <div className='app-wrapper'>
         <Header />
         <Navigation />
         <div className='app-wrapper-content'>
            <Dialogs />
            {/* <Content /> */}
         </div>
      </div>
   );
}

export default App;
