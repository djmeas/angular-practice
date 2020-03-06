import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickerComponent } from './clicker/clicker.component';
import { VideoGamesComponent } from './video-games/video-games.component';

import { NgxsModule } from '@ngxs/store';
import { VideoGameState } from './state/videoGame.state';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoGameDetailComponent } from './video-game-detail/video-game-detail.component';

@NgModule({
  declarations: [AppComponent, ClickerComponent, VideoGamesComponent, VideoGameDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([VideoGameState]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
