const http = require('http')


const server = http.createServer((req, res) =>{
	// console.log(req)

	if(req.url === '/'){
		res.end('Welcome to our home page')
	}
	else if(req.url === '/about'){
		res.end('This is our short history')
	} else {
		res.end(`
		<h1> Oops we cannot find that</h1>	
		<p>It seems that we cannot find the page youre looking for</p>
		<a href="#"> Go to Home </a>

		`)

	}
	

})

server.listen(5000)