<template>
  <div class="container">
    <h1 class="title">Can you get the secret?</h1>

    <p class="content">
      <button class="button is-success" @click="getSecret">Secret</button>
      <pre>{{ secret }}</pre>
    </p>

  </div>
</template>

<script>
import api from '../api';

export default {
  data() {
    return {
      secret: null,
    };
  },

  methods: {
    getSecret() {
      api.getSecret().then(secret => {
        this.secret = secret;
      });
    },
  },
};
</script>
