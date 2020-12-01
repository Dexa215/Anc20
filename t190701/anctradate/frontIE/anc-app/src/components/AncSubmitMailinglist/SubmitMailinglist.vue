<template>
<div>
<!-- Begin Mailchimp Signup Form -->
    <v-row>
      
      <!--col sx-->
      <v-col cols="2" class="carcol carcolsx"></v-col>

      <!--col cx-->
      <v-col cols="8">
        <v-card class="pa-4 cardround" light>
          <link
            href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
            rel="stylesheet"
            type="text/css"
          />

          <div id="mc_embed_signup">
            <form
              action="https://anctradate.us2.list-manage.com/subscribe/post?u=58a39c99b11828397cb53487b&amp;id=fd5840f5e7"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div class="indicates-required">
                  <span class="asterisk">*</span> indicates required
                </div>

                <div class="mc-field-group">
                  <label for="mce-EMAIL">
                    Email Address
                    <span class="asterisk">*</span>
                  </label>
                  <input type="email" value name="EMAIL" class="required email" id="mce-EMAIL" />
                </div>

                <div class="mc-field-group">
                  <label for="mce-FNAME">{{lang.t[0].lista[3].t[0].text}}</label>
                  <input type="text" value name="FNAME" class id="mce-FNAME" />
                </div>

                <div class="mc-field-group">
                  <label for="mce-LNAME">{{ lang.t[0].lista[3].t[1].text }}</label>
                  <input type="text" value name="LNAME" class id="mce-LNAME" />
                </div>

                <div class="mc-field-group">
                  <label for="mce-MMERGE6">{{ lang.t[0].lista[3].t[5].text }}</label>
                  <input type="text" value name="MMERGE6" class id="mce-MMERGE6" />
                </div>

                <div class="mc-field-group">
                  <label for="mce-MMERGE9">{{ lang.t[0].lista[3].t[3].text }}</label>
                  <input type="text" value name="MMERGE9" class id="mce-MMERGE9" />
                </div>

                <div class="mc-field-group">
                  <label for="mce-MMERGE10">
                    {{
                    lang.t[0].lista[3].t[6].text
                    }}
                  </label>
                  <input type="text" value name="MMERGE10" class id="mce-MMERGE10" />
                </div>

                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>

                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input
                    type="text"
                    name="b_58a39c99b11828397cb53487b_fd5840f5e7"
                    tabindex="-1"
                    value
                  />
                </div>

                <div class="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                </div>
              </div>
            </form>
          </div>
        </v-card>
      </v-col>
      <!--col dx-->
      <v-col cols="2" class="carcol carcoldx"></v-col>

    </v-row>
      <!--End mc_embed_signup-->
      
      </div>
      </template>

<!--/*mailchimp*/-->
<script
  type="text/javascript"
  src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
></script>
<script type="text/javascript">
(function($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
  fnames[1] = "FNAME";
  ftypes[1] = "text";
  fnames[2] = "LNAME";
  ftypes[2] = "text";
  fnames[4] = "PHONE";
  ftypes[4] = "phone";
  fnames[6] = "MMERGE6";
  ftypes[6] = "text";
  fnames[9] = "MMERGE9";
  ftypes[9] = "text";
  fnames[10] = "MMERGE10";
  ftypes[10] = "text";
})(jQuery);
var $mcj = jQuery.noConflict(true);
</script>
<!--/*mailchimp*/-->
<script>
export default {
  name: "submitmailinglist",

  components: {},
  computed: {},
  props: {},

  data() {
    return {
      dark: "true"
    };
  },
  methods: {
    gotoR(r) {
      this.$store.dispatch("setDF");
      this.$store.dispatch("gotoR", r);
    },
    setDF() {
      this.$store.dispatch("setDF");
    }
  }
};
</script>
<style media="screen">
/*mailchimp*/
#mc_embed_signup {
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
}
</style>
