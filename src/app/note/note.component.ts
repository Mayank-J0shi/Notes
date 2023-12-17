import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  constructor(private router: Router) {}

  @HostListener('dblclick', ['$event'])
  onClick(event: any) {
    if (!(event.target as HTMLElement).closest('.deleteNoteIcon')) {
      this.router.navigate(['view-note']);
    }
  }

  deleteNote() {
    console.log('note is deleted');
  }
}
