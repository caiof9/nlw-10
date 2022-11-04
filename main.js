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
  )
