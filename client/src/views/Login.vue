<template>
  <section>
    <b-notification type="is-danger" has-icon v-if="error">
      {{ error.error }}
    </b-notification>
    <form @submit.prevent="login">
      <b-field
        label="Username"
      >
          <b-input maxlength="30" v-model="username" required icon="account"></b-input>
      </b-field>

      <b-field label="Password">
          <b-input type="password"
            required
            v-model="password" 
            icon="lock"
            password-reveal>
          </b-input>
      </b-field>
      <button class="button is-primary">Login</button>
    </form>
  </section>
</template>

<script>
import api from '../api';

export default {
  data() {
    return {
      username: '',
      password: '',

      error: null,
    };
  },
  methods: {
    login() {
      this.error = null;
      api
        .login(this.username, this.password)
        .then(() => {
          this.$router.push('/');
        })
        .catch(err => {
          this.error = err;
        });
    },
  },
};
</script>
