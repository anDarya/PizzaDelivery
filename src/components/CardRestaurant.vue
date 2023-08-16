<template>
  <section class="restaurants">
    <div class="section-heading">
      <a href="/" class="section-title">
        <h2 class="section-title">Рестораны</h2>
      </a>
      <label class="search">
        <input
          type="text"
          class="input input-search"
          placeholder="Поиск блюд и ресторанов"
        />
      </label>
    </div>
    <div class="cards cards-restaurants"><CardProduct /></div>
    <!-- /.cards -->
  </section>
</template>
<script>
import CardProduct from './CardProduct.vue';
export default {
  name: 'CardRestaurant',
  components: { CardProduct }
};
</script>
