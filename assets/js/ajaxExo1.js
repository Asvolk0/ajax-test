console.log("début du script");

let ajax = function(url){
    let xhrObj = new XMLHttpRequest();
    xhrObj.open('GET', url, true);

    xhrObj.onreadystatechange = function(){
        if(xhrObj.readyState == 4){
            if(xhrObj.status == 200){
                console.log(xhrObj.response);
            }else{
                console.error("Erreur d'appel à l'api");
            }
        }
    }
    xhrObj.send(null);
}





ajax('jsonplaceholder.typicode.com/users')
console.log("fin du script");