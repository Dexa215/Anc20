<template>
  <v-row
    class="rdw mx-auto"
    align="start"
  >
    <v-col
      cols="9"
      class="cdw mx-auto"
    >
      <a class="title">{{ displayeddate }}</a>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "rdw",

  components: {},

  props: {},

  data () {
    return {
      d: null,
      date: null,
      year: null,
      month: null,
      // monthArr: null, /*test 2020 05 10*/
      displaydate: null
    };
  },

  computed: {
    displayeddate () {
      this.d = new Date();
      this.date = this.d.getDate();
      this.year = this.d.getFullYear();
      this.month = this.d.getMonth();
      /* TEST OK 2020 05 10 */

      this.month = this.getmonthArrLang.nome;

      this.displaydate = this.date + " " + this.month + ", " + this.year;
      return this.displaydate;
    },

    lang () {
      return this.$store.getters.getCurrentLanguage;
    },
    languages () {
      return this.$store.getters.getLanguages;
    },
    languagesShow () {
      return this.$store.getters.getLanguagesShow;
    },

    getmonthArrLang () {
      let lang = this.lang.code;
      return this.$store.getters.getmonthArrLang(this.month)(lang);
    },

    /* TODO: DA RIVEDERE */
    getmonthArrLanguage () {
      return this.$store.getters.getmonthArrLanguage(this.month);
    }
  },

  methods: {
    clock () {
      this.d = new Date();
      this.date = this.d.getDate();
      this.year = this.d.getFullYear();
      this.month = this.d.getMonth();
      this.month = this.getmonthArrLang.nome;
      this.displaydate = this.date + " " + this.month + ", " + this.year;
      //            document.getElementById("date").innerHTML=this.date+" "+this.month+", "+this.year;
    }
  },
  created () {
    console.log("clock oncreate --> start");
    this.clock();
  },
  updated () { }
};
</script>

<style media="screen" scope>
.rdw {
  background-color: transparent !important;
  height: 50%;
  width: 100%;
  border-radius: 0px 0px 250px 250px;
}
.cdw {
  background-color: transparent !important;
  color: aliceblue;
  height: 70px;
  width: 100px;
}
</style>
