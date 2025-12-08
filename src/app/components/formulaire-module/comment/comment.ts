import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Person } from '../../../models/person';

@Component({
  selector: 'app-comment',
  imports: [ReactiveFormsModule],
  templateUrl: './comment.html',
  styleUrl: './comment.css',
})
export class CommentComponent {
  persons: Person[] = []
  personForm: FormGroup
  fb = inject(FormBuilder)
  constructor() {
    this.personForm = this.fb.group({
      nom: [],
      prenom: [],
      commentaires: this.fb.array([])
    })
  }
  get nom() {
    return this.personForm.get('nom')
  }
  get prenom() {
    return this.personForm.get('prenom')
  }
  get commentaires() {
    return this.personForm.get('commentaires') as FormArray
  }
  ajouterCommentaire() {
    this.commentaires.push(this.fb.group({
      titre: [],
      categorie: [],
      contenu: [],
    }))
  }
  ajouterPersonne() {
    this.persons.push(this.personForm.value)
    this.personForm.reset()
    this.commentaires.clear()
  }
}
