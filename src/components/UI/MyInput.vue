<template>
  <input type="text" :value="modelValue" @input="updateInput" class="input">
</template>

<script lang="ts">
import { Vue, Emit, Prop } from "vue-property-decorator";

export default class MyInput extends Vue {
    @Prop({type: String}) modelValue: any;
    
    @Emit("update:modelValue") updateInput(event: any) {
        return event.target.value;
    }
}
</script>

<style>

</style>