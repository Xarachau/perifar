import './App.css'
import nanda from './img/nanda-tsunami.jpg'
import tasha from './img/tasha-tracie.jpg'
import ebony from './img/ebony.jpg'
import blackAlien from './img/black-alien.jpg'
import alee from './img/alee.jpg'

// Textos de exemplo: troque pelos dados reais do evento
const EVENT = {
  day: 'Sexta-feira, 26/02',
  time: '21h',
  place: 'Vibra São Paulo',
}

const LINEUP = [
  { name: 'Nanda Tsunami', img: nanda },
  { name: 'Tasha Tracie', img: tasha },
  { name: 'Ebony', img: ebony },
  { name: 'Black Alien', img: blackAlien },
  { name: 'Alee', img: alee },
]

const SCHEDULE = [
  { time: '14h', title: 'Abertura e feira de criadores' },
  { time: '16h', title: 'Desfile 1: coleções autorais' },
  { time: '18h', title: 'Roda de conversa com estilistas' },
  { time: '20h', title: 'Desfile final e show' },
]

const TICKETS = [
  { name: 'Meia', price: 'R$ 10', note: 'Estudantes e moradores da região', color: 'var(--yellow)' },
  { name: 'Inteira', price: 'R$ 20', note: 'Acesso a todo o evento', color: 'var(--orange)' },
  { name: 'Apoiador', price: 'R$ 40', note: 'Ajuda a manter o Perifar vivo', color: 'var(--blue)' },
]

function App() {
  return (
    <>
      <header className="header">
        <a href="#topo" className="brand">
          Perifar
        </a>
        <nav className="nav" aria-label="Principal">
          <a href="#sobre">Sobre</a>
          <a href="#programacao">Programação</a>
          <a href="#ingressos" className="btn btn-small">
            Ingressos
          </a>
        </nav>
      </header>

      <main id="topo">
        <section className="hero">
          <p className="hero-kicker">Show off</p>
          <h1 className="hero-title">
            <span className="hero-logo">Perifar</span>
          </h1>

          <ul className="lineup" aria-label="Line-up">
            {LINEUP.map((artist) => (
              <li key={artist.name} className="artist">
                <div className="artist-photo">
                  <img src={artist.img} alt={artist.name} />
                </div>
                <span className="artist-name">{artist.name}</span>
              </li>
            ))}
          </ul>

          <ul className="hero-info" aria-label="Informações do evento">
            <li>{EVENT.day}</li>
            <li>{EVENT.time}</li>
            <li>{EVENT.place}</li>
          </ul>

          <a href="#ingressos" className="btn btn-yellow">
            Garantir ingresso
          </a>
        </section>

        <section id="sobre" className="section section-yellow">
          <h2>Sobre o evento</h2>
          <div className="panel">
            <p>
              O Perifar reúne criadores, modelos e público para mostrar a moda que nasce
              fora do centro. Cada peça conta de onde veio: do bairro, da costura de casa,
              do brechó e da rua.
            </p>
          </div>
        </section>

        <section id="programacao" className="section">
          <h2>Programação</h2>
          <ol className="schedule">
            {SCHEDULE.map((item) => (
              <li key={item.time} className="slot">
                <span className="slot-time">{item.time}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="ingressos" className="section section-blue">
          <h2>Ingressos</h2>
          <ul className="tickets">
            {TICKETS.map((t) => (
              <li key={t.name} className="ticket" style={{ background: t.color }}>
                <h3>{t.name}</h3>
                <p className="ticket-price">{t.price}</p>
                <p>{t.note}</p>
                <button className="btn btn-dark">Comprar {t.name.toLowerCase()}</button>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="brand">Perifar</p>
        <p>
          {EVENT.day} · {EVENT.time} · {EVENT.place}
        </p>
        <p>contato@perifar.com.br</p>
      </footer>
    </>
  )
}

export default App
