//Context
import { LanguageProvider } from "./context/LanguageContext";

//Components
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  return (
    <LanguageProvider>
      <div id='box'>
          <Navigation />
          <div className="container">
            <AboutMe/>
          </div>
          <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
