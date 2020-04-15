<template>
  <div></div>
</template>

<script>
</script>

<style media="screen">
.AncAppBarE {
  /*background-color:  teal !important;*/
  /*height: 250px;*/

  height: 150px;
  width: 100%;
  position: fixed;
  z-index: 2;

  padding-top: 6px;
  padding-bottom: 6px;

  text-align: auto;
  text-justify: auto;

  /*padding: 4px 0px 3px;*/
}
/*------------------------------------------------------------------------------------------------------*/
/*.AncRowBarEst {*/

/*------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------*/

.r {
  position: relative;
  z-index: 3;

  /*.AncRowBarEst / ARBI */
  background-color: ORANGE !important; /*test*/
  /*background-color: #2b2b29 !important;*/
  /*background-color: #241518 !important;*/
  height: 70px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  text-justify: center;
  border-radius: 50px 50px 50px 50px;
}
.r_BC {
  background-color: rgb(36, 17, 6) !important;
  /*  background-color: #241518 !important;   */
}
/* ---------------------------------------------------------------------- */
.rmNews {
  /* ... comunicazioni ...*/
  position: absolute;
  z-index: 3;
  height: 105px;
  width: 100%;
  background-color: purple !important; /*test*/
}
/* ---------------------------------------------------------------------- */
.rmH {
  position: relative;
  height: 50px;
}
.rmvrow {
  background-color: orange !important; /*test*/
  top: 70px; /*width: 578px; */
  z-index: 3;
}
.rmvcol {
  background-color: yellow !important; /*test*/
}
.rmvcolC {
  background-color: pink !important; /*test*/
}
/* ---------------------------------------------------------------------- */
.rm {
  /*menu a discesa*/
  position: fixed;
  top: 66px;
  /* left: 578px; */
  z-index: 3;
  height: 50px;
  /*width: 368px;*/
}

/*------------------------------------------------------------------------------------------------------*/
.rcX {
  position: relative;
  z-index: 4;
  /*    per rcS - rcC - rcD  */
  height: 66px;
  text-justify: auto;
}
.rcLat {
  /*    add:  rcX rcLat_BC   */
  /*    per:  Colonne Laterali rcS - rcD  */
  padding: 8px 8px;
  margin-top: 4px;
  margin-bottom: 1px;
}
.rcS {
  /*    add:  rcX rcLat   */
  /*background-color: rgb(194, 57, 212) !important;*/
  /*background-color: #1a0408 !important;*/
  /*height: 66px;             incorporato rCx*/
  /*text-justify: auto;       incorporato rCx*/
  /*padding: 8px 8px;         incorporato rClaterale*/
  /*margin-top: 1px;*/
  /*margin-bottom: 1px;*/
  text-align: left;
  margin-left: 2px;
  margin-right: 0px;
  border-radius: 48px 85px 0px 48px;
}
/*
.AncRowBarColssx {
  /*background-color: rgb(194, 57, 212) !important;*/
/*background-color: #1a0408 !important;*/
/*
  height: 66px;
  text-align: left;
  text-justify: auto;
  padding: 8px 8px;
  margin-left: 1px;
  margin-right: 0px;
  margin-top: 1px;
  margin-bottom: 1px;
  border-radius: 48px 85px 0px 48px;
}
*/

.rcD {
  /*    add:  rcX rcLat    */
  /*background-color: rgb(194, 57, 212) !important;*/
  /*background-color: #1a0408 !important;*/
  /*height: 66px;             incorporato rCx*/
  /*text-justify: auto;       incorporato rCx*/
  /*padding: 8px 8px;         incorporato rClaterale*/
  /*margin-top: 1px;*/
  /*margin-bottom: 1px;*/
  text-align: right;
  margin-left: 0px;
  margin-right: 2px;
  border-radius: 85px 48px 48px 0px;
}
/*
.AncRowBarColddx {
  /*background-color: rgb(194, 57, 212) !important;*/
/*background-color: #1a0408 !important;*/
/*
  height: 66px;
  text-align: right;
  text-justify: auto;
  padding: 8px 8px;
  margin-left: 0px;
  margin-right: 1px;
  margin-top: 1px;
  margin-bottom: 1px;
  border-radius: 85px 48px 48px 0px;
}
*/

