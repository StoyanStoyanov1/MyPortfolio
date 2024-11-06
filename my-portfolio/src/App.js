//Context
import { LanguageProvider } from "./context/LanguageContext";

//Components
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <LanguageProvider>
      <div id='box'>
          <Navigation />
          <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
