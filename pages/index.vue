<template>
  <section class="section">
    <div class="columns is-mobile card-container">
      <card
        title="Viewport Width"
        icon="account"
        link="/viewport-width"
      >
        VW
      </card>

      <card
        title="Viewport Height"
        icon="rocket"
        link="/viewport-height"
      >
        VH
      </card>

      <card
        title="Advanced Options"
        icon="arrange-bring-to-front"
        link="/advanced-options"
      >
      Advanced
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  }
}
</script>
