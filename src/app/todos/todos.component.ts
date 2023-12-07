import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface todos {
  id: number;
  tache: string;
  fait: boolean;
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  taches: todos[] = [];
  
  addtodos(event: SubmitEvent,tache: string) {
    event.preventDefault()
    this.taches.push({
      id : this.taches.length + 1,
      tache : tache,
      fait: false,
    })
    }
  toggleDone(id: number) {
    const tache = this.taches.find(tache => tache.id === id)!
    tache.fait = !tache.fait
    }
  deletetodos(id: number) {
    this.taches = this.taches.filter(tache => tache.id !== id)
    }
}
