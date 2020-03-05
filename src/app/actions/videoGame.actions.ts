import { VideoGame } from '../model/videoGame.model';

export class GetVideoGames {
  static readonly type = '[VideoGame] Get';

  constructor() {
    console.log('GetVideoGames action...');
  }
}
