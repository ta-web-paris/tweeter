<template>
  <div id="app">
    <section class="section">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
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
