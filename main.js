
const scenegraph = require("scenegraph");
var assets = require("assets");
var shell = require("uxp").shell



let output = []

// console.log(assets.colors.get());
// console.log(assets.characterStyles.get());
// console.log(assets.characterStyles.get().fill.Color);
// console.log(assets.characterStyles.get()[0].Color.toHex());
// console.log(assets.characterStyles.get()[0].style.fill.value);


//Genrate Fonts styles
for (let index = 0; index < assets.characterStyles.get().length; index++) {
    let opt = []
    let element = assets.characterStyles.get()[index];
    element.style.fill = element.style.fill.value;



    // console.log(element.style)
    opt = Object.values(element.style);
    opt.push(element.name);


    //Compress

    for (let i = 0; i < opt.length; i++) {
        // if boolean convert to number 
        if (typeof opt[i] == 'boolean') {
            opt[i] = Number(opt[i])
        }
        // if none convert to 0
        if (opt[i] == 'none') {
            opt[i] = 0
        }
    }
    output.push(opt);
}


// console.log('output', output);



// Compose url
let url = 'http://localhost:3000/reciver';



//Colors
let colors = []
assets.colors.get().forEach(clr => {
    colors.push(clr.color.value)

});
// console.log((colors.toString()))
url += '?c=' + colors.toString();



// Fonts 
output.forEach((element, f) => {
    url += '&f' + f + '=' + element.toString();
    console.log(url)
});


console.log(url)
shell.openExternal(url)
