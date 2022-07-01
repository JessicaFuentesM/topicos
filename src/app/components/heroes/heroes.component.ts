import { Component, OnInit } from '@angular/core';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	constructor(private hero: HeroeService) { }

	ngOnInit(): void {
	}

}
