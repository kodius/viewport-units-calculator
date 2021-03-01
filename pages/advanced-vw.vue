<template>
  <div class="container">
    <div class="nest">
      <h1>Advanced VW Calculator</h1>
      <div>
        <b-field label="Min Font Size">
          <b-input type="number" name="size" placeholder="Initial Size" v-model="minFontSize"></b-input>
        </b-field>
         <b-field label="Max Font Size">
          <b-input type="number" name="size" placeholder="Initial Size" v-model="maxFontSize"></b-input>
        </b-field>
        <b-field label="Screen Size from">
          <b-input type="number" name="size" placeholder="Viewport Size" v-model="screenSizeFrom"></b-input>
        </b-field>
        <b-field label="Screen Size to">
          <b-input type="number" name="size" placeholder="Viewport Size" v-model="screenSizeTo"></b-input>
        </b-field>
        <div>
          <span class="result__label">Viewport: </span>
          <span class="result__value">{{viewport}}<small>vw</small></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
    return {
      minFontSize: Number,
      maxFontSize: Number,
      screenSizeFrom: Number,
      screenSizeTo: Number
    }
  },
  computed: {
    viewport: function() {
      // unit = size * (100 / breakpoint)
      return `font-size: calc(${this.minFontSize} + ${this.maxFontSize - this.minFontSize} * ((100vw - ${this.screenSizeFrom}) / ${this.screenSizeTo - this.screenSizeFrom}));`
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
}
</script>
