import "./App.css";
import H1 from "./components/H1"
import Jobs from "./components/Jobs";
import Paragraph from "./components/Paragraph"

function App() {
  return (
    <div>

    <header>
      <H1 h1="The Job Board" />
    </header>

    <main class="container">
      <Jobs className="item-red" title="Full Time Sales Associate - Sydney Boutique" contractType="CDD " country="- France -" city=" Paris"/>
      <Jobs className="item-green" title="Agent de Sécurité - Pantin" contractType="CDD " country="- France -" city=" Paris"/>
      <Jobs className="item-yellow" title="Responsable d'Atelier" contractType="CDI " country="- France -" city="Pantin"/>
      <Jobs className="item-blue" title="Chef de Projet" contractType="CDD " country="- France -" city=" Paris"/>
      <Jobs className="item-pink" title="Développeur React.js" contractType="CDI " country="- France -" city=" Paris"/>
      <Jobs className="item-red" title="Sales Associate" contractType="CDI " country="- Suède -" city=" Stockholm"/>
      <Jobs className="item-green" title="Vendeur/se - Cran Montana" contractType="CDI " country="- Suisse -" city=" Cran Montana"/>
      <Jobs className="item-yellow" title="CRM - Data Quality Analyst" contractType="CDI " country="- USA -" city=" New York"/>
      <Jobs className="item-blue" title="Infirmier" contractType="CDI " country="- France  -" city=" Pantin"/>
    </main>

    <footer>
      <Paragraph paragraph="Made with React at Le Reacteur by Nono" />
    </footer>

    </div>
  );
}

export default App;
