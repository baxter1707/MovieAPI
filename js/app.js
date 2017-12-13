let movieURL = "http://www.omdbapi.com/?s=batman&apikey=d1da1b5c"
 //let movieINFO="http://www.omdbapi.com/?movie.imdbID&apikey=d1da1b5c"
let movieList = $("#movieList")

$.get(movieURL,function(movies){

 //console.log(movies)

  $(movies.Search).each(function(index,movie){

    let movieINFO= 'http://www.omdbapi.com/?i='+ movie.imdbID + '&apikey=d1da1b5c'


    $("<div>").addClass("poster-container")
    .append($("<a>").attr("id",movieINFO).attr("href","#").html(movie.Title))
    .click(function(){
      //console.log("test")
      //$("#information").empty()
      $.get(movieINFO,function(info){
        $(info).each(function(index,information){



          $("<div>").addClass("info-container")
          .append($("<li>").html(information.Title))
          .append($("<li>").html(information.Year))
          .append($("<img>").attr("src",information.Poster))
          .appendTo($("#information-list"))
        })

      })
    })

    .append($("<img>").attr("src",movie.Poster))
    .appendTo(movieList)

  })

})








// let movieItem = $("<div>").append($("<li>").html(movie.title))
// movieList.append(movieItem)
