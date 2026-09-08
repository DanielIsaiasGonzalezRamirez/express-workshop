const express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json');

app.get("/", (req, res, next) => {
    return res.status(200).send("Bienvenido al Pokedex");
});

app.get('/pokemon', (req, res, next) => {
    return res.status(200).send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next) => {
    const id = req.params.id - 1;
    if (id >= 0 && id <= 150) {
        return res.status(200).send(pokemon[id]);
    }
    else {
        return res.status(404).send("Pokémon no encontrado");
    }
});

app.get('/pokemon/:name([A-Za-z]+)', (req, res, next) => {
    const name = req.params.name;
    const pk = pokemon.filter((p) => {
        if(p.name.toUpperCase() = name.toUpperCase()) {
            return p;
        }
    });
    
    if(pk.length > 0){
        return res.status(200).send(pk);
    }

    return res.status(404).send("Pokémon no encontrado");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});