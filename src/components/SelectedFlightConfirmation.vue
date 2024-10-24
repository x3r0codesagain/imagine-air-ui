<template>
    <div class="w-100 bg-white border border-gray-200 mx-10">
        <div class="p-5">
            <span class="font-sans text-2xl text-blue-900 font-semibold">Selected Flights</span>
            <div class="grid grid-cols-3 grid-flow-row-dense mt-2">
                <!-- <div class="flex items-center flex-wrap">

                </div> -->
                <div>
                    <span class="font-sans text-xl text-blue-900 font-semibold block mt-1">Outbound</span>
                    <div v-if="outboundFlight.flight.number != null" class="mt-1">
                        <span class="font-sans text-md text-blue-900 font-medium block">{{"Flight: " + outboundFlight.flight.number}}</span>
                        <span class="font-sans text-md text-blue-900 font-medium block">{{"Date: " + outboundFlight.flight.departDate}}</span>
                        <span class="font-sans text-md text-blue-900 font-medium block">
                            {{outboundFlight.flight.origin + ' (' + outboundFlight.flight.originCode + ') - ' + outboundFlight.flight.departLocalTime + ' to ' + outboundFlight.flight.destination + ' (' + outboundFlight.flight.arrivalCode + ') - ' + outboundFlight.flight.arriveLocalTime}}
                        </span>
                        <span class="font-sans text-md text-blue-900 font-medium block">
                            {{outboundFlight.fare}}
                        </span>
                    </div>
                    <div class="mt-1" v-else>
                            <span class="font-sans text-md text-blue-900 font-medium block"> -- Select Outbound Flight -- </span>
                        </div>
                </div>
                <div>
                    <div class="col-span-1" v-if="oneway === 'false'">
                        <span class="font-sans text-xl text-blue-900 font-semibold block mt-1">Return</span>
                        <div class="mt-1" v-if="returnFlight.flight.number">
                            <span class="font-sans text-md text-blue-900 font-medium block">{{"Flight: " + this.returnData.number}}</span>
                            <span class="font-sans text-md text-blue-900 font-medium block">{{"Date: " + this.returnData.departDate}}</span>
                            <span class="font-sans text-md text-blue-900 font-medium block">
                                {{this.returnData.origin + ' (' + this.returnData.originCode + ') - ' + this.returnData.departLocalTime + ' to ' + this.returnData.destination + ' (' + this.returnData.arrivalCode + ') - ' + this.returnData.arriveLocalTime}}
                            </span>
                            <span class="font-sans text-md text-blue-900 font-medium block">
                                {{returnFlight.fare}}
                            </span>
                        </div>
                        <div class="mt-1" v-else>
                            <span class="font-sans text-md text-blue-900 font-medium block">-- Select Return Flight --</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-end flex-wrap">
                    
                    <span class="font-sans text-3xl text-blue-900 font-bold w-full text-center">{{'IDR ' + numberWithCommas(getTotalPrice()) + '/pax'}}</span>
                    <span class="font-sans text-md text-orange-500 w-full text-center">Don't Miss The Deal</span>
                    <button class="btn bg-slate-100 shadow font-sans text-blue-900 text-2xl p-2 w-full mx-2 font-bold" type="button" :disabled="!completed" v-on:click="processTemporaryBooking()">Proceed</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios  from 'axios';
import router from '@/router';
export default {
    name: "SelectedFlightConfirmation",
    props: [
        'outboundFlight',
        'returnFlight',
        'completed',
        'oneway',
        'requestData'
    ],
    data() {
        return {
            returnData: {
                number: "Not Selected",
                origin: "Not Selected",
                destination: "-",
                originCode: '-',
                arrivalCode: '-',
                departDate: '-',
                arriveDate: '-',
                arriveLocalTime: '-',
                departLocalTime: '-',
            },
            totalPrice: 0,
        }
    },
    methods: {
        toBookingView(code, totalPax, totalPrice) {
            router.push({path:'/book', query: {
                code: code,
                totalPax: totalPax,
                totalPrice: totalPrice
            }})
        },
        setReturnFlight() {
            this.returnData = this.returnFlight.flight;
        },
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        getOutboundTotalPrice() {
            if (this.outboundFlight.fare === 'Economy Promo') {
                return this.outboundFlight.flight.flightPrice.economyPromo;
            } else if (this.outboundFlight.fare === 'Economy Standard') {
                return this.outboundFlight.flight.flightPrice.economyStandard;
            } else if (this.outboundFlight.fare === 'Economy Flex') {
                return this.outboundFlight.flight.flightPrice.economyFlex;
            } else if (this.outboundFlight.fare === 'Business Promo') {
                return this.outboundFlight.flight.flightPrice.businessPromo;
            } else if (this.outboundFlight.fare === 'Business Standard') {
                return this.outboundFlight.flight.flightPrice.businessStandard;
            } else if (this.outboundFlight.fare === 'Business Flex') {
                return this.outboundFlight.flight.flightPrice.businessFlex;
            } else if (this.outboundFlight.fare === 'First Flex') {
                return this.outboundFlight.flight.flightPrice.First;
            } 
            return 0;
        },
        getOReturnTotalPrice() {
            if (this.returnFlight.fare === 'Economy Promo') {
                return this.returnFlight.flight.flightPrice.economyPromo;
            } else if (this.returnFlight.fare === 'Economy Standard') {
                return this.returnFlight.flight.flightPrice.economyStandard;
            } else if (this.returnFlight.fare === 'Economy Flex') {
                return this.returnFlight.flight.flightPrice.economyFlex;
            } else if (this.returnFlight.fare === 'Business Promo') {
                return this.returnFlight.flight.flightPrice.businessPromo;
            } else if (this.returnFlight.fare === 'Business Standard') {
                return this.returnFlight.flight.flightPrice.businessStandard;
            } else if (this.returnFlight.fare === 'Business Flex') {
                return this.returnFlight.flight.flightPrice.businessFlex;
            } else if (this.returnFlight.fare === 'First Flex') {
                return this.returnFlight.flight.flightPrice.First;
            } 
            return 0;
        },
        getTotalPrice() {
            return this.oneway === 'true' ? this.getOutboundTotalPrice() : this.getOReturnTotalPrice() + this.getOutboundTotalPrice();
        },
         processTemporaryBooking() {
            return axios.post('http://localhost:8080/api/v1/booking/public-all-access/validate/pending',
                {
                    "totalAdultPax": this.requestData.adult,
                    "totalChildPax": this.requestData.child,
                    "totalInfantPax": this.requestData.infant,
                    "outboundFlightNo": this.outboundFlight.flight.number,
                    "returnFlightNo": this.returnFlight.flight.number,
                    "travelClass": this.requestData.travelClass,
                    "departDate": this.requestData.departDate,
                    "returnDate": this.requestData.returnDate,
                    "oneway": this.requestData.oneway,
                    "outboundFareType": this.outboundFlight.fare,
                    "returnFareType": this.returnFlight.fare,
                    "outboundPrice": this.getOutboundTotalPrice(),
                    "returnPrice": this.getOReturnTotalPrice()
                },
                { headers: {
                    'Content-type': 'application/json',
                }
            }).then((response) => {
                if (response.data.errorCode != null) {
                    this.$toast.open({
                        message: "Unable to process booking",
                        type: 'error'
                    });
                } else {
                    this.toBookingView(response.data.value.bookingCode, response.data.value.totalPax, response.data.value.totalPrice);
                }
            }).catch( error => { 
                console.log('error: ' + error); 
            });
        }
    },
    updated() {
        this.setReturnFlight();
    }
}
</script>