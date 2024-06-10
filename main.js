function simm(){
  const range = document.getElementById('range').value;
      console.log(range)
  document.getElementById('valorRange').innerHTML = range;
  console.log("ola")
}
function configurando(){
    //Checando se o checkbox está marcado
    const letrasMaiusculas = document.getElementById('letrasMaiusculas').checked;
    
    //Checando se o checkbox está marcado
    const letrasMinusculas = document.getElementById('letrasMinusculas').checked;
    
    //Checando se o checkbox está marcado
    const numeros = document.getElementById('numeros').checked;
  
    //Checando se o checkbox está marcado
    const simbolos = document.getElementById('simbolos').checked;
    
    //Um array vazio
    const configurar = [];
    
    //Verificar se a checkbox é True 
    if(letrasMaiusculas){
  configurar.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ'); 
    }
    
    //Verificar se a checkbox é True 
    if(letrasMinusculas){
  configurar.push('abcdefghijklmnopqrstuvwxyz');
    }
  
    //Verificar se a checkbox é True 
    if(numeros){
    configurar.push('0123456789');
    }
  
    //Verificar se a checkbox é True 
    if(simbolos){
      configurar.push('!@#$%&*()_+');
    }
    
    return configurar;
  }
  //pegando um números aleatório
  function aleatorio(configurar) { 
    

    //Pegando im índice aleatório 

     const letra = Math.floor(Math.random() * configurar.length);
  
    
    //Verificando se alguma checkbox foi selecionada 
    
      return configurar[letra][Math.floor(Math.random() * configurar[letra].length)];
    
  }
  
  function tamanhoSenha(){
    //Pegando o valor do range
    const range = document.getElementById('range').value;
    return range;
  }
  
  function senha(range, configurar){
    
    let senhaFinal = [''];
  
    while(senhaFinal.length < range){
      senhaFinal += aleatorio(configurar);
    }
  
    return senhaFinal;
  }
  
  function enviar() {
    
    const configurar = configurando();

    //Verificando se o array está vazio
    if (configurar.length === 0) {
      console.log("deu error");
      document.getElementById('senha').innerHTML = "Senha incorreta";
      return;
    }
    
    const input = senha(tamanhoSenha(), configurando());
    document.getElementById('senha').innerHTML = input;
  }
  
  
  
  