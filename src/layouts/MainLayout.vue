<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        ></q-btn>

        <q-toolbar-title class="q-pa-md">
          Планировщик смен ВКЦ
        </q-toolbar-title>

<!--        <div class="text-subtitle1 q-pa-md" align="right">-->
<!--          <div>Тен Александр Владимирович</div>-->
<!--          <div>Менеджер</div>-->
<!--        </div>-->
        <div>
          <q-btn flat color="white" icon="logout">{{ this.$q.platform.is.mobile ? "" : "Выйти" }}</q-btn>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      bordered
      show-if-above
      no-swipe-open
      class="column"
      v-model="leftDrawerOpen"
    >

      <div class="q-pa-lg">
        <div class="text-weight-bold">Тен Александр Владимирович</div>
        <div>Менеджер</div>
        <q-separator spaced></q-separator>
      </div>

      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        ></EssentialLink>
      </q-list>

      <q-space></q-space>

      <div class="flex flex-center q-pa-md">
        <img
          alt="Sovcom logo"
          src="~assets/scb-logo.svg"
        >
      </div>

    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Загрузка потребности (от ОТП)',
    icon: 'upload',
    link: '/upload-demand'
  },
  {
    title: 'Потребность фактическая',
    icon: 'table_chart',
    link: '/fact-demand'
  },
  {
    title: 'Логирование изменений смен',
    icon: 'history',
    link: '/changelog'
  },
  {
    title: 'Корректировка графика сотруднику',
    icon: 'edit',
    link: 'employees'
  },
  {
    title: 'Проставление смены',
    icon: 'edit',
    link: 'assigner'
  },
  {
    title: 'График',
    icon: 'event_note',
    link: 'schedule'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
