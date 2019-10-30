<script>
export default {
  name: 'Contact',
  data() {
    return {
      address: '9274 Beurre Ave, Paris, France',
      email: 'hello@cafewithavue.bakery',
      phone: '+08 88 88 88 88 88'
    }
  }
}
</script>

<template>
  <div>
    <h2>Contact Us</h2>
    <p>Address: {{ address }}</p>
    <p>Phone: {{ phone }}</p>
    <p>Email: {{ email }}</p>
    <p>Hours:</p>
    <ul>
      <li>M-F: 06:00 to 16:00</li>
      <li>Saturday: 07:00 to 14:00</li>
      <li>Sunday: 07:00 to 12:00</li>
    </ul>
  </div>
</template>

<style></style>
