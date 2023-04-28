import { Component, OnInit } from '@angular/core';
import { DataLenta } from '../data-lenta';
import { ServiceLentaService } from '../service-lenta.service';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { Params } from '@angular/router';
import {Location} from '@angular/common';
import { data1s } from '../data1';
import { DatabaseService } from '../database.service';
import { Tutorial } from '../models';

@Component({
  selector: 'app-lenta',
  templateUrl: './lenta.component.html',
  styleUrls: ['./lenta.component.css']
})
export class LentaComponent {
  newFilter: string;
  data1s: Tutorial[] = [];
  loaded: boolean;

  constructor(private service: DatabaseService){
    this.loaded = true;
    this.newFilter = "";
  }
  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.loaded = false;
    this.service.getTutorials().subscribe((albums: Tutorial[]) =>{
      this.data1s = albums;
      this.loaded = true;
    });
  }
  
}
