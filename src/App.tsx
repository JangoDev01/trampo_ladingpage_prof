import { Aperture, ArrowDown, ArrowDownRight, ArrowUpRight, Instagram } from "lucide-react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { portfolio } from "./data/portfolio";

/** Organiza as seções da página na ordem de leitura e navegação. */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <section aria-labelledby="hero-title" className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Disponível para novas sessões</p>
            <h1 id="hero-title">Histórias feitas <span>de luz.</span></h1>
            <div className="hero-bottom">
              <p>
                Sou {portfolio.name}, {portfolio.role.toLowerCase()} a contar histórias reais
                através de imagens espontâneas e intemporais.
              </p>
              <a className="round-link" aria-label="Ver fotografias" href="#trabalho">
                <ArrowDown size={20} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              alt="Fotógrafo a preparar a sua câmara para uma sessão"
              className="hero-image"
              fetchPriority="high"
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1600&q=90"
            />
            <div className="hero-stamp">
              <span>RETRATOS</span>
              <ArrowDownRight aria-hidden="true" size={22} />
              <span>MOMENTOS</span>
            </div>
            <span className="image-caption">A beleza está nos momentos verdadeiros.</span>
          </div>
          <a className="hero-scroll" href="#trabalho">
            <span>Role para explorar</span><ArrowDown size={15} />
          </a>
        </section>

        <section aria-labelledby="work-title" className="work-section" id="trabalho">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Portfólio</p>
              <h2 id="work-title">Histórias em imagens<span>.</span></h2>
            </div>
            <p className="section-intro">
              Casamentos, retratos e paisagens vistos com tempo, intenção e sensibilidade.
            </p>
          </div>
          <div className="project-list">
            {portfolio.projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>

        <section aria-labelledby="about-title" className="about-section" id="sobre">
          <div className="about-marker">
            <p className="eyebrow">02 / Sobre o fotógrafo</p>
            <span className="about-symbol" aria-hidden="true">↘</span>
          </div>
          <div className="about-copy">
            <h2 id="about-title">Cada fotografia guarda um lugar, um instante e uma história.</h2>
            <div className="about-details">
              <p>
                Acompanho pessoas e lugares com um olhar atento à luz e aos detalhes. Da fotografia
                de casamento aos retratos e projetos editoriais, procuro imagens naturais que
                continuem a fazer sentido com o passar do tempo.
              </p>
              <dl className="about-facts">
                <div><dt>Atuação</dt><dd>{portfolio.role}</dd></div>
                <div><dt>Base</dt><dd>{portfolio.location}</dd></div>
                <div><dt>Foco</dt><dd>Casamentos · Retratos · Editorial</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-title" className="contact-section" id="contato">
          <div className="contact-topline">
            <p className="eyebrow">03 / Próximo passo</p>
            <span className="contact-spark" aria-hidden="true">✳</span>
          </div>
          <h2 id="contact-title">Tem uma ideia<br />ganhando forma<span>?</span></h2>
          <a className="contact-email" href={`mailto:${portfolio.email}`}>
            {portfolio.email}<ArrowUpRight aria-hidden="true" size={22} />
          </a>
          <div className="contact-footer">
            <p>Aberto a conversas, colaborações e bons desafios.</p>
            <div className="social-links">
              {portfolio.socialLinks.map((link) => {
                const Icon = link.label === "Instagram" ? Instagram : Aperture;
                return (
                  <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
                    <Icon aria-hidden="true" size={17} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#inicio">{portfolio.name}<span>.</span></a>
        <p>© {new Date().getFullYear()} {portfolio.name}. Feito com cuidado.</p>
        <a className="back-to-top" href="#inicio">Voltar ao topo <ArrowUpRight size={15} /></a>
      </footer>
    </>
  );
}