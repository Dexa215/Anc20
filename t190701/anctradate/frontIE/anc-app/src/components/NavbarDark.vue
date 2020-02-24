<template lang="html">

<!--    TEST NG
    <nav v-if="requestUserIsStaff"
        class="navbar navbar-expand-md bg-dark navbar-dark"
    >
    <nav v-else
        class="navbar navbar-expand-md bg-light navbar-light"
    >
    </nav>
-->

    <nav class="navbar navbar-expand-md bg-dark navbar-dark">

        <!-- Brand -->
        <a>
            <router-link
                :to="{ name: 'home' }"
                class="navbar-brand mx-4"
                >Anc Tradate
            </router-link>
        </a>
<!--
src="../assets/images/Icone/anclogo2012.gif"
-->
        <!-- Brand Logo -->
        <img alt="Anc logo"
        src="/static/images/Icone/anclogo2012.gif"
        class="rounded mx-auto d-block"
        style ="width: 100px; border-radius: 10px"
        />

      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">

            <li class="nav-item mx-1">
              <router-link
                :to="{ name: 'home' }"
                class="btn btn-sm btn-info"
                >Home
              </router-link>
            </li>
<!--
            <li class="nav-item mx-1">
                <router-link
                  :to="{ name: 'question-editor' }"
                  class="btn btn-sm btn-danger"
                  >Aggiungi domanda
                </router-link>
            </li>
-->
            <li class="nav-item mx-1">
                <router-link
                  :to="{ name: 'sede' }"
                  class="btn btn-sm btn btn-warning"
                  >Sede
                </router-link>
            </li>
            <li class="nav-item mx-1">
                <router-link
                  :to="{ name: 'contatti' }"
                  class="btn btn-sm btn btn-warning"
                  >Contatti
                </router-link>
            </li>
            <li class="nav-item mx-1">
                <router-link
                  :to="{ name: 'chisiamo' }"
                  class="btn btn-sm btn btn-warning"
                  >Chi siamo
                </router-link>
            </li>
            <li class="nav-item mx-1">
                <router-link
                  :to="{ name: 'eventi' }"
                  class="btn btn-sm btn btn-warning"
                  >Eventi
                </router-link>
            </li>
            <li class="nav-item mx-1">
                <router-link
                  :to="{ name: 'links' }"
                  class="btn btn-sm btn btn-warning"
                  >Links
                </router-link>
            </li>
            <li class="nav-item mx-1">
                <router-link
                  :to="{ name: 'tesseramento' }"
                  class="btn btn-sm btn btn-warning"
                  >Tesseramento
                </router-link>
            </li>
            <li class="nav-item mx-1">
              <router-link
                  :to="{ name: 'about' }"
                  class="btn btn-sm btn-danger"
                  >About
              </router-link>
            </li>
  <!--
            <li class="nav-item mx-1">
              <router-link
                :to="{ name: 'dexotest1' }"
                class="btn btn-sm btn-warning"
                >Dexo
              </router-link>
            </li>
            <li class="nav-item mx-1">
              <router-link
                :to="{ name: 'dexotest2' }"
                class="btn btn-sm btn-secondary"
                >Domande
              </router-link>
            </li>
  -->
            <li class="nav-item ml-1">
                <a  class="btn btn-sm "
                    href=""
                    >...
                </a>
            </li>
            <!-- User -->
            <li class="nav-item ml-1">
              <a  class="btn btn-sm btn-outline-secondary"
                  href="/accounts/logout/"
                >Logout
              </a>
            </li>
            <li class="nav-item mx-1">
              <a  class="navbar-brand-user mx-1" href="#"
                >{{ requestUser }}
              </a>
              <a v-if="requestUserIsStaff">
                  Staff
                  <div class="mb-4 text-center text-rm-right">
                      <!--    TEST OK:
                      <div class="btn btn-sm btn-info">Nuovo Evento</div>
                      -->
                      <!--    TEST OK:
                      <p>requestUser is staff: {{ requestUserIsStaff }}</p>
                      <p>requestUser is Superuser: {{ requestUserIsSuper }}</p>
                      -->
                      <v-btn
                          tagName="nuovoevento"
                          v-if="requestUserIsStaff"
                          btn-sm
                          btn-info
                          rounded color="light-blue accent-2"
                          lighten
                          >Nuovo Evento
                      </v-btn>
                  </div>
              </a>
            </li>
          </ul>
      </div>
      <!--container-->
    </nav>
</template>

<script>
import { apiService } from "../common/api.service";

export default {
    name: "NavbarComponentDark",

    data() {
      return {
        requestUser: "...NOUSER...",
        requestUserIsStaff: false,
        requestUserIsSuper: false
      };
    },

    props: {
      //msg: String,
      //auth_user: String
    },

    methods: {
        getRequestUser() {
            let endpoint = "api/profiles/getcurrentuser/";
            apiService(endpoint).then(data => {
              console.log("chiamata rest... user:",data);
              console.log("chiamata rest... user:",data.us.name);
              this.requestUser = data.us.name;
              this.requestUserIsStaff = data.us.staff;
              this.requestUserIsSuper = data.us.superuser;
            });
        },
    },

    created() {
      document.title = "ANC Tradate";
//      this.getRequestUser();
    }
};
</script>

<style lang="css">
.my-navbar {
    border-bottom: 1px solid #DDD;
}

.navbar-brand {
    font-weight: bold;
    font-size: 130%;
}

.navbar-brand-user {
    color: white;
    font-weight: bold;
    font-size: 130%;
}

.navbar-brand:hover {
    color: cadetblue  !important;
}
.navbar-brand-user:hover {
    color: cadetblue  !important;
}
</style>
