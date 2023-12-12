<template>
  <div class="main-container">
    <div class="hall-ticket">
      <div class="ticket-header">
        <h1>Exam Hall Ticket</h1>
        <p v-if="students">
          <span class="student-details">Seat No: {{ students.seatno }}</span></p>
      </div>
      <div class="student-details" v-if="students">
        <h2>Student Details</h2>
        <p>Name: <span class="student-details">{{ students.name }}</span></p>
        <p>Email: <span class="student-details">{{ students.emailid }}</span></p>
        <p>City: <span class="student-details">{{ students.city }}</span></p>
      </div>
      <div class="student-details" v-if="students">
        <h2>Exam Details</h2>
        <p>Exam Date:<span class="student-details"> 11.00 AM </span> </p>
        <p>Exam Time:<span class="student-details"> 01.00 PM </span></p>
        <p>Exam Center:<span class="student-details"> {{ students.nearestCity }}</span></p>
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      students: null
    };
  },
  async created() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const jwtToken = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/student/center', {
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json'
          }
        });
        const data = response.data.data;
        this.students = data;
        console.log(this.students);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
  
<style scoped>
@import './dashboard.css';


</style>
  