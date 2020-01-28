import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: any[] = ['result'];
  public heroes: any = '';

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {

    this.heroesService.getHeroes().subscribe (apiData => {
      this.title = apiData['result'];
    },
    (error) => {
      console.error(error);
    });

    console.log(this.title);

  }

}
