<template>
  <div class="container my-2">
      <DynamicComponent />

    <div class="row">
      <FooterComponent />
    </div>
    <!-- <div class="row">
      <BookComponent />
    </div> -->
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import ContentComponent from './components/ContentComponent.vue'
import DynamicComponent from './components/DynamicComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import BookComponent from './components/BookComponent.vue'


export default {
  name: 'WrapperComponent',
  components: {
    HeaderComponent,
    ContentComponent,
    DynamicComponent,
    FooterComponent,
    BookComponent,
  },
}
</script>
