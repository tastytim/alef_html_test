<template>
  <div class="section_b">
    <div class="row">
      <div class="col_left">
        <img :src="require('../assets/images/0.jpg')" alt="" />
      </div>

      <div class="col_right">
        <div class="img_card" v-for="(image,index) in images" :key="index">
          <img
            :src="require('../assets/images/' + image + '.jpg')"
            :alt="image"
          />
          <div  v-if="selectedImageEqual(index)" class="layer_opacity">
            <div class="layer_copy">
              <font-awesome-icon icon="fa-regular fa-copy" />
            </div>

            <div class="layer_cart">
              <div class="shop_bag">
                <font-awesome-icon icon="fas fa-shopping-bag" />
              </div>
              <div class="layer_text">Vuoi sapere cosa ho</div>
            </div>

            <div class="layer_heart">
              <span><font-awesome-icon icon="fa-solid fa-heart" /></span>
              <span>200</span>
            </div>
          </div>
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
      selectedImage:2,
    };
  },
  methods:{
    selectedImageEqual(index){
      return this.selectedImage == index;
    }
  }
};
</script>

<style lang="scss" scoped>
.section_b {
  padding: 20px 0;
  height: 550px;
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
    img {
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
    .img_card {
      width: calc(50% - 5px);
      height: calc(50% - 5px);
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .layer_opacity {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      color: white;
      background: rgba(143, 145, 143, 0.6);
      .layer_cart {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        p {
          margin: 2px 0;
        }
        .shop_bag {
          font-size: 20px;
        }
      }
      .layer_copy {
        position: absolute;
        top: 5%;
        right: 5%;
        font-size: 20px;
      }
      .layer_heart{
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translate( -50% , 0);
        font-size: 20px;
        .fa-heart{
          padding:0 7px;
        }
      }
    }
  }
}

@media only screen and (max-width: 375px) {
 .section_b{
   .row{
     flex-wrap: wrap;
   }
   height: auto;
   .col_left,
   .col_right{
     width: 100%;
   }
   .col_left{
     img{
       height: 300px;
     }
   }
   .col_right{
     height: 300px;
   }
   .layer_opacity{
     display: none;
   }
 }

  
}
</style>