.rcC {
  position: relative;
  z-index: 5;
  /*width: 368px; RIFERIMENTO*/
  padding: 0px 0px;
  text-align: center;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 4px;
  margin-bottom: 0px;
  border-radius: 0px 0px 0px 0px;
}
/*------------------------------------------------------------------------------------------------------*/
.rcCr {
  position: relative;
  z-index: 5;
  /*    add:  rcCr_BC       */
  /*    EX:   AncRowBarColccxRowInt */
  height: 64px;
  margin-left: 0px;
  margin-right: 0px;
  border-radius: 48px 48px 0px 0px;
}
/*------------------------------------------------------------------------------------------------------*/
.rcCrcX {
  position: relative;
  z-index: 6;
  text-justify: auto;
}
.rcCrcLat {
  /*    add:    rcCrcX  rcCrcLat_BC       */
  /*    per:    rcCrcS  / rcCrcD    */
}
.rcCrcS {
  /*    add:    rcCrcX  rcCrcLat       */
  /*    EX:     AncRowBarColcxRowIntColsx*/
  text-align: right;
}

.rcCrcD {
  /*    add:    rcCrcX  rcCrcLat       */
  /*    EX:     AncRowBarColcxRowIntColdx*/
  text-align: left;
}

.rcCrcC {
  /*    add:    rcCrcC_BC       */
  /*    EX:     AncRowBarColcxRowIntColccx    */
  padding: 15px 2px 3px; /* T-RL-B */
  text-align: center;
}

.avatar {
  /* background-color: green !important; */
  /* color: green; */
  /*right: "true";*/
  size: 48;
  max-width: 48px;
  max-height: 50px;
  transform: scale(1, 1);
  z-index: 5;
}
.avatar:hover {
  transform: scale(1.1, 1.1);
}
.icorot {
  transform: rotate(10deg);
}
.drwOpen {
  /*transform: rotate(25deg);*/
  transform: scale(1.2, 1.2);
  height: 48px;
  width: 48px;
}
.drwClose {
  /*transform: rotate(0deg);*/
  transform: scale(1, 1);
  height: 48px;
  width: 48px;
}

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

/*    AncAppBarE               #38282b                                                                        */
/*  +-------------------------------------------------------------------------------------------------+ h100  */
/*    r   AncRowBarEst            #241518                                                                        */
/*    +---------------------------------------------------------------------------------------------+   h70   */
/*      +--------------         -----------------------------------------           --------------+           */
/*        rcS                     rcC                                                 rcD                   */
/*      | AncRowBar-  |           AncRowBar-Colcx-                                  | AncRowBar-  |           */
/*      |   Colssx    |                                                             |   colddx    |           */
/*      |             |         -----------------------------------------           |             |           */
/*      |             |           rcCr
/*                                RowInt-                                           |             |           */
/*      |             |         +---------------------------------------+           |             |           */
/*      |             |         | rcCrcS    | rcCrcC      | rcCrcD      |           |             |           */
/*      |             |         |           |             |             |           |             |           */
/*      |             |         |  Colssx   |   Colxccx   |   Colddx    |           |             |           */
/*      |             |         |           |             |             |           |             |           */
/*      |             |         |           | +---------+ |             |           |             |           */
/*      |             |         |           | | Avatar  | |             |           |             |           */
/*      |             |         |           | +---------+ |             |           |             |           */
/*      |             |         |           |             |             |           |             |           */
/*      |             |         +---------------------------------------+           |             |           */
/*      |             |                                                             |             |           */
/*      +-----------------------------------------------------------------------------------------+           */
/*    +---------------------------------------------------------------------------------------------+         */
/*  +-------------------------------------------------------------------------------------------------+       */

/*
.AncAppBarELG {
  text-align: auto;
  text-justify: auto;
}
*/

/*
  padding: 25px 50px 75px 100px;      T-R-B-L
  padding: 25px 50px 75px;            T-RL-B
  padding: 25px 50px;                 TB-RL
  padding: 25px;                      TBRL
*/

/*  Colori barra... */
/*  background-color:"#38282b" !important;   Grigio scuro +4  */
/*  background-color:"#241518" !important;   Grigio scuro +5  */
/*  background-color:"#1a0408" !important;   Grigio scuro +6  */

