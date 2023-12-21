import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  currentPlayer: 'X' | 'O' = 'X';
  board: string[] = ['', '', '', '', '', '', '', '', ''];
  gameEnded: boolean = false;

  boxClicked(index: number) {
    if (!this.board[index - 1] && !this.gameEnded) {
      this.board[index - 1] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWinner() {
    const winConditions: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        this.gameEnded = true;
        alert(`${this.currentPlayer} wins!`);
        break;
      }
    }
  }

  resetGame() {
    this.currentPlayer = 'X';
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.gameEnded = false;
  }
}
