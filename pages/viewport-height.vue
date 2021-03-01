<template>
  <div class="container">
    <div class="nest">
      <h1>Viewport Height Calculator</h1>
      <div>
        <b-field label="Pixel Size">
          <b-input type="number" name="size" placeholder="Initial Size" v-model="initialSize"></b-input>
        </b-field>
        <b-field label="Viewport Size">
          <b-input type="number" name="size" placeholder="Viewport Size" v-model="breakpoint"></b-input>
        </b-field>
        <div v-if="viewport != 0">
          <span class="result__label">Viewport: </span>
          <span class="result__value">{{viewport}}<small>vw</small></span>
        </div>
      </div>
    </div>
    <div class="nekako">
      <h1>Viewport Height Calculator (Fixed Breakpoint)</h1>
      <div>
        <b-field label="Pixel Size">
          <b-input type="number" name="size" placeholder="Initial Size" v-model="initialSize"></b-input>
        </b-field>
        <b-field label="Viewport Size">
          <b-input type="number" name="size" placeholder="Viewport Size" v-model="fixedBreakpoint"></b-input>
        </b-field>
        <div v-if="fixedViewport != 0">
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
      initialSize: Number,
      maxSize: Number,
      breakpoint: Number,
      fixedBreakpoint: Number
    }
  },
  computed: {
    viewport: function() {
      // unit = size * (100 / breakpoint)
      return (this.initialSize * (100 / this.breakpoint))
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
