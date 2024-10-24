<template>
    <CustomHeader />
    <div class="bg-[url(@/assets/paper_plane.png)] bg-contain bg-no-repeat">
        <form @submit.prevent="setFormData" class="py-5 px-10">
            <span class="text-blue-900 font-bold font-sans text-3xl block">Booking Details</span>

            <div class="bg-slate-100 mt-4 w-9/12 py-5 px-5">
                <span class="text-blue-900 font-bold font-sans text-xl block">1. Contact Details</span>
                <div class="grid grid-cols-5 grid-flow-row-dense mt-5">
                    <div class="w-44 col-span-1">
                        <label for="contact-salutation"
                            class="text-blue-900 font-semibold font-sans text-md block">Title</label>
                        <select id="contact-salutation" required
                            class="mt-1 font-sans bg-white border border-gray-300 text-blue-800 text-semibold text-md focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 h-10">
                            <option value="Mr" class="text-blue-700 font-normal font-sans text-md">Mr.</option>
                            <option value="Miss" class="text-blue-700 font-normal font-sans text-md">Miss</option>
                            <option value="Mrs" class="text-blue-700 font-normal font-sans text-md">Mrs.</option>
                            <option value="Dr" class="text-blue-700 font-normal font-sans text-md">Dr.</option>
                        </select>
                    </div>
                    <div class="w-fit col-span-2">
                        <label for="contact-name" class="text-blue-900 font-semibold font-sans text-md block">Given
                            Name</label>
                        <input id="contact-name" type="text" placeholder="Given Name"
                            class="required mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 h-10">
                    </div>
                    <div class="col-span-2">
                        <label for="contact-surname"
                            class="text-blue-900 font-semibold font-sans text-md block">Surname</label>
                        <input id="contact-surname" type="text" placeholder="Surname"
                            class="mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 h-10">
                    </div>
                </div>
                <div class="mt-4">
                    <label for="contact-email" class="text-blue-900 font-semibold font-sans text-md block">Email</label>
                    <input id="contact-email" type="text" placeholder="Email"
                        class="mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5 h-10">
                </div>
                <div class="mt-4">
                    <label for="contact-phone" class="text-blue-900 font-semibold font-sans text-md block">Phone
                        Number</label>
                    <input id="contact-phone" type="text" placeholder="Phone Number"
                        class="mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 inline-block w-4/6 p-2.5 h-10">
                    <div class="info inline-block ml-3">
                        <FontAwesomeIcon :icon="['fas', 'info-circle']" class="fas-info inline-block" />
                        <span class="info-text ml-5 inline-block">Enter with country code ex. +628171872122</span>
                    </div>
                </div>
            </div>

            <div class="bg-slate-100 mt-4 w-9/12 py-5 px-5 mt-8">
                <span class="text-blue-900 font-bold font-sans text-xl block">2. Passengers' Details</span>

                <div v-for="index in totalPax" :key="index">
                    <div class="mb-10">
                        <span class="text-blue-900 font-semibold font-sans text-lg block mt-6">Passenger {{ index
                            }}</span>
                        <div class="grid grid-cols-5 grid-flow-row-dense mt-2">
                            <div class="w-44 col-span-1">
                                <label v-bind:for="'passenger-salutation-'+index"
                                    class="text-blue-900 font-semibold font-sans text-md block">Title</label>
                                <select v-bind:id="'passenger-salutation-'+index" required
                                    class="mt-1 font-sans bg-white border border-gray-300 text-blue-800 text-semibold text-md focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 h-10">
                                    <option value="Mr" class="text-blue-700 font-normal font-sans text-md">Mr.</option>
                                    <option value="Miss" class="text-blue-700 font-normal font-sans text-md">Miss
                                    </option>
                                    <option value="Mrs" class="text-blue-700 font-normal font-sans text-md">Mrs.
                                    </option>
                                    <option value="Dr" class="text-blue-700 font-normal font-sans text-md">Dr.</option>
                                </select>
                            </div>
                            <div class="w-fit col-span-2">
                                <label v-bind:for="'passenger-name-'+index"
                                    class="text-blue-900 font-semibold font-sans text-md block">Given Name</label>
                                <input v-bind:id="'passenger-name-'+index" type="text" placeholder="Given Name"
                                    class="required mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 h-10">
                            </div>
                            <div class="col-span-2">
                                <label v-bind:for="'passenger-surname-'+index"
                                    class="text-blue-900 font-semibold font-sans text-md block">Surname</label>
                                <input v-bind:id="'passenger-surname-'+index" type="text" placeholder="Surname"
                                    class="required mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 h-10">
                            </div>
                        </div>
                        <div class="grid grid-cols-5 grid-flow-row-dense mt-2">
                            <div class="w-44 col-span-2">
                                <label v-bind:for="'passenger-id-type-' + index"
                                    class="text-blue-900 font-semibold font-sans text-md block">ID Type</label>
                                <select v-bind:id="'passenger-id-type-' + index" required
                                    class="mt-1 font-sans bg-white border border-gray-300 text-blue-800 text-semibold text-md focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 h-11">
                                    <option value="ID Card" class="text-blue-700 font-normal font-sans text-md">ID Card (Indonesian Only)</option>
                                    <option value="Passport" class="text-blue-700 font-normal font-sans text-md">
                                        Passport
                                    </option>
                                
                                </select>
                            </div>
                            <div class="w-fit col-span-2">
                                <label v-bind:for="'passenger-id-no-' + index"
                                    class="text-blue-900 font-semibold font-sans text-md block">ID Number</label>
                                <input v-bind:id="'passenger-id-no-' + index" type="text" placeholder="ID Number" 
                                    class="required mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 h-10">
                            </div>
                        </div>
                        <div class="w-44 mt-3">
                            <label v-bind:for="'passenger-gender-' + index"
                                class="text-blue-900 font-semibold font-sans text-md block">Gender</label>
                            <select v-bind:id="'passenger-gender-' + index" required
                                class="mt-1 font-sans bg-white border border-gray-300 text-blue-800 text-semibold text-md focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 h-11">
                                <option value="Male" class="text-blue-700 font-normal font-sans text-md">Male</option>
                                <option value="Female" class="text-blue-700 font-normal font-sans text-md">
                                    Female
                                </option>
                            
                            </select>
                        </div>
                        <div class="inline-block w-40 mt-3">
                            <label v-bind:for="'passenger-birthday-' + index" class="text-blue-900 font-semibold font-sans text-md block">Birth Date</label>
                            <input v-bind:id="'passenger-birthday-' + index" type="date" class=" font-sans text-sm p-2 w-44 border-gray-300 border text-blue-900 block h-10 required">
                            </div>
                        <div class="mt-4">
                            <label v-bind:for="'passenger-email-' + index"
                                class="text-blue-900 font-semibold font-sans text-md block">Email</label>
                            <input v-bind:id="'passenger-email-' + index" type="text" placeholder="Email"
                                class="mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5 h-10 required">
                        </div>
                        <div class="mt-4">
                            <label v-bind:for="'passenger-phone-' + index" class="text-blue-900 font-semibold font-sans text-md block">Phone
                                Number</label>
                            <input v-bind:id="'passenger-phone-' + index" type="text" placeholder="Phone Number"
                                class="mt-1 font-sans bg-white border border-gray-300 text-blue-900 text-sm focus:ring-blue-500 focus:border-blue-500 inline-block w-4/6 p-2.5 h-10 required">
                            <div class="info inline-block ml-3">
                                <FontAwesomeIcon :icon="['fas', 'info-circle']" class="fas-info inline-block" />
                                <span class="info-text ml-5 inline-block">Enter with country code ex.
                                    +628171872122</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>

            </div>
            <div class="grid grid-cols-4 grid-flow-row-dense mt-2 mb-5 flex">
                <div>

                </div>
                <div class="flex items-end flex-wrap col-span-2 justify-end">
                    <span class="font-sans text-2xl text-blue-900 font-bold w-full text-end mr-4">Total Price</span>
                    <span class="font-sans text-xl text-blue-700 w-full text-end mr-4">{{'Rp. ' + this.totalPrice}}</span>
                    <button class="btn bg-blue-900 shadow font-sans text-slate-100 text-2xl p-2 w-64 mx-4 mt-2 font-bold" type="submit">Proceed</button>
                </div>   
                <div>
                    
                </div>
            </div>
        </form>


    </div>
    
    <FooterSimple class="mt-10"/>
