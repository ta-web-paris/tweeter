<template>
  <div id="app">
    <NavBar/>
    <section class="section">
      <router-view/>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Tweeter</strong> by Ironhack WebDev Cohort (c) 2018</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import api from './api';

export default {
  components: { NavBar },

  created() {
    const user = api.loadUser();
    if (user) this.$root.user = user;
  },
};
</script>

