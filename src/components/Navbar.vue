<template>
  <div class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <div v-if="activeMenu">
      <div class="x_block">
        <div class="x">
<font-awesome-icon icon="fa-solid fa-x" @click="toggleMenu"/>
        </div>
        <div>
          <ul>
            <li>Abbigliamento letto</li>
            <li>Abbigliamento casa</li>
            <li>Abbigliamento outdoor</li>
            <li>Esci</li>
          </ul>
        </div>
        
      </div>
    </div>
    <div class="row" v-if="!activeMenu">
      <div class="col_left">
        <div class="logo"><strong>LOGO</strong></div>
      </div>
      <div class="col_right">
        <div class="ul_menu">
          <font-awesome-icon icon="fa-regular fa-user " />
          <font-awesome-icon icon="fa-regular fa-heart" />
          <font-awesome-icon icon="fas fa-shopping-bag" />
          <font-awesome-icon icon="fa-solid fa-bars" @click="toggleMenu"/>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavbar:true,
      lastScrollPosition: 0,
      activeMenu:false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop; // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      } // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition; // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;
      this.activeMenu = false;
  
    },
    toggleMenu(){
       this.activeMenu = !this.activeMenu;
    }
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: 2px solid #f5f5f5;
  padding-top: 20px;
  transition: all 2s ease;
 

  .row {
    display: flex;
    padding: 5px 0;
    width: 100%;
  }

  .col_left,
  .col_right {
    width: 50%;
  }
  .col_left {
    text-align: left;
  }

  .col_right {
    text-align: right;
    .ul_menu {
      padding-right: 10px;
    }
  }

  .svg-inline--fa {
    margin: 0 5px;
  }
  .fa-bars {
    display: none;
  }
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translateY(-100%);
}

@media only screen and (max-width: 375px) {
  
  .navbar {
    width: 100%;
    max-width: 375px;
    min-width: 230px;
    padding-top: 10px;

   
    .fa-bars {
      display: inline;
    }

    .x_block{
      position: absolute;
      height: 300px;
      width: 100%;
      background: white;
      z-index: 1;
    }
    ul{
     list-style: none;
      padding: 0 10px;
      text-align: left;
      li{
        padding:4px 0;
      }
    }
    .x{
      text-align: right;
      padding-right:5px;
    }
  }
  

}
</style>
