import {Routes, Route} from 'react-router-dom'

//Context and utils
import { LanguageProvider } from "./context/LanguageContext";
import paths from './utils/translator/paths';

//Components
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import AboutMe from "./components/aboutMe/AboutMe";
import Certificates from './components/certificates/Certificates';

function App() {
  return (
    <LanguageProvider>
      <div id='box'>
          <Navigation />
          <Routes>
            <Route path={paths.aboutMe} element={<AboutMe />}/>
            <Route path={paths.certificates} element={<Certificates />}/>
          </Routes>
          <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
