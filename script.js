let idade =prompt('Digite Sua Idade') ;
function VotaOuNao() {
  if (idade <= 15) return "Não Vota";
  if (idade<=69) return "obrigatório";
  if (idade <= 17 || idade >= 70) return " Opcional";
}
VotaOuNao();
alert(`Sua idade é : ${idade} Opção de voto é : ${VotaOuNao()} `)
