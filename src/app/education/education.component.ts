
import { Component, OnInit } from '@angular/core';
import * as data from '../data/education.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  education: any = (data as any).default;
}
