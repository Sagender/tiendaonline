
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const low = require("lowdb");
const articulosRouter = require("./routes/articulos");
const { prototype } = require("events");
const { appendFile } = require("fs");



const options = {
    definition: {
        openapi:"3.0.0",
        info:{
            title:"Librerias APIs - CERTUS",
            version: "1.0.0",
            description: "Demo de librerias de Venta API",

        },
        servers: [ 
            {
                url: "http://localhost:" + PORT,
            },
        ],
    },
    apis: ["./routes/*.js"],

};


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/articulos", articulosRouter)
