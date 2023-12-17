import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteComponent } from './note/note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ViewNoteComponent } from './view-note/view-note.component';
import { HeaderComponent } from './header/header.component';
import { NotesService } from './notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteComponent,
    ViewNoteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
