<template>
  <div class="container">
    <div class="advanced-opt">
      <h1>Responsive Font size Calculator</h1>
      <div class="advanced-options-container">
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
            <span class="m-left-1">font-size: {{this.minFontSize}}</span>
            <span>}</span>
            <span>@media screen and (min-width: {{this.screenSizeFrom}}) {</span>
            <span class="m-left-1">html {</span>
            <span class="m-left-2">font-size: calc({{this.minFontSize}} + {{this.maxFontSize - this.minFontSize}} * ((100vw - {{this.screenSizeFrom}}) / {{this.screenSizeTo - this.screenSizeFrom}}));</span>
            <span class="m-left-1">}</span>
            <span>}</span>
            <span>@media screen and (min-width: {{this.screenSizeTo}}) {</span>
            <span class="m-left-1">html {</span>
            <span class="m-left-2">font-size: {{this.maxFontSize}};</span>
            <span class="m-left-1">}</span>
            <span>}</span>
          </code>
          </pre>
          <div class="btn-container">
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
