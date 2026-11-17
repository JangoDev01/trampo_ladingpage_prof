import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolio } from "../data/portfolio";

const navigation = [
  { label: "Trabalho", href: "#trabalho" },
  { label: "Sobre", href: "#sobre" },
];

/** Navegação principal com menu recolhível em telas menores. */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" onClick={closeMenu}>
        {portfolio.name}<span>.</span>
      </a>

      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        className="menu-toggle"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        type="button"
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      <nav aria-label="Navegação principal" className={menuOpen ? "main-nav is-open" : "main-nav"}>
        {navigation.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="nav-contact" href="#contato" onClick={closeMenu}>
          Vamos conversar <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </nav>
    </header>
  );
}