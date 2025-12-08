import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tableau',
  imports: [RouterLink],
  templateUrl: './tableau.html',
  styleUrl: './tableau.css',
})
export class TableauComponent implements OnInit {
  indice = 0
  numbers = [2, 3, 8, 5, 1]
  next = 0
  previous = 0
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      this.indice = Number(p.get('indice'))
      // this.next = (this.indice + 1) == this.numbers.length ? 0 : this.indice + 1
      this.next = (this.indice + 1) % this.numbers.length
      this.previous = (this.indice) == 0 ? this.numbers.length - 1 : this.indice - 1
    })
  }
  goToPrevious() {
    this.router.navigate(['/tableau', this.previous])
  }
  goToNext() {
    this.router.navigate(['/tableau', this.next])
  }
}

/*
0 % 5 = 0
1 % 5 = 1
2 % 5 = 2
3 % 5 = 3
4 % 5 = 4
5 % 5 = 0
*/
