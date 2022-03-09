<template>
  <div class="footer">
    <div class="row flex_wrap">
      <div class="col-50">
        <div class="row">
          <div class="col-25 d_small"></div>
          <div class="col-25">
            <div class="footer_list">
              <h3>Compratori</h3>
              <ul>
                <li>Catalogo</li>
                <li>Promo</li>
                <li>Brands</li>
              </ul>
            </div>
          </div>
          <div class="col-25 d_small"></div>
          <div class="col-25">
            <div class="footer_list px-10">
              <h3>Chi siamo</h3>
              <ul>
                <li>Azienda</li>
                <li>Notizie</li>
                <li>Team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-50">
        <div class="row">
          <div class="col-25 d_small"></div>
          <div class="col-50">
            <h3>Vieni a sapere per primo</h3>
            <input
              class="input_address"
              placeholder="Indirizzo di posta elettronica"
              v-validate="'required|email'"
              name="email"
              type="text"
            />
            <div class="error">{{ errors.first("email") }}</div>

            <div class="btn_box">
              <button class="btn_sign">Iscriviti</button>
            </div>
          </div>
          <div class="col-25 d_small"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 50px;
  margin-bottom: 100px;
  color: #939393;
  .row {
    display: flex;
  }
  .col-50 {
    width: 50%;
    text-align: left;
  }
  .col-25 {
    width: 25%;
    .footer_list {
      text-align: left;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          padding: 5px 0;
        }
      }
    }
  }
  input {
    padding: 15px 20px;
    border: none;
    border-bottom: 1px solid #939393;
    font-weight: bold;
    margin-right: 20px;
    width: 100%;
  }

  .btn_box {
    text-align: right;
  }
  .btn_sign {
    margin-top: 30px;

    background: white;
    border: 1px solid #939393;
    margin-right: 10px;
    padding: 4px 14px;
    position: relative;
  }
  input:focus {
    outline: none;
  }
  .error {
    color: red;
  }
}

@media only screen and (max-width: 375px) {
  .footer {
    font-size: 12px;
    .row{
      padding-left: 10px;
      padding-right: 10px;
    }
    height: auto;
    .col-50 {
      width: 100%;
      padding-bottom:20px;
    }
    .col-25 {
      width: 50%;
    }
    .flex_wrap {
      flex-wrap: wrap;
    }
    .d_small {
      display: none;
    }
    .px-10{
      padding-left:10px;
    }
    
  }
}
</style>
