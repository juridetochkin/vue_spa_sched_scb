<template>
  <q-page class="q-pa-lg">

    <h6 class="q-mt-none">Проставление смены</h6>

    <div class="q-pa-md">

      <div class="row justify-center">
        <div style="display: flex; width: 100%">
          <q-calendar-resource
            outlined
            bordered
            hoverable
            hour24-format

            locale="ru-Ru"
            ref="calendar"
            v-model="selectedDate"
            v-model:model-resources="resources"
            resource-key="id"
            resource-label="name"

            cell-width="auto"

            interval-minutes="60"
            interval-start="2"
            interval-count="20"
            @change="onChange"
            @moved="onMoved"
          ></q-calendar-resource>
        </div>
      </div>

    </div>


  </q-page>
</template>

<script>
import {QCalendarResource, today} from '@quasar/quasar-ui-qcalendar/src/index.js'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarResource.sass'

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'WSAssigner',
  components: {
    QCalendarResource
  },
  data() {
    return {
      selectedDate: today(),
      resources: [
        {id: '1', name: 'Доступно'},
        {id: '2', name: 'Доступно'}
      ]
    }
  },
  methods: {
    onMoved(data) {
      console.log('onMoved', data)
    },
    onChange(data) {
      console.log('onChange', data)
    }
  }
})
</script>
