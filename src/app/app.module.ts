import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickerComponent } from './clicker/clicker.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';

import { NgxsModule } from '@ngxs/store';
import { VideoGameState } from './state/videoGame.state';
import { EmployeeState } from './state//employee.state';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoGameDetailComponent } from './components/video-game-detail/video-game-detail.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    VideoGamesComponent,
    VideoGameDetailComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([VideoGameState, EmployeeState]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
