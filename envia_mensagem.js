
function enviarMensagem(mensagem){
    chat = document.querySelector("._2x4bz > div:nth-child(2)");
    
    mensagem = zoarTexto(mensagem)
    
var KeyboardEventInit = {
    bubbles: true
  }
    
    
    window.InputEvent = window.Event || window.InputEvent;

  var event = new InputEvent('input',KeyboardEventInit );       
    chat.textContent = mensagem;
    chat.dispatchEvent(event);
    
    button = document.querySelector("div.EBaI7:nth-child(3)");  
    button.firstChild.click()
}
