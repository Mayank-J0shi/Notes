import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit{

  constructor(private notesSrv: NotesService) {}

  ngOnInit(): void {
    console.log(this.notesSrv.getAllNotes());
  }
}
