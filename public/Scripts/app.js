// Immediately invoked function expression
(function(){
    function Start(){
        console.log("App is starting..");
    }

    window.addEventListener("load", Start);
})();