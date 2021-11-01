import "./App.css";
import H1 from "./components/H1"
import H2 from "./components/H2"
import Jobs from "./components/Jobs"
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div>

    <header>
      <H1 h1="The Job Board" />
    </header>

    <main class="container">
      <Jobs class="boder-red" h2="Full Time Sales Associate - Sydney Boutique" paragraph="CDD - France - Paris"/>
      <Jobs h2="Agent de Sécurité - Pantin" paragraph="CDD - France - Paris"/>
      <Jobs h2="Responsable d'Atelier" paragraph="CDI - France - Pantin"/>
      <Jobs h2="Chef de Projet" paragraph="CDD - France - Paris"/>
      <Jobs h2="Développeur React.js" paragraph="CDI - France - Paris"/>
      <Jobs h2="Sales Associate" paragraph="CDI - Suède - Stockholm"/>
      <Jobs h2="Vendeur/se - Cran Montana" paragraph="CDI - Suisse - Cran Montana"/>
      <Jobs h2="CRM - Data Quality Analyst" paragraph="CDI - USA - New York"/>
      <Jobs h2="Infirmier" paragraph="CDI - France - Pantin"/>
    </main>

    <footer>
      <Paragraph paragraph="Made with React at Le Reacteur by Nono" />
    </footer>

    </div>
  );
}

export default App;
