import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Privacy = () => {
  return (                      /* Copiata da un sito 😂 */
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Politica sulla Privacy</h1>
          <p className="text-muted text-center">Data di entrata in vigore: 2024-03-22</p>

          <section className="mb-5">
            <h2>Introduzione</h2>
            <p>
              La tua privacy è di fondamentale importanza per noi. Questa Politica sulla Privacy
              illustra i tipi di informazioni che vengono raccolte e registrate da piliapp.com e
              come le utilizziamo. Siamo impegnati a proteggere le tue informazioni personali e il
              tuo diritto alla privacy. Se hai domande o preoccupazioni sulla nostra politica, o
              sulle nostre pratiche riguardanti le tue informazioni personali, per favore
              contattaci.
            </p>
          </section>

          <section className="mb-5">
            <h2>Raccolta dati</h2>
            <p>
              Quando visiti il nostro sito web, piliapp.com, e utilizzi i nostri servizi, ci affidi
              le tue informazioni personali. Raccogliamo solo le informazioni personali che ci
              fornisci volontariamente, come il tuo nome, indirizzo email, dettagli di contatto e
              informazioni su come utilizzi i nostri servizi. Inoltre, raccogliamo automaticamente
              alcuni dati utilizzando tecnologie come i cookie, che includono dettagli come il tuo
              indirizzo IP e come interagisci con il nostro sito.
            </p>
          </section>

          <section className="mb-5">
            <h2>Utilizzo dei dati</h2>
            <p>
              Utilizziamo i dati che raccogliamo per fornire e migliorare i nostri servizi, per
              comunicare con te e per offrirti contenuti e offerte personalizzate. Siamo impegnati a
              utilizzare le tue informazioni personali in modo responsabile e in linea con le tue
              preferenze.
            </p>
          </section>

          <section className="mb-5">
            <h2>Condivisione dei tuoi dati personali</h2>
            <p>
              La tua privacy è importante per noi. Non vendiamo i tuoi dati personali a terzi per
              scopi di marketing. Potremmo condividere le tue informazioni con i nostri partner per
              migliorare i nostri servizi, ma solo con il tuo consenso o se necessario per fornire i
              nostri servizi o per rispettare la legge.
            </p>
          </section>

          <section className="mb-5">
            <h2>I tuoi diritti</h2>
            <p>
              Hai diritti sui tuoi dati personali, incluso il diritto di accedere, correggere o
              cancellare le tue informazioni e di opporsi o limitarne il trattamento. Se desideri
              esercitare questi diritti o hai domande, per favore contattaci direttamente.
            </p>
          </section>

          <section className="mb-5">
            <h2>Sicurezza dei dati</h2>
            <p>
              Proteggere le tue informazioni è una priorità per noi. Sebbene nessun servizio online
              possa garantire la sicurezza assoluta, siamo impegnati a proteggere i tuoi dati con le
              migliori misure di sicurezza disponibili.
            </p>
          </section>

          <section className="mb-5">
            <h2>Aggiornamenti a questa Politica</h2>
            <p>
              Potremmo aggiornare questa Politica sulla Privacy di tanto in tanto. Ti incoraggiamo a
              rivederla regolarmente per rimanere informato su come stiamo proteggendo le tue
              informazioni.
            </p>
          </section>

          <section className="mb-5">
            <h2>Informazioni di contatto</h2>
            <p>
              Per qualsiasi domanda o preoccupazione sulle nostre pratiche sulla privacy, non
              esitare a contattarci. Siamo impegnati a risolvere qualsiasi preoccupazione sulla
              privacy e a garantire la protezione e il rispetto delle tue informazioni personali
              attraverso i nostri servizi.
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Privacy;
