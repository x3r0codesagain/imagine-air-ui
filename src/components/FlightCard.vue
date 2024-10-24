<template>
    <div class="w-100 bg-white border border-gray-200 rounded-lg shadow mx-10" :class="{'bg-slate-200' : cardClicked }">
        <div class="p-5">
            <div class="grid grid-cols-7 grid-flow-row-dense">
                <div class="flex items-center flex-wrap">
                    <div class="w-full">
                        <span class="font-sans text-sm font-normal text-blue-500 block w-100">{{flight.origin + ' (' + flight.originCode + ')'}}</span>
                    </div>
                    <div>
                        <span class="font-sans text-xl font-semibold text-blue-900 inline-flex">{{flight.departLocalTime}}</span>
                    </div>
                </div>
                <div class="flex flex-wrap items-center">
                    <div class="flex w-full justify-center mt-1">
                       <span class="font-sans text-sm font-semibold text-blue-700">{{ flight.number }}</span>
                    </div>
                    <div class="flex w-full justify-center mt-1">
                        <FontAwesomeIcon :icon="['fas', 'plane']" class="fas-plane block" />
                    </div>
                    <div class="flex w-full justify-center mt-1">
                        <span class="font-sans text-sm font-semibold text-blue-700">{{flight.flightHours + ' Hour ' + flight.flightMinutes + ' Minutes'}}</span>
                    </div>
                </div>
                <div class="flex flex-wrap col-span-1 items-center">
                    <div class="flex w-full justify-end">
                        <span class="font-sans text-sm font-normal text-blue-500 block">{{flight.destination + ' (' + flight.arrivalCode + ')'}}</span>
                    </div>
                    <div class="flex w-inherit justify-end w-full">
                        <span class="font-sans text-xl font-semibold text-blue-900 inline-flex">{{flight.arriveLocalTime}}</span>
                    </div>
                </div>
                <div>
                    <!-- Styling -->
                </div>
                <div class="col-span-1 border-solid border-l-2 border-slate-300 px-2 promo-fare" id="promo-fare" v-on:click="selectFlight(this.travelClass + ' Promo')">
                    <button class="flex flex-wrap w-full item-center">
                        <div class="w-full">
                            <Span class="font-sans text-sm font-semibold text-blue-900">{{this.travelClass + ' Promo'}}</Span>
                        </div>
                        <div class="w-full">
                            <Span class="font-sans text-xl font-semibold text-blue-900">{{getPromoPrice()}}</Span>
                        </div>
                    </button>
                </div>
                <div class="col-span-1 border-solid border-l-2 border-slate-300 px-2" id='standard-fare' v-on:click="selectFlight(this.travelClass + ' Standard')">
                    <button class="flex flex-wrap w-full justify-center item-center">
                        <div class="w-full justify-center w-inherit">
                            <Span class="font-sans text-sm font-semibold text-blue-900">{{this.travelClass + ' Standard'}}</Span>
                        </div>
                        <div class="flex justify-center w-inherit">
                            <Span class="font-sans text-xl font-semibold text-blue-900">{{getStandardPrice()}}</Span>
                        </div>
                    </button>
                </div>
                <div class="col-span-1 border-solid border-l-2 border-slate-300 px-2" id="flex-fare" v-on:click="selectFlight(this.travelClass + ' Flex')">
                    <button class="flex flex-wrap w-full justify-center item-center">
                        <div class="w-full justify-center w-inherit">
                            <Span class="font-sans text-sm font-semibold text-blue-900">{{this.travelClass + ' Flex'}}</Span>
                        </div>
                        <div class="flex justify-center w-inherit">
                            <Span class="font-sans text-xl font-semibold text-blue-900">{{getFlexPrice()}}</Span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: "FlightCard",
    props: [
        "flight",
        "travelClass"
    ],
    data() {
        return {
            selectedFlight:{
                flight:{},
                fare: String,
            },
            cardClicked: false,
        }
    },
    components: {
        FontAwesomeIcon,
    },
    methods: {
        getPromoPrice() {
            if (this.travelClass === "Economy" && this.flight.flightPrice.ecoPromoSwitch) {
                return "IDR " + this.numberWithCommas(this.flight.flightPrice.economyPromo);
            }
            if (this.travelClass === "Business" && this.flight.flightPrice.businessPromoSwitch) {
                return "IDR " + this.numberWithCommas(this.flight.flightPrice.businessPromo);
            }
            if (this.travelClass === "First") {
                return "-";
            } 
            return "-";
        },
        getFlexPrice() {
            if (this.travelClass === "Economy") {
                return "IDR " + this.numberWithCommas(this.flight.flightPrice.economyFlex);
            }
            if (this.travelClass === "Business") {
                return "IDR " + this.numberWithCommas(this.flight.flightPrice.businessFlex);
            }
            if (this.travelClass === "First") {
                return "-";
            } 
            return "-";
        },
        getStandardPrice() {
            if (this.travelClass === "Economy") {
                return "IDR " + this.numberWithCommas(this.flight.flightPrice.economyStandard);
            }
            if (this.travelClass === "Business") {
                return "IDR " + this.numberWithCommas(this.flight.flightPrice.businessStandard);
            }
            if (this.travelClass === "First") {
                return "IDR " + this.numberWithCommas(this.flight.flightPrice.first);
            } 
            return "-";
        },
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        onClick() {
           this.cardClicked = !this.cardClicked;
        },
        selectFlight(fareType) {
            if (fareType === 'Economy Promo' && !this.flight.flightPrice.ecoPromoSwitch) {
                return;
            }
            if (fareType === 'Business Promo' && !this.flight.flightPrice.businessPromoSwitch) {
                return;
            }
            // this.onClick();
            this.selectedFlight.flight = this.flight;
            this.selectedFlight.fare = fareType;
            this.$emit("chosen-flight", this.selectedFlight);
        }
    }
}
</script>

<style>
.fas-plane {
  color: navy;
}
</style>