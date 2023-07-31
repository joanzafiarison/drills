const fs = require("fs");

let linkReg = new RegExp(/https:/);
let descReg = new RegExp(/::/);

function parseFile(data){
    let blocks = data.split(">>>");
    
    let blocks_data = [];
    for( let block of blocks) {
        //https://stackoverflow.com/questions/21895233/how-to-split-string-with-newline-n-in-node
        //console.log("blocks ",blocks)
        let lines = block.split(/\r\n\r\n/);
        //console.log("\nlignes\n",block.split(/\r\n\r\n/)[2]);
        let topic = {}
        ///\r?\n+/
        topic["Category"] = block.split(/(\r\n)+/)[0].replace(" ","")
        let data_cleaned = []
        for(let line of lines){
            let newline = {}; 
            let moves = line.split(/\r\n/) 
            newline["name"] = moves[0];
            newline["moves"] = [];
            newline["links"] = [];
            //description
            //variation
            //option
            let placed = false;
            for(let move of moves){
                console.log("move", move)
                if(move !== ""){
                    /*
                    if(line.match(linkReg)){
                        newline["links"].push(move);
                        placed = true;
                    }*/
                    if(line.match(descReg)){
                        newline["description"] = move.replace("::","");
                        placed = true;
                    }
                    if (placed == false) {
                        let moveDetail = {}
                        
                        if(line.match(/.+\s\/\s.+/)){
                            moveDetail["variations"] = [];
                            moveDetail["variations"] = move.split("/");
                            console.log("variation",move.split("/"));
                            moveDetail["name"] = move.split("/")[0];
                            newline["moves"].push(moveDetail);
                        }
                        else {
                            console.log("unplaced move ",move)
                            moveDetail["name"] = move;
                            newline["moves"].push(move);
                        }

                    }
                    
                }
            }
            data_cleaned.push(newline);
        }
        topic["lines"]= data_cleaned;
        blocks_data.push(topic);
    }
    return blocks_data;
}
//séparateur - / 
fs.readFile("prépafight.txt","utf-8", (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        else {
            let parsedData = parseFile(data);
            //console.log("parsed data ",parsedData);
            fs.writeFile("training.json",JSON.stringify(parsedData,null,2),(err)=> {
                if(err){
                    console.error(err);
                }
            })
        }
        
});

//let data = parsefiledata().then((dt)=>console.log(dt));



//split >>>
//recupérer les urls
//récuperer les blocks , un block = un echainement

//Parse Par sous block
// /r/n/w+/r/n => sous block
// enchainements = suite de mouvement
// un mouvement peut avoir des variations/options

//Récupérer un JSON
// afinner la récupération avec une IA -- Détection de pattern avec Named Entity Recognition


// Lire le fichier
//Parse
//Ecrire

//entrainement => 
//Exercices--Mouvement(nom,enchainement--variation)
// 1 - découper en bloc
// 2 - extraire chaque coup
// 3 - extraire description et lien 