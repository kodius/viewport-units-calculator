<template>
  <div class="page-container">
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          MENU
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-9">
        <nuxt />
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Created by <a href="">Kodius </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Viewport Width',
          icon: 'account',
          to: { name: 'viewport-width' }
        },
        {
          title: 'Viewport Height',
          icon: 'rocket',
          to: { name: 'viewport-height' }
        },
        {
          title: 'Advanced Options',
          icon: 'view-dashboard',
          to: { name: 'advanced-options' }
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/scss/global-styles.scss">
</style>