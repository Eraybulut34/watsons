<template>
  <div>
    <div class="navbar">
      <div class="navbar-inner container">
        <div class="navbar-inner-pages ">
          <div class="pages-route">
            <img src="../static/store-icon.png" alt="">
            <span class="pages-text">Stores</span>
          </div>
          <div class="pages-route">
            <img src="../static/catalog-icon.png" alt="">
            <span class="pages-text">Catalogs</span>
          </div>
        </div>
        <div class="navbar-middle-text">
          <span>Watsons Beauty and Personal Care Awards Nominees!</span>
        </div>
        <div class="navbar-contact flex-row grid-1">
          <div class="navbar-contact-text">
            <span>Call us:(+90) 850 123 45 67</span>
          </div>
          <div class="navbar-contact-icon">
            <img src="../static/phone-icon.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <Nuxt />

    <div class="footer">

    </div>
  </div>


</template>
<script>
export default {
  data() {

  },
}
</script>


<style scoped>
.navbar {
  background-color: #505357;
  color: #fff;
  padding: 10px;
  height: 3.5rem;
  width: 100%;
}

.footer {
  background-color: white;
  color: #fff;
  padding: 10px;
  height: 27rem;
  border: 1px solid red;
}


.navbar-inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.navbar-inner-pages {
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 1rem;
}

.pages-route {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.pages-text {
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  margin-left: 0.5rem;
}

.navbar-middle-text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1rem;
  font-style: regular;
  color: rgba(236, 236, 236, 0.5);
}

.navbar-contact{
  font-size: 1rem;
}


@media screen and (max-width: 600px) {
  .navbar-inner {
    height: 10rem;
  }
  .navbar-inner {
    flex-direction: column;
  }
  .navbar-inner-pages {
    flex-direction: column;
  }
  .navbar-middle-text {
    display: none;
  }
  .navbar-contact {
    display: none;
  }
}
</style>