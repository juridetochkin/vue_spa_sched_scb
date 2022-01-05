<template>
  <q-page class="q-pa-lg">

    <h6 class="q-mt-none">Загрузка потребности (от ОТП)</h6>

    <div class="q-pa-md" style="max-width: 300px">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >

        <q-input
          filled
          v-model="date"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Закрыть" color="primary" flat></q-btn>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-file
          filled
          counter
          bottom-slots
          max-files="1"
          label="Вложение"
          v-model="model"
        >
          <template v-slot:append>
            <q-icon name="folder_open"></q-icon>
          </template>

          <template v-slot:hint>
            Файл .xlsx / .xls
          </template>
        </q-file>

        <div>Последнее обновление: 3 ноября 2021</div>

        <div>
          <q-btn label="Загрузить" type="submit" color="primary"></q-btn>
          <q-btn label="Отмена" type="reset" color="primary" flat class="q-ml-sm"/>
        </div>
      </q-form>

    </div>

  </q-page>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DemandUpload'
})
</script>
