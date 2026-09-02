/**
 * DIZAJNOVÝ SMER: Dielenský manifest — industriálny editorial.
 * Grafit, recyklačná zelená a asymetrické informačné pásy majú pôsobiť priamo,
 * lokálne a technicky; každý blok prirodzene smeruje ku kontaktu.
 */
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  Leaf,
  Menu,
  Phone,
  Recycle,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import { useState } from "react";

const phone = "+421 949 215 482";

const services = [
  {
    number: "01",
    icon: Recycle,
    title: "Ekologická likvidácia",
    text: "Odvoz starého auta, doklad o likvidácii a pomoc s vyradením z evidencie — v jednom postupe.",
    tag: "Doklady vybavené",
  },
  {
    number: "02",
    icon: CircleDollarSign,
    title: "Výkup vozidiel",
    text: "Vykúpime osobné aj úžitkové vozidlá na diely alebo opravu, vrátane havarovaných či nepojazdných áut.",
    tag: "Od 50 € do 500 €",
  },
  {
    number: "03",
    icon: Truck,
    title: "Odťah a autodoprava",
    text: "Zabezpečíme prevoz áut, dreva, stavebného materiálu, odpadu aj techniky podľa vašej trasy.",
    tag: "Kysuce a okolie",
  },
];

const facts = [
  ["Podvysoká 24", "zázemie firmy"],
  ["2024", "rok založenia"],
  ["Kysuce", "hlavná oblasť"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#uvod" aria-label="SprintTranz – začiatok stránky">
          <img
            className="brand-mark"
            src="/manus-storage/sprinttranz-brand-mark_6393e9ea.png"
            alt="Znak SprintTranz"
          />
          <span className="brand-type"><b>SPRINT</b><i>TRANZ</i></span>
        </a>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Hlavná navigácia">
          <a href="#sluzby" onClick={closeMenu}>Služby</a>
          <a href="#postup" onClick={closeMenu}>Ako to funguje</a>
          <a href="#o-nas" onClick={closeMenu}>O nás</a>
          <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
        </nav>

        <a className="phone-prompt" href={`tel:${phone.replace(/\s/g, "")}`}>
          <Phone size={16} aria-hidden="true" />
          <span>{phone}</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Zavrieť menu" : "Otvoriť menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </header>

      <main>
        <section id="uvod" className="hero-section">
          <img
            className="hero-photo"
            src="/manus-storage/sprinttranz-industrial-yard_71c4b7e2.jpg"
            alt="Ilustračný pohľad na areál pre odťah a ekologické spracovanie vozidiel"
          />
          <div className="hero-shade" />
          <div className="hero-route" aria-hidden="true"><span /><span /><span /></div>
          <div className="hero-content content-wrap">
            <p className="eyebrow"><span /> AUTODOPRAVA · ODŤAH · EKO LIKVIDÁCIA</p>
            <h1>Vozidlo odvezieme.<br /><em>Veci vybavíme.</em></h1>
            <p className="hero-lead">Výkup áut, ekologická likvidácia a spoľahlivý odťah pre Kysuce a okolie.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`tel:${phone.replace(/\s/g, "")}`}>
                <Phone size={18} /> Zavolať teraz
              </a>
              <a className="button button-ghost" href="#sluzby">
                Pozrieť služby <ArrowDownRight size={18} />
              </a>
            </div>
          </div>
          <div className="hero-corner-note">
            <span>Vaše vozidlo.</span>
            <strong>Jedno riešenie.</strong>
          </div>
        </section>

        <section className="signal-bar" aria-label="Výhody služieb">
          <div className="content-wrap signal-grid">
            <p><Check size={17} /> Odťah z miesta vozidla</p>
            <p><Check size={17} /> Finančná kompenzácia</p>
            <p><Check size={17} /> Pomoc s administratívou</p>
          </div>
        </section>

        <section id="sluzby" className="services-section content-wrap section-space">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow eyebrow-dark"><span /> ČO RIEŠIME</p>
              <h2>Od prvého telefonátu<br />po <em>hotové papiere.</em></h2>
            </div>
            <p className="heading-note">Bez zdĺhavého hľadania viacerých firiem. Spájame odťah, výkup aj ekologické spracovanie do jasného postupu.</p>
          </div>

          <div className="service-list">
            {services.map(({ number, icon: Icon, title, text, tag }) => (
              <article className="service-row" key={number}>
                <span className="service-number">{number}</span>
                <div className="service-icon"><Icon size={29} strokeWidth={1.65} /></div>
                <div className="service-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="service-tag">{tag}</span>
                <ArrowRight className="service-arrow" size={23} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="postup" className="process-section">
          <div className="content-wrap process-layout">
            <div className="process-title">
              <p className="eyebrow"><span /> JEDNODUCHÝ POSTUP</p>
              <h2>Stačia tri<br /><em>jasné kroky.</em></h2>
              <img src="/manus-storage/sprinttranz-route-graphic_ae912a27.png" alt="Grafické znázornenie trasy od výkupu po recykláciu" />
            </div>
            <ol className="step-list">
              <li>
                <span>01</span>
                <div><h3>Ozvete sa nám</h3><p>Povedzte nám typ vozidla alebo čo potrebujete previezť. Dohodneme ďalší postup.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><h3>Prídeme na miesto</h3><p>Podľa dohody zabezpečíme odťah alebo naloženie materiálu priamo tam, kde sa nachádza.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><h3>Dotiahneme to do konca</h3><p>Pri likvidácii pripravíme doklad a pomôžeme s nevyhnutnou administratívou.</p></div>
              </li>
            </ol>
          </div>
        </section>

        <section id="o-nas" className="about-section content-wrap section-space">
          <div className="about-gallery">
            <figure className="fleet-photo">
              <img src="/manus-storage/sprinttranz-fleet_d77c255d.png" alt="Vozidlá a odťahová technika SprintTranz" />
              <figcaption><Truck size={17} /> Reálna technika v teréne</figcaption>
            </figure>
            <figure className="promo-photo archive-card">
              <img src="/manus-storage/sprinttranz-promo_2ac0ca61.png" alt="Propagačný materiál SprintTranz o ekologickej likvidácii vozidiel" />
              <figcaption>Archívny materiál / EKO servis</figcaption>
            </figure>
          </div>
          <div className="about-copy">
            <p className="eyebrow eyebrow-dark"><span /> SPRINTTRANZ V SKRATKE</p>
            <h2>Praktická pomoc<br />pre <em>vaše vozidlo.</em></h2>
            <p className="about-lead">SprintTranz je slovenská firma z Podvysokej, ktorá sa zameriava na prepravu, výkup a ekologickú likvidáciu vozidiel.</p>
            <p>Podľa dodaných podkladov firma zabezpečuje aj predaj zachovalých použitých náhradných dielov. Jej prístup stojí na priamej dohode, vlastnom odťahu a snahe vybaviť čo najviac krokov za zákazníka.</p>
            <div className="fact-strip">
              {facts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
            <div className="trust-note"><ShieldCheck size={21} /><span>Rozhodujú jasné informácie a férová dohoda — nie prázdne sľuby.</span></div>
          </div>
        </section>

        <section className="parts-section">
          <div className="parts-photo"><img src="/manus-storage/sprinttranz-services-material_2d0bc4e0.jpg" alt="Ilustračné použité automobilové diely" /></div>
          <div className="parts-copy">
            <p className="eyebrow"><span /> AJ NÁHRADNÉ DIELY</p>
            <h2>Diel, ktorý ešte<br /><em>má svoju hodnotu.</em></h2>
            <p>Zachovalé použité diely z rozobraných vozidiel môžu dostať druhú šancu. Pri konkrétnom dopyte sa ozvite telefonicky.</p>
            <a className="text-link" href={`tel:${phone.replace(/\s/g, "")}`}>Overiť dostupnosť <ArrowRight size={18} /></a>
          </div>
        </section>

        <section id="kontakt" className="contact-section">
          <div className="content-wrap contact-wrap">
            <div className="contact-main">
              <p className="eyebrow"><span /> VYBAVÍME TO SPOLU</p>
              <h2>Potrebujete odťah<br />alebo <em>výkup auta?</em></h2>
              <p>Ozvite sa. Stačí povedať, kde vozidlo stojí a o aký typ služby máte záujem.</p>
              <a className="contact-phone" href={`tel:${phone.replace(/\s/g, "")}`}><Phone size={25} /> {phone}</a>
              <a className="button button-primary button-dark" href={`tel:${phone.replace(/\s/g, "")}`}>Zavolať SprintTranz <ArrowRight size={18} /></a>
            </div>
            <aside className="contact-card">
              <div className="contact-card-top">
                <div className="contact-icon"><Leaf size={31} /></div>
                <div className="brand-stamp"><img src="/manus-storage/sprinttranz-brand-mark_6393e9ea.png" alt="" /> <span>SPRINTTRANZ<br />SLUŽBY</span></div>
              </div>
              <p className="contact-label">ZÁZEMIE FIRMY</p>
              <strong>Podvysoká 24<br />023 57 Podvysoká</strong>
              <div className="card-rule" />
              <p><Clock3 size={17} /> Dohoda telefonicky</p>
              <p><FileCheck2 size={17} /> Pomoc s dokladmi</p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-wrap footer-wrap">
          <a className="brand" href="#uvod">
            <img className="brand-mark" src="/manus-storage/sprinttranz-brand-mark_6393e9ea.png" alt="" />
            <span className="brand-type"><b>SPRINT</b><i>TRANZ</i></span>
          </a>
          <p>Autodoprava · výkup áut · ekologická likvidácia</p>
          <p>© {new Date().getFullYear()} SprintTranz</p>
        </div>
      </footer>
    </div>
  );
}
