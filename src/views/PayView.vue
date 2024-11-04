<template>
    <CustomHeader />

    <div class="bg-[url(@/assets/paper_plane.png)] bg-contain bg-no-repeat">
        <div class="w-full px-10 py-5">
            <div class="add-on-content my-5">
                <span class="text-blue-900 font-bold font-sans text-3xl block">Add On</span>
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

                <div class="ml-14">
                    <span class="text-blue-800 font-semibold font-sans text-lg block mt-5">2. ID004</span>
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
            <span class="text-blue-900 font-bold font-sans text-3xl block">Payment</span>
            <div class="mt-10 w-9/12">
                <button class="outline outline-slate-200 bg-slate-100 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-2 px-4 rounded-t-lg w-full" v-on:click="showCredit()">
                Credit Card 
                </button>

                <div :class="hideCredit ? 'hidden' : 'block'">
                    <form class="mb-5" @submit.prevent="payCredit">
                        <div class="flex flex-wrap">
                            <label for="credit_no" class="text-lg text-blue-900 font-sans block mt-4">
                            Card No.
                            </label>
                            <div class="w-full">

                            </div>
                            <input id="credit_no" type="text" placeholder="Card Number" v-model="creditModel" maxlength="16"
                            class="required mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 inline-flex w-9/12 p-2.5 h-10">
                            <img :src="imageSource" alt="" class="w-12 h-15 flex ml-10">
                            <div class="w-full">

                            </div>
                            <label for="credit_cvv" class="text-lg text-blue-900 font-sans block mt-4">
                            CVV
                            </label>
                            <div class="w-full">

                            </div>
                            <input id="credit_cvv" maxlength="3" type="text" placeholder="CVV"
                            class="required mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 inline-flex w-4/12 p-2.5 h-10">
                            <div class="w-full">

                            </div>
                            <label for="credit_valid" class="text-lg text-blue-900 font-sans block mt-4">
                            Valid Thru
                            </label>
                            <div class="w-full">

                            </div>
                            <input id="credit_valid" maxlength="2" type="text" placeholder="MM"
                            class="required mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 inline-flex w-16 p-2.5 h-10">
                            <input id="credit_valid_year" maxlength="2" type="text" placeholder="YY"
                            class="required ml-8 mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 inline-flex w-16 p-2.5 h-10">
                            <div class="w-full">

                            </div>
                            <button type="submit" class="btn text-white bg-blue-900 w-44 py-2 px5 text-xl font-sans rounded mt-5">Pay</button>
                        </div>
                        
                    </form>
                </div>
            </div>

            <div class="mt-0 w-9/12">
                <button class="bg-slate-100 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-2 px-4 outline outline-slate-200 w-full" v-on:click="showDebit()">
                Debit Card 
                </button>

                <div :class="hideDebit ? 'hidden' : 'block'">
                    <form @submit.prevent="payDebit">
                        <div class="flex flex-wrap">
                            <label for="debit_no" class="text-lg text-blue-900 font-sans block mt-4">
                            Card No.
                            </label>
                            <div class="w-full">

                            </div>
                            <input id="debit_no" type="text" placeholder="Card Number" maxlength="16"
                            class="required mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 inline-flex w-9/12 p-2.5 h-10">
                            <img src="@/assets/credit-card.png" alt="" class="w-12 h-15 flex ml-10">
                            <div class="w-full">

                            </div>
                            <label for="debit_cvv" class="text-lg text-blue-900 font-sans block mt-4">
                            CVV
                            </label>
                            <div class="w-full">

                            </div>
                            <input id="debit_cvv" maxlength="3" type="text" placeholder="CVV"
                            class="required mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 inline-flex w-4/12 p-2.5 h-10">
                            <div class="w-full">

                            </div>
                            <label for="debit_valid" class="text-lg text-blue-900 font-sans block mt-4">
                            Valid Thru
                            </label>
                            <div class="w-full">

                            </div>
                            <input id="debit_valid" maxlength="2" type="text" placeholder="MM"
                            class="required mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 inline-flex w-16 p-2.5 h-10">
                            <input id="debit_valid_year" maxlength="2" type="text" placeholder="YY"
                            class="required ml-8 mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 inline-flex w-16 p-2.5 h-10">
                            <div class="w-full">

                            </div>
                            <button type="submit" class="btn text-white bg-blue-900 w-44 py-2 px5 text-xl font-sans rounded mt-5">Pay</button>
                        </div>
                        
                    </form>
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
    <FooterSimple/>
</template>

