<template>
  <div>
    <img
      class="card_image"
      :src="require('../assets/images/' + selectedImage + '.jpg')"
      alt=""
    />
    <div class="cards">
      <img
        v-for="(image, index) in images"
        :key="index"
        clas=""
        :src="require('../assets/images/' + image + '.jpg')"
        alt=""
        @click="changeImage(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [0, 1, 2, 3, 4],
      selectedImage: 1,
    };
  },
  methods: {
    changeImage(index) {
      this.selectedImage = index;
    },
  },
  mounted: {},
};
</script>

<style lang="scss" scoped>



  img {
    width: 100%;
    height: 686px;
  }
.cards {
  position: absolute;
  left: 5%;
  top: 5%;
  display: flex;
  flex-direction: column;
  width: 25%;
  img {
    width: 70px;
    height: 91px;
    padding: 2px 0;
  }
}
</style>
