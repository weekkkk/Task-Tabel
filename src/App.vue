<template>
  <div class="navBox">
    <button class="navElem" @click="$router.push('/')"><b>Main</b></button>
    <button class="navElem" @click="$router.push('/removeandeditrow')"><b>Create posts</b></button>
  </div>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import TablePage from "@/pages/TablePage.vue"
import { Vue, Options, Emit, Prop } from "vue-property-decorator";


@Options({
  components: {TablePage}
})

export default class App extends Vue {
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap');
* {
  font-family: 'Ubuntu', sans-serif;
}

</style>