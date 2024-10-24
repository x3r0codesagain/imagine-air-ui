<template>
    <CustomHeader/>
    <div class="px-5 py-5 my-5 bg-[url(@/assets/paper_plane.png)] bg-contain bg-no-repeat">
        <div class="">
            <span class="text-blue-900 font-bold font-sans text-3xl block">Booking Confirmation</span>
            <span class="text-blue-800 font-semibold font-sans text-xl block mt-4">{{ 'PNR: ' +  this.booking.bookingCode}}</span>
            <span class="text-blue-800 font-semibold font-sans text-xl block mt-10">Flights</span>

            <span class="text-blue-800 font-semibold font-sans text-md block mt-7">{{"Flight 1. " + this.booking.outboundFlight.number}}</span>
            <div class="grid grid-cols-3 grid-flow-row-dense w-6/12 outline p-2 mt-2 bg-white">
                <div class="col-span-1">
                    <div class="flex items-start justify-start flex-wrap">
                        <span class="text-blue-800 font-semibold font-sans text-2xl block mt-2">{{this.booking.outboundFlight.originCode}}</span>
                        <div class="w-full">

                        </div>
                        <span class="text-blue-800 font-semibold font-sans text-md block mt-2">{{ this.booking.outboundFlight.origin + " (" + this.booking.outboundFlight.departDate + ")"}}</span>
                        <div class="w-full">

                        </div>
                        <span class="text-blue-800 font-semibold font-sans text-md block mt-2">{{this.booking.outboundFlight.departLocalTime}}</span>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="flex items-center justify-center mt-2 h-full">
                        <FontAwesomeIcon :icon="['fas', 'plane']" class="fas-plane block" />
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="flex items-start justify-start flex-wrap">
                        <span class="text-blue-800 font-semibold font-sans text-2xl block mt-2">{{this.booking.outboundFlight.arrivalCode}}</span>
                        <div class="w-full">

                        </div>
                        <span class="text-blue-800 font-semibold font-sans text-md block mt-2">{{ this.booking.outboundFlight.destination + " (" + this.booking.outboundFlight.arriveDate + ")"}}</span>
                        <div class="w-full">

                        </div>
                        <span class="text-blue-800 font-semibold font-sans text-md block mt-2">{{this.booking.outboundFlight.arriveLocalTime}}</span>
                    </div>
                </div>
            </div>
            <span class="text-blue-800 font-semibold font-sans text-md block mt-7">{{"Flight 2. " + this.booking.returnFlight.number}}</span>
            <div class="grid grid-cols-3 grid-flow-row-dense w-6/12 outline p-2 mt-2 bg-white">
                <div class="col-span-1">
                    <div class="flex items-start justify-start flex-wrap">
                        <span class="text-blue-800 font-semibold font-sans text-2xl block mt-2">{{this.booking.returnFlight.originCode}}</span>
                        <div class="w-full">

                        </div>
                        <span class="text-blue-800 font-semibold font-sans text-md block mt-2">{{ this.booking.returnFlight.origin + " (" + this.booking.returnFlight.departDate + ")"}}</span>
                        <div class="w-full">

                        </div>
                        <span class="text-blue-800 font-semibold font-sans text-md block mt-2">{{this.booking.returnFlight.departLocalTime}}</span>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="flex items-center justify-center mt-2 h-full">
                        <FontAwesomeIcon :icon="['fas', 'plane']" class="fas-plane block" />
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="flex items-start justify-start flex-wrap">
                        <span class="text-blue-800 font-semibold font-sans text-2xl block mt-2">{{this.booking.returnFlight.arrivalCode}}</span>
                        <div class="w-full">

                        </div>
                        <span class="text-blue-800 font-semibold font-sans text-md block mt-2">{{ this.booking.returnFlight.destination + " (" + this.booking.returnFlight.arriveDate + ")"}}</span>
                        <div class="w-full">

                        </div>
                        <span class="text-blue-800 font-semibold font-sans text-md block mt-2">{{this.booking.returnFlight.arriveLocalTime}}</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <FooterSimple/>
</template>

<script>
import CustomHeader from '@/components/CustomHeader.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import FooterSimple from '@/components/FooterSimple.vue';
import axios from 'axios';
export default {
    name: 'ConfirmationView',
    components: {
        CustomHeader,
        FontAwesomeIcon,
        FooterSimple,
    },
    data() {
        return {
            booking: {
                bookingCode: String,
                travelClass: String,
                outboundPrice: null,
                returnPrice: null,
                totalPrice: 0,
                totalPax: 0,
                outboundFlight: {
                    number: String,
                    origin: String,
                    destination: String,
                    originCode: String,
                    arrivalCode: String,
                    departDate: String,
                    arriveDate: String,
                    departLocalTime: String,
                    arriveLocalTime: String,
                    flightHours: 0,
                    flightMinutes: 0
                },
                "returnFlight": {
                    number: String,
                    origin: String,
                    destination: String,
                    originCode: String,
                    arrivalCode: String,
                    departDate: String,
                    arriveDate: String,
                    departLocalTime: String,
                    arriveLocalTime: String,
                    flightHours: 0,
                    flightMinutes: 0,
                },
                passengers: [
                    {
                        salutation: String,
                        givenName: String,
                        surname: String,
                        birthDate: String,
                        gender: String,
                        idNumber: String,
                        idType: String,
                        seat: String
                    }
                ],
                bookingContact: {
                    salutation: String,
                    givenName: String,
                    surname: String,
                    phoneNo: String,
                    email: String
                }
            }
        }
    }, 
    methods: {
        getBooking() {
            const urlParams = new URLSearchParams(window.location.search);
            var bookingCode = urlParams.get('code');
            return axios.get('http://localhost:8080/api/v1/booking/public-all-access/getBooking',
                { params : {
                    'code': bookingCode
                }
                    
                },
                { headers: {
                'Content-type': 'application/json',
                }
            }).then((response) => {
                if (response.data.errorCode != null) {
                    this.$toast.open({
                        message: response.data.errorMessage,
                        type: 'error'
                    });
                } 
                this.booking = response.data.value 
            }).catch( error => { 
                console.log('error: ' + error); 
            });
            
        }
    },
    mounted() {
        this.getBooking();
    }
}
</script>