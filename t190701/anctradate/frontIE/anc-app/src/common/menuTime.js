import router from "../router";

var menuT=function() {

        this.finish = false;
        this.cats = [];
        this.currentcat = [];

        /*
            var rou = require("../router");
            this.rou = rou;
        */
        var mr = require("./menuRetrieve");
        this.menu = mr;
};

menuT.prototype.retrieveMenu = function () {
    var t1 = this;
    var n=0;
    console.log("menuT.JS retrieveMenu");
    t1.menu.getCat(); //---------------------->
    var task1 = function (pm) {
        n++;
        if (!pm.menu.canRead()) {
            setTimeout(task1, 100, pm);
            console.log("menuT.JS timeout, attesa...", n++);
        }
        else {
            console.log("menuT.JS f RITORNATA -- DATI CATS t1.menu.cat: ", t1.menu.cat);
            
            t1.cats = t1.menu.cat;
            t1.finish = true;
            return t1.cats;
        }
    };
    task1(this);    
};

menuT.prototype.sem = function() {
    let saluto = "ciao";
    return saluto;
};


menuT.prototype.goto = function (r){
    var t1 = this;
    console.log("menuT.JS goto r:", r);
    t1.menu.getCurrentCat(r); //---------------------->

    var task2 = function (pm) {
        if (!pm.menu.canRead()) {
            setTimeout(task2, 100, pm);
            console.log("menuTime timeout, attesa...");
        }
        else {
            t1.currentcat = t1.menu.cats;
            console.log("menuT.JS goto Funzione RITORNATA");
            console.log("menuT.JS goto DATI CATS: ", t1.menu.cats);
            router.push(r);
        }
    };    
    task2(this);
};

menuT.prototype.canRead = function () {
    return this.finish;
};    

menuT.prototype.getMenu = function () {
    return this.cats;
};  



//module.exports = new menuT;

export default new menuT();



