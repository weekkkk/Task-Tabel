<template>
<form-row/>
</template>

<script lang="ts">
import FormRow from "@/components/FormRow.vue";
import { Vue, Options, Emit, Prop } from "vue-property-decorator";
@Options({
  components: {FormRow}
})

export default class TableRow extends Vue {

}
</script>

<style>

</style>