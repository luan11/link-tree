import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './components/Header';
import { Links } from './components/Links';
import { Socials } from './components/Socials';

function App() {
  return (
    <Router>
      <div className="relative container mx-auto grid grid-cols-12 justify-center gap-4 pb-6 h-dvh w-dvw bg-primary-1 text-secondary grid-rows-[auto_1fr]">
        <Header />
        <Links />
        <Socials />
      </div>
    </Router>
  );
}

export default App;
