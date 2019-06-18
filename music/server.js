const musicAPI = require("music-api-next");
 
// Search API: search keywords on qq, xiami or netease
var list
musicAPI
  .searchSong({
    key: "周杰伦",
    page: 1,
    limit: 10,
    vendor: "qq"
  })
  .then(songs => list=songs)
  .catch(error => console.log(error.message));
 
// Song API: get music meta including URL
musicAPI
  .getSong({
    id: "003OUlho2HcRHC",
    vendor: "qq"
  })
  .then(meta => console.log(meta))
  .catch(error => console.log(error.message));
 
// Comment API: get comments for the specified song
musicAPI
  .getComment({
    id: "003OUlho2HcRHC",
    page: 1,
    limit: 20,
    vendor: "qq"
  })
  .then(comments => list=comments)
  .catch(error => console.log(error.message));
console.log(list)