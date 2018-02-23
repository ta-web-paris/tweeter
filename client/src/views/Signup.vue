<template>
  <section>
    <form @submit.prevent="signup">
      <b-field label="Name">
          <b-input v-model="name"></b-input>
      </b-field>

      <b-field
        label="Username"
        :type="usernameError && 'is-danger'"
        :message="usernameError"
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
      <button class="button is-primary">Signup</button>
    </form>
  </section>
</template>

<script>
import api from '../api';

export default {
  data() {
    return {
      name: '',
      username: '',
      password: '',

      error: null,
    };
  },
  methods: {
    signup() {
      this.error = null;
      api
        .signup({
          name: this.name,
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/login');
        })
        .catch(err => {
          this.error = err;
        });
    },
  },

  computed: {
    usernameError() {
      if (!this.error) return null;
      if (this.error.name === 'UserExistsError') {
        return this.error.message;
      }
    },
  },
};
</script>
