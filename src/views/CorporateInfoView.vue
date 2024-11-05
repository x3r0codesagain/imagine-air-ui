<template>
    <div>
        <NavBar/>
        <div class="mx-4 my-5">
            <span class="font-sans text-blue-900 text-3xl font-bold">Corporate Info</span>
        </div>
        <div class="content my-5" >
            <div class="mx-4 my-5 grid grid-cols-2 grid-flow-row-dense bg-slate-100 rounded-t-xl py-10">
                <div class="col-span-1 flex items-center justify-center">
                    <img class="w-4/12" src="@/assets/seat.png" alt="">
                </div>
                <div class="col-span-1">
                    <div class="flex flex-wrap w-9/12 justify-start h-full">
                        <div class="flex align-top h-fit">
                            <span class="text-3xl text-blue-900 font-bold font-sans text-start">About Us</span>
                        </div>
                        <div class="flex align-middle h-auto">
                            <span class="text-xl text-blue-900 font-normal font-sans text-justify">Imagine Air brings affordable travel to everyone. We’re dedicated to making air travel simple, safe, and enjoyable, offering low fares without compromising on quality. Our modern fleet and friendly crew ensure a comfortable journey from takeoff to landing. Where will you Imagine next? Let’s fly there together!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mx-4 my-5 grid grid-cols-2 grid-flow-row-dense bg-white py-10">
                <div class="col-span-1">
                    <div class="flex flex-wrap w-9/12 ml-32 justify-start h-full">
                        <div class="flex align-top h-fit">
                            <span class="text-3xl text-blue-900 font-bold font-sans text-start">Careers</span>
                        </div>
                        <div class="flex flex-wrap align-middle h-auto">
                            <span class="text-xl text-blue-900 font-normal font-sans text-justify w-full">Join Imagine Air and help make affordable travel a reality! We’re looking for dedicated individuals across all areas—pilots, cabin crew, ground staff, and corporate roles. Be part of a team that values innovation, teamwork, and service excellence. Ready to take your career to new heights? Explore our openings today!</span>
                            <div class="w-full">

                            </div>
                            <a href="https://www.linkedin.com/" class="w-full mt-2">
                                <span class="text-xl text-blue-500 font-normal font-sans text-justify underline">Click Here</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 flex items-center justify-center">
                    <img class="w-4/12" src="@/assets/career.png" alt="">
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<style>
</style>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue';
export default {
    name: 'CorporateView',
    components: {
        NavBar,
        Footer,
    },
    methods: {
    }
}
</script>