<template>
  <div class="vw-calculator-container">
    <div class="dynamic-breakpoint card">
      <h1>Pixel to VH Converter (Dynamic Breakpoint)</h1>
      <div>
        <b-field label="Pixel value">
          <b-input type="number" placeholder="Pixel value" v-model="initialSize"></b-input>
        </b-field>
        <b-field label="Breakpoint value">
          <b-input type="number" placeholder="Pixel value" v-model="breakpoint"></b-input>
        </b-field>
        <div v-if="initialSize != undefined && breakpoint != undefined && viewport != 'NaNvh' && viewport != 'Infinityvh'" class="viewport-result">
          <div>
            <span class="result__value">Result: {{viewport}}</span>
          </div>
          <div class="btn-container">
            <b-button outlined type="is-primary" @click="copyValue" v-clipboard:copy="viewport">Copy!</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-breakpoint card">
      <h1>Pixel to VH Converter (Fixed Breakpoint)</h1>
      <div>
        <b-field label="Pixel value">
          <b-input type="number" placeholder="Pixel value" v-model="fixedInitialSize"></b-input>
        </b-field>
        <b-field label="Breakpoint value">
          <b-input type="number" placeholder="Pixel value" v-model="fixedBreakpoint"></b-input>
        </b-field>
        <div v-if="fixedInitialSize != undefined && fixedBreakpoint != undefined && fixedViewport != 'NaNvh' && fixedViewport != 'Infinityvh'" class="viewport-result">
          <div>
            <span class="result__value">Result: {{fixedViewport}}</span>
          </div>
          <div class="btn-container">
            <b-button outlined type="is-primary" @click="copyValue" v-clipboard:copy="fixedViewport">Copy!</b-button>
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
      initialSize: undefined,
      fixedInitialSize: undefined,
      breakpoint: undefined,
      fixedBreakpoint: undefined
    }
  },
  computed: {
    viewport: function() {
      // unit = size * (100 / breakpoint)
      return `${(this.initialSize * (100 / this.breakpoint))}vh`
    },

    fixedViewport: function() {
      // unit = size * (100 / breakpoint)
      return `${(this.fixedInitialSize * (100 / this.fixedBreakpoint))}vh`
    }
  },

  mounted() {
    let that = this;
    if (process.browser) {
      that.breakpoint = window.innerHeight;

      window.addEventListener('resize', function () {
        that.breakpoint = window.innerHeight;
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
