<template>
  <q-page class="q-pa-lg">

    <h6 class="q-mt-none">Логирование изменений смен</h6>

    <div class="q-pa-md">

      <q-btn
        text-color="primary"
        class="text-weight-bold"
        :disable="loading"
        label="15 ноября 2021"
        @click="addRow"
      ></q-btn>

      <q-table
        dense
        hide-bottom
        row-key="name"
        separator="cell"
        class="q-my-md"
        :rows="rows"
        :columns="columns"
      ></q-table>


      <div class="row">
        <q-space></q-space>
        <q-btn color="primary" size="sm" class="text-weight-bold"
               label="Скачать excel"></q-btn>
      </div>

    </div>


  </q-page>
</template>


<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Час',
    align: 'center',
    headerClasses: 'bg-grey-1',
    field: 'name'
  },
  {name: 'calories', align: 'center', label: 'Потребность', field: 'calories'},
  {name: 'fat', align: 'center', label: 'Час', field: 'fat'},
  {name: 'carbs', align: 'center', label: 'Потребность', field: 'carbs'},
  {name: 'protein', align: 'center', label: 'Час', field: 'protein'},
  {name: 'sodium', align: 'center', label: 'Потребность', field: 'sodium'},
  {name: 'calcium', align: 'center', label: 'Час', field: 'calcium'},
  {name: 'iron', align: 'center', label: 'Проставлено часов', field: 'iron'},
  {name: 'calcium', align: 'center', label: '% удовлетворенности', field: 'calcium'},
  {name: 'iron', align: 'center', label: 'Дефицит/профицит', field: 'iron'},
  {name: 'calcium', align: 'center', label: 'Час', field: 'calcium'},
  {name: 'iron', align: 'center', label: 'Проставлено часов', field: 'iron'},
  {name: 'calcium', align: 'center', label: '% удовлетворенности', field: 'calcium'},
  {name: 'iron', align: 'center', label: 'Дефицит/профицит', field: 'iron'}
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]

import {defineComponent} from 'vue';

export default defineComponent({
  name: 'WSChangeLog',
  setup() {
    return {
      columns,
      rows
    }
  }
})
</script>
