<template>
<div class="form">
  <my-input
  v-model="row.row.name"
  />
  <my-input
  v-model="row.row.age"
  />
  <my-input
  v-model="row.row.post"
  />
  <my-input
  v-model="row.row.phone"
  />
  <my-input
  v-model="row.row.profession"
  />
  <my-button @click="createRow">Добавить</my-button>
</div>
</template>

<script lang="ts">
import { Vue, Options, Emit } from "vue-property-decorator";
import MyInput from "@/components/UI/MyInput.vue"
import MyButton from "@/components/UI/MyButton.vue"
import RowClass from "@/class/RowClass"

@Options({
  components: {MyInput, MyButton}
})
export default class FormRow extends Vue {
  row = new RowClass({
    id: 1,
    name: "",
    age: 0,
    post: "",
    phone: 0,
    profession: "" 
  });
    
  @Emit() createRow() {
    this.row.row.id = Date.now();
    return Object.assign({}, this.row.row);
  }
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
}
</style>