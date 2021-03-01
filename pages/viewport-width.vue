<template>
  <div class="vw-calculator-container">
    <div class="dynamic-breakpoint">
      <h1>Viewport Width Calculator</h1>
      <div>
        <b-field label="Pixel Size">
          <b-numberinput controls-rounded type="is-dark" v-model="initialSize"></b-numberinput>
        </b-field>
        <b-field label="Viewport Size">
          <b-numberinput controls-rounded type="is-dark" v-model="breakpoint"></b-numberinput>
        </b-field>
        <div v-if="initialSize != 1">
          <span class="result__label">Viewport: </span>
          <span class="result__value">{{viewport}}<small>vw</small></span>
        </div>
      </div>
    </div>
    <div class="fixed-breakpoint">
      <h1>Viewport Width Calculator (Fixed Breakpoint)</h1>
      <div>
        <b-field label="Pixel Size">
          <b-numberinput controls-rounded type="is-dark" v-model="fixedInitialSize"></b-numberinput>
        </b-field>
        <b-field label="Viewport Size">
          <b-numberinput controls-rounded type="is-dark" v-model="fixedBreakpoint"></b-numberinput>
        </b-field>
        <div v-if="fixedViewport != (0 || 1)">
          <span class="result__label">Viewport: </span>
          <span class="result__value">{{fixedViewport}}<small>vw</small></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
    return {
      initialSize: 1,
      fixedInitialSize: 1,
      maxSize: 1,
      breakpoint: 1,
      fixedBreakpoint: 1
    }
  },
  computed: {
    viewport: function() {
      // unit = size * (100 / breakpoint)
      return (this.initialSize * (100 / this.breakpoint))
    },

    fixedViewport: function() {
      // unit = size * (100 / breakpoint)
      return (this.fixedInitialSize * (100 / this.fixedBreakpoint))
    }
  },

  mounted() {
    let that = this;
    this.breakpoint = document.getElementById('__nuxt').offsetWidth;
    window.addEventListener('resize', function () {
      that.breakpoint = document.getElementById('__nuxt').offsetWidth;
    });
  }
}
</script>

<style scoped lang="scss">
  .vw-calculator-container {
    display: flex;
    justify-content: space-between;

    .dynamic-breakpoint, .fixed-breakpoint {
      width: 45%;
    }
 }
</style>