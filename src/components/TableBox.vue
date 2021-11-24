<template>
  <div class="tableBox">
    <table-row v-for="row in rows" :row="row" :key="row.id"/>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Emit, Prop } from "vue-property-decorator";
import { PropType } from "@vue/runtime-core";
import TableRow from "@/components/TableRow.vue";
import RowType from "@/types/RowType";

@Options({
  components: {TableRow}
})

export default class TableBox extends Vue {
  @Prop({required: true, type: Array as PropType<RowType[]>}) rows: any;
  
  // @Emit() removePost(post: RowType) {
  //     return post;
  // }
}
</script>

<style scoped>
.tableBox {
  display: flex;
  flex-direction: column;
}
</style>