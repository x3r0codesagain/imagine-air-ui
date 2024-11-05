<template>
    <div>
        <NavBar/>
        <div class="mx-4 my-5">
            <span class="font-sans text-blue-900 text-3xl font-bold">Flying With Us</span>
        </div>
        <div class="content my-5" >
            <div class="mx-4 my-5 grid grid-cols-2 grid-flow-row-dense bg-slate-100 rounded-t-xl py-10">
                <div class="col-span-1 flex items-center justify-center">
                    <img class="w-4/12" src="@/assets/seat.png" alt="">
                </div>
                <div class="col-span-1">
                    <div class="flex flex-wrap w-9/12 justify-start h-full">
                        <div class="flex align-top h-fit">
                            <span class="text-3xl text-blue-900 font-bold font-sans text-start">Free Seat Selection</span>
                        </div>
                        <div class="flex align-middle h-auto">
                            <span class="text-xl text-blue-900 font-normal font-sans text-justify">Pick your preferred spot at no extra charge. Whether you want a window seat to catch the view, an aisle for easy access, or a seat with friends and family, it’s on us!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mx-4 my-5 grid grid-cols-2 grid-flow-row-dense bg-white py-10">
                <div class="col-span-1">
                    <div class="flex flex-wrap w-9/12 ml-32 justify-start h-full">
                        <div class="flex align-top h-fit">
                            <span class="text-3xl text-blue-900 font-bold font-sans text-start">Complimentary Snacks & Drinks</span>
                        </div>
                        <div class="flex align-middle h-auto">
                            <span class="text-xl text-blue-900 font-normal font-sans text-justify">Enjoy a range of tasty snacks and refreshing beverages during your flight, all free of charge. From light bites to quench-your-thirst drinks, our cabin crew is here to ensure you’re well cared for from takeoff to landing.</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 flex items-center justify-center">
                    <img class="w-4/12" src="@/assets/food.png" alt="">
                </div>
            </div>

            <div class="mx-4 my-5 grid grid-cols-2 grid-flow-row-dense bg-slate-100 py-10">
                <div class="col-span-1 flex items-center justify-center">
                    <img class="w-4/12" src="@/assets/credit-card.png" alt="">
                </div>
                <div class="col-span-1">
                    <div class="flex flex-wrap w-9/12 justify-start h-full">
                        <div class="flex align-top h-fit">
                            <span class="text-3xl text-blue-900 font-bold font-sans text-start">Simple, Affordable, & Reliable Travel</span>
                        </div>
                        <div class="flex align-middle h-auto">
                            <span class="text-xl text-blue-900 font-normal font-sans text-justify">With no hidden fees or surprises, our fares keep your budget in check without sacrificing the quality of your journey.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mx-4 my-5 grid grid-cols-2 grid-flow-row-dense bg-white py-10">
                <div class="col-span-1">
                    <div class="flex flex-wrap w-9/12 ml-32 justify-start h-full">
                        <div class="flex align-top h-fit">
                            <span class="text-3xl text-blue-900 font-bold font-sans text-start">Our Commitment to Safety</span>
                        </div>
                        <div class="flex align-middle h-auto">
                            <span class="text-xl text-blue-900 font-normal font-sans text-justify">Your well-being is our priority. We adhere to the highest safety standards and ensure that each flight is operated with thorough care, so you can relax and enjoy your journey with peace of mind.</span>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 flex items-center justify-center">
                    <img class="w-4/12" src="@/assets/aircraft-maintenance.png" alt="">
                </div>
            </div>

            <div class="mx-4 my-5 grid grid-cols-2 grid-flow-row-dense bg-slate-100 rounded-b-xl py-10">
                <div class="col-span-1 flex items-center justify-center">
                    <img class="w-4/12" src="@/assets/pax.png" alt="">
                </div>
                <div class="col-span-1">
                    <div class="flex flex-wrap w-9/12 justify-start h-full">
                        <div class="flex align-top h-fit">
                            <span class="text-3xl text-blue-900 font-bold font-sans text-start">Fly with Ease</span>
                        </div>
                        <div class="flex align-middle h-auto">
                            <span class="text-xl text-blue-900 font-normal font-sans text-justify">No extra hassle, just seamless and pleasant travel. Whether you're a frequent flyer or a first-time traveler, we’re here to make every journey a breeze.</span>
                        </div>
                    </div>
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
    name: 'TravelInfoView',
    components: {
        NavBar,
        Footer,
    },
    methods: {
    }
}
</script>