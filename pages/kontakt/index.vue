<template>
  <div>
    <div class="container max-width">
      <div class="main-image-wrapper">
        <img src="../../assets/intros/heiligenblut.jpg" class="main-image" />
        <h1 class="intro-text">
          Über Uns<br />
          <br />
          <small>Das ist unsere Geschichte</small>
        </h1>
      </div>
    </div>

    <div class="container">
      <h2 class="text-center">Kontakt & Anfahrt</h2>
      <div class="clearfix">
        <div ref="playerContainer" class="albumify -video float-left">
          <Loader v-if="!videoLoaded" :pane="true" />
        </div>
        <p class="small-down">
          Familienpension Gletscherblick<br />
          Hof 28<br />
          9844 Hof<br />
          Österreich<br />
          <a href="https://goo.gl/maps/KtykJzCAm692" target="_blank" rel="nofollow">Zu Google Maps</a>
        </p>
        <p class="small-down">
          Tel.: +43 (0) 48 24/20 56<br />
          Fax: +43 (0) 48 24/24 615<br />
          E-Mail: <a href="mailto:gletscherblick@heiligenblut.at">gletscherblick@heiligenblut.at</a>
        </p>
        <p>
          Im Video links sehen Sie die Anfahrt zur Pension. Wir kommen dort von der Bergseite der B107. Wenn Sie aus Richtung Lienz kommen, biegen Sie genauso beim Ferienhaus Schmidl ab (im Video bei Sekunde 3).
        </p>
      </div>
    </div>

    <div class="container">
      <h2 class="text-center">Geschichte</h2>
      <div class="clearfix small-down">
        <img class="albumify float-left" width="490" src="../../assets/content/geschichte-gletscherblick-pension.jpg" alt="Altes Foto von der Pension Gletscherblick in Heiligenblut" />
        <p>
          Nach der Hochzeit im Jahre 1957, reifte bei Hedi und Sepp Granögger über längere Zeit der Plan, ein eigenes Haus zu bauen. Der ideale Platz war bereits vorhanden: Sepp hatte von seinen Eltern den Schulerbichl geerbt und von dort
          hatte man einen wohl einzigartigen Blick auf Heiligenblut, den Grossglockner und das ganze Tal. Hier sollte also das neue Zuhause entstehen und es sollte auch Besuchern und Gästen offenstehen.
        </p>
        <p>
          Der Name war schnell gefunden: "Café Pension Gletscherblick". Schließlich hatte man hier tatsächlich einen direkten Blick auf zwei Gletscher, sowohl auf die Pasterze als auch auf den Sonnblick-Gletscher! Und dies konnte man
          wirklich nur von ganz wenigen Plätzen in Heiligenblut behaupten.
        </p>
      </div>
      <div class="clearfix">
        <img class="albumify -v2 float-left" width="490" src="../../assets/content/geschichte-gletscherblick-betreiber.jpg" alt="Die Erbauer der Pension Gletscherblick" />
        <p>Mit vollem Einsatz und mit eigener Hände Arbeit über viele Monate bauten Sepp und seine Gattin an ihrem Traum. Und im Sommer 1973 war es dann endlich soweit: Der "Gletscherblick" wurde eröffnet!</p>
      </div>
      <div class="clearfix">
        <img class="albumify -v2 float-left" width="490" src="../../assets/content/gletscherblick-maria-und-martin.jpg" alt="Die jetzigen Betreiber, Maria und Martin vom Gletscherblick in Heiligenblut" />
        <p>
          Mittlerweile wird der "Gletscherblick" nun schon in zweiter Generation geführt. Im Jahre 1991 übernahm Sohn Martin die Geschicke und gemeinsam mit seiner Frau Maria passte er den Betrieb behutsam an die neuen Zeiten an. Der Wunsch
          nach einem kindergerechten Zuhause für den eigenen Nachwuchs brachte dann auch die Idee, eine Familienpension einzurichten. Und so wachsen Nathalie, Victoria und Lucas nun gemeinsam mit vielen Spielkameraden auf, die in den Ferien
          nach Heiligenblut kommen.
        </p>
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
            src: '/videos/anfahrt.mp4',
          },
        ],
        ui: {
          image: '/videos/anfahrt-vorschau.jpg',
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
