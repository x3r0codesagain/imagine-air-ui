<template>
    <CustomHeader/>
    <div class="block mt-0 w-full justify-center items-center">
        <div class="w-100 py-5 px-10 shadow-md mb-0">
            <div class="grid grid-cols-4" :class="showSearch ? 'hidden' : 'block'">
                <div>
                    <span class="text-sm text-blue-500 font-semibold block">Origin (Outbound)</span>
                    <span class="mt-px place text-blue-700 font-bold inline-flex">{{request.origin}}</span>
                    <span class="text-sm text-blue-500 font-semibold inline-flex ml-3">{{request.departDate}}</span>
                </div>
                <div>
                    <span class="text-sm text-blue-500 font-semibold block">Destination (Outbound)</span>
                    <span class="place text-blue-700 font-bold inline-flex">{{request.dest}}</span>
                    <span class="text-sm text-blue-500 font-semibold inline-flex ml-3">Arrival Day</span>
                </div>
                <div v-if="request.oneway === 'false'">
                    <span class="text-sm text-blue-500 font-semibold block">Origin (Inbound)</span>
                    <span class="mt-px place text-blue-700 font-bold inline-flex">{{request.dest}}</span>
                    <span class="text-sm text-blue-500 font-semibold inline-flex ml-3">{{request.departDate}}</span>
                </div>
                <div v-if="request.oneway === 'false'">
                    <span class="text-sm text-blue-500 font-semibold block">Origin (Inbound)</span>
                    <span class="mt-px place text-blue-700 font-bold inline-flex">{{request.origin}}</span>
                    <span class="text-sm text-blue-500 font-semibold inline-flex ml-3">Arrival Day</span>
                </div>
            </div>
        </div>
        <div class="modify-content" :class="showSearch ? 'block' : 'hidden'">
            <SearchFlight :request-data="request"/>
        </div>
        <div class="content-center items-center justify-center flex w-full">
            <button type="button" class="custom-btn w-fit bg-slate-100 p-5 hover:bg-cyan-100 text-blue-500 font-bold py-2 px-4" v-on:click="triggerCollapse() ">
                Modify Flight Search
            </button>
        </div>

        <div class="mt-5">
            <div class="w-full mx-10 mb-10">
                <span class="text-3xl text-blue-900 font-bold font-sans">
                    {{ '1. ' + this.request.origin + ' to ' + this.request.dest + ' (Outbound)'}}
                </span>
            </div>
            <div v-for="outboundFlight in outboundFlights" :key="outboundFlight.id">
                <FlightCard class="mt-2" :flight="outboundFlight" :travelClass="request.travelClass" v-on:chosen-flight="selectFlight"/>
            </div>
        </div>

        <div class="mt-5" :class=" this.request.oneway === 'true' ? 'hidden':'block'">
            <div class="w-full mx-10 mb-10">
                <span class="text-3xl text-blue-900 font-bold font-sans">
                    {{ '2. ' + this.request.dest + ' to ' + this.request.origin + ' (Return)'}}
                </span>
            </div>
            <div v-for="returnFlight in returnFlights" :key="returnFlight.id">
                <FlightCard class="mt-2" :flight="returnFlight" :travelClass="request.travelClass" v-on:chosen-flight="selectReturnFlight"/>
            </div>
        </div>


        <div class="mt-20">
            <SelectedFlightConfirmation :requestData="request" :outboundFlight="selectedOutboundFlight" :returnFlight="selectedReturnFlight" :completed="completed" :oneway="this.request.oneway"/>
        </div>
    </div>

    <FooterSimple class="mt-8"/>
    
</template>

<script>
import CustomHeader from '@/components/CustomHeader.vue'
import SearchFlight from '@/components/SearchFlight.vue';
import FlightCard from '@/components/FlightCard.vue';
import axios from 'axios';
import FooterSimple from '@/components/FooterSimple.vue';
import SelectedFlightConfirmation from '@/components/SelectedFlightConfirmation.vue';
import router from '@/router';
import { Store } from 'vuex';

