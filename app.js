//GLOBALS - NO WINDOW !!!

// __dirname - path to current directory
// __filename -file name 
// require - function to use modules (CommonJS)
// module - info about current module(file)
// process - info about env where the program is being executed

// -> console.log(__dirname);
// print the directory path of your project folder

/*setInterval(() => {

	console.log('hello world');

}, 1000);*/

/*const os = require('os')


// info about current user

const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`They System Uptime is ${os.uptime()} seconds `)

const currentOS = {
	name:os.type(),
	release:os.release(),
	totalMem:os.totalmem(),
	freeMem:os.freemem(),
}

console.log(currentOS);*/

// npm - global command, comes with node
// npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)


//package.json - manifest file(stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init(step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);