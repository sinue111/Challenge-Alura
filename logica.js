parrafo="hola mundo"

function texto_Encriptado(parrafo)
{

    let texto_Encriptado= parrafo.replace("e", "enter");
    texto_Encriptado= texto_Encriptado.replace("i", "imes");
    texto_Encriptado= texto_Encriptado.replace("a", "ai");
    texto_Encriptado= texto_Encriptado.replace("o", "ober");
    texto_Encriptado= texto_Encriptado.replace("u", "ufat");

 
    return texto_Encriptado
}

function texto_Desencriptado(parrafo)
{

    let texto_Desencriptado= parrafo.replace("enter","e");
    texto_Desencriptado= texto_Desencriptado.replace("imes","i");
    texto_Desencriptado= texto_Desencriptado.replace("ai","a");
    texto_Desencriptado= texto_Desencriptado.replace("ober","o");
    texto_Desencriptado= texto_Desencriptado.replace("ufat","u");

 
    return texto_Desencriptado
}

function sonTodosMinusculas(cadena) {
    const cadenaEnMinusculas = cadena.toLowerCase();
    const patron = /^([a-zA-Z0-9 ]+)+$/;
    return cadena === cadenaEnMinusculas & patron.test(cadena);
}


function mostrarTexto_encriptado() 
{
    const inputElement = document.getElementById('miInput');
    const textoIngresado = inputElement.value;
    if(sonTodosMinusculas(textoIngresado)){
        document.getElementById('texto_usuario').textContent = `${texto_Encriptado(textoIngresado)}`;
        document.getElementById('imagen_muneco').style.display = 'none';
        console.log(document.getElementById('texto_usuario').textContent 
        )
        return textoIngresado }
    else { 

        document.getElementById('texto_usuario').textContent = "Texto ingresado no valido"}
        
}
  
    



function mostrarTexto_desencriptado() 
{
    const inputElement = document.getElementById('miInput');
    const textoIngresado = inputElement.value;
    if(sonTodosMinusculas(textoIngresado)){
    document.getElementById('texto_usuario').textContent = `${texto_Desencriptado(textoIngresado)}`;
    console.log(document.getElementById('texto_usuario').textContent )
    return textoIngresado 
    }
    else { 
        document.getElementById('texto_usuario').textContent = "Texto ingresado no valido"}
    
}




