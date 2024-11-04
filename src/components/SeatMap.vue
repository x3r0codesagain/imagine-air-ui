<template>
    <div class="plane">
        <div class="exit exit--front fuselage">
            
        </div>
        <ol class="cabin fuselage">
            <div v-for="index in 30" :key="index">
                <div class="exit fuselage" v-if="index == 12 || index == 13">
                    
                </div>
                <li class="row" :class="'row--'+index">
                    <ol class="seats" type="A">
                        <li class="seat">
                        <input type="checkbox" :id="(index)+'A'" @click="selectSeat((index)+'A')"/>
                        <label :for="(index)+'A'">{{(index)+'A'}}</label>
                        </li>
                        <li class="seat">
                        <input type="checkbox" :id="(index)+'B'" @click="selectSeat((index)+'B')"/>
                        <label :for="(index)+'B'">{{(index)+'B'}}</label>
                        </li>
                        <li class="seat">
                        <input type="checkbox" :id="(index)+'C'" @click="selectSeat((index)+'C')"/>
                        <label :for="(index)+'C'">{{(index)+'C'}}</label>
                        </li>
                        <li class="seat">
                        <input type="checkbox" :id="(index)+'D'" @click="selectSeat((index)+'D')"/>
                        <label :for="(index)+'D'">{{(index)+'D'}}</label>
                        </li>
                        <li class="seat">
                        <input type="checkbox" :id="(index)+'E'" @click="selectSeat((index)+'E')"/>
                        <label :for="(index)+'E'">{{(index)+'E'}}</label>
                        </li>
                        <li class="seat">
                        <input type="checkbox" :id="(index)+'F'" @click="selectSeat((index)+'F')"/>
                        <label :for="(index)+'F'">{{(index)+'F'}}</label>
                        </li>
                    </ol>
                </li>
            </div>
        </ol>
        <div class="exit exit--back fuselage">
            
        </div>
    </div>
    <div class="flex justify-end">
        <button class="btn text-md text-blue-900 outline rounded-sm outline-double px-8 py-1 text-xl bg-blue-300 mx-10 my-5" @click="confirmSeat()">Select Seat</button>
    </div>
</template>

<style>
    *,*:before, *:after {
        box-sizing: border-box;
    }
    html {
        font-size: 16px;
    }
    .plane {
        margin: 20px auto;
        max-width: 300px;
    }
    .exit {
        position: relative;
        height: 50px;
    }
    .exit:before, .exit:after {
        content: "EXIT";
        font-size: 14px;
        line-height: 18px;
        padding: 0px 2px;
        font-family: "Arial Narrow", Arial, sans-serif;
        display: block;
        position: absolute;
        background: green;
        color: white;
        top: 50%;
        transform: translate(0, -50%);
    }
    .exit:before {
        left: 0;
    }
    .exit:after {
        right: 0;
    }
    .fuselage {
        border-right: 5px solid #d8d8d8;
        border-left: 5px solid #d8d8d8;
    }
    ol {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .seats {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    .seat {
        display: flex;
        flex: 0 0 14.2857142857%;
        padding: 5px;
        position: relative;
    }
    .seat:nth-child(3) {
        margin-right: 14.2857142857%;
    }
    .seat input[type=checkbox] {
        position: absolute;
        opacity: 0;
    }
    .seat input[type=checkbox]:checked + label {
        background: lightblue;
        -webkit-animation-name: rubberBand;
        animation-name: rubberBand;
        animation-duration: 300ms;
        animation-fill-mode: both;
        color: black;
    }
    .seat input[type=checkbox]:disabled + label {
        background: #ddd;
        text-indent: -9999px;
        overflow: hidden;
        color: darkgray;
    }
    .seat input[type=checkbox]:disabled + label:after {
        content: "X";
        text-indent: 0;
        position: absolute;
        top: 4px;
        left: 50%;
        transform: translate(-50%, 0%);
    }
    .seat input[type=checkbox]:disabled + label:hover {
        box-shadow: none;
        cursor: not-allowed;
    }
    .seat label {
        display: block;
        position: relative;
        width: 100%;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        line-height: 1.5rem;
        padding: 4px 0;
        color: white;
        background: navy;
        border-radius: 5px;
        animation-duration: 300ms;
        animation-fill-mode: both;
    }
    .seat label:before {
        content: "";
        position: absolute;
        width: 75%;
        height: 75%;
        top: 1px;
        left: 50%;
        transform: translate(-50%, 0%);
        background: rgba(255, 255, 255, .4);
        border-radius: 3px;
    }
    .seat label:hover {
        cursor: pointer;
        box-shadow: 0 0 0px 2px #5c6aff;
    }
    @-webkit-keyframes rubberBand {
        0% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
        30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
        }
        40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
        }
        50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
        }
        65% {
            -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
        }
        75% {
            -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
        }
        100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
    }
    @keyframes rubberBand {
        0% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
        30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
        }
        40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
        }
        50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
        }
        65% {
            -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
        }
        75% {
            -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
        }
        100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
    }
    .rubberBand {
        -webkit-animation-name: rubberBand;
        animation-name: rubberBand;
}
 
</style>

<script>
import axios from 'axios';
export default {
    name: "SeatMap",
    props: [
        "flightNumber",
        "departDate",
        "index"
    ],
    data() {
        return {
            seat: "-",
            bookedSeats: [
            ]
        }
    },
    components: {
    },
    methods: {
        selectSeat(selected) {
            for (let i = 1; i <= 30; i++) {
                if (!this.bookedSeats.includes(i+'A')) document.getElementById(i+'A').checked = false;
                if (!this.bookedSeats.includes(i+'B'))  document.getElementById(i+'B').checked = false;
                if (!this.bookedSeats.includes(i+'C')) document.getElementById(i+'C').checked = false;
                if (!this.bookedSeats.includes(i+'D')) document.getElementById(i+'D').checked = false;
                if (!this.bookedSeats.includes(i+'E')) document.getElementById(i+'E').checked = false;
                if (!this.bookedSeats.includes(i+'F')) document.getElementById(i+'F').checked = false;
            }
            document.getElementById(selected).checked = true;
            this.seat = selected;
        },
        async getOccupiedSeats() {
            try {
            const response = await axios.get('http://localhost:8080/api/v1/flights/public-all-access/get-occupied-seats',
              {
                params: {
                  'flNumber': this.flightNumber,
                  'departDate': this.departDate
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
            this.bookedSeats=response.data.value.seats;
            this.init();
            console.log(this.bookedSeats)
          } catch(error) {
            console.log('error: '+error);
          }
        },
        init() {
            for (let i = 1; i <= 30; i++) {
                if (this.bookedSeats.includes(i+'A')) document.getElementById(i+'A').disabled = true;
                if (this.bookedSeats.includes(i+'B'))  document.getElementById(i+'B').disabled = true;
                if (this.bookedSeats.includes(i+'C')) document.getElementById(i+'C').disabled = true;
                if (this.bookedSeats.includes(i+'D')) document.getElementById(i+'D').disabled = true;
                if (this.bookedSeats.includes(i+'E')) document.getElementById(i+'E').disabled = true;
                if (this.bookedSeats.includes(i+'F')) document.getElementById(i+'F').disabled = true;
            }
            
            
        },
        confirmSeat() {
            this.$emit("close-map", false);
            this.$emit("chosen-seat", this.seat);
            this.$emit("pax-index", this.index);
        }
    },
    mounted() {
        this.getOccupiedSeats();
    },
    beforeMount() {
        
    }
}
</script>