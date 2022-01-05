<template>
  <q-page class="q-pa-lg">

    <h6 class="q-mt-none">Корректировка графика сотруднику</h6>

    <div class="q-pa-md">
      <q-list>
        <q-item-label header>Сотрудники</q-item-label>

        <EmployeeLink
          v-for="employee in employees"
          :key="employee.id"
          v-bind="employee"
        ></EmployeeLink>

      </q-list>
    </div>


  </q-page>
</template>


<script>
import EmployeeLink from "components/EmployeeLink";
let employees = [
  {id: 1, fullName: 'Тестов Тест Тестович'},
  {id: 2, fullName: 'Тестов Тест Тестович'},
  {id: 3, fullName: 'Тестов Тест Тестович'},
  {id: 4, fullName: 'Тестов Тест Тестович'},
  {id: 5, fullName: 'Тестов Тест Тестович'},
  {id: 6, fullName: 'Тестов Тест Тестович'},
  {id: 7, fullName: 'Тестов Тест Тестович'},
  {id: 8, fullName: 'Тестов Тест Тестович'},
  {id: 9, fullName: 'Тестов Тест Тестович'},
  {id: 10, fullName: 'Тестов Тест Тестович'},
  {id: 11, fullName: 'Тестов Тест Тестович'},
  {id: 12, fullName: 'Тестов Тест Тестович'},
  {id: 1, fullName: 'Тестов Тест Тестович'},
  {id: 2, fullName: 'Тестов Тест Тестович'},
  {id: 3, fullName: 'Тестов Тест Тестович'},
  {id: 4, fullName: 'Тестов Тест Тестович'},
  {id: 5, fullName: 'Тестов Тест Тестович'},
  {id: 6, fullName: 'Тестов Тест Тестович'},
  {id: 7, fullName: 'Тестов Тест Тестович'},
  {id: 8, fullName: 'Тестов Тест Тестович'},
  {id: 9, fullName: 'Тестов Тест Тестович'},
  {id: 10, fullName: 'Тестов Тест Тестович'},
  {id: 11, fullName: 'Тестов Тест Тестович'},
  {id: 12, fullName: 'Тестов Тест Тестович'},

]

import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Employees',
  components: {EmployeeLink},
  setup() {
    return {
      employees
    }
  }
})
</script>
