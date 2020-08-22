export function stats(turn: boolean) {
  const p1: HTMLDivElement | null = document.querySelector(".player-1");
  const p2: HTMLDivElement | null = document.querySelector(".player-2");

  //Player 1 turn
  const p1_p1text = `Jugador 1 (Blancas)&nbsp;&nbsp;<i class="fas fa-circle"></i>`;
  const p1_p2text = `Jugador 2 (Negras)`;

  //Player 2 turn
  const p2_p1text = `Jugador 1 (Blancas)`;
  const p2_p2text = `Jugador 2 (Negras)&nbsp;&nbsp;<i class="fas fa-circle"></i>`;

  if (turn) {
    //player 1 turn
    if (p1 != null && p2 != null) {
      p1.innerHTML = p1_p1text;
      p2.innerHTML = p1_p2text;
    }
  } else {
    //player 2 turn
    if (p1 != null && p2 != null) {
      p1.innerHTML = p2_p1text;
      p2.innerHTML = p2_p2text;
    }
  }
}
