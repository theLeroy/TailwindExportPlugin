
const scenegraph = require("scenegraph");
var assets = require("assets");
var shell = require("uxp").shell



let output = []

// console.log(assets.colors.get());
// console.log(assets.characterStyles.get());
// console.log(assets.characterStyles.get().fill.Color);
// console.log(assets.characterStyles.get()[0].Color.toHex());
// console.log(assets.characterStyles.get()[0].style.fill.value);

for (let index = 0; index < assets.characterStyles.get().length; index++) {
    let opt = []
    let element = assets.characterStyles.get()[index];
    element.style.fill = element.style.fill.value;



    // console.log(element.style)
    opt = Object.values(element.style);
    opt.push(element.name);


    //Compress
    // if boolean convert to number 

    for (let i = 0; i < opt.length; i++) {
        if (typeof opt[i] == 'boolean') {
            opt[i] = Number(opt[i])
        }
        if (opt[i] == 'none') {
            opt[i] = 0
        }
    }


    output.push(opt);
}


// console.log('output', output);



// Compose url
let url = 'http://localhost:3000/reciver';

output.forEach((element, f) => {
    console.log('el', element);
    if (f === 0) {
        url = url + '?f' + f + '=' + element.toString();
    }
    else {
        url = url + '&f' + f + '=' + element.toString();
    }

});

shell.openExternal(url)
