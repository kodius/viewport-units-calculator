<template>
    <div class="container">
    <h1>Viewport Width Calculator</h1>
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
</template>

<script>
export default {
    data: function() {
    return {
      initialSize: 10,
      maxSize: 20,
      breakpoint: 1920
    }
  },
  computed: {
    viewport: function() {
      // unit = size * (100 / breakpoint)
      return (this.initialSize * (100 / this.breakpoint))
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
