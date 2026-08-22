const select = document.querySelector("select");
const visor = document.querySelector(".visor");
const inputs = document.querySelectorAll("input");
const verificacao = document.querySelector('#verificacao');

const agora = new Date() //Treco que permite extrair a data atual pra fzr o timer

verificacao.addEventListener('submit', function (e) {
    e.preventDefault();
    visor.style.visibility = 'visible'
    if (select.value === 'Churrasco') {     //Altera o título da página ao identificar o tipo de evento
        document.title = 'Ger. Even. - Churrasco'
    } else if (select.value === 'Festa Noturna / Coquetel') {
        document.title = 'Ger. Even. - Festa Noturna / Coquetel'
    } else if (select.value === 'Aniversário Infantil') {
        document.title = 'Ger. Even. - Aniversário Infantil' //Else if pq se der sumbit sem nada no select da ruim
    }

    //tempo gasto pra fazer o timer funcionar: 4 horas

    let timer_values = Array.from(inputs[1].value)
    const timer_text = document.createElement('p')
    let anos = (Number((timer_values.slice(0, 4).join(''))) - agora.getFullYear()) * 365 //Código BIZARRO que tira o ano selecionado na input, o subtrai com o ano atual, e transforma esse valor em dias
    let meses = (Number((timer_values.slice(5, 7).join(''))) - (agora.getMonth() + 1)) * 30 //mes começa em 0 por algum motivo
    let dias = (Number((timer_values.slice(8, 10).join(''))) - agora.getDate()) + anos + meses
    let horas = Number((timer_values.slice(11, 13).join(''))) - agora.getHours()
    let minutos = Number((timer_values.slice(14, 16).join(''))) - agora.getMinutes()
    let segundos = 60 - agora.getSeconds()
    const timer_log = setInterval(() => { //o timer de verdade
        timer_text.innerHTML = ''
        timer_text.innerText = `Tempo restante para o evento: ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
        segundos--
        if (segundos === -1) {
            segundos = 59
            minutos--
            if (minutos === -1) {
                minutos = 59
                horas--
                if (horas === -1) {
                    horas = 23
                    dias--
                    if (dias === -1) {
                        timer_text.innerText = 'Evento começando!'
                        clearInterval(timer_log)
                    }
                }
            }
        }
        visor.appendChild(timer_text)
    }, 1000)
})