<template>
  <q-page class="q-pa-lg">

    <h6 class="q-mt-none">Загрузка потребности (от ОТП)</h6>

    <div class="q-pa-md" style="max-width: 300px">

      <q-form
        class="q-gutter-md"
        @reset="onReset"
        @submit="onSubmit"
      >
        <q-input
          v-model="selectedDate"
          dense
          fill-mask
          filled
          mask="date"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                cover
                transition-hide="scale"
                transition-show="scale"
              >
                <q-date
                  v-model="selectedDate"
                  :landscape="$q.screen.gt.xs"
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Закрыть" color="primary" flat></q-btn>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:hint>
            Введите или выберите дату. ( гггг/мм/дд )
          </template>
        </q-input>

        <q-file
          v-model="model"
          bottom-slots
          counter
          dense
          filled
          label="Вложение"
          max-files="1"
        >
          <template v-slot:append>
            <q-icon name="folder_open"></q-icon>
          </template>

          <template v-slot:hint>
            Файл .xlsx / .xls
          </template>
        </q-file>

        <div class="column">
          <div>Последнее обновление:</div>
          <div>3 ноября 2021 12:00:12</div>
        </div>

        <div>
          <q-btn color="primary" label="Загрузить" type="submit"></q-btn>
          <q-btn class="q-ml-sm" color="primary" flat label="Отмена" type="reset"></q-btn>
        </div>
      </q-form>

    </div>

  </q-page>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DemandUpload',
  data() {
    return {
      selectedDate: String
    }
  }
})
</script>
