import { Header } from './components/Header';
import { Links } from './components/Links';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-12 justify-center gap-4 pb-6 h-dvh w-dvw bg-primary-1 text-secondary grid-rows-[auto_1fr]">
      <Header />
      <Links />
    </div>
  );
}

export default App;
