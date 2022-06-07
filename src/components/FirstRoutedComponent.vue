<template>
  <div class="container">
    <div class="row">
      <div class="col-12 h1">First Routed</div>
      <div class="col-12"><p>This is the first routed component</p></div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
export default {
  components: {
    HeaderComponent,
  },
}
</script>
