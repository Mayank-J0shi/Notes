import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { ViewNoteComponent } from './view-note/view-note.component';

const routes: Routes = [
  {
    path: '',
    component: NotesListComponent,
  },
  {
    path: 'view-note',
    component: ViewNoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
