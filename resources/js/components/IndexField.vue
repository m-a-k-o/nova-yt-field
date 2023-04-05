<template>
    <span>
        <img v-if="fieldValue" :src="'https://img.youtube.com/vi/' + fieldValue + '/default.jpg'" style="object-fit: cover;" class="rounded-full w-8 h-8" alt="YouTube Image Preview" />
        <span v-else>&mdash;</span>
    </span>
</template>

<script>
export default {
  props: ['resourceName', 'field'],

  computed: {
    fieldValue() {
      return this.field.displayedAs || this.field.value
    },
  }
}
</script>
