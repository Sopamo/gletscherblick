<template>
  <div>
    <div class="container max-width">
      <div class="main-image-wrapper">
        <img src="../../assets/intros/zimmer.jpg" class="main-image" />
        <h1 class="intro-text">
          Komfortable Familienzimmer<br />
          <br />
          <small
            >11 Zimmer in denen Sie sich <br />
            wie zu Hause fühlen</small
          >
        </h1>
      </div>
    </div>
    <div class="container large-up two-part">
      <section class="part">
        <h2 class="text-center">Platz für Sie und Ihre Liebsten</h2>
        Alle unsere Zimmer sind mit Parkettboden, Safe und Föhn ausgestattet.<br>
        Unsere 10 gemütlichen <strong>Familienzimmer</strong> verfügen über ein Doppelbett und jeweils separaten Kinderzimmern mit Stockbetten.<br>
        Die Badezimmer sind ebenfalls familiengerecht ausgestattet mit tiefer Duschtasse und Wickeltisch samt Auflage. Die meisten Zimmer haben einen Balkon. Gerne können die Zimmer auch als Einzel- und Doppelzimmer gebucht werden.
      </section>
      <section class="part">
        <h2 class="text-center">
          Doppel- &amp;
          Einzelzimmer
        </h2>
        Ideal wenn Sie allein oder zu Zweit kommen:
        <strong>Zimmer mit Doppelbett</strong>, Dusche, WC und SAT-Flat-TV. Durchgehend mit Parkettboden.<br />
      </section>
    </div>

    <div class="container two-part">
      <div class="part">
        Zimmeraufteilung:<br />
        <img src="../../assets/content/zimmeraufteilung.jpg" />
      </div>
      <div class="part">
        <br />
        Ausstattung der Kinderzimmer:
        <ul>
          <li>Separates Kinderzimmer</li>
          <li>Stock- Gitterbetten</li>
          <li>Teilweise Balkon</li>
          <li>Babyphon</li>
          <li>Kindersicherungen</li>
          <li>Hochstuhl</li>
          <li>Fläschchenwärmer</li>
          <li>Kindergeschirr</li>
        </ul>
        <br />
        Alle Zimmer verfügen über:
        <ul>
          <li>Kostenloses WLAN</li>
          <li>Safe</li>
          <li>Föhn</li>
        </ul>
        <br />
        Außerdem Verleih von:
        <ul>
          <li>Kinderwagen</li>
          <li>Buggies</li>
          <li>Schlitten</li>
        </ul>
      </div>
    </div>

    <section class="container large-up">
      <h2 class="text-center">Preise</h2>
      <img src="../../assets/content/blick-nach-heiligenblut.jpg" width="500" alt="Blick von der Sonnenterrasse nach Heiligenblut" class="albumify float-left" />
      <p>
        <strong>Nebensaison:</strong><br />
        Übernachtung und Frühstück: <strong>55€</strong><br />
        Halbpension: <strong>65€</strong>
      </p>
      <br />
      <p>
        <strong>Hauptsaison:</strong><br />
        Übernachtung und Frühstück: <strong>75€</strong><br />
        Halbpension: <strong>85€</strong>
      </p>
      <br />
      <p>
        Kinder bis 11,99 Jahre gratis in einem Familienzimmer mit Erwachsenen.<br>
        Ab 12 -15 Jahre 50 % Ermäßigung.
      </p>
      <br>
      <router-link class="button" to="/buchung">Zur Buchung / Kontakt</router-link>
    </section>

    <section class="container large-up">
      <h2 class="text-center">Verpflegung</h2>
      <p>
        Unsere Küche ist bodenständig und nachhaltig. Neben regionalen Zulieferern profitiert unsere Küche von den Erträgen unserer eigenen Tierhaltung und Landwirtschaft. Wir bemühen uns, den Geschmack aller zu treffen und nehmen selbstverständlich gerne Rücksicht auf Lebensmittelunverträglichkeiten. Daher gibt es auch immer Alternativen bei einer Intoleranz, wie zum Beispiel Laktose, Gluten oder Fructose.<br>
        Teilen Sie uns diese einfach bei Ihrer Buchung mit.
      </p>
    </section>

    <section class="container large-up">
      <h2 class="text-center">Frühstück</h2>
      <p>
        Jeden Morgen bieten wir Ihnen ein reichhaltiges Frühstücksbuffet in unserer urigen Gaststube. Neben Backwaren kredenzen wir auch selbstgebackenes Brot, Speck aus eigener Herstellung sowie andere feine Spezialitäten. Dazu gehören selbstgemachte Marmeladen, Aufstriche und natürlich das beliebte Frühstücksei.
      </p>
    </section>

    <section class="container large-up">
      <h2 class="text-center">Abendessen</h2>
      <p>
        Chef Martin, gelernter Koch, zaubert abends ein 3- Gänge Menü für Sie. Bestehend aus Suppe (täglich wechselnd), Hauptgang und Dessert.<br>
        Kinder bis 12 Jahren essen bei uns bei Belegung mit Elternteil im Zimmer in der Halbpension kostenlos.

      </p>
    </section>

    <section class="container large-up">
      <h2 class="text-center">Kaffee & Kuchen</h2>
      <p>
        Für unsere hausgemachten Kuchen, frisch gebacken von Chefin Maria, sind wir schon seit jeher bekannt. Dazu ein Kännchen Kaffee, Cappuccino oder Latte macchiato? Sie entspannen auf unserer großen Sonnenterrasse, während Ihre Kinder in Sichtweite den Spielplatz samt Streichelzoo erkunden.
      </p>
    </section>

    <section class="container large-up">
      <h2 class="text-center">Catering</h2>
      <p>
        Mit unserem zuverlässigen Catering unterstützen wir Sie gerne bei Ihrer nächsten Festlichkeit. Ob Geburtstagsfeier, Hochzeit, Taufe oder andere festliche Veranstaltungen, unser Motto lautet: Sie genießen Ihre Feier, wir kümmern uns um das leibliche Wohl ihrer Gäste!
      </p>
    </section>

    <section class="container large-up">
      <h2 class="text-center">Buchung</h2>
      <p>
      Hier gelangen Sie direkt zur Buchung:<br />
      <router-link class="button tiny-up" to="/buchung">Zur Buchung / Kontakt</router-link><br />
      </p>
    </section>

  </div>
</template>

<script>
export default {}
</script>