export default {
    name: 'FlightsView',
    components: {
        CustomHeader,
        SearchFlight,
        FlightCard,
        FooterSimple,
        SelectedFlightConfirmation
    },
    data() {
        return {
            showSearch: false,
            completed: false,
            request: {
                origin: "",
                dest: "",
                oneway: false,
                departDate: "",
                returnDate: "",
                child: 0,
                adult: 0,
                infant: 0,
                travelClass: ""
            },
            outboundFlights: [],
            returnFlights: [],
            selectedOutboundFlight: {
                flight: {},
                fare: String,
                price: 0
            },
            selectedReturnFlight: {
                flight: {},
                fare: String,
                price: 0
            },
            pendingBooking: {},

        }
    },
    methods: {
        getUrlParams() {
            const urlParams = new URLSearchParams(window.location.search);
            this.request.origin = urlParams.get('origin');
            this.request.dest = urlParams.get('destination')
            this.request.oneway = urlParams.get('oneway');
            this.request.departDate = urlParams.get('departDate');
            this.request.returnDate = urlParams.get('returnDate');
            this.request.adult = urlParams.get('adult');
            this.request.child = urlParams.get('child');
            this.request.infant = urlParams.get('infant');
            this.request.travelClass = urlParams.get('travelClass');
            Store.s
        },
        triggerCollapse() {
            if (this.showSearch === true) {
                this.showSearch = false;
            } else {
                this.showSearch = true;
            }
        },
        fetchOutboundFlight() {
            var seats = parseInt(this.request.adult) + parseInt(this.request.child)
            console.log(seats);
            return axios.post('http://localhost:8080/api/v1/flights/public-all-access/get-flights-to-from',
                {
                    originCode: this.request.origin,
                    arrivalCode: this.request.dest,
                    departDate: this.request.departDate,
                    travelClass: this.request.travelClass,
                    totalSeats: seats
                },
                { headers: {
                    'Content-type': 'application/json',
                }
            }).then((response) => {
                if (response.data.errorCode != null) {
                    this.$toast.open({
                        message: "No Flights Outbound Flights Found",
                        type: 'error'
                    });
                    router.push('/');
                }
               this.outboundFlights = response.data.value 
            }).catch( error => { 
                console.log('error: ' + error); 
            });
        },
        selectFlight(e) {
            this.selectedOutboundFlight = e;
            console.log(this.selectedOutboundFlight.fare);
        },
        selectReturnFlight(e) {
            this.selectedReturnFlight = e;
            console.log(this.selectedReturnFlight.flight.destination);
        },
        fetchReturnFlight() {
            if (this.request.oneway==='false') {
                var seats = parseInt(this.request.adult) + parseInt(this.request.child)
                return axios.post('http://localhost:8080/api/v1/flights/public-all-access/get-flights-to-from',
                    {
                        originCode: this.request.dest,
                        arrivalCode: this.request.origin,
                        departDate: this.request.returnDate,
                        travelClass: this.request.travelClass,
                        totalSeats: seats
                    },
                    { headers: {
                    'Content-type': 'application/json',
                    }
                }).then((response) => {
                    if (response.data.errorCode != null) {
                        this.$toast.open({
                            message: "No Flights Return Flights Found",
                            type: 'error'
                        });
                        router.push('/');
                    } 
                    this.returnFlights = response.data.value 
                }).catch( error => { 
                    console.log('error: ' + error); 
                });
            }
            return null;
            
        },
        validateCompleteSelection(){
            if (this.request.oneway === 'true' && this.selectedOutboundFlight.flight!= null) {
                this.completed = true;
            }
            else if (this.request.oneway === 'false' && this.selectedOutboundFlight.flight != null
            && this.selectedReturnFlight.flight != null) {
                this.completed = true;
            } else {
                this.completed = false;
            }
        },
    },
    mounted() {
        this.getUrlParams();
        this.fetchOutboundFlight();
        this.fetchReturnFlight()
    },
    updated() {
        this.validateCompleteSelection();
    }
}
</script>

<style scoped>
.place {
    font-family: sans-serif;
    font-size: 24px;
}

.custom-btn {
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
}
</style>
