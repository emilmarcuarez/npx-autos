AOS.init();
document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});
function iniciarApp(){
    NavegacionFija();
    crearGaleria();
    scrollNav();
}

function NavegacionFija(){
    const barra=document.querySelector('.header');
    const sobreNosotros=document.querySelector('.sobre-nosotros');
    const body=document.querySelector('body');

    window.addEventListener('scroll', function(){
        console.log(sobreNosotros.getBoundingClientRect());
        if(sobreNosotros.getBoundingClientRect().bottom < 0){
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        }else{
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }

    });
}
// EFECTO DE NAVEGACION
function scrollNav(){
    const enlaces=document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach(enlace=>{
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const seccionScroll=e.target.attributes.href.value;
           const seccion=document.querySelector(seccionScroll);
           seccion.scrollIntoView({behavior: "smooth"});
        });
    });
}

// Se crean todas las imagenes de la galeria
function crearGaleria(){
    const galeria=document.querySelector(".galeria-autos");
    for(let i=1; i<=10; i++){
        const imagen=document.createElement("picture");
        imagen.innerHTML=`
        <source srcset="build/img/pequeña/${i}.avif" type="imagen/avif">
        <source srcset="build/img/pequeña/${i}.webp" type="imagen/webp">
         <img loading="lazy" width="200" height="300" src="build/img/pequeña/${i}.png" alt="imagen galeria">
        `;
        imagen.onclick=function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}

// Mostrar las imagenes
function mostrarImagen(id){
    const imagen=document.createElement('picture');
    imagen.innerHTML=`
    <source srcset="build/img/grande/${id} (1).avif" type="imagen/avif">
    <source srcset="build/img/grande/${id} (1).webp" type="imagen/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${id} (1).png" alt="imagen galeria">
    `;
    // Crear el overlay con la imagen
     const overlay=document.createElement('DIV');
     overlay.appendChild(imagen);
     overlay.classList.add('overlay');
     overlay.onclick=function(){
        const body=document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
     }

    //  CREAMOS EL DIV DE FLEXBOX
    const prueba2=document.createElement('DIV');

    //  BOTON DEL LADO izquierdo
        if(id !== 1){
            const izquierdo=document.createElement('P');
            izquierdo.textContent='<';

            izquierdo.classList.add('btn-lado');
            izquierdo.onclick=function(){
                const body=document.querySelector('body');
                body.classList.remove('fijar-body');
                overlay.remove();
                mostrarImagen(id-1);
            }
            prueba2.appendChild(izquierdo);
        }
    
    //  boton para cerrar el modal
    const cerrarModal=document.createElement('P');
    prueba2.classList.add('prueba2');
    cerrarModal.textContent='X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick=function(){
       const body=document.querySelector('body');
       body.appendChild(overlay);
       body.classList.add('fijar-body');
    }
    prueba2.appendChild(cerrarModal);

      //  BOTON DEL LADO derecho
    if(id !== 10){
        const derecho=document.createElement('P');
        derecho.textContent='>';

        derecho.classList.add('btn-lado');
        derecho.onclick=function(){
            const body=document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove();
            mostrarImagen(id+1);
        }
        prueba2.appendChild(derecho);
    }
    
    //  AGREGAMOS LOS BOTONES AL OVERLAY
     overlay.appendChild(prueba2);

     
// añadirlo al html
    const body=document.querySelector('body');
    body.appendChild(overlay);
    // para no darle scroll
    body.classList.add('fijar-body');
}