var  http = require('http')
var  fs =require('fs')

var server = http.createServer(function(req,res){
    try {
        var FileContent = fs.readFileSync(__dirname +'/static' + req.url)
       }
        
        catch(e){
            res.writeHead(404,'not found')
        }
        res.end()
})
console.log(__dirname +'/static' + req.url)
server.listen(8090)