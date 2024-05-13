// TDD - Test Driven Development
var resultado = 'Olá pessoal;'

var novoMapa = new Map();

class HistoryMap{


}

//11/11/2011 as 11 da noite;
novoMapa.set('11/11/2011 - 23:30 - URL', {title: 'Título do site', url:'https://select-lm.com'})
novoMapa.set('11/11/2011 - 23:30 - URL', {title: 'Título do site', url:'https://select-lm.com'})
novoMapa.set('11/11/2011 - 23:30 - URL', {title: 'Título do site', url:'https://select-lm.com'})
novoMapa.set('11/11/2011 - 23:30 - URL', {title: 'Título do site', url:'https://select-lm.com'})
novoMapa.set('11/11/2011 - 23:31 - URL', {title: 'Título do site', url:'https://google.com'})

var resultado = novoMapa.get('11/11/2011 - 23:30 - URL');
console.log(resultado)
