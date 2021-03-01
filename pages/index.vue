<template>
  <section class="section">
    <div class="columns is-mobile">
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
        title="Advanced Options VW"
        icon="alert-decagram"
        link="/advanced-vw"
      >
       Adv VW
      </card>

      <card
        title="Advanced Options VH"
        icon="arrange-bring-to-front"
        link="/advanced-vw"
      >
        No other internal dependency
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
