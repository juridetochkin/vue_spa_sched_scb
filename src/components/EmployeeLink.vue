<template>
  <q-item
    exact
    dense
    clickable
    :to="id"
  >
    <q-item-section avatar>
      <q-icon name="person"></q-icon>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ fullName }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'EmployeeLink',
  props: {
    id: {
      type: String,
      default: '',
      required: true
    },

    fullName: {
      type: String,
      required: true
    },
  }
})
</script>
