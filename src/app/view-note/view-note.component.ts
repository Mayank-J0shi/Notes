import { Component, Input, OnChanges } from '@angular/core';

interface Note {
  header: string;
  date: string;
  body: string;
};
@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss']
})

export class ViewNoteComponent {

  @Input()
  note: Note = {
    header: '',
    date: '',
    body: ''
  };

  constructor() {
  }

  ngOnChanges() {

  }

}
