import { Injectable, OnInit } from '@angular/core';
import { Note } from './ts-types.util';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  allNotes:Note[] = [];

  constructor() {
    this.allNotes = require('./data.json');
  }

  getAllNotes():Note[] {
    return this.allNotes;
  }
}
