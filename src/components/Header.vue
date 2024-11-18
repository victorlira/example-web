<script setup>
import { ref } from 'vue'

const usuario = ref('user@gmail.com')

</script>

<template lang="">
    <div class="topnav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="news">News</RouterLink>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>

        <a class="user-email" href="#">{{usuario}}</a>
    </div>
</template>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav a.user-email{
    float: right;
}
</style>