.AncAppBarI {
  z-index: 3;
  background-color: yellowgreen !important;

  height: 45px;

  text-align: center;
  text-justify: center;

  border-radius: 48px 48px 48px 48px;
}

.AncAppBar {
  z-index: 3;
  background-color: yellowgreen !important;

  height: 45px;

  text-align: center;
  text-justify: center;

  border-radius: 48px 48px 48px 48px;
}

/*  ---------------------------------------------------------------------   */
/*  | colbarsx |                  colbarcx                  | colbardx  |   */
/*  |          |   colAvSx   |     avatar      |   colAvDx  |           |   */
/*  ---------------------------------------------------------------------   */

/*OLD
.colbarsx {
  background-color: purple !important;
  min-height: 76px;
  text-align: start;
  padding: 12px 10px;
}
.colbarcx {
  background-color: navy !important;
  min-height: 76px;
  text-align: start;
  padding: 12px 10px;
}
.colbardx {
  background-color: purple !important;
  min-height: 76px;
  text-align: end;
  padding: 12px 10px;
}
*/

/*
.colAvSx {
  background-color: darkorange !important;
  text-align: end;
  text-justify: center;
  height: 22px;
  padding: 22px 10px;
}

.colAvDx {
  background-color: orange !important;
  text-align: start;
  text-justify: center;
  height: 22px;
  padding: 22px 10px;
}

.colAvatar {
  background-color: pink !important;
  height: 48px;
  max-width: 80px;

  text-align: center;
  text-justify: center;

  padding: 1px;
}
*/

/*  ---------------------------------------------------------------------   */
/*  | colbarsx |                  colbarcx                  | colbardx  |   */
/*  |          |   colAvSx   |     avatar      |   colAvDx  |           |   */
/*  ---------------------------------------------------------------------   */

/*
col {
  padding: 20px 0px 0px;
}

.t {
  background-color: transparent !important;
}

.colBar {
  background-color: transparent !important;
}
.coltest {
  background-color: red !important;
}
*/

/*
padding
    padding: 25px 50px 75px 100px;      T-R-B-L
    padding: 25px 50px 75px;            T-RL-B
    padding: 25px 50px;                 TB-RL
    padding: 25px;                      TBRL
border-radius
    border-radius: 15px 50px 30px 5px;  TL-TR-BR-BL
    border-radius: 15px 50px 30px;      TL-TRBL-BR
    border-radius: 15px 50px;           TLBR-TRBL
    border-radius: 15px;                TLBRTRBL
*/

/*
.AncRowBarColcxRowIntColcx {
  background-color: darkred !important;
  height: 66px;
  text-align: center;
}
*/

/*
.AncRowBarColcxRowIntColsxsx {
  background-color: darkred !important;
  height: 50px;
  text-align: left;
  text-justify: auto;
}
*/

/*
.AncRowBarColdx {
  background-color: deeppink !important;
  height: 66px;
  text-align: start;

  padding: 2px 2px;
  margin-left: 0px;
  margin-right: 1px;
  margin-top: 1px;
  margin-bottom: 1px;
  border-radius: 40px 40px 40px 0px;
}
*/

/*
.avatar {
  background-color: green !important;
  color: green;
  right: "true";
  size: 62;
  min-width: 65px;
  max-height: 75px;
  max-width: 75px;
}
*/

.menubtnd1 {
  z-index: 7;
  background-color: darkorchid !important;

  max-width: 75px;
  max-height: 45px;

  border-radius: 2px 2px 40px 40px;

  text-align: center;
  text-justify: center;
  padding-bottom: 15px;
  margin-top: 5px;
}

/* Background Colors    --T : Test   */
/*------------------------------------------------------------------------------------------------------*/
/*  r   */

.r_BC--T {
  background-color: ORANGE !important;
}
/*  rcLat   [rcS / rcD]  */
.rcLat_BC {
  background-color: rgb(20, 9, 2) !important;
  /*background-color: #1a0408 !important;*/
  /*background-color: transparent !important;*/
}
.rcLat_BC_Visitor {
  /*    EX:   .arbcs-Visitor    */
  background-color: #1a0408 !important;
}
.rcLat_BC_Socio {
  /*    EX:   .arbcs-Socio      */
  background-color: #1a0408 !important;
}
.rcLat_BC_Staff {
  /*    EX:   .arbcs-Staff      */
  background-color: #87011a !important;
}

