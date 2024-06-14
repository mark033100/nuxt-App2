<!-- ==========================| TEMPLATE |========================== -->
<template >
  <div class="card p-4 ">
    <DataTable showGridlines  :value="patients" tableStyle="min-width: 30rem;" paginator :rows="10"  >
      
      <!-- -----------------------| Search |--------------------------->
      <template #header>
            <div class="flex justify-content-end p-1">
                <PrimeIconField iconPosition="right" class="p-2">
                    <PrimeInputIcon>
                        <i class="pi pi-search mb-2 mr-2" />
                    </PrimeInputIcon>
                    <PrimeInputText placeholder="Search" class="searchBtn"/>
                </PrimeIconField>
            </div>
        </template>
        <Column field="hpercode" header="ID"></Column>
        <Column field="patname" header="Name"></Column>
        <Column field="patsex" header="Sex"></Column>
    </DataTable>
  </div>
</template>


<!-- ===========================| SCRIPT |========================== -->
<script setup>
import { useFetch } from '#app';
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';    

const { data: patients } = await useFetch('http://192.168.6.70:3001/api/test') 

const patientsData = ref(patients.value || []);
</script>



<!-- ==========================| STYLE |========================== -->
<style scoped>



</style>