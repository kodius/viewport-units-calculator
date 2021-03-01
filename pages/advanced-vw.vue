<template>
  <div class="container">
    <div class="nest">
      <h1>Responsive Font size Calculator</h1>
      <div>
        <b-field label="Min Font Size">
          <b-tooltip label="It's not brief, but it's also not long" size="is-small" multilined>
            <b-numberinput controls-rounded type="is-dark" v-model="minFontSize"></b-numberinput>
          </b-tooltip>
        </b-field>
         <b-field label="Max Font Size">
           <b-tooltip label="It's not brief, but it's also not long" size="is-small" multilined>
            <b-numberinput controls-rounded type="is-dark" v-model="maxFontSize"></b-numberinput>
           </b-tooltip>
        </b-field>
        <b-field label="Screen Size from">
          <b-tooltip label="It's not brief, but it's also not long" size="is-small" multilined>
            <b-numberinput min="260" controls-rounded type="is-dark" v-model="screenSizeFrom"></b-numberinput>
          </b-tooltip>
        </b-field>
        <b-field label="Screen Size to">
          <b-tooltip label="It's not brief, but it's also not long" size="is-small" multilined>
            <b-numberinput min="261" controls-rounded type="is-dark" v-model="screenSizeTo"></b-numberinput>
          </b-tooltip>
        </b-field>
        <div v-if="minFontSize != 0 && maxFontSize != 0 && screenSizeFrom != 0 && screenSizeTo != 0" class="viewport-result">
          <pre>
          <code>
            <span>html {</span>
            <span>font-size: {{this.minFontSize}}</span>
            <span>}</span>
            <span>@media screen and (min-width: {{this.screenSizeFrom}}) {</span>
            <span>html {</span>
            <span>font-size: calc({{this.minFontSize}} + {{this.maxFontSize - this.minFontSize}} * ((100vw - {{this.screenSizeFrom}}) / {{this.screenSizeTo - this.screenSizeFrom}}));</span>
            <span>}</span>
            <span>}</span>
            <span>@media screen and (min-width: {{this.screenSizeTo}}) {</span>
            <span>html {</span>
            <span>font-size: {{this.maxFontSize}};</span>
            <span>}</span>
            <span>}</span>
          </code>
          </pre>
          <div>
            <b-button outlined type="is-primary is-light" @click="copyValue" v-clipboard:copy="viewport">Copy!</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
    return {
      minFontSize: 0,
      maxFontSize: 0,
      screenSizeFrom: 0,
      screenSizeTo: 0
    }
  },
  computed: {
    viewport: function() {
      return `
  html {
    font-size: ${this.minFontSize};
  }

  @media screen and (min-width: ${this.screenSizeFrom}) {
    html {
      font-size: calc(${this.minFontSize} + ${this.maxFontSize - this.minFontSize} * ((100vw - ${this.screenSizeFrom}) / ${this.screenSizeTo - this.screenSizeFrom}));
    }
  }

  @media screen and (min-width: ${this.screenSizeTo}) {
    html {
      font-size: ${this.maxFontSize};
    }
  }`
    },

    fixedViewport: function() {
      // unit = size * (100 / breakpoint)
      return (this.initialSize * (100 / this.fixedBreakpoint))
    }
  },

  mounted() {
    let that = this;
    window.addEventListener('resize', function () {
      that.breakpoint = document.getElementById('__nuxt').offsetWidth;
    });
  },

  methods: {
    copyValue() {
      this.$buefy.notification.open('Copied!!')
    },
  }
}
</script>
