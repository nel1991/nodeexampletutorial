// CommonJs, every file is module(by default)
// Modules - Encapsulated Code (only share minimum)


const names = require('./names');
const sayHi = require('./utility');
const data = require('./alternativeflavor')

require('./mindgrenade')
//console.log(data)

/*console.log(names)
console.log(sayHi)*/



sayHi('sua')
sayHi('john')
sayHi('peter')
sayHi(names.john)
sayHi(names.peter)
sayHi(data.singlePerson.name)
sayHi(data.items)