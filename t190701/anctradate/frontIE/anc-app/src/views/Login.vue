<template>
  <div>
    <h2>BLA BLA BLA Anc Tradate</h2>
    <h3>VUE ---- test production no. 15</h3>
    <h6>
      DEBUG = False ALLOWED_HOSTS = '127.0.0.1', '80.211.234.218', 'localhost',
      '0.0.0.0:8000',
    </h6>
    <img
      src="{% static 'images/Soci/Registrazione/bustina.jpg' %}"
      class="rounded mx-auto d-block"
      style="width: 180px"
      alt="..."
    />

    <div class="login-form-container">
      <form method="post">
        <button
          type="submit"
          class="btn btn-sm btn-outline-primary"
        >
          Accedi
        </button>
      </form>
      <br />
      <hr />
      <p class="mt-4">
        Oppure
        <a href="{% url 'django_registration_register' %}">Registrati</a>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import router from "../router";
import AncIntestazione from "@/components/AncIntestazione.vue";
import AncIntestazioneFine from "@/components/AncIntestazioneFine.vue";
import AncCard from "@/components/AncCard.vue";

export default {
  name: "login",

  components: {
    AncIntestazione,
    AncIntestazioneFine,
    AncCard
  },

  props: {
    footercolor: String,
    requestUser: String,
    menuCat: { type: String },
    menuSubCat: { type: String },
    intMsg: { type: String }, //  "Anc Tradate",
    intMsgSubH: { type: String }, //  "Homepage",
    intFMsg: { type: String }, //  "Anc Tradate F",
    intFMsgSubH: { type: String }, //  "Homepage F",
    linksFP: { type: Array }, //
    src: { type: String },
    links: { type: Array }, //  links utili

    categorie: { type: Array },
    C: { type: Number },
    CS: { type: Number },
    drawerLeft: { type: Boolean }
  },

  data () {
    return {};
  },

  methods: {
    setMyPar () {
      let myparam = {
        Ccurrent: 80,
        CScurrent: 0
      };
      this.$emit("spMC", myparam); //spMC -- > sAVE pARAMETER / menu Cat
    },

    gotoR (r) {
      console.log("rotta per...");
      this.$emit("gotoR", "r");
    }
  }, //methods

  created () {
    console.log("links oncreate --> start");
    //this.setMyPar();
  }
};
</script>

<style media="screen">
.login {
  background-color: darkorchid;
  width: 100%;
  height: 100%;
}
</style>
