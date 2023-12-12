<template>
  <div class="maincontainer">
    <div class="loginFormContainer">
      <form @submit.prevent="registerStudent">
        <div class="heading"><h1>REGISTER</h1></div>

        <div class="container">
          <label for="name"><b>Name</b></label>
          <input
            v-model="name"
            type="text"
            placeholder="Enter student name"
            name="name"
            required
          />

          <label for="emailid"><b>Email-id</b></label>
          <input
            v-model="emailid"
            type="emailid"
            placeholder="Enter Email-id"
            name="emailid"
            required
          />

          <label for="seatno"><b>Seat Number</b></label>
          <input
            v-model="seatno"
            type="text"
            placeholder="Enter Seat Number"
            name="seatno"
            required
          />

          <label for="city"><b>Enter City</b></label>
          <input
            v-model="city"
            type="text"
            placeholder="Enter your current city"
            name="city"
            required
          />
          <label for="password"><b>password</b></label>
          <input
            v-model="password"
            type="password"
            placeholder="Create password"
            name="password"
            required
          />
          <button type="submit">Register</button>
          <!-- <label><input type="checkbox" checked="checked" name="remember" /> Remember me</label> -->
        </div>
        <div class="container">
          <router-link to="/login">Already have an account? Login here</router-link>
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
        name: '',
        seatno:'',
        emailid:'',
        password: '',
        city:''
      };
    },
    methods: {
      async registerStudent() {
        try {
        let credentialpayload = {
          name: this.name,
          seatno:this.seatno,
          emailid:this.emailid,
          password: this.password,
          city:this.city
        }
        let result = await axios.post('http://localhost:3000/auth/register',credentialpayload)
          console.log('token from local storage --->',result)
          this.$router.push('/login');
      } catch (error) {
        console.error('Login failed:', error.response.data);
      }
      }
    }
  };
  </script>

<style scoped>
  @import './auth.css'
</style>