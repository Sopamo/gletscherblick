<template>
  <div>
    <div class="container max-width">
      <div class="main-image-wrapper">
        <img src="../../assets/intros/heiligenblut.jpg" class="main-image" />
        <h1 class="intro-text">
          Kontakt & Anfahrt<br />
          <br />
          <small>So finden Sie zu uns</small>
        </h1>
      </div>
    </div>

    <div class="container">
      <h2 class="text-center">Kontakt</h2>
      <div class="clearfix">
        <div class="albumify float-left">
          <a ref="nofollow" href="https://goo.gl/maps/KtykJzCAm692" target="_blank">
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=Heiligenblut,Oesterreich&zoom=7&size=490x300&maptype=roadmap&markers=color:blue%7C47.039818,12.842507&key=AIzaSyB2lPxwzcku6gNuBTVRGouIJ_acUvvzn7s&language=de" />
          </a>
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
          <router-link class="button" to="/buchung">Zur Buchung</router-link>
        </p>
      </div>
    </div>

    <div class="container">
      <h2 class="text-center">Anfahrt</h2>
      <div class="clearfix">
        <div ref="playerContainer" class="albumify -video float-left">
          <Loader v-if="!videoLoaded" :pane="true" />
        </div>

        <p>Im Video sehen Sie die Anfahrt zur Pension. Wir kommen dort von der Bergseite der B107. Wenn Sie aus Richtung Lienz kommen, biegen Sie genauso beim Ferienhaus Schmidl ab (im Video bei Sekunde 3).</p>
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
