<template>
  <div>
    <div class="container max-width">
      <div class="main-image-wrapper">
        <img src="../../assets/intros/heiligenblut.jpg" class="main-image" />
        <h1 class="intro-text">
          Österreich erleben<br />
          <br />
          <small
            >Genießen Sie Österreich im <br />
            legendären Bergdorf Heiligenblut am Großglockner</small
          >
        </h1>
      </div>
    </div>

    <div class="container">
      <h2 class="text-center">Umgebung</h2>
      <div class="clearfix small-down">
        <img class="albumify float-left" width="490" src="../../assets/content/blumen-gletscherblick-heiligenblut.jpg" alt="Blick nach Heiligenblut am Großglockner von der Sonnenterrasse der Gletscherblick Pension" />
        <p>So erleben Sie den Nationalpark Hohe Tauern von Frühling bis Herbst: Grüne Wiesen, romantische Almen, urige Hütten und zutrauliche Tiere. Mit jedem Schritt entdeckt man Natur. Bis der erste Schnee fällt.</p>
      </div>
      <div class="clearfix">
        <img class="albumify -v2 float-left" width="490" src="../../assets/content/winter-heiligenblut-gletscherblick.jpg" alt="Die Pension Gletscherblick im Winter" />
        <p>Im Winter ist alles tief verschneit. Schilifte bringen Sie bis auf fast 3000 m. Und dann kann der Spaß in Weiß ganz schön bunt sein!</p>
        <p>Der Schibus bringt Ihre Schizwerge direkt vom Haus in die Kinderschischule und zurück. Mit dem Auto sind Sie außerdem innerhalb von 5 Minuten an der Talstation oder in 10 Minuten an der Mittelstation.</p>
      </div>
    </div>

    <div class="container">
      <h2 class="text-center">Aktivitäten</h2>
      <div class="clearfix small-down">
        <img class="albumify float-left -v2" width="490" src="../../assets/content/wandern-in-heiligenblut-gletscherblick.jpg" alt="Wandern in Heiligenblut am Grossglockner" />
        <p>Direkt von unserer Pension aus erreichen Sie viele wunderschöne Wanderwege:</p>
        <ul>
          <li>Gamsgrubenweg - 200 hm, ca. 3 h</li>
          <li>Gletscherweg Pasterze - 400 hm, ca. 4 h</li>
          <li>Geotrail Tauernfenster - 200 hm, ca. 3 h</li>
          <li>Naturgefahrentrail Heiligenblut - ca. 2 h 15 min</li>
          <li>Naturlehrweg “Natura Mystica”</li>
        </ul>
      </div>
      <div class="clearfix">
        <div ref="playerContainer" class="albumify -video float-left">
          <Loader v-if="!videoLoaded" :pane="true" />
        </div>
        <p>In unserem <strong>Streichelzoo</strong> können Ihre Kleinen unsere Hasen, Meerschweinchen, Esel und Schafe kennen lernen. Im Video links bekommen Sie einen kleinen Einblick in unsere Tierwelt.</p>
      </div>
    </div>

    <div class="container large-up">
      <h2 class="text-center">Heiligenblut auf einen Blick</h2>
    </div>
    <div class="container two-part">
      <div class="part">
        <a ref="nofollow" href="https://goo.gl/maps/KtykJzCAm692" target="_blank">
          <img src="https://maps.googleapis.com/maps/api/staticmap?center=Heiligenblut,Oesterreich&zoom=7&size=490x380&maptype=roadmap&markers=color:blue%7C47.039818,12.842507&key=AIzaSyB2lPxwzcku6gNuBTVRGouIJ_acUvvzn7s&language=de" />
        </a>
      </div>
      <div class="part">
        1301 Meter Seehöhe<br />
        1180 Einwohner<br />
        38km nördlich von Lienz<br />
        <br />
        <strong>Highlights im Sommer</strong><br />
        <ul class="small-down">
          <li>Direkt an der Großglockner Hochalpenstraße</li>
          <li>Viele Aktivitäten im Nationalpark Hohe Tauern</li>
          <li>Goldgräberdorf Heiligenblut</li>
          <li>Auf das Schareck mit der Bergbahn</li>
        </ul>
        <strong>Highlights im Winter</strong><br />
        <ul>
          <li>Enorm vielfältiges Skigebiet Grossglockner/Heiligenblut</li>
          <li>Langlaufen und Winterwandern</li>
          <li>Eisklettern &amp; Eislaufen</li>
          <li>Hallenbad Heiligenblut</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import lazyLoadScript from 'lazyload-script'
export default {
  components: {
    Loader,
  },
  data() {
    return {
      videoLoaded: false,
    }
  },
  mounted() {
    this.loadVideo()
  },
  destroyed() {
    if (this.player) {
      this.player.destroy()
    }
  },
  methods: {
    loadVideo() {
      const config = {
        sources: [
          {
            type: 'mp4',
            src: '/videos/streichelzoo.mp4',
          },
        ],
        ui: {
          image: '/videos/streichelzoo-vorschau.jpg',
        },
      }
      lazyLoadScript('https://cdn.jsdelivr.net/npm/indigo-player/lib/indigo-player.js', 'main').then(() => {
        this.player = window.IndigoPlayer.init(this.$refs.playerContainer, config)
        this.player.on(window.IndigoPlayer.Events.STATE_READY, () => {
          this.videoLoaded = true
        })
      })
    },
  },
}
</script>
