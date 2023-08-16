<template>
  <transition name="modal">
    <div class="modal modal-cart" v-if="isModalOpen">
      <div class="modal-dialog">
        <div class="modal-header">
          <h3 class="modal-title">Корзина</h3>
          <button class="close" @click="closeModal">&times;</button>
        </div>
        <!-- /.modal-header -->
        <div class="modal-body" v-if="cartWithProducts.length">
          <div
            class="food-row"
            :key="index"
            v-for="(product, index) of cartWithProducts"
          >
            <span class="food-name">{{ product.name }}</span>
            <strong class="food-price">{{ product.price }} ₽</strong>
            <div class="food-counter">
              <button class="counter-button">-</button>
              <span class="counter">1</span>
              <button class="counter-button">+</button>
            </div>
          </div>
        </div>
        <!-- /.modal-body -->
        <div class="modal-footer">
          <span class="modal-pricetag"
            >{{ totalPriceProducts(cartWithProducts) }} ₽</span
          >
          <div class="footer-buttons">
            <button class="button button-primary">Оформить заказ</button>
            <button class="button clear-cart" @click="closeModal">
              Отмена
            </button>
          </div>
        </div>
        <!-- /.modal-footer -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </transition>
</template>

<script>
import { watchEffect, ref } from 'vue';
export default {
  props: ['isModalOpen', 'closeModal', 'selected'],

  setup(props) {
    const cartWithProducts = ref([]);

    watchEffect(() => {
      if (Object.keys(props.selected).length) {
        cartWithProducts.value.push(props.selected);
      }
    });

    return {
      cartWithProducts
    };
  },
  methods: {
    totalPriceProducts() {
      return this.cartWithProducts.reduce(
        (sum, product) => sum + product.price,
        0
      );

    }
  }
};
</script>
