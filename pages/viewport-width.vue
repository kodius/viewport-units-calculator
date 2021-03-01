<template>
  <div class="vw-calculator-container">
    <div class="dynamic-breakpoint">
      <h1>Pixel to VW Converter (Dynamic Breakpoint)</h1>
      <div>
        <b-field label="Pixel value">
          <b-numberinput controls-rounded type="is-dark" v-model="initialSize"></b-numberinput>
        </b-field>
        <b-field label="Breakpoint value">
          <b-numberinput controls-rounded type="is-dark" v-model="breakpoint"></b-numberinput>
        </b-field>
        <div v-if="initialSize != 0" class="viewport-result">
          <div>
            <span class="result__value">Value: {{viewport}}</span>
          </div>
          <div>
            <b-button outlined type="is-primary is-light" @click="copyValue" v-clipboard:copy="viewport">Copy!</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-breakpoint">
      <h1>Pixel to VW Converter (Fixed Breakpoint)</h1>
      <div>
        <b-field label="Pixel value">
          <b-numberinput controls-rounded type="is-dark" v-model="fixedInitialSize"></b-numberinput>
        </b-field>
        <b-field label="Breakpoint value">
          <b-numberinput controls-rounded type="is-dark" v-model="fixedBreakpoint"></b-numberinput>
        </b-field>
        <div v-if="fixedViewport != 0" class="viewport-result">
          <div>
            <span class="result__value">Value: {{fixedViewport}}</span>
          </div>
          <div>
            <b-button outlined type="is-primary is-light" @click="copyValue" v-clipboard:copy="fixedViewport">Copy!</b-button>
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
      initialSize: 16,
      fixedInitialSize: 16,
      breakpoint: 1920,
      fixedBreakpoint: 1920
    }
  },
  computed: {
    viewport: function() {
      // unit = size * (100 / breakpoint)
      return `${(this.initialSize * (100 / this.breakpoint))}vw`
    },

    fixedViewport: function() {
      // unit = size * (100 / breakpoint)
      return `${(this.fixedInitialSize * (100 / this.fixedBreakpoint))}vw`
    }
  },

  mounted() {
    let that = this;
    if (process.browser) {
      this.breakpoint = window.innerWidth;

      window.addEventListener('resize', function () {
        that.breakpoint = window.innerWidth;
      });
    }
  },

  methods: {
    copyValue() {
      this.$buefy.notification.open('Copied!!')
    }
  }
}
</script>

<style lang="scss">
h1 {
  font-size: 1.5em;
  text-align: center;
  margin: 1vw 0;
}
  .vw-calculator-container {
    display: flex;
    justify-content: space-between;

    .dynamic-breakpoint, .fixed-breakpoint {
      width: 45%;
      box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
      padding: 2vw;
      margin-top: 2vw;
    }

    .viewport-result {
      margin-top: 2vw;
      text-align: center;

      button {
        margin-top: 1vw;
      }
    }
 }
</style>
