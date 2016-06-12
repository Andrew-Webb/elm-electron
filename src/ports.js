'use strict'

var Elm = require('./obj/elm');

// get a reference to the div where we will show our UI
let container = document.getElementById('container');

// start the elm app in the container
// and keep a reference for communicating with the app
let myApp = Elm.Main.embed(container);
