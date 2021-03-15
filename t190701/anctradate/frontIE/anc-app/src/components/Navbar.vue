 <template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light my-navbar">
    <div class="container">

      <router-link :to="{ name: 'home' }" class="navbar-brand"
        >ANC Tradate
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-1">
            <router-link :to="{ name: 'home' }" class="btn btn-sm btn-success"
              >Home
            </router-link>
          </li>

          <li class="nav-item mx-1">
              <router-link
                :to="{ name: 'question-editor' }"
                class="btn btn-sm btn-danger"
                >Aggiungi domanda
              </router-link>
          </li>
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
          <li class="nav-item mx-1">
            <a  class="btn btn-sm btn-outline-secondary"
                href="/accounts/logout/"
              >Logout
            </a>
          </li>
        </ul>
        <!--
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        -->
      </div>
    </div>
    <!--container-->
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent"
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

.navbar-brand:hover {
    color: cadetblue  !important;
}
</style>
