<template>
    <div class="mx-5 bg-slate-100 w-100">
        <form @submit.prevent="setFormData" class="py-5 px-10">
        <div class="block mt-0">
            <div>
            <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" id="one-way-toggle" v-model="isOneWay">
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">One Way</span>
            </label>
        </div>
        </div>
        <div class="inline-block w-50">
            <label for="origins" class="block font-sans font-bold text-md">From</label>
            <select id="origins" required class="font-sans bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 h-10">
            <option value="CGK" :selected="requestData.origin === 'CGK'">Jakarta (CGK)</option>
            <option value="DPS" :selected="requestData.origin === 'DPS'">Bali (DPS)</option>
            <option value="SIN" :selected="requestData.origin === 'SIN'">Singapore (SIN)</option>
            <option value="FUK" :selected="requestData.origin === 'FUK'">Fukuoka (FUK)</option>
            <option value="KUL" :selected="requestData.origin === 'KUL'">Kuala Lumpur (KUL)</option>
            <option value="HND" :selected="requestData.origin === 'HND'">Tokyo-Haneda (HND)</option>
            </select>
        </div>
        <div class="ml-8 my-5 inline-block w-50">
            <label for="dests" class="block font-sans font-bold text-md">To</label>
            <select id="dests" class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 h-10">
            <option selected value="">-- Select Destination --</option>
            <option value="CGK" :selected="requestData.dest === 'CGK'">Jakarta (CGK)</option>
            <option value="DPS" :selected="requestData.dest === 'DPS'">Bali (DPS)</option>
            <option value="SIN" :selected="requestData.dest === 'SIN'">Singapore (SIN)</option>
            <option value="FUK" :selected="requestData.dest === 'FUK'">Fukuoka (FUK)</option>
            <option value="KUL" :selected="requestData.dest === 'KUL'">Kuala Lumpur (KUL)</option>
            <option value="HND" :selected="requestData.dest === 'HND'">Tokyo-Haneda (HND)</option>
            </select>
        </div>
        <div class="inline-block w-40 ml-10">
            <label for="depart_date" class="block font-sans font-bold text-md">Depart Date</label>
            <input id="depart_date" type="date" class=" font-sans text-sm p-2 w-44 border-gray-300 border text-gray-900 block h-10">
        </div>
        <div class="inline-block w-40 ml-10">
            <label for="return_date" class="block font-sans font-bold text-md">Return Date</label>
            <input id="return_date" type="date" :disabled="isOneWay ? true : false" class=" font-sans text-sm p-2 w-44 border-gray-300 border text-gray-900 block h-10">
        </div>
        <div class="inline-block w-50">
            <span class="block font-sans font-bold text-md w-50">
            Passengers
            </span>
            <div class="inline-block w-50">
            <label for="adults" class="block my-2 font-sans font-medium text-sm">Adults</label>
            <select id="adults" class="font-sans bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 h-10">
                <option value="0" :selected="requestData.adult === '0'">0</option>
                <option value="1" :selected="requestData.adult === '1'">1</option>
                <option value="2" :selected="requestData.adult === '2'">2</option>
                <option value="3" :selected="requestData.adult === '3'">3</option>
                <option value="4" :selected="requestData.adult === '4'">4</option>
                <option value="5" :selected="requestData.adult === '5'">5</option>
                <option value="6" :selected="requestData.adult === '6'">6</option>
            </select>
            </div>
            <div class="inline-block w-50 ml-5">
            <label for="child" class="block my-2 font-sans font-medium text-sm">Chlidren</label>
            <select id="child" class="font-sans bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 h-10">
                <option value="0" :selected="requestData.child === '0'">0</option>
                <option value="1" :selected="requestData.child === '1'">1</option>
                <option value="2" :selected="requestData.child === '2'">2</option>
                <option value="3" :selected="requestData.child === '3'">3</option>
                <option value="4" :selected="requestData.child === '4'">4</option>
                <option value="5" :selected="requestData.child === '5'">5</option>
                <option value="6" :selected="requestData.child === '6'">6</option>
            </select>
            </div>
            <div class="inline-block w-50 ml-5">
            <label for="infant" class="block my-2 font-sans font-medium text-sm">Infants</label>
            <select id="infant" class="font-sans bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 h-10">
                <option value="0" :selected="requestData.infant === '0'">0</option>
                <option value="1" :selected="requestData.infant === '1'">1</option>
                <option value="2" :selected="requestData.infant === '2'">2</option>
                <option value="3" :selected="requestData.infant === '3'">3</option>
                <option value="4" :selected="requestData.infant === '4'">4</option>
                <option value="5" :selected="requestData.infant === '5'">5</option>
                <option value="6" :selected="requestData.infant === '6'">6</option>
            </select>
            </div>
        </div>
        <div class="inline-block" style="margin-left: 74px;">
            <span class="block font-sans font-bold text-md">
            Class
            </span>
            <div class="inline-block w-50">
            <label for="travel_class" class="block my-2 font-sans font-medium text-sm">Select Travel Cabin</label>
            <select id="travel_class" class="font-sans bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 h-10">
                <option value="Economy" :selected="requestData.travelClass === 'Economy'">Economy Class</option>
                <option value="Business" :selected="requestData.travelClass === 'Business'">Business Class</option>
                <option value="First" :selected="requestData.travelClass === 'First'">First Class</option>
            </select>
            </div>
        </div>

        <div class="inline-flex w-auto ml-20">
            <button type="submit" class="place-items-end ml-10 font-sans text-md text-white py-2 border border-blue-500 bg-blue-500 p-2.5 h-10 mt-5 px-6 w-80">Search Flights</button>
        </div>
        </form>
    </div>
