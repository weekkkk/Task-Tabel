<template>
  <div class="tableRow">
    <div>{{row.name}}</div>
    <div>{{row.age}}</div>
    <div>{{row.post}}</div>
    <div>{{row.phone}}</div>
    <div>{{row.profession}}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Emit, Prop } from "vue-property-decorator";
import { PropType } from "@vue/runtime-core";
import RowType from "@/types/RowType";
@Options({
  components: {}
})
export default class TableRow extends Vue {
  @Prop({required: true, type: Object as PropType<RowType>}) row: any;

  // @Emit() removePost() {
  //     return this.row;
  // }
}
</script>

<style scoped>
.tableRow {
  display: flex;
}
.tableRow div {
  padding: 15px 30px;
}
</style>