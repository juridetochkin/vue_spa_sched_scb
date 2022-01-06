<template>
  <q-page class="q-pa-lg">

    <h6 class="q-mt-none">Проставление смены</h6>

    <div class="q-pa-md">

      <div class="row justify-center">
        <div style="display: flex; max-width: 800px; width: 100%">
          <q-calendar-resource
            ref="calendar"
            v-model="selectedDate"
            v-model:model-resources="resources"
            resource-key="id"
            resource-label="name"
            animated
            bordered
            @change="onChange"
            @moved="onMoved"
            @click-resource="onClickResource"
            @click-head-resources="onClickHeadResources"
            @click-interval="onClickInterval"
          />
        </div>
      </div>

    </div>


  </q-page>
</template>

<script>
import { QCalendarResource, today } from '@quasar/quasar-ui-qcalendar/src/index.js'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarResource.sass'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WSAssigner',
  components: {
    QCalendarResource
  },
  data () {
    return {
      selectedDate: today(),
      resources: [
        { id: '1', name: 'John' }
      ]
    }
  },
  methods: {
    onPrev () {
      this.$refs.calendar.prev()
    },
    onNext () {
      this.$refs.calendar.next()
    },
    onMoved (data) {
      console.log('onMoved', data)
    },
    onChange (data) {
      console.log('onChange', data)
    },
    onClickResource (data) {
      console.log('onClickResource', data)
    },
    onClickInterval (data) {
      console.log('onClickInterval', data)
    }
  }
})
</script>
