<template>
  <div v-if="currentRoute === '/'" class="display-content">
    <router-link
      :to="'/' + partner.products.replace('.json', '')"
      :key="index"
      v-for="(partner, index) of partners"
      class="card card-restaurant"
    >
      <img
        :key="index"
        :src="require(`@/assets/${partner.image}`)"
        alt="image"
        class="card-image"
      />
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title">{{ partner.name }}</h3>
          <span class="card-tag tag">{{ partner.time_of_delivery }} мин</span>
        </div>
        <!-- /.card-heading -->
        <div class="card-info">
          <div class="rating">{{ partner.stars }}</div>
          <div class="price">От {{ partner.price }} ₽</div>
          <div class="category">{{ partner.kitchen }}</div>
        </div>
        <!-- /.card-info -->
      </div>
      <!-- /.card-text -->
    </router-link>
  </div>

  <div v-else><router-view /></div>
  <!-- /.card -->
</template>
<script>
import partnersGroups from '@/db/partners.json';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
  name: 'CardProduct',

  data() {
    return {
      partners: []
    };
  },
  mounted() {
    this.partners = partnersGroups;
  },
  setup() {
    const route = useRoute();

    const currentRoute = computed(() => route.path);

    return {
      currentRoute
    };
  }
};
</script>
