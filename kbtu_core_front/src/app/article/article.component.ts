import { Component } from '@angular/core';
import { DataLenta } from '../data-lenta';
import { ActivatedRoute } from '@angular/router';
import { ServiceLentaService } from '../service-lenta.service';
import { ParamMap } from '@angular/router';
import { Data1 } from '../data1';
import { data1s } from '../data1';
// import { DataLenta } from '../data-lenta';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  product: Data1 | undefined;



  newAlbum: DataLenta;
  art: DataLenta;
  loaded: boolean;
  constructor(private route: ActivatedRoute, private albumService: ServiceLentaService ){
    this.art = {} as DataLenta;
    this.loaded = true;
    this.newAlbum = {} as DataLenta;
  }
  ngOnInit(): void {
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = Number(routeParams.get('id'));
    // this.product = data1.find(product => product.id === productIdFromRoute);


    this.route.paramMap.subscribe((params: ParamMap) => {
      const productIdFromRoute = Number(params.get('id'));
      this.product = data1s.find(product => product.id === productIdFromRoute);

      const id = Number(params.get('id'));
      this.loaded = true;
      this.albumService.getAlbum(id).subscribe((art: DataLenta) => {
        this.art = art;
        this.loaded = true;
      });
    } )
  }
  deleteAlbum(k: number){
    this.albumService.deleteAlbum(k).subscribe((art: DataLenta) => {
      console.log(art);
    })
  }
  changeAlbum(title: string, id: number, body: DataLenta){
    body = {
      // userId: body.userId,
      id: body.id,
      title: body.title,
    } as DataLenta;
    this.albumService.changeAlbum(id, body).subscribe((art: DataLenta) => {
      console.log(art);
    })
  }
}
