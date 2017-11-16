(function () {
    angular
        .module("WebAppMaker")
        .factory("MovieService",MovieService)

    function MovieService($http) {
        
        var api = {

            findMovie: findMovie,
            searchMovieById:searchMovieById,
            findMovieById:findMovieById,
            createMovie:createMovie,
            findRatings:findRatings,
            findDirector:findDirector
        };

        return api;

        function findDirector(director,titleId) {
            console.log("client director")
            console.log(director)
            console.log(titleId)
            var url="/api/director/"+director+"/title/"+titleId;
            return $http.get(url);
        }
        
        function findRatings(rating,titleId) {
            console.log("client rating")
            console.log(rating)
            console.log(titleId)
            var url="/api/rating/"+rating+"/title/"+titleId;
            return $http.get(url);
        }
        

        function findMovie(searchMovie) {
            console.log("clientServer");
            var url = 'https://www.omdbapi.com/?s='+searchMovie+'&apikey=70acfb94';
            return $http.get(url);
        }

        function searchMovieById(titleid) {
            console.log("searchmoviebyid clientServer");
            var url = 'https://www.omdbapi.com/?i='+titleid+'&plot=full&r=json&apikey=70acfb94';
            console.log("url")
            return $http.get(url);
        }
        
        function findMovieById(titleId,userId) {
            var url="/api/title/"+titleId;
            console.log("find movie by id client");
            var movie={
                userId:userId
            }
            return $http.post(url,movie);
        }
        
        function createMovie(newMovie) {
         var url="/api/movie/create"
            return $http.post(url,newMovie);
        }

        

    }

})();