var http = require('http')
var path =require('path')
var fs = require('fs')
var url = require('url')

function pathget(starticpat,req,res){
    var parobj=url.parse(req.url,true)
    switch(parobj.pathname){
        case '/haha':
        res.setHeader('content-type','text/html,charset=utf-8')
        res.write('ok fine')
        res.end()
        // case '/zeze':
        // res.setHeader('Access-Control-Allow-Origin','*')
        break;
        case '/zeze':
        if(parobj.query.callback){
            res.setHeader('content-type','text/javascript,charset=utf-8')
            res.end(parobj.query.callback + '(' + JSON.stringify('shide meicuo') +')')
           }
        else{
            res.end('shide')
        }
        break;
        default:
        var filepath=path.join(starticpat,parobj.pathname)
        console.log(filepath)
      
        fs.readFile(filepath,'binary',function(err,filecontent){
            if(err){
            
                res.writeHead(404,'not')
                res.end()
                console.log('读取文件失败')
            }
            else{
                res.writeHead(200,'ok')
                res.write(filecontent,'binary')
                res.end()
            }
        })
      }
    }


// fs.readFile(filepath,'binary',function(err,filecontent){
//     if(err){
//         res.writeHead(404,'buxi')
      
//         res.end()
//     }
//     else{
   
//      res.writeHead(200,'ok')
   
//      res.write(filecontent,'binary')
     
//      res.end()
//     }
// })
 var server = http.createServer(function(req,res){
     pathget(__dirname,req,res)
     
 })
 server.listen(8080)
 console.log('访问了8080')