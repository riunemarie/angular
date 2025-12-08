import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Personne } from '../../../models/personne';
import { checkNomValidator } from '../../../validators/string.validator';

@Component({
  selector: 'app-formulaire-reactif',
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire-reactif.html',
  styleUrl: './formulaire-reactif.css',
})
export class FormulaireReactifComponent implements OnInit {

  personnes: Personne[] = []
  personneForm = new FormGroup({
    nom: new FormControl('', [Validators.required, checkNomValidator]),
    prenom: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{1}[a-z ]{2,29}$/)]),
    age: new FormControl(0, Validators.required),
  })

  get nom() {
    return this.personneForm.controls.nom
  }
  get prenom() {
    return this.personneForm.controls.prenom
  }
  get age() {
    return this.personneForm.controls.age
  }
  ngOnInit(): void {
    // this.personneForm.setValue({nom: 'Doe', prenom: 'John', age: 46})
    // this.personneForm.patchValue({ nom: 'Doe', prenom: 'John' })
  }
  afficher() {
    console.log(this.personneForm);
    console.log(this.personneForm.get('nom'));
    console.log(this.personneForm.controls.nom);
    console.log(this.personneForm.value);
    this.personnes.push(this.personneForm.value as Personne)
    this.personneForm.reset()
    // console.log(this.nom);
    // console.log(this.nom.value);

  }

}

