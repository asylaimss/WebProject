import { Component, OnInit } from '@angular/core';
import { DataLenta } from '../data-lenta';
import { ServiceLentaService } from '../service-lenta.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Params } from '@angular/router';
import {Location} from '@angular/common';
import { data1s } from '../data1';

@Component({
  selector: 'app-lenta',
  templateUrl: './lenta.component.html',
  styleUrls: ['./lenta.component.css']
})
export class LentaComponent {
  data1s = [...data1s];
  albums: DataLenta[] = [];
  loaded: boolean;
  newAlbum: DataLenta;
  constructor(private albumService: ServiceLentaService){
    this.albums = [];
    this.loaded = true;
    this.newAlbum = {} as DataLenta;
  }
  ngOnInit(): void {
    this.getAlbums();
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
