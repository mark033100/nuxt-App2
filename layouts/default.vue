<!-- ==========================| SCRIPT |========================== -->
<script setup>

import {ref} from 'vue';
import {useRouter} from 'vue-router';
import sideBar from '~/components/sideBar.vue';
import 'primeicons/primeicons.css';

const colorMode = useColorMode();
const visible = ref(false);
const menu = ref();
const router = useRouter();

const items = ref([
    {
        items: [
            {
                label: 'Profile',
                icon: 'pi pi-fw pi-user',
                command: () => {
                    router.push('/profile');
                }
            },
            {
                label: 'Settings',
                icon: 'pi pi-fw pi-cog',
                command: () => { 
                    router.push('/misc/settings');
                }
            },
            {
                label: 'Logout',
                icon: 'pi pi-fw pi-power-off',
                command: () => {
                    router.push('/logout');
                }
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
}

</script>

<!-- ==========================| TEMPLATE |========================== -->
<template setup>

    <div>
        <header class="shadow-md bg-gray h-20">
            <nav class="container mx-auto p-4 flex justify-between">
                <div class="flex justify-start gap-5">
                    <h3>Project Title</h3>
                    <NuxtLink to="/">Home</NuxtLink>
                </div>
                <ul class="flex gap-4">
                    <button type="button" class="pi pi-user " @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"  ></button>
                    <PrimeMenu ref="menu" id="overlay_menu" :model="items" :popup="true" class="dark:bg-gray-900 dark:text-white p-menu"/>
                    <button class="pi pi-bars" @click="visible= true"></button>
                </ul>
            </nav>
        </header>

        <div class="card flex justify-content-center">
            <PrimeSidebar v-model:visible="visible" header="Menu Item" class=" md:w-20rem lg:w-30rem dark:bg-gray-950 dark:text-white dark:border-gray-700">
                <sideBar />
            </PrimeSidebar>
        </div>

    </div>

    <NuxtLoadingIndicator />
    <div class="p-10">
        <NuxtPage class="mx-auto p-4" />
    </div>
  
</template>

<!-- ==========================| STYLE |========================== -->
<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-gray-950 dark:text-gray-200;
}
</style>