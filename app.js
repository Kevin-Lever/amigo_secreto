// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosParticipantes = [];

// añadir amigo


function agregarAmigo() {
    // 1. Obtener el elemento de entrada con el id 'amigo'
    let nombreIngresado = document.getElementById('amigo');
  
    // 2. Obtener el valor del campo de entrada y eliminar los espacios en blanco
    let valorIngresado = nombreIngresado.value.trim();
    console.log(valorIngresado);
  
    // 3. Validar que el campo no esté vacío
    if (valorIngresado === '') {
      // 3.1. Si el campo está vacío, mostrar un mensaje de alerta
      alert('Por favor, agrega un nombre');
  
      // 3.2. Salir de la función sin ejecutar el resto del código
      return;
    }
    // agregar el nuevo amigo a la lista
    amigosParticipantes.push(valorIngresado);
    console.log(amigosParticipantes);

    mostrarAmigos();

    //limpiar el campo del input
    nombreIngresado.value = '';
  }

  function mostrarAmigos() {
    //obtener elemento de la lista
    let listaAmigos = document.getElementById('listaAmigos');
    //limpiar lista de amigos
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigosParticipantes.length; i++) {
      console.log(i)
      let amigo = amigosParticipantes[i];
      console.log(amigo);
      let li = document.createElement('li');
      li.textContent = amigo;
      listaAmigos.appendChild(li);
    }
  }

  function validarPresenciaAmigos() {
    // Comprobar si el array no está vacío
    if (amigosParticipantes.length === 0) {
      // Si está vacío, mostrar un mensaje de error
      alert("No hay amigos agregados en el sorteo. Para continuar agregalos porfavor.");
      return false;
    } else {
      // Si hay amigos, retornar true
      return true;
    }
  }

  function generarIndiceAleatorio() {
    // obtener cantidad de arreglo
    let magnitudArreglo = amigosParticipantes.length;
    // generar numero aleatorio entre 0 y la magnitud del arreglo - 1
    let indiceAleatorio = Math.floor(Math.random() * magnitudArreglo);
    // retornar indice a funcion
    return indiceAleatorio;
  }

  function sortearAmigo() {
    //validación de array con nombres
    if (validarPresenciaAmigos()) {
      // obtener indice aleatorio
      let indiceAleatorio = generarIndiceAleatorio();
      // Seleccion de nombre de amigo sorteado en el índice aleatorio
      let amigoSorteado = amigosParticipantes[indiceAleatorio];
         // Obtener el elemento HTML donde se mostrará el resultado
    let elementoResultado = document.getElementById("resultado");
        // mostrar resultado
    elementoResultado.innerHTML = `¡Tu amigo secreto es ${amigoSorteado}!`;

      // Mostrar el amigo sorteado
    console.log("El amigo sorteado es:", amigoSorteado);
    }
  

  }





