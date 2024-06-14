<template>

    <div class="p-4 pb-2 ">
        <div class="container content-evenly">
            <div class="p-4">
                <label class="mr-10">Select Theme:</label>
                <select
                    v-model="colorMode.preference"
                    class="rounded 2xl border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
        </div>
        
    </div>
    
  

</template>

<script setup>

const colorMode = useColorMode();


</script>

<style>

</style>