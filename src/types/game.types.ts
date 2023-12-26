export type Player = '⭕' | '❌';

export type Moves = (Player | null)[];

export type GameStatus = Player | 'GameOver' | 'Ongoing';
