<template>
  <p class="content">
    <pre>{{ secret }}</pre>
  </p>
</template>

<script>
import api from '../api';

export default {
  data() {
    return {
      secret: null,
    };
  },

  created() {
    api.getSecret().then(secret => {
      this.secret = secret;
    });
  },
};
</script>
