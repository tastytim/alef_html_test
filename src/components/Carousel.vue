<template>
  <div class="carousel">
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
      selectedImage: 0,
    };
  },
  methods: {
    changeImage(index) {
      this.selectedImage = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  padding-right: 10px;
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
}
@media only screen and (max-width: 375px) {
  .carousel {
    height: 50%;
    img {
      width: 100%;
      height: 500px;
    }
    .cards {
      img {
        width: 50px;
        height: 71px;
      }
    }
  }
}

</style>
