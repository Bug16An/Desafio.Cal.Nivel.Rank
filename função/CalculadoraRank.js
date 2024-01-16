calculatorRank(100, 36)

function calculatorRank(victories,defeats){
    let calculation = victories - defeats
    for (let ferro =0; ferro <=10; ferro++){
        if (calculation === ferro) {
            console.log("O Herói tem o saldo de " + victories + " vitorias e esta no nivel Ferro" )
    } }
    
    for (let bronze = 11; bronze <=20; bronze++){
        if (calculation === bronze) {
            console.log("O Herói tem o saldo de " + victories + " vitorias e esta no nivel Bronze" )
    } }
    
    for (let prata = 21; prata <=50; prata++){
        if (calculation === prata) {
            console.log("O Herói tem o saldo de " + victories + " vitorias e esta no nivel Prata" )
    } }
    
    for (let ouro = 51; ouro <=80; ouro++){
        if (calculation === ouro) {
            console.log("O Herói tem o saldo de " + victories + " vitorias e esta no nivel Ouro" )
    } }
    
    for (let diamante = 81; diamante <=90; diamante++){
        if (calculation === diamante) {
           console.log("O Herói tem o saldo de " + victories + " vitorias e esta no nivel Diamante" )
    } }
    
    
    for (let  legendario = 91; legendario <=100; legendario++){
        if (calculation === legendario) {
            console.log("O Herói tem o saldo de " + victories + " vitorias e esta no nivel Legendario" )
    } }

    for (let imortal = 101; imortal >= 101; imortal++){
        if (calculation === imortal) {
            console.log("O Herói tem o saldo de " + victories + " vitorias e esta no nivel de Imortal" )
            } }
}
