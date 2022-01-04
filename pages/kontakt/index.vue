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
        <div class="main-image-separator">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
      </div>
    </div>

    <div class="container">
      <h2 class="text-center">Kontakt</h2>
      <div class="clearfix">
        <div class="albumify float-left">
          <a ref="nofollow" href="https://goo.gl/maps/KtykJzCAm692" target="_blank">
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=Heiligenblut,Oesterreich&zoom=7&size=490x300&maptype=roadmap&markers=color:blue%7C47.039818,12.842507&key=AIzaSyBwIoeAi-LnsSLF20Ncu2tUmSC22ih8OFg&language=de" />
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
    async loadVideo() {
      const config = {
        sources: [
          {
            type: 'mp4',
            src: '/videos/anfahrt-gletscherblick.mp4',
          },
        ],
        ui: {
          image: '/videos/anfahrt-vorschau.jpg',
        },
      }
      import("indigo-player/lib/indigo-theme.css")
      const IndigoPlayer = await import("indigo-player")

      this.player = IndigoPlayer.init(this.$refs.playerContainer, config)
      this.player.on(IndigoPlayer.Events.STATE_READY, () => {
        this.videoLoaded = true
      })
    },
  },
}
</script>
