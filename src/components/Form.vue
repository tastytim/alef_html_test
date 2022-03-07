<template>
  <div class="form">
    <h3>Pigiama per bambina</h3>
    <p class="p">Articolo. 02765/46</p>
    <div class="d_flex">
      <span class="recens">Recensioni</span>
      <font-awesome-icon
        v-for="item in 4"
        :key="item"
        icon="fa-solid fa-star"
      /><font-awesome-icon icon="fa-regular fa-star" />
      <div>14 recensioni</div>
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </div>
    <div class="d_flex">
      <h2>800 <font-awesome-icon icon="fa-solid fa-ruble-sign" /></h2>
      <h4>1500 <font-awesome-icon icon="fa-solid fa-ruble-sign" /></h4>
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </div>
    <div class="d_flex">
      <button class="badge">sconto -36%</button>
      <button class="badge red_badge">promo -20%</button>
    </div>
    <select name="" id="" value="Selezionare misura">
      <option value="Selezionare misura">Selezionare misura</option>
    </select>
    <div class="text_underline">Calcola misura</div>

    <div class="d_flex">
      <div class="d_flex">
        <button class="button_grey">+</button>
        <button class="button_grey">1</button>
        <button class="button_grey">-</button>
      </div>
      <div class="d_flex">
        <button class="button_black_cart">Aggingi nel carello</button>
        <button class="button_black">
          <font-awesome-icon icon="fa-regular fa-heart" />
        </button>
      </div>
    </div>

    <div class="text_underline">Compra in 1 click</div>
    <hr />

    <table>
      <tr>
        <td><font-awesome-icon icon=" fa-solid fa-shirt" /></td>
        <td><span class="text_underline">Descrizione prodotto</span></td>
      </tr>
      <tr>
        <td><font-awesome-icon icon=" fa-regular fa-clock" /></td>
        <td><span class="text_underline">Consegna e reso</span></td>
      </tr>
      <tr>
        <td><font-awesome-icon icon=" fa-regular fa-credit-card" /></td>
        <td><span class="text_underline"> Pagamenti disponibili</span></td>
      </tr>
    </table>
   
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.form {
  padding: 20px 20px;
  text-align: left;
}
p {
  color: #929292;
  font-size: 12px;
}
.d_flex {
  display: flex;
  align-items: center;
}

.fa-star {
  padding: 0 3px;
  font-size: 10px;
}

.recens {
  padding-right: 15px;
}

.fa-chevron-right {
  padding: 2px 9px;
}

h4 {
  color: #929292;
  padding: 0 10px;
  font-weight: 100;
}
.badge {
  background: white;
  border: 1px solid black;
  margin-right: 10px;
  padding: 4px 4px;
  position: relative;
}

.red_badge::after {
  content: "1560";
  position: absolute;
  background: #f24822;
  font-weight: bold;
  border-radius: 4px;
  width: 40px;
  height: 20px;
  line-height: 20px;
  top: 0;
  right: 0;
  color: white;
  display: inline;
  transform: translate(-15%, -100%);
}

select,
option {
  background: white;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 20px;
  padding: 12px 12px;
}

.text_underline {
  text-decoration-line: underline;
  padding-top: 10px;
  text-decoration-color: #929292;
  padding-bottom: 30px;
}

.button_grey {
  padding: 15px 15px;
  background: #f2f2f2;
  justify-content: center;
  align-items: center;
  border: 1px solid #f2f2f2;
}

.button_grey:nth-child(3) {
  margin-right: 20px;
}

.button_black_cart {
  padding: 15px 20px;
  background: #333333;
  border: 1px solid #333333;
  color: white;
  font-weight: bold;
  margin-right: 20px;
}

.button_black {
  padding: 15px 15px;
  background: #333333;
  border: 1px solid #333333;
  color: white;
  .fa-heart {
    font-size: 15px;
    font-weight: bold;
  }
}

hr {
  color: #e1e1e1;
  margin: 20px 0;
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
  li {
    .fa-shirt,
    .fa-clock,
    .fa-credit-card {
      margin-right: 15px;
    }
  }
}

td {
  border-bottom: 12px solid transparent;
}

</style>
