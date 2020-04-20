<!--                //////////////////////////////////////////////////-->

    <!--
                                    <v-timeline>
                                        <v-timeline-item
                                            v-for="(year, i) in yearsList"
                                            :key="i"
                                            :color="year.color"
                                            small
                                            class="ma-10"
                                        >


                                            <template
                                                v-slot:icon
                                            >

                                                <v-avatar
                                                    v-show = "!YfocusOn | Yy!=year"
                                                    size=100
                                                >
                                                      <v-img
                                                        :src="year.preview"
                                                        @click = 'sety(year)'
                                                      ></v-img>
                                                </v-avatar>



                                            </template>

                                            <template v-slot:opposite>
                                                <div v-show = "Yy!=year"  >
                                                      <span
                                                        :class="`headline font-weight-bold ${year.color}--text mx-4`"
                                                        v-text="year.anno"

                                                      ></span>
                                                </div>
                                            </template>

                                        <div class="py-4">
                                            <h2
                                                :class="`headline font-weight-light mb-4 ${year.color}--text mx-4`"

                                            </h2>
                                        </div>

                                            <div>

                                                    <div v-if= "Yy && Yy==year" >
                                                        <ancArchiveYear

                                                            @newEvent="eventPost"

                                                            :Yy              ="Yy"
                                                            :YfocusOn        ="YfocusOn"

                                                            :Yevents=        "Yevents"
                                                            :Ynext=          "Ynext"
                                                            :YloadingEvents= "YloadingEvents"
                                                        >
                                                        </ancArchiveYear>
                                                    </div>
                                                    <!--
                                                    <div v-else>
                                                        <p>
                                                            nessun y selezionato...
                                                        </p>
                                                    </div>
                                                    -->
    <!--
                                                <div v-else>
                                                    <p>focus off {{y}}</p>
                                                </div>

                                            </div>
                                        </v-timeline-item>
                                    </v-timeline>
    -->
    <!--
            <div v-for="year in yearsList">
                <v-chip

                    @click = 'gotoR(year.slug)'
                    class="ma-2"
                > {{year.anno}}

                </v-chip>
            </div>
    -->


<!--                ////////////////////////////////////////////////// -->
                  <div>
                    <div>
                      <div v-if= "YfocusOn" >
                        <div v-if= "Yy.anno">
                          <!--
                            <ancArchiveYear
                                :Yy              ="Yy"
                                :YfocusOn        ="YfocusOn"

                                :Yevents=        "Yevents"
                                :Ynext=          "Ynext"
                                :YloadingEvents= "YloadingEvents"
                            >
                            </ancArchiveYear>
                          -->
                        </div>
                        <div v-else>
                            <!--p>
                                nessun y selezionato...
                            </p-->
                        </div>
                        </div>
                      <div v-else>
                        <!-- p>focus off {{Yy}}</p-->
                    </div>
                  </div>
<!--                //////////////////////////////////////////////////-->    