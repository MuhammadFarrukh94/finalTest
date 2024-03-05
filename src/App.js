import './App.css';
import './global.css';
import { LandingPageMain } from './glamSevenLandingPage/components/landing-page-main.jsx';
import { HashRouter} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <LandingPageMain />
    </HashRouter>
);
}

export default App;
