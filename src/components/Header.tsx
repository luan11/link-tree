import Logo from '../assets/images/logo.svg';
import Tree from '../assets/images/tree.png';

export const Header = () => (
  <header className="py-4 px-24 flex justify-center items-center col-start-1 col-end-13 gap-4">
    <figure className="relative w-[6.125rem] h-[6.125rem] flex items-center justify-center group">
      <img
        src={Logo}
        alt="luancode Logo"
        className="transition-all duration-500 group-hover:scale-75"
      />
      <img
        src={Tree}
        alt="Árvore"
        className="absolute transition-all group-hover:animate-spin"
      />
    </figure>
  </header>
);
