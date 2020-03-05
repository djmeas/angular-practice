import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { VideoGame } from '../model/videoGame.model';
import { GetVideoGames } from '../actions/videoGame.actions';
import { VideoGamesService } from '../services/video-games.service';
import { tap } from 'rxjs/operators';

export class VideoGameStateModel {
  list: VideoGame[];
}

@State<VideoGameStateModel>({
  name: 'videoGames',
  defaults: {
    list: []
  }
})
@Injectable()
export class VideoGameState {
  constructor(private videoGamesService: VideoGamesService) {
    console.log('videoGame.state reached!');
  }

  // Section 4
  @Selector()
  static getVideoGamesList(state: VideoGameStateModel) {
    return state.list;
  }

  @Action(GetVideoGames)
  getVideoGames({ getState, setState }: StateContext<VideoGameStateModel>) {
    console.log('videoGame.state getVideoGames()...');
    return this.videoGamesService.getVideoGames().pipe(
      tap(result => {
        console.log('setting state for video games: ', result);
        const state = getState();
        setState({
          ...state,
          list: result
        });
      })
    );
  }
}
