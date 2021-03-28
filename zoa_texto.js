function zoarTexto(texto) {
    var new_texto = String();
    for (letter in texto){
        if(letter % 2 ==0){
            new_texto += texto[letter].toUpperCase()
        }else{
            new_texto += texto[letter]
        }
        
    }
    return new_texto;
}
