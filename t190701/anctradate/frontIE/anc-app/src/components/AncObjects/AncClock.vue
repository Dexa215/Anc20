<template>
  <v-col cols="3" style="height:350px; " align="center" justify="center" class="ancClock">
    <div class="cage r_BC">
      <!-- data oggi 555555555555555555555555555555555555555555555555555555555555  -->

      <v-row class="todayr" align="center" justify="center">
        <v-row class="rup mx-auto" align="end">
          <v-col cols="9" class="cup mx-auto display-2">Oggi...</v-col>
        </v-row>

        <v-row class="rdw mx-auto" align="start">
          <v-col cols="9" class="cdw mx-auto">
            <a class="title">{{ displaydate }}</a>
          </v-col>
        </v-row>
      </v-row>

      <!--
      <v-col cols="12" class="todayCircleText">
        <v-row class="todayrowup" align="end">
          <v-col cols="12" class="todaylineup headline mt-0">Oggi...</v-col>
        </v-row>
        <v-row class="todayrowdown" align="start">
          <v-col cols="12" class="todaylinedown headline mt-0">{{ displaydate }}</v-col>
        </v-row>
      </v-col>
      -->
    </div>
  </v-col>
</template>

<script>
export default {
  name: "AncClock",

  components: {},

  props: {},

  data() {
    return {
      d: null,
      date: null,
      year: null,
      month: null,
      monthArr: null,
      displaydate: null
    };
  },
  methods: {
    clock() {
      this.d = new Date();
      this.date = this.d.getDate();
      this.year = this.d.getFullYear();
      this.month = this.d.getMonth();
      this.monthArr = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      this.month = this.monthArr[this.month];

      this.displaydate = this.date + " " + this.month + ", " + this.year;
      //            document.getElementById("date").innerHTML=this.date+" "+this.month+", "+this.year;
    }
  },
  created() {
    console.log("clock oncreate --> start");
    this.clock();
  },
  updated() {}
};
</script>

<style>
.ancClock {
  position: relative;
  z-index: 4;
  background-color: transparent;
}
.cage {
  border-radius: 150px;
  background-color: royalblue;
  height: 300px;
  width: 300px;
  padding-top: 4px;
}
.todayr {
  background-color: transparent !important;
  width: 92%;
  height: 95%;
  border-radius: 250px;
}

.rup {
  background-color: aliceblue !important;
  height: 50%;
  width: 100%;
  border-radius: 250px 250px 0px 0px;
}
.rdw {
  background-color: transparent !important;
  height: 50%;
  width: 100%;
  border-radius: 0px 0px 250px 250px;
}
/*------------------------------------------------------------------------------------*/
.cup {
  background-color: transparent !important;
  height: 70px;
  width: 100px;
}
.cdw {
  background-color: transparent !important;
  color: aliceblue;
  height: 70px;
  width: 100px;
}
/*------------------------------------------------------------------------------------*/
.todayCircle {
  height: 100%;
  width: 300px;
  background-color: red;
}
.todayCircleText {
  height: 300px;
  width: 300px;
  background-color: green;
  opacity: 1;
}
.todayrowup {
  background-color: yellow;
  width: 100%;
}
.todaylineup {
  /*background-color: orangered;*/
  width: 300px;
  background-color: red;
  border-radius: 150px 150px 0px 0px;
}
.todayrowdown {
  background-color: red;
  width: 100%;
}
.todaylinedown {
  /*background-color: orange;*/
  height: 150px;
  width: 300px;
  background-color: yellow;
  border-radius: 0px 0px 150px 150px;
}
</style>