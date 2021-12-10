/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */


const scenegraph = require("scenegraph");
var assets = require("assets");

console.log(assets.colors.get());
// console.log(assets.characterStyles.get());
// console.log(assets.characterStyles.get().fill.Color);
// console.log(assets.characterStyles.get()[0].Color.toHex());
console.log(assets.characterStyles.get()[0].style.fill.value);


// let node = scenegraph.selection.items[0];
// console.log(node.guid);
// let guid = node.guid;

// // ...later on:
// let sameNode = scenegraph.getNodeByGUID(guid);
// if (sameNode) {
//     // ^ Always check if node still exists - user may have deleted it
//     console.log("Found node again!", sameNode);
// }
// module.exports = {
//     commands: {
//         // createRectangle: rectangleHandlerFunction
//     }
// };
