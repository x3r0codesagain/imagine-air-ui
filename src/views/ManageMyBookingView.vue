<template>
    <NavBar/>

    <div class="bg-[url(@/assets/paper_plane.png)] bg-contain bg-no-repeat w-full">
        <div class="mx-4 my-5">
            <span class="font-sans text-blue-900 text-3xl font-bold">Booking Details</span>
            <span class="font-sans text-blue-900 text-xl font-semibold block mt-2">{{ 'PNR: ' + this.booking.bookingCode }}</span>
            <button @click="moveToConfirmation" class="px-5 py-2 rounded-md outline-double outline-blue-900 font-sans text-blue-900 text-xl font-semibold block mt-2">Go to Booking Details</button>
        </div>

        <div class="mx-4 my-5">
            <span class="font-sans text-blue-900 text-3xl font-bold">My Booking</span>
        </div>

        <div>
            <div class="add-on-content my-5">
                <span class="ml-10 text-blue-900 font-bold font-sans text-2xl block">Seat Selection</span>
                <div class="ml-14">
                    <span class="text-blue-800 font-semibold font-sans text-lg block mt-2">{{'1. ' + this.booking.outboundFlight.number}}</span>
                    <div v-for="(pax, idx) in this.booking.passengers" :key="idx">
                        <span class="text-blue-800 font-semibold font-sans text-sm block mt-2">{{ (idx+1) + '. ' + pax.givenName + ' ' + pax.surname}}</span>
                        <div class="flex w-3/12 h-10 mt-2">
                            <div class="flex bg-slate-100 w-6/12 h-full rounded-l-md outline outline-2 outline-slate-200 items-center justify-center">
                                <span class="text-center w-full font-sans font-semibold text-md text-blue-900">{{pax.outboundSeat === "-" ? 'Select Seats ' : "Seat: " + pax.outboundSeat}}</span>
                            </div>
                            <button class="rounded-r-md outline outline-2 outline-slate-200 bg-slate-200 text-slate-400 font-sans font-semibold text-xl w-8 h-full" @click="this.showMap(pax.index)">&#10151;</button>
                        </div>
                    </div>
                </div>

                <div class="ml-14" v-if="this.booking.returnFlight != null">
                    <span class="text-blue-800 font-semibold font-sans text-lg block mt-5">{{'2. ' + this.booking.returnFlight.number}}</span>
                    <div v-for="(pax, idx) in booking.passengers" :key="idx">
                        <span class="text-blue-800 font-semibold font-sans text-sm block mt-2">{{ (idx+1) + '. ' + pax.givenName + ' ' + pax.surname}}</span>
                        <div class="flex w-3/12 h-10 mt-2">
                            <div class="flex bg-slate-100 w-6/12 h-full rounded-l-md outline outline-2 outline-slate-200 items-center justify-center">
                                <span class="text-center w-full font-sans font-semibold text-md text-blue-900">{{pax.returnSeat === "-" ? 'Select Seats ' : "Seat: " + pax.returnSeat}}</span>
                            </div>
                            <button class="rounded-r-md outline outline-2 outline-slate-200 bg-slate-200 text-slate-400 font-sans font-semibold text-xl w-8 h-full" @click="this.showMapReturn(pax.index)">&#10151;</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overlay justify-center" :class="showSeatMap == true ? 'block': 'none'">
                <div class="flex justify-center w-full">
                    
                    <div class="bg-white w-6/12 h-fit justify-center">
                        <SeatMap v-if="showSeatMap == true" :flightNumber="this.booking.outboundFlight.number" :depart-date="this.booking.outboundFlight.departDate" v-on:close-map="closeMap" v-on:chosen-seat="setSelectedSeat"/>
                    </div> 
                </div>
            </div>

            <div class="overlay justify-center" :class="showSeatMapReturn == true ? 'block': 'none'">
                <div class="flex justify-center w-full">
                    
                    <div class="bg-white w-6/12 h-fit justify-center">
                        <SeatMap v-if="showSeatMapReturn == true" :index="this.currIndex" :flightNumber="this.booking.returnFlight.number" :depart-date="this.booking.returnFlight.departDate" v-on:close-map="closeMapReturn" v-on:chosen-seat="setSelectedSeatReturn"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="my-10">
        <div class="mx-4 my-5">
            <span class="font-sans text-blue-900 text-3xl font-bold">Cancel Booking</span>
        </div>
        <button @click="openModalFunc" class="ml-5 outline outline-red-700 btn bg-red-700 px-5 py-2 font-sans text-white text-lg font-bold rounded-md">
            Cancel Booking
        </button>
    </div>

    <div class="overlay justify-center" :class="openModal == true ? 'block': 'none'">
        <div class="flex justify-center items-center align-center w-full h-full">
            <CancelBookingModal :bookingCode="this.booking.bookingCode" v-on:close-modal="closeModal"/>
        </div>
        
    </div>

    
    

    <Footer/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import SeatMap from '@/components/SeatMap.vue';
