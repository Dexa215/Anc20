var menuR = function () {

    this.finish = false;
    this.cat = [];          //tutte le categorie  
    this.cats = [];         //categoria corrente
    /*
    var M = require("./menu.js");
    this.menu = M;    
    */

};

menuR.prototype.getCurrentCat = function (r) {

    this.finish = false;

    var C = '';
    var CS = '';
    var cat = [];

    console.log("menuRetrieve.JS --> CHIAMATA PER ... ", r);
    switch (r) {
        case "": cat = [0, 0]; break;

        case "/": cat = [10, 0]; break;
        case "/sede": cat = [20, 21]; break;
        case "/sedeOrari": cat = [20, 22]; break;
        case "/contatti": cat = [30, 0]; break;
        case "/chisiamo": cat = [40, 0]; break;
        case "/chisiamosoci": cat = [40, 41]; break;
        case "/chisiamobenemerite": cat = [40, 42]; break;
        case "/chisiamosimpatizzanti": cat = [40, 43]; break;
        case "/agenda": cat = [50, 0]; break;
        case "/archivio": cat = [60, 0]; break;

        case "/event": cat = [60, 68]; break;//crea 
        case "/event/": cat = [60, 68]; break;//crea  

        case "/event/:slug": cat = [60, 69]; break;//modifica 
        case "/tesseramento": cat = [70, 0]; break;
        case "/links": cat = [80, 0]; break;

        default: cat = [10, 0]; break;
    };

    console.log("menuRetrieve.JS --> CODIFICA OTTENUTA : ", cat);
    this.cats = cat;
    this.finish = true;
    console.log("menuRetrieve.JS --> CODIFICA OTTENUTA : ", this.cats);


};

menuR.prototype.canRead = function () {
    console.log("menuRetrieve.JS canRead : ", this.finish);
    return this.finish;
};

