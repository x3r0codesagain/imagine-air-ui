<template>
    <CustomHeader/>
    <div id="content" class="px-5 py-5 my-5 bg-[url(@/assets/paper_plane.png)] bg-contain bg-no-repeat">
        <div class="">
            <span class="text-blue-900 font-bold font-sans text-3xl block">Your Booking Has Been Confirmed</span>
            <span class="text-blue-800 font-semibold font-sans text-xl block mt-4">{{ 'PNR: ' +  this.booking.bookingCode}}</span>

            <div class="flex">
                <div class="print">
                    <form @submit.prevent="printPage('content')">
                        <button type="submit" class="btn bg-blue-900 w-44 outline-blue-500 outline outline-double text-white font-bold hover:bg-blue-400 p-2 rounded mt-5">Print Itenary</button>
                    </form>
                </div>
                <div class="home-btn">
                    <a href="/">
                        <button type="submit" class="btn bg-white outline-red-500 outline outline-double w-44 text-red-500 ml-5 font-bold hover:bg-blue-400 p-2 rounded mt-5">Home</button>
                    </a>
                </div>
            </div>
            
            <span class="text-blue-800 font-semibold font-sans text-xl block mt-5">Flights</span>

            <span class="text-blue-800 font-semibold font-sans text-md block mt-4">{{"Flight 1. " + this.booking.outboundFlight.number}}</span>
            <div class="grid grid-cols-3 grid-flow-row-dense w-9/12 outline p-6 mt-2 bg-white">
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
            <span class="text-blue-800 font-semibold font-sans text-md block mt-7" v-if="this.booking.returnFlight != null">{{"Flight 2. " + this.booking.returnFlight.number}}</span>
            <div class="grid grid-cols-3 grid-flow-row-dense w-9/12 outline p-6 mt-2 bg-white" v-if="this.booking.returnFlight != null">
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

            <span class="text-blue-800 font-semibold font-sans text-xl block mt-10">Passengers</span>
            <div class="w-9/12 outline p-6 mt-2 bg-white">
                <div class="w-full bg-slate-100">
                    <span class="text-blue-900 text-lg font-sans font-semibold">
                        {{this.booking.outboundFlight.number}}
                    </span>
                </div>
                <div v-for="(passenger, index) in this.booking.passengers" :key="passenger.idType" class="mt-5">
                    <span class="text-blue-800 text-lg font-sans font-semibold">{{ (index+1) + '. ' + passenger.givenName + ' ' + passenger.surname }}</span>
                    <div class="block px-6 mt-2">
                        <span class="text-blue-800 text-md font-sans font-normal block">{{ 'Seat: '+ passenger.outboundSeat}}</span>
                        <span class="text-blue-800 text-md font-sans font-normal block">Checked Bags: 20 Kg / 2pcs</span>
                        <span class="text-blue-800 text-md font-sans font-normal block">Carry On Bags: 7 Kg / 1pcs</span>
                    </div>
                </div>
                <div v-if="this.booking.returnFlight != null" class="mt-5">
                    <div class="w-full bg-slate-100">
                        <span class="text-blue-900 text-lg font-sans font-semibold">
                            {{this.booking.returnFlight.number}}
                        </span>
                    </div>
                    <div v-for="(passenger, index) in this.booking.passengers" :key="passenger.idType" class="mt-5">
                        <span class="text-blue-800 text-lg font-sans font-semibold">{{ (index+1) + '. ' + passenger.givenName + ' ' + passenger.surname }}</span>
                        <div class="block px-6 mt-2">
                            <span class="text-blue-800 text-md font-sans font-normal block">{{ 'Seat: '+ passenger.returnSeat}}</span>
                            <span class="text-blue-800 text-md font-sans font-normal block">Checked Bags: 20 Kg / 2pcs</span>
                            <span class="text-blue-800 text-md font-sans font-normal block">Carry On Bags: 7 Kg / 1pcs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <span class="text-blue-900 font-sans font-bold text-xl">Travel information (Entry Requirements, Visa, etc) click </span>
            <a href="#" class="text-blue-400 font-sans font-bold text-xl underline">here</a>
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
                returnFlight: {
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
        printPage(page) {
            var printContents = document.getElementById(page).innerHTML;
            let stylesHtml = '';
            for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
                stylesHtml += node.outerHTML;
            }
            const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

            WinPrint.document.write(`<!DOCTYPE html>
            <html>
            <head>
                ${stylesHtml}
            </head>
            <body>
                ${printContents}
            </body>
            </html>`);

            WinPrint.document.close();
            WinPrint.focus();
            WinPrint.print();
            WinPrint.close();
        },
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