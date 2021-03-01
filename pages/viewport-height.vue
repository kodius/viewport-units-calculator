<template>
  <div class="vw-calculator-container">
    <div class="dynamic-breakpoint">
      <h1>Pixel to VH Converter (Dynamic Breakpoint)</h1>
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
      <h1>Pixel to VH Converter (Fixed Breakpoint)</h1>
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
      breakpoint: 978,
      fixedBreakpoint: 978
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