</template>

<style>
.fas-info {
    color: navy;
}

.info {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
}

.info .info-text {
    visibility: hidden;
    width: 200px;
    background-color: white;
    color: navy;
    text-align: center;
    border-radius: 6px;
    padding: 5px;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
}

.info:hover .info-text {
    visibility: visible;
}
</style>

<script>
import CustomHeader from '@/components/CustomHeader.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import FooterSimple from '@/components/FooterSimple.vue';
import axios from 'axios';
import router from '@/router';
export default {
    name: 'BookingView',
    components: {
        CustomHeader,
        FontAwesomeIcon,
        FooterSimple
    },
    data() {
        return {
            totalPax: 3,
            totalPrice: 0,
            bookingCode: "",
            passengers: [],
            contact: {
                "givenName": "",
                "salutation": "",
                "surname": "",
                "phoneNo": "",
                "email": ""
            },
            finalBooking: {},
        }
    },
    methods: {
        getUrlParams() {
            const urlParams = new URLSearchParams(window.location.search);
            this.bookingCode = urlParams.get('code');
            this.totalPrice = this.numberWithCommas(urlParams.get('totalPrice'));
            this.totalPax = parseInt(urlParams.get('totalPax'));
        },
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        validateContactData(contact) {
            if (contact.givenName === "") {
                this.$toast.open({
                    message: "Enter Contact name",
                    type: 'error'
                });
                return false;
            }

            if (contact.surname === "") {
                this.$toast.open({
                    message: "Enter Contact surname",
                    type: 'error'
                });
                return false;
            }

            if (contact.email === "" || !contact.email.includes("@")) {
                this.$toast.open({
                    message: "Enter Appropriate Contact Email",
                    type: 'error'
                });
                return false;
            }

            if (contact.phoneNo === "") {
                this.$toast.open({
                    message: "Enter Contact Phone No.",
                    type: 'error'
                });
                return false;
            }

            return true;
        },
        setContactData() {
            this.contact.givenName = document.getElementById("contact-name").value;
            this.contact.surname = document.getElementById("contact-surname").value;
            this.contact.phoneNo = document.getElementById("contact-phone").value;
            this.contact.email = document.getElementById("contact-email").value;
            this.contact.salutation = document.getElementById("contact-salutation").value;

            if (!this.validateContactData(this.contact)) {
                return false;
            }
            return true;
        },
        validateFormData(pax, index) {
            if (pax.givenName === "") {
                this.$toast.open({
                    message: "Enter name for passenger " + index,
                    type: 'error'
                });
                return false;
            }

            if (pax.surname === "") {
                this.$toast.open({
                    message: "Enter surname for passenger " + index,
                    type: 'error'
                });
                return false;
            }
            if (pax.birthDate === "") {
                this.$toast.open({
                    message: "Enter Birth Date for passenger " + index,
                    type: 'error'
                });
                return false;
            }
            if (pax.gender === "Male" && (pax.salutation === "Ms" || pax.salutation === "Mrs")) {
                this.$toast.open({
                    message: "Select the apprpriate gender for passenger " + index,
                    type: 'error'
                });
                return false;
            }
            if (pax.gender === "Female" && pax.salutation === "Mr") {
                this.$toast.open({
                    message: "Select the apprpriate gender for passenger " + index,
                    type: 'error'
                });
                return false;
            }

            if (pax.idNumber === "") {
                this.$toast.open({
                    message: "Enter ID Number for passenger " + index,
                    type: 'error'
                });
                return false;
            }

            if (pax.idType === "ID Card" && pax.idNumber.length != 16) {
                this.$toast.open({
                    message: "Enter Appropriate ID Number for passenger " + index,
                    type: 'error'
                });
                return false;
            }
            if (pax.idType === "Passport" && pax.idNumber.length > 9) {
                this.$toast.open({
                    message: "Enter Appropriate ID Number for passenger " + index,
                    type: 'error'
                });
                return false;
            }

            if (pax.email === "" || !pax.email.includes("@")) {
                this.$toast.open({
                    message: "Enter Appropriate Email for passenger " + index,
                    type: 'error'
                });
                return false;
            }

            if (pax.phoneNo === "") {
                this.$toast.open({
                    message: "Enter Phone No. for passenger " + index,
                    type: 'error'
                });
                return false;
            }

            return true;
        },
        createBooking() {
            return axios.post('http://localhost:8080/api/v1/booking/public-all-access/create',
                {
                    currentBookingCode: this.bookingCode,
                    passengers : this.passengers,
                    bookingContact: this.contact,
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
               this.finalBooking = response.data.value;
               this.moveToPaymentPage(response);
            }).catch( error => { 
                console.log('error: ' + error); 
            });
        },
        moveToPaymentPage(response) {
            router.push({path: "/pay", query: {
                code: response.data.value.bookingCode
            }})
        },
        setFormData() {
            if (!this.setContactData()) {
                return;
            }
            console.log(this.contact);
            for (let i = 1; i <= this.totalPax; i++) {
                var passenger = {
                    "givenName": "",
                    "salutation": "",
                    "surname": "",
                    "birthDate": "",
                    "gender": "",
                    "idNumber": "",
                    "idType": "",
                    "seat": "-",
                    "phoneNo": "",
                    "email": ""
                }
                passenger.givenName = document.getElementById("passenger-name-" + i).value;
                passenger.surname = document.getElementById("passenger-surname-" + i).value;
                passenger.salutation = document.getElementById("passenger-salutation-" + i).value;
                passenger.birthDate = document.getElementById("passenger-birthday-" + i).value;
                passenger.gender = document.getElementById("passenger-gender-" + i).value;
                passenger.idNumber = document.getElementById("passenger-id-no-" + i).value;
                passenger.idType = document.getElementById("passenger-id-type-" + i).value;
                passenger.seat = "-";
                passenger.phoneNo =document.getElementById("passenger-phone-" + i).value;
                passenger.email =document.getElementById("passenger-email-" + i).value;

                if (!this.validateFormData(passenger, i)) {
                    this.passengers = [];
                    return;
                }
                
                this.passengers.push(passenger);
            }
            this.createBooking();
        }
    },
    mounted() {
        this.getUrlParams();
    }
}
</script>