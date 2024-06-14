<template>
    <div class="flex flex-row gap-4">
      <ul class="list-disc list-inside w-full bg-white p-4 rounded-lg shadow-md space-y-10 dark:bg-gray-950 dark:text-white" >
          <NuxtLink to="/dashboard" class="pi pi-home w-full"> Dashboard </NuxtLink>
          <NuxtLink to="/" class="pi pi-users w-full"> Patient Lists </NuxtLink>
          <NuxtLink to="/dietList" class="pi pi-ticket w-full"> Diet Lists </NuxtLink>
          <NuxtLink to="/" class="pi pi-chart-bar w-full"> Reports </NuxtLink>
          <Button label="a" class="btn1"/>
      </ul>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style>
  
  </style>