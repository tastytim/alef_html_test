<template>
  <div class="section_a">
    <div class="row">
      <div class="col col_left"><Carousel> </Carousel></div>
      <div class="col"><Form></Form></div>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Form from '../components/Form.vue';
export default {
  components:{
      Carousel,Form
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  height: 686px;
}
.section_a {
  padding: 20px 0;
}
.col {
  width: 50%;
}

.col_left {
  position: relative;
}

</style>
