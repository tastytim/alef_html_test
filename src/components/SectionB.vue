<template>
  <div class="section_b">
    <div class="row">
      <div class="col_left">
        <img :src="require('../assets/images/0.jpg')" alt="" />
      </div>
      <div class="col_right">
        <img
          class="quad_img"
          v-for="image in images"
          :key="image"
          :src="require('../assets/images/' + image + '.jpg')"
          alt=""
        />
        <div class="layer">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [0, 1, 2, 3],
    };
  },
};
</script>

<style lang="scss" scoped>
.section_b {
  padding: 20px 0;
  height: 550px;
}
.row {
  display: flex;
  gap: 15px;
  height: 100%;
}
.col_left {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  img{
    height: 100%;
    width: 100%;
  }
}

.col_right {
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
  img{
    width: calc(50% - 5px);
    height: calc(50% - 5px);
    position: relative;
  }
  img:nth-child(3){
    opacity: 50%;
  }
  
}


</style>