</template>

<script>
import router from '@/router';
export default {
    name: "SearchData",
    props: ["requestData"],
    data() {
        return {
            isOneWay: false,
            counter: 0,
            form: {
                origin: "",
                destination: "",
                oneway: false,
                departDate: "",
                returnDate: "",
                adult: 1,
                child: 0,
                infant: 0,
                travelClass: "",
            },
        }
    },
    methods: {
        setDepartDate() {
            if (this.requestData.oneway === 'true') {
                document.getElementById("one-way-toggle").checked = true;
                this.isOneWay = true;
            } else {
                document.getElementById("one-way-toggle").checked = false;
                this.isOneWay = false;
            }
            document.getElementById("depart_date").valueAsDate = new Date(this.requestData.departDate);
            if (this.requestData.oneway != 'true')document.getElementById("return_date").valueAsDate = new Date(this.requestData.returnDate);
            console.log("trigger")
        },
        validateForm(data) {
            var adult = data.adult
            var child = data.child
            var total = parseInt(child) + parseInt(adult)
            console.log(total)
            if (data.destination == "") {
                this.$toast.open({
                message: "Select destination",
                type: 'error'
                });
                this.valid = false
            }
            else if (data.destination == data.origin) {
                this.$toast.open({
                message: "Destination should not be origin",
                type: 'error'
                });
                this.valid = false
            }
            else if (data.departDate == "") {
                this.$toast.open({
                message: "Select date of departure",
                type: 'error'
                });
                this.valid = false
            }
            else if (data.returnDate == "" && this.isOneWay === false) {
                this.$toast.open({
                message: "Select return date",
                type: 'error'
                });
                this.valid = false
            }
            else if (data.travelClass == "") {
                this.$toast.open({
                message: "Select travel class",
                type: 'error'
                });
                this.valid = false
            }
            else if ((total === 0) || (parseInt(adult) === 0 && parseInt(data.infant) > 0)) {
                
                this.$toast.open({
                message: "Add Pax (Infant are not allowed to travel alone)",
                type: 'error'
                });
                this.valid = false
            } else {
                this.valid = true
            }
        },
        setFormData() {
            this.form.origin = document.getElementById("origins").value
            this.form.destination = document.getElementById("dests").value
            this.form.oneway = this.isOneWay
            this.form.departDate = document.getElementById("depart_date").value
            this.form.returnDate = document.getElementById("return_date").value
            this.form.adult = document.getElementById("adults").value
            this.form.child = document.getElementById("child").value
            this.form.infant = document.getElementById("infant").value
            this.form.travelClass = document.getElementById("travel_class").value
            this.validateForm(this.form);
            if (this.valid) {
                this.$toast.open({
                    message: "Finding Flights",
                    type: 'success'
                });
                router.push({path:'/flights', query: {
                    origin: this.form.origin,
                    destination: this.form.destination,
                    oneway: this.form.oneway,
                    departDate: this.form.departDate,
                    returnDate: this.form.returnDate,
                    adult: this.form.adult,
                    child: this.form.child,
                    infant: this.form.infant,
                    travelClass: this.form.travelClass
                }}).then(() => { this.$router.go(0) });
            }
        },
    },
    updated() {
        if(this.counter == 0) {
            this.setDepartDate();
            this.counter++;
        }
    }
}
</script>