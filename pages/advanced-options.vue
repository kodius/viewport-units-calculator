<template>
  <div class="container">
    <div class="advanced-opt">
      <h1>Responsive Font size Calculator</h1>
      <div class="advanced-options-container">
        <div class="how-to-use-it-part">
          <b-tooltip
            label="Set font-size and media query range and you will get complete code for responsive value in that range"
            position="is-bottom"
            size="is-large"
            multilined>
            <b-button type="is-primary" outlined>How to use it</b-button>
          </b-tooltip>
        </div>
        <div class="example-part">
          <h3>Example:</h3>
          <div class="example-content">
            <div class="example-description">
              <p>Let’s say we want font-size:</p>
              <p>- to be 16px on 320px screen and smaller</p>
              <p>- to go between 16px on a 320px screen to 25px on a 1000px screen</p>
              <p>- to be 25px on 1000px screen and larger</p>
            </div>
            <div class="example-code">
              <h4>Min Font Size: 16</h4>
              <h4>Max Font Size: 25</h4>
              <h4>Screen Size From: 320</h4>
              <h4>Screen Size To: 1000</h4>
            </div>
          </div>
        </div>
        <div class="input-fields-c card">
          <div class="font-size">
            <b-field label="Min Font Size">
              <b-input type="number" placeholder="Pixel value" v-model="minFontSize"></b-input>
            </b-field>
            <b-field label="Max Font Size">
              <b-input type="number" placeholder="Pixel value" v-model="maxFontSize"></b-input>
            </b-field>
          </div>
          <div class="screen-size">
            <b-field label="Screen Size from">
              <b-input type="number" placeholder="Pixel value" v-model="screenSizeFrom"></b-input>
            </b-field>
            <b-field label="Screen Size to">
              <b-input type="number" placeholder="Pixel value" v-model="screenSizeTo"></b-input>
            </b-field>
          </div>
        </div>
        <div v-if="minFontSize != undefined && maxFontSize != undefined && screenSizeFrom != undefined && screenSizeTo != undefined" class="viewport-result">
          <pre>
          <code>
            <span>html {</span>
            <span class="m-left-1">font-size: {{this.minFontSize}}px</span>
            <span>}</span>
            <span>@media screen and (min-width: {{this.screenSizeFrom}}px) {</span>
            <span class="m-left-1">html {</span>
            <span class="m-left-2">font-size: calc({{this.minFontSize}}px + {{this.maxFontSize - this.minFontSize}} * ((100vw - {{this.screenSizeFrom}}px) / {{this.screenSizeTo - this.screenSizeFrom}}));</span>
            <span class="m-left-1">}</span>
            <span>}</span>
            <span>@media screen and (min-width: {{this.screenSizeTo}}px) {</span>
            <span class="m-left-1">html {</span>
            <span class="m-left-2">font-size: {{this.maxFontSize}}px;</span>
            <span class="m-left-1">}</span>
            <span>}</span>
          </code>
          </pre>
          <div class="btn-container">
            <b-button outlined type="is-primary" @click="copyValue" v-clipboard:copy="viewport">Copy!</b-button>
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
      minFontSize: undefined,
      maxFontSize: undefined,
      screenSizeFrom: undefined,
      screenSizeTo: undefined
    }
  },
  computed: {
    viewport: function() {
      return `
  html {
    font-size: ${this.minFontSize}px;
  }

  @media screen and (min-width: ${this.screenSizeFrom}px) {
    html {
      font-size: calc(${this.minFontSize}px + ${this.maxFontSize - this.minFontSize} * ((100vw - ${this.screenSizeFrom}px) / ${this.screenSizeTo - this.screenSizeFrom}));
    }
  }

  @media screen and (min-width: ${this.screenSizeTo}px) {
    html {
      font-size: ${this.maxFontSize}px;
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
