import { VideoGame } from '../model/videoGame.model';

export class GetVideoGames {
  static readonly type = '[VideoGame] Get';

  constructor() {
    console.log('GetVideoGames action...');
  }
}

export class GetVideoGame {
  static readonly type = '[VideoGame] Get One';

  constructor(public id: number) {
    console.log('Get a specific video game action...');
  }
}
