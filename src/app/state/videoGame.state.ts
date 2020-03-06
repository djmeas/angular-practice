import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { VideoGame } from '../model/videoGame.model';
import { GetVideoGames, GetVideoGame } from '../actions/videoGame.actions';
import { VideoGamesService } from '../services/video-games.service';
import { tap } from 'rxjs/operators';

export class VideoGameStateModel {
  list: VideoGame[];
  viewDetail: VideoGame;
}

@State<VideoGameStateModel>({
  name: 'videoGames',
  defaults: {
    list: [],
    viewDetail: null
  }
})
@Injectable()
export class VideoGameState {
  constructor(private videoGamesService: VideoGamesService) {
    console.log('videoGame.state reached!');
  }

  @Selector()
  static getVideoGamesList(state: VideoGameStateModel) {
    return state.list;
  }

  @Selector()
  static getVideoGame(state: VideoGameStateModel) {
    return state.viewDetail;
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

  @Action(GetVideoGame)
  getVideoGame(
    { getState, setState }: StateContext<VideoGameStateModel>,
    { id }
  ) {
    console.log('videoGame.state getVideoGame()...');
    return this.videoGamesService.getVideoGame(id).pipe(
      tap(result => {
        console.log('setting state for video game detail: ', result);
        const state = getState();
        setState({
          ...state,
          viewDetail: result
        });
      })
    );
  }
}
