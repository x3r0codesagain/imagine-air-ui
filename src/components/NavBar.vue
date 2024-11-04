<template>
    <div class="nav">
        <nav class="bg-gray-100">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <router-link to="/">
                                <div class="flex item-center">
                                    <img class="h-7 w-auto" src="@/assets/airplane-mode.png" alt="Your Company">
                                    <span class="font-semibold text-xl tracking-tight ml-3 text-black">Imagine Air</span>
                                </div>
                            </router-link>
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <router-link to="/" class="rounded-md hover:bg-gray-900 hover:text-white px-3 py-2 text-sm font-medium text-black">Find Flight</router-link>
                                <router-link to="/manage/booking" class="rounded-md hover:bg-gray-900 hover:text-white px-3 py-2 text-sm font-medium text-black">Manage Booking</router-link>
                                <router-link to="/" class="rounded-md hover:bg-gray-900 hover:text-white px-3 py-2 text-sm font-medium text-black">Travel With Us</router-link>
                                <router-link to="/" class="rounded-md hover:bg-gray-900 hover:text-white px-3 py-2 text-sm font-medium text-black">Corporate Info</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
</script>