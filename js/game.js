//Queremos hacer un juego parecido al flappybird, vamos a ver como crearlo.
//Lo primero que tendremos que hacer será poner el fondo y las imagenes.
//Despues de ello la velocidad del juego.
//Despues tendremos que poner valores aleatorios a los tubos para que el tamaño sea aleatorio
//Luego de ello podnriamos algunas cosas para hacerlo un poqutin de mas dificil.
//Y ahora tocará pensar en como hacer todo.

//Empezaremos a hacer un par de constantes

const canvas = document.getElementById("gameCanvas");
const dibujo = canvas.getContext("2d");

//Tengo que cargar la imagen del avatar por lo cual tengo que extraerlo con una constante


const pajaritoimg = new Image();
pajaritoimg.src = "../img/ProtectBirdJuegoAvatar.png"


//por lo que he visto tengo que poner la configuracion del avatar, asi que tendremos q poner la fuerza de salto y esas cosas

let pajaritoAltura = canvas.height / 2; //Lo he dividido entre 2 para que empiece en la mitad
let pajaritoVel = 1; //Pa darle la velocidad, empiezo por cero porque haré una funcion donde vaya pillando velocidad
const jump = -7; //Para darle lo que tiene que saltar. 
const gravedad = 0.5; //para hacer la gravedad


//ahora vamos a intentar que salga en pantalla el pajaro, para ver si pilla bien la imagen o si tendré que hacer algunos retoques.

function dibujarPajarito(){
    dibujo.clearRect(0,0, canvas.height, canvas.width);//Aquí limpiamos todo lo que hay en pantalla por si acaso
    dibujo.drawImage(pajaritoimg, 30, pajaritoAltura, 70, 60); //Aqui hacemos que se dibuje el pajaro.
}

function saltoPajarito(){
    pajaritoVel = jump; //Hacemos esto para ahora crear una funcion donde lo que haremos es si tocamos cierta tecla lo que hará sera hacer que la velocidad del pajaro 
    //sea igual que el salto, practicamente será para que el salto se inicie.
}

document.addEventListener("keydown", (event) =>{
    
    if (event.code == "Space"){//Aqui lo que hacemos es que si se crea el evento del espacio active la funcion del salto.
        saltoPajarito();
    };

});


function actualizarPajarito(){
    
}




function iniciarGame(){
    dibujarPajarito();//Esto es para iniciar la funcion de dibujar pajaro.
}


iniciarGame();