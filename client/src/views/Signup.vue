<template>
  <section>
    <form>
      <b-field label="Name">
          <b-input v-model="name"></b-input>
      </b-field>

      <b-field label="Username">
          <b-input maxlength="30" required icon="account"></b-input>
      </b-field>

      <b-field label="Password">
          <b-input type="password"
            required
            icon="lock"
              password-reveal>
          </b-input>
      </b-field>
      <button class="button is-primary">Signup</button>
    </form>
  </section>
</template>
