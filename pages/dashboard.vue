<!-- ==========================| TEMPLATE |========================== -->
<template>
    
  <div class="bg-slate-800 " > 

    <h1 class="m-5">Dashboard</h1>

    <div class="md:flex">
        <div class="flex flex-row w-full bg-gray-950 p-1">

            <!-- =====================| Table |====================-->
            <div class="basis-3/4 rounded bg-gray-400 p-4 ">
                <p> Div 1</p>
                <div class="p-4 flex justify-center bg-gray-600">
                    <h1 class="text-3xl font-bold"> Patient Diet Lists</h1>
                </div>
                <div>
                    <dataTable /> 
                </div>
                
            </div>
            <!-- =====================| END |====================-->


            <!-- ===================== Menu |====================-->
            <div class="basis-1/4 rounded bg-gray-400 p-4" >
                <p> Div 2</p>
                <div class="MymenuItem">
                    <label>Filter</label> <br>
                    <label for="dietType">Diet Type:  </label>
                    <select v-model="dietType" @change="filterDietType" id="dietType" class="MydropDown">
                        <option v-for="option in options" :key="option.value" :value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
            </div>
            <!-- =====================| END |====================-->

        </div>
            

    </div>
    
    
    <div class="p-4 bg-slate-400">

    </div>

  </div>
</template>

<!-- ==========================| SCRIPT |========================== -->
<script setup>

//IMPORTS
import dataTable from '~/components/dataTable.vue'
import { ref } from 'vue'


const dietType = ref('A')

const options = ref([
  { text: 'Low Sugar', value: 'A' },
  { text: 'High Sugar', value: 'B' },
  { text: 'Red Meat', value: 'C' }
])


</script>

<!-- ===========================| STYLE |=========================== -->
<style scoped>

.divv2{
    min-width: 5rem;
}



</style>