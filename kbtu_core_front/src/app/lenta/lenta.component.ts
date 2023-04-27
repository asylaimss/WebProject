import { Component, OnInit } from '@angular/core';
import { DataLenta } from '../data-lenta';
import { ServiceLentaService } from '../service-lenta.service';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { Params } from '@angular/router';
import {Location} from '@angular/common';
import { datas } from '../data-lenta';

@Component({
  selector: 'app-lenta',
  templateUrl: './lenta.component.html',
  styleUrls: ['./lenta.component.css']
})
export class LentaComponent {
  newFilter: string;
  data1s = [...datas];

  albums: DataLenta[] |undefined;
  loaded: boolean;
  newAlbum: DataLenta;
  constructor(private albumService: ServiceLentaService){
    this.albums = [];
    this.loaded = true;
    this.newAlbum = {} as DataLenta;
    this.newFilter = "";
  }
  ngOnInit(): void {
    this.albums = datas;
    //    !!!!!      FOR WORK WITH JSON UNCOMMENT TEXT BELLOW   !!!!!!! 
    //this.getAlbums();
  }

  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums: DataLenta[]) =>{
      this.albums = albums;
      this.loaded = true;
    });
  }
  addAlbum(){
    this.albumService.addAlbum(this.newAlbum).subscribe((album: DataLenta) => {
      console.log(album);
    })
  }
  
}
