function createGame(player1, hour, group, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong> ${hour} <span class = "grupo">${group}</span></strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
      <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span> ${day} </span></h2>
            <ul>
              ${games}
            </ul>
          </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo",
    createGame("qatar", "13:00", "grupo A", "ecuador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "grupo B", "iran") +
      createGame("senegal", "13:00", "grupo A", "netherlands") +
      createGame("eua", "16:00", "grupo B", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "grupo C", "saudi-arabia") +
      createGame("denmark", "10:00", "grupo D", "tunisia") +
      createGame("mexico", "13:00", "grupo C", "poland") +
      createGame("france", "16:00", "grupo D", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "07:00", "grupo F", "croatia") +
      createGame("germany", "10:00", "grupo E", "japan") +
      createGame("spain", "13:00", "grupo E", "costa-rica") +
      createGame("belgium", "16:00", "grupo F", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "grupo G", "cameroon") +
      createGame("uruguay", "10:00", "grupo H", "south-korea") +
      createGame("portugal", "13:00", "grupo H", "ghana") +
      createGame("brazil", "16:00", "grupo G", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "07:00", "grupo B", "iran") +
      createGame("qatar", "10:00", "grupo A", "senegal") +
      createGame("netherlands", "13:00", "grupo A", "ecuador") +
      createGame("england", "16:00", "grupo B", "eua")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "grupo D", "australia") +
      createGame("poland", "10:00", "grupo C", "saudi-arabia") +
      createGame("france", "13:00", "grupo D", "denmark") +
      createGame("argentina", "16:00", "grupo C", "mexico")
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame("japan", "07:00", "grupo E", "costa-rica") +
      createGame("belgium", "10:00", "grupo F", "morocco") +
      createGame("croatia", "13:00", "grupo F", "canada") +
      createGame("spain", "16:00", "grupo E", "germany")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("cameroon", "07:00", "grupo G", "serbia") +
      createGame("south-korea", "10:00", "grupo H", "ghana") +
      createGame("brazil", "13:00", "grupo G", "switzerland") +
      createGame("portugal", "16:00", "grupo H", "uruguay")
  ) +
  createCard(
    "29/11",
    "Terça",
    createGame("ecuador", "07:00", "grupo A", "senegal") +
      createGame("netherlands", "10:00", "grupo A", "qatar") +
      createGame("iran", "13:00", "grupo B", "eua") +
      createGame("wales", "16:00", "grupo B", "england")
  ) +
  createCard(
    "30/11",
    "Quarta",
    createGame("tunisia", "07:00", "grupo D", "france") +
      createGame("australia", "10:00", "grupo D", "denmark") +
      createGame("poland", "13:00", "grupo C", "argentina") +
      createGame("saudi-arabia", "16:00", "grupo C", "mexico")
  ) +
  createCard(
    "1/12",
    "Quinta",
    createGame("croatia", "07:00", "grupo F", "belgium") +
      createGame("canada", "10:00", "grupo F", "morocco") +
      createGame("japan", "13:00", "grupo E", "spain") +
      createGame("costa-rica", "16:00", "grupo E", "germany")
  ) +
  createCard(
    "2/12",
    "Sexta",
    createGame("south-korea", "07:00", "grupo H", "portugal") +
      createGame("ghana", "10:00", "grupo H", "uruguay") +
      createGame("serbia", "13:00", "grupo G", "switzerland") +
      createGame("cameroon", "16:00", "grupo G", "brazil")
  ) +
  createCard(
    "3/12",
    "Sábado",
    createGame("brazil", "12:00", "Oitavas", "brazil") +
      createGame("brazil", "16:00", "Oitavas", "brazil")
  ) +
  createCard(
    "4/12",
    "Domingo",
    createGame("brazil", "12:00", "Oitavas", "brazil") +
      createGame("brazil", "16:00", "Oitavas", "brazil")
  ) +
  createCard(
    "5/12",
    "Segunda",
    createGame("brazil", "12:00", "Oitavas", "brazil") +
      createGame("brazil", "16:00", "Oitavas", "brazil")
  ) +
  createCard(
    "6/12",
    "Terça",
    createGame("brazil", "12:00", "Oitavas", "brazil") +
      createGame("brazil", "16:00", "Oitavas", "brazil")
  ) +
  createCard(
    "9/12",
    "Sexta",
    createGame("brazil", "12:00", "Quartas", "brazil") +
      createGame("brazil", "16:00", "Quartas", "brazil")
  ) +
  createCard(
    "10/12",
    "Sábado",
    createGame("brazil", "12:00", "Quartas", "brazil") +
      createGame("brazil", "16:00", "Quartas", "brazil")
  ) +
  createCard(
    "13/12",
    "Terça",
    createGame("brazil", "16:00", "Semis", "brazil")
  ) +
  createCard(
    "14/12",
    "Quarta",
    createGame("brazil", "16:00", "Semis", "brazil")
  ) +
  createCard(
    "17/12",
    "3º Lugar",
    createGame("brazil", "12:00", "Semis", "brazil")
  ) +
  createCard("18/12", "Final", createGame("brazil", "12:00", "Semis", "brazil"))
