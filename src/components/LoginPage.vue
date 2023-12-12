<template>
  <div class="maincontainer">
    <div class="loginFormContainer">
      <form @submit.prevent="login">
        <div class="heading"><h1>LOGIN</h1></div>
        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input
            v-model="username"
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label for="psw"><b>Password</b></label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit">Login</button>
          <label><input type="checkbox" checked="checked" name="remember" /> Remember me</label>
        </div>
        <div class="container">
          <router-link to="Register">Don't have an account? Register here</router-link>
        </div>
        <div class="container" style="background-color: #f1f1f1">
          <button type="button" class="cancelbtn">Cancel</button>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        let credentialpayload = {
          emailid : this.username,
          password: this.password
        }
        let result = await axios.post('http://localhost:3000/auth/login',credentialpayload)
        
          localStorage.setItem('token',result.data.token)
          const token = localStorage.getItem('token')
          console.log('token from local storage --->',token)
          this.$router.push('/register');
      } catch (error) {
        console.error('Login failed:', error.response.data);
      }
      
    }
  }
}
</script>

<style scoped>
  @import './auth.css'
</style>
