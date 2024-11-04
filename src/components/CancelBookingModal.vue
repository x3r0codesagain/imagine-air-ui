<template>
    <div class="w-6/12 outline outline-slate-100 bg-white justify-center">
        <div class="flex flex-wrap items-center justify-center p-3">
            <span class="text-3xl font-sans font-bold text-red-700">Cancellation Confirmation</span>
            <div class="w-full">

            </div>
            <span class="mt-5 text-xl font-sans font-semibold text-red-700">Are you sure you want to cancel this booking</span>
            <div class="w-full">

            </div>
            <span class="mt-2 text-xl font-sans font-semibold text-red-700">This action cannot be reversed</span>
            <div class="w-full">

            </div>

            <div class="mt-5">
                <button class="button bg-white outline-blue-900 outline px-5 py-2 text-blue-900 font-sans font-bold text-lg" @click="bringMeBack()">Bring Me Back</button>
                <button class="ml-5 button bg-red-700 px-5 py-2 text-white outline outline-red-700 font-sans font-bold text-lg hover:outline-double hover:outline-red-700 hover:bg-white hover:text-red-700" @click="cancelBooking()">Confirm Cancel</button>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
export default {
    name: "CancelModal",
    props: [
        "bookingCode",
    ],
    data() {

    },
    methods: {
        bringMeBack(){
            this.$emit("close-modal", false);
        },
        async cancelBooking() {
            try {
                const response = await axios.post('http://localhost:8080/api/v1/booking/public-all-access/cancel',
                {
                bookingCode: this.bookingCode,
                },
                {
                headers: {
                    'Content-type': 'application/json',
                }
                });
            if(response.data.errorCode!=null) {
                this.$toast.open({
                message: response.data.errorMessage,
                type: 'error'
                });
                this.$emit("close-modal", true);
            } else {
                this.$toast.open({
                    message: 'Booking has been cancelled',
                    type: 'success'
                });
                router.push('/');
            }
        
            } catch(error) {
            console.log('error: '+error);
            }
        },
    },
    mounted() {

    }
}
</script>