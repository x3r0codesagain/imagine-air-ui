<template>
    <div>
        <NavBar/>
        <div class="mx-4 my-5">
            <span class="font-sans text-blue-900 text-3xl font-bold">Manage Booking</span>
        </div>
        <div class="m-4 bg-slate-100 rounded-xl grid grid-cols-4 grid-flow-row-dense">
            <div class="col-span-2">
                <form @submit.prevent="" class="py-5 px-10">
                    <div class="block">
                        <label class="font-sans text-blue-900 text-lg font-bold" for="booking-code">Booking Code</label>
                        <input id="booking-code" placeholder="Enter Booking Code" type="text" class="font-sans bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 h-10">
                    </div>
                    <div class="block mt-4">
                        <label class="font-sans text-blue-900 text-lg font-bold" for="surname">Surname</label>
                        <input id="surname" placeholder="Enter Surname (Contact Person)" type="text" class="font-sans bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 h-10">
                    </div>
                    <div class=" mt-4 w-full">
                        <button class="bg-blue-900 hover:bg-white text-white hover:text-blue-900 text-xl font-semibold px-6 py-2 outline-double outline-white hover:outline-blue-900">Find Booking</button>
                    </div>
                </form>
            </div>
            <div class="col-span-2">
                <div class="py-5 -px-10">
                    <img src="@/assets/paper_plane.png" alt="">
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue';
// import router from '@/router';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: 'ManageBookingView',
    components: {
        NavBar,
        Footer
    },
}
</script>