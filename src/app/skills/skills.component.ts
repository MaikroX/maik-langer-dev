import { Component, OnInit } from '@angular/core';
import { ViewChildren, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, AfterViewInit {
  logos = [];
  skill = [];
  logos2 = [];
  skill2 = [];
  // logos3 = [];
  // skill3 = [];

  ngOnInit() {
    this.loadImages();
    this.loadSkills();
  }

  @ViewChildren('skillContain') skillContains: any;
  @ViewChildren('skillContain2') skillContain2: any;
  @ViewChildren('skillContain3') skillContain3: any;

  ngAfterViewInit(): void {
    this.animateFirstRow();
    this.animateSecondRow();
  }

  loadImages() {
    this.logos = [
      'angular.png',
      'javascript.png',
      'typescript.png',
      'html.png',
      'css.png',
    ];
    this.logos2 = [
      'firebase.png',
      'scrum.png',
      'git.png',
      'rest-api.png',
      'material-design.png',
    ];
  }

  loadSkills() {
    this.skill = ['Angular', 'JavaScript', 'Typescript', 'HTML', 'CSS'];
    this.skill2 = ['Firebase', 'Scrum', 'Git', 'Rest-Api', 'Material-Design'];
  }

  animateFirstRow() {
    this.skillContains.forEach((skillContain: ElementRef) => {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          let square = entry.target.querySelector('.skill-entry1');

          if (entry.isIntersecting) {
            square.classList.add('skill1');
          } else {
            square.classList.remove('skill1');
          }
        });
      });

      observer.observe(skillContain.nativeElement);
    });
  }

  animateSecondRow() {
    this.skillContain2.forEach((skillContain2: ElementRef) => {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const square = entry.target.querySelector('.skill-entry2');

          if (entry.isIntersecting) {
            square.classList.add('skill2');
          } else {
            square.classList.remove('skill2');
          }
        });
      });

      observer.observe(skillContain2.nativeElement);
    });
  }
}
