import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  workImages = [];
  projects = [];
  hoverHead = [];
  hoverInfo = [];
  projektLink = [];
  language = [];

  angularprojekt: string = '';

  filterProjects() {
    return this.projects.filter((project) =>
      project.toLowerCase().includes(this.angularprojekt.toLowerCase())
    );
  }

  ngOnInit() {
    this.allProjectsLoad();
  }

  loadImages() {
    this.workImages = [
      'preview-homepage-my.jpg',
      'preview-join-my.jpg',
      'preview-pollo-loco-my.png',
      'preview-pokedex-my.png',
      'preview-ring-of-fire.jpg',
    ];
  }

  projectname() {
    this.projects = [
      'PORTFOLIO',
      'JOIN',
      'POLLO LOCO',
      'POKEDEX',
      'RING OF FIRE',
    ];
  }

  hoverHeads() {
    this.hoverHead = [
      'ANGULAR',
      'KANBAN BOARD',
      'POLLO LOCO',
      'POKEDEX',
      'RING OF FIRE',
    ];
  }

  hoverInfos() {
    this.hoverInfo = [
      'My Portfolio Page is written with Angular.',
      'Task manager inspired by the Kanban System. Create an organize tasks using drag & drop functions, assign users and categories.',
      'Small jump & run game with object-oriented approach. Help Pepe to find all coins and collect tabasco to fight against the crazy hen.',
      'First generation Pokedex using PokeAPI that provides and catalogues pokemon information.',
      'Small card game you can play with others online. Start a game and send the link to another players so they can join the game.',
    ];
  }

  projektLinks() {
    this.projektLink = [
      '#',
      'https://maik-langer-dev.de/projects/JOIN/Join/login.html',
      'https://maik-langer-dev.de/projects/PolloLoco/index.html',
      'https://maik-langer-dev.de/projects/Pokedex/index.html',
      'https://maik-langer.developerakademie.net/ringoffire/index.html',
      // 'https://maik-langer-dev.de/projects/ringoffire/',
    ];
  }

  languages() {
    this.language = [
      'Angular | Typescript | HTML | CSS | Material-Design',
      'JavaScript | HTML | CSS | Bootstrap',
      'JavaScript | HTML | CSS | OOP',
      'JavaScript | HTML | CSS | Api',
      'Angular | Typescript | HTML | CSS | Firebase',
    ];
  }

  allProjectsLoad() {
    this.loadImages();
    this.projectname();
    this.hoverHeads();
    this.hoverInfos();
    this.projektLinks();
    this.languages();
  }

  angularProjectsLoad() {
    this.workImages = ['preview-homepage-my.jpg', 'preview-ring-of-fire.jpg'];
    this.projects = ['PORTFOLIO', 'RING OF FIRE'];
    this.hoverHead = ['ANGULAR', 'RING OF FIRE'];
    this.hoverInfo = [
      'My Portfolio Page is written with Angular',
      'Small card game you can play with others online. Start a game and send the link to another players so they can join the game.',
    ];
    this.projektLink = [
      '#',
      'https://maik-langer.developerakademie.net/ringoffire/index.html',
    ];
    this.language = [
      'Angular | Typescript | HTML | CSS | Material-Design',
      'Angular | Typescript | HTML | CSS | Firebase',
    ];
  }

  javaScriptProjectsLoad() {
    this.workImages = [
      'preview-join-my.jpg',
      'preview-pollo-loco-my.png',
      'preview-pokedex-my.png',
    ];
    this.projects = ['JOIN', 'POLLO LOCO', 'POKEDEX'];
    this.hoverHead = ['KANBAN BOARD', 'POLLO LOCO', 'POKEDEX'];
    this.hoverInfo = [
      'Task manager inspired by the Kanban System. Create an organize tasks using drag & drop functions, assign users and categories.',
      'Small jump & run game with object-oriented approach. Help Pepe to find all coins and collect tabasco to fight against the crazy hen.',
      'First generation Pokedex using PokeAPI that provides and catalogues pokemon information',
    ];
    this.projektLink = [
      'https://maik-langer.developerakademie.net/JOIN-Maik/Join/login.html',
      'https://maik-langer.developerakademie.net/El%20Pollo%20Loco/index.html',
      'https://maik-langer.developerakademie.net/Pokedex/index.html',
    ];
    this.language = [
      'JavaScript | HTML | CSS | Bootstrap',
      'JavaScript | HTML | CSS | OOP',
      'JavaScript | HTML | CSS | Api',
    ];
  }
}