<style>
.overlay {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
</style>

<script>
import CustomHeader from '@/components/CustomHeader.vue'
import axios from 'axios';
import FooterSimple from '@/components/FooterSimple.vue';
import router from '@/router';
import SeatMap from '@/components/SeatMap.vue';

export default {
    name: 'PayView',
    components: {
        CustomHeader,
        FooterSimple,
        SeatMap
    },
    data() {
        return {
            hideCredit: false,
            hideDebit: true,
            creditNo: "",
            imageSource: null,
            creditModel: "",
            payResponse: {},
            showSeatMap: false,
            showSeatMapReturn: false,
            selectedSeats:[],
            selectedSeatsReturn:[],
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
            }
        }
    },
    methods: {
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
        assignSeat(departDate, flightNo, seat) {
            const urlParams = new URLSearchParams(window.location.search);
            var bookingCode = urlParams.get('code');
            return axios.post('http://localhost:8080/api/v1/booking/public-all-access/seats/assign',
                {
                    bookingCode: bookingCode,
                    index : this.currIndex,
                    departDate: departDate,
                    flight: flightNo,
                    seat: seat
                },
                { headers: {
                    'Content-type': 'application/json',
                }
            }).then((response) => {
                this.passengers = [];
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
        },
        setSelectedSeatReturn(e) {
            if (e == null || e === "-") {
                return;
            }
            this.selectedSeatsReturn.push(e);
            this.assignSeat(this.booking.returnFlight.departDate, this.booking.returnFlight.number, e);
            console.log(e);
        },
        async getUnpaidBooking() {
            const urlParams = new URLSearchParams(window.location.search);
            var bookingCode = urlParams.get('code');
            try {
            const response = await axios.get('http://localhost:8080/api/v1/booking/public-all-access/getBooking/unpaid',
              {
                params: {
                  'code': bookingCode
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
        validateDebitField() {
            var number = document.getElementById("debit_no").value;
            var CVV = document.getElementById("debit_cvv").value;
            var mm = document.getElementById("debit_valid").value;
            var yy = document.getElementById("debit_valid_year").value;
            
            var year = new Date().getFullYear();
            year = year.toString().substring(2, 4);
            
            if (number === "" || !(/^\d+$/.test(number)) || number.length < 16) {
                this.$toast.open({
                    message: "Invalid Card No.",
                    type: 'error'
                });
                return false;
            }
            if (CVV === "" || !(/^\d+$/.test(CVV)) || CVV.length < 3) {
                this.$toast.open({
                    message: "Invalid CVV",
                    type: 'error'
                });
                return false;
            }

            if (mm === "" || mm.length < 2 || !(/^\d+$/.test(mm)) || parseInt(mm) < 1 || parseInt(mm) > 12) {
                this.$toast.open({
                    message: "Invalid Exp Month",
                    type: 'error'
                });
                return false;
            }

            if (yy === "" || yy.length < 2 || !(/^\d+$/.test(yy)) || parseInt(yy) < parseInt(year)) {
                this.$toast.open({
                    message: "Invalid Exp Year",
                    type: 'error'
                });
                return false;
            }
            return true;
        },
        payDebit(){
            if (!this.validateDebitField()) {
                return;
            }
            var debitNo = document.getElementById("debit_no").value;
            this.processPayment("DEBIT", debitNo);
        },
        validateCreditField() {
            var number = document.getElementById("credit_no").value;
            var CVV = document.getElementById("credit_cvv").value;
            var mm = document.getElementById("credit_valid").value;
            var yy = document.getElementById("credit_valid_year").value;
            
            var year = new Date().getFullYear();
            year = year.toString().substring(2, 4);
            // console.log(year);
            
            
            if (number === "" || !(/^\d+$/.test(number)) || number.length < 16) {
                this.$toast.open({
                    message: "Invalid Card No.",
                    type: 'error'
                });
                return false;
            }
            if (CVV === "" || !(/^\d+$/.test(CVV)) || CVV.length < 3) {
                this.$toast.open({
                    message: "Invalid CVV",
                    type: 'error'
                });
                return false;
            }

            if (mm === "" || mm.length < 2 || !(/^\d+$/.test(mm)) || parseInt(mm) < 1 || parseInt(mm) > 12) {
                this.$toast.open({
                    message: "Invalid Exp Month",
                    type: 'error'
                });
                return false;
            }

            if (yy === "" || yy.length < 2 || !(/^\d+$/.test(yy)) || parseInt(yy) < parseInt(year)) {
                this.$toast.open({
                    message: "Invalid Exp Year",
                    type: 'error'
                });
                return false;
            }
            return true;
        },
        payCredit(){
            if (!this.validateCreditField()) {
                return;
            }
            this.processPayment("CC", this.creditNo);
        },
        processPayment(payMethod, cardNum) {
            const urlParams = new URLSearchParams(window.location.search);
            var bookingCode = urlParams.get('code');
            return axios.post('http://localhost:8080/api/v1/booking/public-all-access/pay',
                {
                    bookingCode: bookingCode,
                    method : payMethod,
                    cardNo: cardNum,
                },
                { headers: {
                    'Content-type': 'application/json',
                }
            }).then((response) => {
                this.passengers = [];
                if (response.data.errorCode != null) {
                    this.$toast.open({
                        message: response.data.errorMessage,
                        type: 'error'
                    });
                }
               this.payResponse = response.data.value;
               this.moveToConfirmation(response); 
            }).catch( error => { 
                console.log('error: ' + error); 
            });
        },
        moveToConfirmation(response) {
            router.push({path: "/confirm", query: {
                code: response.data.value.bookingCode
            }})
        },
        showCredit() {
            this.hideCredit = !this.hideCredit;

            if (!this.hideCredit) {
                this.hideDebit = true;
            } else {
                this.hideDebit = false;
            }
            
        },
        showDebit() {
            this.hideDebit = !this.hideDebit;
            if (!this.hideDebit) {
                this.hideCredit = true;
            } else {
                this.hideCredit = false;
            }
        },
        getImageUrl() {
            if (this.creditNo.charAt(0) === '4') {
                this.imageSource = require('@/assets/visa.png');
            } else if (this.creditNo.charAt(0) === '3') {
                this.imageSource = require('@/assets/card.png');
            } else if (this.creditNo.charAt(0) === '2' || this.creditNo.charAt(0) === '5') {
                this.imageSource = require('@/assets/mastercard.png');
            } else {
                this.imageSource = require('@/assets/credit-card.png')
            }
        },
        setCardNo() {
            this.creditNo = document.getElementById("credit_no").value;
        }
    },
    mounted() {
        this.setCardNo();
        this.getImageUrl();
        this.getUnpaidBooking();
    },
    watch: {
        creditModel: {
            handler: function() {
                this.setCardNo();
                this.getImageUrl();
            },
            deep: true
        }
    }
}
</script>