import router from '@/router';
import CancelBookingModal from '@/components/CancelBookingModal.vue';
export default {
    name: "ManageMyBookingView",
    components: {
        NavBar,
        Footer,
        SeatMap,
        CancelBookingModal
    },
    data() {
        return {
            showSeatMap: false,
            showSeatMapReturn: false,
            currIndex: 0,
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
                        index: 0,
                        salutation: String,
                        givenName: String,
                        surname: String,
                        birthDate: String,
                        gender: String,
                        idNumber: String,
                        idType: String,
                        outboundSeat: String,
                        returnSeat: String
                    }
                ],
                bookingContact: {
                    salutation: String,
                    givenName: String,
                    surname: String,
                    phoneNo: String,
                    email: String
                }
            },
            selectedSeats:[],
            selectedSeatsReturn:[],
            openModal: false,
        }
    },
    methods: {
        closeModal(e){
            this.openModal = e;
        },
        openModalFunc(){
            this.openModal = true;
        },
        async getMyBooking() {
            const urlParams = new URLSearchParams(window.location.search);
            var bookingCode = urlParams.get('code');
            var surname = urlParams.get('surname');
            try {
            const response = await axios.get('http://localhost:8080/api/v1/booking/public-all-access/getMyBooking',
              {
                params: {
                  'code': bookingCode,
                  'surname': surname
                }

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
            }
            this.booking=response.data.value;
          } catch(error) {
            console.log('error: '+error);
          }
        },
        showMap(idx){
            console.log("show map");
            this.showSeatMap = true;
            this.currIndex = idx;
        },
        showMapReturn(idx){
            console.log("show map return");
            this.showSeatMapReturn = true;
            this.currIndex = idx;
        },
        closeMap(e) {
            this.showSeatMap = e;
        },
        closeMapReturn(e) {
            this.showSeatMapReturn = e;
        },
        setSelectedSeat(e) {
            if (e == null) {
                return;
            }
            this.selectedSeats.push(e);
            this.assignSeat(this.booking.outboundFlight.departDate, this.booking.outboundFlight.number, e);
            console.log(e);
        },
        async assignSeat(departDate, flightNo, seat) {
            const urlParams = new URLSearchParams(window.location.search);
            var bookingCode = urlParams.get('code');
            try {
            const response=await axios.post('http://localhost:8080/api/v1/booking/public-all-access/seats/assign',
              {
                bookingCode: bookingCode,
                index: this.currIndex,
                departDate: departDate,
                flight: flightNo,
                seat: seat
              },
              {
                headers: {
                  'Content-type': 'application/json',
                }
              });
            this.passengers=[];
            if(response.data.errorCode!=null) {
              this.$toast.open({
                message: response.data.errorMessage,
                type: 'error'
              });
            }
            this.booking=response.data.value;
          } catch(error) {
            console.log('error: '+error);
          }
        },
        setSelectedSeatReturn(e) {
            if (e == null || e === "-") {
                return;
            }
            this.selectedSeatsReturn.push(e);
            this.assignSeat(this.booking.returnFlight.departDate, this.booking.returnFlight.number, e);
            console.log(e);
        },
        moveToConfirmation() {
            router.push({path: "/confirm", query: {
                code: this.booking.bookingCode
            }})
        },
    },
    mounted() {
        this.getMyBooking();
    }
}
</script>