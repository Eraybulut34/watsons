<template>
<div>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Ana Sayfa</b-nav-item>
        <b-nav-item to="/kitaplar">Kitaplar</b-nav-item>
              </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       

       

       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <Nuxt/>
</div>
</template>
<script>
export default {
    data() {
        
    },
}
</script>
