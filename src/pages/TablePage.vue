<template>
  <form-row @create-row="createRow"/>
  <table-box :rows="table.rows" />
  <!-- <p>dsdsad</p> -->
</template>

<script lang="ts">
import { Vue, Options, Emit, Prop } from "vue-property-decorator";
import { PropType } from "@vue/runtime-core";
import TableBox from "@/components/TableBox.vue";
import RowType from "@/types/RowType";
import TableClass from "@/class/TableClass";
import FormRow from "@/"

@Options({
  components: {TableBox}
})

export default class TablePage extends Vue {
  table = new TableClass([{
    id: 1,
    name: "Имя",
    age: "Возраст",
    post: "Должность",
    phone: "Телефон",
    profession: "Специальность" 
  }]);
  createRow(row: RowType) {
    this.table.createRow(row);
  }
}
</script>

<style>

</style>