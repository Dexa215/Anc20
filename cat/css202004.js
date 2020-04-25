/*V2*/
/*    AncAppBar                                                                                                                                */
/*  +------------------------------------------------------------------------------------------------------------------------------+ h100      */
/*  |                                                                                                                              | #38282b   */
/*  |    r                                                                                                                         |           */
/*  | +--------------------------------------------------------------------------------------------------------------------------+ | h 70      */
/*  | |                                                                                                                          | | #241518   */
/*  | |              rcS                                          rcC                                          rcD               | |           */
/*  | | +-----------------------------+----------------------------------------------------------+-----------------------------+ | |           */
/*  | | |                             |                                                          |                             | | |           */
/*  | | |                             |                           rcCr                           |                             | | |           */
/*  | | |                             | +------------------------------------------------------+ |                             | | |           */
/*  | | |                             | |                                                      | |                             | | |           */
/*  | | |                             | |      rcCrcS             rcCrcC          rcCrcD       | |                             | | |           */
/*  | | |                             | | +----------------+-----------------+---------------+ | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | |                |   +---------+   |               | | |                             | | |           */
/*  | | |                             | | |                |   |         |   |               | | |                             | | |           */
/*  | | |                             | | |                |   | Avatar  |   |               | | |                             | | |           */
/*  | | |                             | | |                |   +---------+   |               | | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | |                |                 |               | | |                             | | |           */
/*  | | |                             | | +----------------+-----------------+---------------+ | |                             | | |           */
/*  | | |                             | |                                                      | |                             | | |           */
/*  | | |                             | +------------------------------------------------------+ |                             | | |           */
/*  | | |                             |                                                          |                             | | |           */
/*  | | |                             |                                                          |                             | | |           */
/*  | | +-----------------------------+----------------------------------------------------------+-----------------------------+ | |           */
/*  | |                                                                                                                          | |           */
/*  | +--------------------------------------------------------------------------------------------------------------------------+ |           */
/*  |                                                                                                                              |           */
/*  |                                                                                                                              |           */
/*  +------------------------------------------------------------------------------------------------------------------------------+           */


 /*
        vuetify
          v-row
        
            <- -> justify=  ['start','center','end','space-around','space-between',]
            ^     align=    ['start','center','end','baseline','stretch',]
        
            es:
            <v-row
                    :align  ="alignment"
                    :justify="justify"
                    class   ="grey lighten-5"
                    style   ="height: 300px;"
                    dense
            >
        
        css
          text
            ^     text-justify:       auto|inter-word|inter-character|none|initial|inherit;
            <- -> text-align:         left|right|center|justify|initial|inherit;
        
          padding
            padding: 25px 50px 75px 100px;      T-R-B-L
            padding: 25px 50px 75px;            T-RL-B
            padding: 25px 50px;                 TB-RL
            padding: 25px;                      TBRL
        
            1 value applies to  top padding is 25px
            2 value applies to  right padding is 50px
            3 value applies to  bottom padding is 75px
            4 value applies to  left padding is 100px
          padding: 25px 50px 75px;
            1 value applies to  top padding is 25px
            2 value applies to  right and left paddings are 50px
            3 value applies to  bottom padding is 75px
          padding: 25px 50px;
            1 value applies to  top and bottom paddings are 25px
            2 value applies to  right and left paddings are 50px
          padding: 25px;
            all four paddings are 25px
        
          border-radius
            border-radius: 15px 50px 30px 5px;  TL-TR-BR-BL
            border-radius: 15px 50px 30px;      TL-TRBL-BR
            border-radius: 15px 50px;           TLBR-TRBL
            border-radius: 15px;                TLBRTRBL
        
          border-radius: 15px 50px 30px 5px;
            1 value applies to top-left corner,
            2 value applies to top-right corner,
            3 value applies to bottom-right corner,
            4 value applies to bottom-left corner
          border-radius: 15px 50px 30px;
            1 value applies to top-left corner,
            2 value applies to top-right and bottom-left corners,
            3 value applies to bottom-right corner
          border-radius: 15px 50px;
            1 value applies to top-left and bottom-right corners,
            2 value applies to top-right and bottom-left corners
          border-radius: 15px;
            the value applies to all four corners, which are rounded equally
        
        
        */
        /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */