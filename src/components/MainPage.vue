<template>
  <PageHeader />
  <ContentPage />
  <PageFooter />
  <PartFirstTest />
</template>

<script>
import PageFooter from '../components/PageFooter.vue';
import PageHeader from '../components/PageHeader.vue';
import PartFirstTest from '../components/PartFirstTest.vue';
import ContentPage from '../components/ContentPage.vue';
export default {
  name: 'MainPage',
  components: {
    PageFooter,
    ContentPage,
    PageHeader,
    PartFirstTest
  }
};
</script>
