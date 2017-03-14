var turno ="x";
var turno2="o";
var bandera=1;
var ban=false;
var opciones=new Array(9);

function caremoco(){
    // random
oli=localStorage.getItem("nombre_1",jugador1);
chaujj=localStorage.getItem("nombre_2",jugador2);

var moco=Math.floor((Math.random()*2));
if(moco==0){
    document.getElementById("div_turno").innerHTML="turno del jugador "+ oli;
}else{
    document.getElementById("div_turno").innerHTML="turno del jugador "+ chaujj;
}
}



function marcar (id){
   
    
   var celda =document.getElementById(id);
   if (bandera%2!=0 &&opciones[id]!=0)
       {
           celda.value=turno;
           document.getElementById("div_turno").innerHTML="turno del jugador "+ oli;
           opciones[id]=1;
           
       }else if(bandera%2==0 && opciones[id]!=1){
           
           celda.value=turno2;
           document.getElementById("div_turno").innerHTML="turno del jugador "+ chaujj;
           opciones[id]=0;
       }
           bandera++;
           jugadorx(1);
           jugadorx(0);
}

function jugadorx(_option){
   if (opciones[1]==_option && opciones [2]==_option &&opciones[3]==_option){
       swal({title: "Ganaste..!",text: "felicidades jugador " +turno+ " ganaste",imageUrl: "img/ganaste.png"});
   }else if (opciones[4]==_option && opciones [5]==_option &&opciones[6]==_option){
       swal({title: "Ganaste..!",text: "felicidades jugador " +turno+ " ganaste",imageUrl: "img/cartel_ganaste.png"});
   }else if (opciones[7]==_option && opciones [8]==_option &&opciones[9]==_option){
       swal({title: "Ganaste..!",text: "felicidades jugador " +turno+ " ganaste",imageUrl: "img/cartel_ganaste.png"});
   }else if (opciones[1]==_option && opciones [5]==_option &&opciones[9]==_option){
       swal({title: "Ganaste..!",text: "felicidades jugador " +turno+ " ganaste",imageUrl: "img/cartel_ganaste.png"});
   }else if (opciones[3]==_option && opciones [5]==_option &&opciones[7]==_option){
       swal({title: "Ganaste..!",text: "felicidades jugador " +turno+ " ganaste",imageUrl: "img/cartel_ganaste.png"});
   }else if (opciones[1]==_option && opciones [4]==_option &&opciones[7]==_option){
       swal({title: "Ganaste..!",text: "felicidades jugador " +turno+ " ganaste",imageUrl: "img/cartel_ganaste.png"});
   }else if (opciones[2]==_option && opciones [5]==_option &&opciones[8]==_option){
       swal({title: "Ganaste..!",text: "felicidades jugador " +turno+ " ganaste",imageUrl: "img/cartel_ganaste.png"});
   }else if (opciones[3]==_option && opciones [6]==_option &&opciones[9]==_option){
       //swal("felicidades jugador ganaste" +turno+" ganaste");
        swal({title: "Ganaste..!",text: "felicidades jugador " +turno+ " ganaste",imageUrl: "img/cartel_ganaste.png"});
   }
}

   
function reiniciar(){
   location.reload();
} 

    
    
    /*var turno ="x";
var turno2="o";
var bandera=1;
var ban=false;
var opciones=new Array(9);

function marcar (id){
    
    var celda =document.getElementById(id);
    if (bandera%2!=0 &&opciones[id]!=0)
        {
            celda.value=turno;
            document.getElementById("div_turno").innerHTML="turno del jugador "+ turno2;
            opciones[id]=1;
            
        }else if(bandera%2==0 && opciones[id]!=1){
            celda.value=turno2;
            document.getElementById("div_turno").innerHTML="turno del jugador " + turno;
            opciones[id]=0;
        }
            bandera++;
            jugadorx();
            jugadoro();
}
function jugadorx(){
    if (opciones[1]==1 && opciones [2]==1 &&opciones[3]==1){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[4]==1 && opciones [5]==1 &&opciones[6]==1){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[7]==1 && opciones [8]==1 &&opciones[9]==1){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[1]==1 && opciones [5]==1 &&opciones[9]==1){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[3]==1 && opciones [5]==1 &&opciones[7]==1){
        alert("felicidades jugador " + turno+ " ganaste");
    }else if (opciones[1]==1 && opciones [4]==1 &&opciones[7]==1){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[2]==1 && opciones [5]==1 &&opciones[8]==1){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[3]==1 && opciones [6]==1 &&opciones[9]==1){
        alert("felicidades jugador " +turno+" ganaste");
    }
}

function jugadoro(){
    if (opciones[1]==0 && opciones [2]==0 &&opciones[3]==0){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[4]==0 && opciones [5]==0 &&opciones[6]==0){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[7]==0 && opciones [8]==0 &&opciones[9]==0){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[1]==0 && opciones [5]==0 &&opciones[9]==0){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[3]==0 && opciones [5]==0 &&opciones[7]==0){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[1]==0 && opciones [4]==0 &&opciones[7]==0){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[2]==0 && opciones [5]==0 &&opciones[8]==0){
        alert("felicidades jugador " +turno+" ganaste");
    }else if (opciones[3]==0 && opciones [6]==0 &&opciones[9]==0){
        alert("felicidades jugador " +turno+" ganaste");
    }
}
    
function reiniciar(){
    location.reload();
} 
  */  
    
    
    
    
    
    
    