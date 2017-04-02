myApp.filter("age", function(){
    return function (age){
        return age + " jaar";
    }
})