/*color Background AR E */
/*  Grigio scuro +4   .cBE-Vis    {  background-color: "#38282b" !important;}
/*  Grigio scuro +4   .cBE-Socio  {  background-color: "green" !important; }
/*  Grigio scuro +4   .cBE-Staff  {  background-color: "red" !important; }
/*  Grigio scuro +6   .cBI        {  background-color: "#241b1d" !important; }*/

.rcLat_BC--T {
  background-color: red !important;
}

.AncRowBarColsxRow {
  background-color: pink !important;
  height: 32px;
}

.AncRowBarColdxRow {
  background-color: pink !important;
  height: 32px;
}

/*  rcC  */
.rcC_BC {
  background-color: #241518 !important;
}
.rcC_BC--T {
  /*background-color: SALMON !important;*/
  background-color: salmon !important;
}

/*------------------------------------------------------------------------------------------------------*/
/*  rcCr  */
.rcCr_BC {
  background-color: transparent !important;
}
.rcCr_BC--T {
  z-index: -1;
  background-color: green !important;
}
/*------------------------------------------------------------------------------------------------------*/
/*    rcCrcLat [  rcCrcS  / rcCrcD  ]    */
.rcCrcLat_BC {
  background-color: transparent !important;
}
.rcCrcLat_BC--T {
  background-color: red !important;
}

/*    rcCrcC    */
.rcCrcC_BC {
  background-color: transparent !important;
}
.rcCrcC_BC--T {
  background-color: slateblue !important;
}

.rcCrcCr_BC--T {
  background-color: brown !important;
}

/*    avatar    */
.avatar_BC {
  background-color: transparent !important;
}

.avatar_BC--T {
  background-color: green !important;
}

/* TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT */
/* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */
@keyframes slideInDown {
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
.slideInDown {
  animation-name: slideInDown;
}
/* -------------------------------------------------------------------- */
@keyframes fadeOutUp {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.fadeOutUp {
  animation-name: fadeOutUp;
  animation-duration: 1s;
}
/* -------------------------------------------------------------------- */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 1s;

  /* animation-delay: -2s; test ok*/
}
/* -------------------------------------------------------------------- */
@keyframes flipOutX {
  from {
    transform: perspective(200px);
  }

  30% {
    transform: perspective(200px) rotate3d(1, 0, 0, -50deg);
    opacity: 1;
  }

  to {
    transform: perspective(200px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  animation-duration: 0.75s;
  animation-name: flipOutX;
  backface-visibility: visible !important;
}
/* -------------------------------------------------------------------- */
@keyframes zoomOutDown {
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.zoomOutDown {
  animation-name: zoomOutDown;
}
/* -------------------------------------------------------------------- */
@keyframes zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}
.zoomOut {
  animation-name: zoomOut;
}

/* TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT */
/* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */

/* -------------------------------------------------------------------- */

/*
v-enter:          Starting state for enter. Added before element is inserted, removed one frame after element is inserted.
v-enter-active:   Active state for enter. Applied during the entire entering phase. Added before element is inserted, removed when transition/animation finishes. This class can be used to define the duration, delay and easing curve for the entering transition.
v-enter-to:       Only available in versions 2.1.8+. Ending state for enter. Added one frame after element is inserted (at the same time v-enter is removed), removed when transition/animation finishes.

v-leave:          Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame.
v-leave-active:   Active state for leave. Applied during the entire leaving phase. Added immediately when leave transition is triggered, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the leaving transition.
v-leave-to:       Only available in versions 2.1.8+. Ending state for leave. Added one frame after a leaving transition is triggered (at the same time v-leave is removed), removed when the transition/animation finishes.
*/

/*
CAT2020...
padding
    padding: 25px 50px 75px 100px;      T-R-B-L
    padding: 25px 50px 75px;            T-RL-B
    padding: 25px 50px;                 TB-RL
    padding: 25px;                      TBRL
border-radius
    border-radius: 15px 50px 30px 5px;  TL-TR-BR-BL
    border-radius: 15px 50px 30px;      TL-TRBL-BR
    border-radius: 15px 50px;           TLBR-TRBL
    border-radius: 15px;                TLBRTRBL
*/
</style>
