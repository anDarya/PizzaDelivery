<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">
            {{ restaurant.name }}
          </h2>
          <div class="card-info">
            <div class="rating">{{ restaurant.stars }}</div>
            <div class="price">От {{ restaurant.price }} ₽</div>
            <div class="category">{{ restaurant.kitchen }}</div>
          </div>
          <!-- /.card-info -->
          <div class="card-sort">
            <button
              class="button button-primary button-add-cart"
              @click="sortProduct('asc')"
            >
              Сначала дешевые
            </button>
            <button
              class="button button-primary button-add-cart"
              @click="sortProduct('desc')"
            >
              Сначала дорогие
            </button>
          </div>
          <!-- /.card sort products -->
        </div>
        <div class="cards cards-menu">
          <div class="card" :key="index" v-for="(product, index) of products">
            <img
              :src="require(`@/assets/${product.image}`)"
              alt="image"
              class="card-image"
            />
            <div class="card-text">
              <div class="card-heading">
                <h3 class="card-title card-title-reg">{{ product.name }}</h3>
              </div>
              <!-- /.card-heading -->
              <div class="card-info">
                <div class="ingredients">{{ product.description }}</div>
              </div>
              <!-- /.card-info -->
              <div class="card-buttons">
                <button
                  class="button button-primary button-add-cart"
                  id="show-modal"
                  @click="addToCart(product)"
                >
                  <span class="button-card-text">В корзину</span>
                  <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">{{ product.price }} ₽</strong>
              </div>
            </div>
            <!-- /.card-text -->
          </div>

          <!-- /.card -->
        </div>
        <!-- /.cards -->
      </section>
      <Teleport to="body">
        <CardModal
          :isModalOpen="isModalOpen"
          :closeModal="closeModal"
          :selected="selectedProduct"
        />
      </Teleport>
    </div>
    <!-- /.container -->
  </main>

  <!-- /.card -->
</template>
<script>
import data from '@/db/db.json';
import CardModal from '../modals/CardModal.vue';
import { useModal } from '../modals/hookModal';
export default {
  name: 'CardPartner',

  data() {
    return {
      products: [],
      restaurant: [],
      selectedProduct: []
    };
  },
  mounted() {
    this.products = data.db[this.restaurantName];
    this.restaurant = data.db.partners.find(
      (part) => part.products === this.restaurantName + '.json'
    );
  },
  computed: {
    restaurantName() {
      return this.$route.params.restaurant;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    addToCart(product) {
      this.openModal();
      this.selectedProduct = product;
    },
    sortProduct(direction) {
      this.products = this.products
        .slice()
        .sort((a, b) =>
          direction === 'asc' ? a.price - b.price : b.price - a.price
        );
    }
  },
  setup() {
    const { openModal, isModalOpen, closeModal } = useModal();
    return { openModal, isModalOpen, closeModal };
  },
  components: { CardModal }
};
</script>
