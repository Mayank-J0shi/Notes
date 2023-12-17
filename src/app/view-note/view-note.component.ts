import { Component, Input, OnChanges } from '@angular/core';
import { Note } from '../ts-types.util';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss']
})

export class ViewNoteComponent {

  @Input()
  note: Note = {
    id: '',
    header: '',
    date: '',
    body: ''
  };

  constructor() {
  }

  ngOnChanges() {

  }

}