menuR.prototype.getCat = function () {       //menu categorie
    this.finish = false;

    const menucat =
        [
            {//cat1
                n: "10",
                descrizione: "home",
                titolo: "",
                //icona: "mdi-shield-half-full",
                icona: "mdi-bank",
                img: "/static/icons/menu/Sede.jpg",
                imgEvidenza: "/static/icons/menu/importanteww.png",
                link: "/",
                linksFP:
                    [{
                        descrizione: "Ubicazione sede",
                        link: "sede/"
                    },
                    {
                        descrizione: "Chi siamo",
                        link: "chisiamo/"
                    },
                    {
                        descrizione: "Richiedi INFO",
                        link: "contatti/"
                    },
                    ],
                sottocategorie: [
                ]
            },
            {//cat2
                n: "20",
                descrizione: "sede",
                titolo: "Il ritrovo abituale per i soci",
                icona: "mdi-compass",
                //icona: "mdi-bank",
                img: "/static/images/Icone/anclogo7.gif",
                link: "/sede",
                linksFP:
                    [{
                        descrizione: "Ubicazione sede",
                        link: "sede/"
                    },
                    {
                        descrizione: "Chi siamo",
                        link: "chisiamo/"
                    },
                    {
                        descrizione: "Richiedi INFO",
                        link: "contatti/"
                    },
                    ],
                sottocategorie: [
                    {
                        n: "21",
                        descrizione: "ubicazione",
                        titolo: "Dove siamo",
                        icona: "mdi-compass",
                        img: "/static/icons/menu/Sede.png",
                        link: "/sede",
                    },
                    {
                        n: "22",
                        descrizione: "orari",
                        titolo: "Quando ci troviamo",
                        icona: "mdi-clock-outline",
                        img: "/static/icons/menu/Orologio.jpg",
                        link: "/sedeOrari",
                    },
                ]
            },
            {//cat3
                n: "30",
                descrizione: "contatti",
                titolo: "Come contattarci",
                icona: "mdi-face-agent",
                img: "/static/images/Icone/anclogo7.gif",
                link: "/contatti",
                linksFP:
                    [{
                        descrizione: "Ubicazione sede",
                        link: "sede/"
                    },
                    {
                        descrizione: "Chi siamo",
                        link: "chisiamo/"
                    },
                    {
                        descrizione: "Richiedi INFO",
                        link: "contatti/"
                    },
                    ],
                sottocategorie: [
                    {
                        n: "31",
                        descrizione: "presidente",
                        titolo: "",
                        icona: "",
                        img: "",
                        link: "",
                    },
                    {
                        n: "32",
                        descrizione: "vicepresidente",
                        titolo: "",
                        icona: "",
                        img: "",
                        link: "",
                    },
                    {
                        n: "33",
                        descrizione: "posta",
                        titolo: "",
                        icona: "",
                        img: "",
                        link: "",
                    },
                ]
            },

            {//cat4
                n: "40",
                descrizione: "Chi siamo",
                titolo: "Organizzazione della sezione",
                icona: "mdi-account-group",
                img: "/static/images/Icone/anclogo7.gif",
                link: "/chisiamo",
                linksFP:
                    [{
                        descrizione: "Ubicazione sede",
                        link: "sede/"
                    },
                    {
                        descrizione: "Chi siamo",
                        link: "chisiamo/"
                    },
                    {
                        descrizione: "Richiedi INFO",
                        link: "contatti/"
                    },
                    ],

                sottocategorie: [
                    {
                        n: "41",
                        descrizione: "Soci",
                        titolo: "Il cuore dell'Associazione",
                        icona: "mdi-human-greeting",
                        img: "/static/images/Icone/bus.jpg",
                        link: "/chisiamosoci",
                    },
                    {
                        n: "42",
                        descrizione: "Benemerite",
                        titolo: "Il fiore all'occhiello",
                        icona: "mdi-human-female",
                        img: "/static/images/Icone/bengradi.jpg",
                        link: "/chisiamobenemerite",
                    },
                    {
                        n: "43",
                        descrizione: "Simpatizzanti",
                        titolo: "La forza di chi sta dalla nostra parte",
                        icona: "mdi-human-handsup",
                        img: "/static/images/Icone/cap.jpg",
                        link: "/chisiamosimpatizzanti",
                    },
                ]
            },
            {//cat5
                n: "50",
                descrizione: "agenda",
                titolo: "prossimi appuntamenti da non perdere",
                icona: "mdi-calendar-multiple",
                img: "/static/icons/menu/Agenda.jpg",
                link: "/agenda",
                linksFP:
                    [{
                        descrizione: "Ubicazione sede",
                        link: "sede/"
                    },
                    {
                        descrizione: "Chi siamo",
                        link: "chisiamo/"
                    },
                    {
                        descrizione: "Richiedi INFO",
                        link: "contatti/"
                    },
                    ],
                sottocategorie: [
                    {
                        n: "51",
                        descrizione: "appuntamenti",
                        titolo: "",
                        icona: "",
                        img: "/static/icons/menu/Agenda.jpg",
                        link: "",
                    },
                ]
            },
            {//cat6
                n: "60",
                descrizione: "Archivio",
                titolo: "sfogliando tra i vecchi ricordi ",
                icona: "mdi-archive",
                img: "/static/images/Icone/anclogo7.gif",
                link: "/archivio",
                linksFP:
                    [{
                        descrizione: "Ubicazione sede",
                        link: "sede/"
                    },
                    {
                        descrizione: "Chi siamo",
                        link: "chisiamo/"
                    },
                    {
                        descrizione: "Richiedi INFO",
                        link: "contatti/"
                    },
                    ],

                sottocategorie: [
                    {
                        n: "61",
                        descrizione: "Eventi",
                        titolo: "Cosa abbiamo realizzato",
                        icona: "",
                        img: "/static/images/Icone/anclogo7.gif",
                        link: "",
                    },
                ]
            },
            {//cat7
                n: "70",
                descrizione: "Tesseramento",
                titolo: "sostenere l'Associazione",
                icona: "mdi-passport",
                img: "/static/images/Materiale/tesserino.jpg",
                link: "/tesseramento",
                linksFP:
                    [{
                        descrizione: "Ubicazione sede",
                        link: "sede/"
                    },
                    {
                        descrizione: "Chi siamo",
                        link: "chisiamo/"
                    },
                    {
                        descrizione: "Richiedi INFO",
                        link: "contatti/"
                    },
                    ],

                sottocategorie: [
                    {
                        n: "71",
                        descrizione: "Prassi",
                        titolo: "Come funziona il tesseramento e il rinnovo",
                        icona: "mdi-format-list-text",
                        img: "/static/images/Materiale/tesserino.jpg",
                        link: "/tesseramentoprassi",
                    },
                ]
            },
            {//cat8
                n: "80",
                descrizione: "Links",
                titolo: "Siti di interesse, amici, altro...",
                icona: "mdi-link-variant",
                img: "/static/images/Icone/anclogo7.gif",
                link: "/links",
                linksFP:
                    [{
                        descrizione: "Ubicazione sede",
                        link: "sede/"
                    },
                    {
                        descrizione: "Chi siamo",
                        link: "chisiamo/"
                    },
                    {
                        descrizione: "Richiedi INFO",
                        link: "contatti/"
                    },
                    ],

                sottocategorie: [
                ]
            },
        ];

    this.cat = menucat;

    this.finish = true;

    //return (menucat);

};

menuR.prototype.canRead = function () {
    return this.finish;
};

module.exports = new menuR();
