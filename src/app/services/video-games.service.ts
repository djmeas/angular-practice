import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoGame } from '../model/videoGame.model';

@Injectable({
  providedIn: 'root'
})
export class VideoGamesService {
  constructor(private http: HttpClient) {}

  getVideoGames() {
    console.log('Service: Making get request...');
    return this.http.get<VideoGame[]>('http://localhost:3000/games/');
  }
}
