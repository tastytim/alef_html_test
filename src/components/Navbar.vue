<template>
  <div class="navbar">
    <div class="row">
      <div class="col_left">
        <div class="logo"><strong>LOGO</strong></div>
      </div>
      <div class="col_right">
        <div class="ul_menu">
          <font-awesome-icon icon="fa-regular fa-user " />
          <font-awesome-icon icon="fa-regular fa-heart" />
          <font-awesome-icon icon="fas fa-shopping-bag" />
          <!-- <font-awesome-icon icon="fa-solid fa-chevron-right" />
          <font-awesome-icon icon="fa-solid fa-ruble-sign" />
          <font-awesome-icon icon="fa-solid fa-star" />
          <font-awesome-icon icon="fa-regular fa-star" />
          <font-awesome-icon icon="fa-solid fa-shirt" />
          <font-awesome-icon icon="fa-regular fa-clock" />
          <font-awesome-icon icon="fa-regular fa-credit-card" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  padding :5px 0;
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
}

.svg-inline--fa {
  margin: 0 5px;
}

.navbar{
  border-bottom: 2px solid #F5F5F5;
}

</style>
