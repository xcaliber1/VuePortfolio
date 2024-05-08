<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-brand">MyPortfolio</div>
      <label for="navbar-toggle" class="navbar-toggle-label" @click="toggleMenu">&#9776;</label>
      <div class="navbar-menu" ref="navbarMenu">
        <router-link to="/" @click="closeMenu">Home</router-link>
        <router-link to="/sports" @click="closeMenu">Sports</router-link>
        <router-link to="/movies_music" @click="closeMenu">Movies & Music</router-link>
        <router-link to="/languages" @click="closeMenu">Programming Languages</router-link>
        <router-link to="/contacts" @click="closeMenu">Contacts</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      const navbarMenu = this.$refs.navbarMenu;
      navbarMenu.style.display = navbarMenu.style.display === 'none' || navbarMenu.style.display === '' ? 'flex' : 'none';
    },
    closeMenu() {
      if (window.innerWidth <= 768) {
        const navbarMenu = this.$refs.navbarMenu;
        navbarMenu.style.display = 'none';
      }
    },
    checkScreenSize() {
      const navbarMenu = this.$refs.navbarMenu;
      if (window.innerWidth > 768) {
        navbarMenu.style.display = 'flex';
      } else {
        navbarMenu.style.display = 'none';
      }
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
}

.navbar {
  background-color: #4CAF50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.navbar-brand {
  color: white;
  font-size: 1.5rem;
}

.navbar-menu {
  display: flex;
}

.navbar-menu a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

.navbar-toggle-label {
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
  display: none;
}

/* Adjusted media query */
@media screen and (max-width: 768px) {
  .navbar-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #4CAF50;
  }

  .navbar-menu a {
    padding: 10px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .navbar-toggle-label {
    display: block; /* Show hamburger menu */
  }
}
</style>
