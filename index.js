const userinfo = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `hi my name is ${userinfo.obj.name} from ${userinfo.obj.campus} `,
    e : "oO",
    T : "U "
}));