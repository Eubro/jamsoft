import { Component, OnInit, PipeTransform } from '@angular/core';
import { ListService } from '../list.service';







@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent implements OnInit {

  empresas:any;
  currentEmpresa = null;
  currentIndex = -1;
  title = '';



  constructor(private listService:ListService) { }

  ngOnInit(): void {
    this.retrieveEmpresas();

  }
  retrieveEmpresas():void{
    this.listService.getEmpresas().subscribe(data =>{this.empresas = data;console.log(data);},error=>{console.log(error);});

  }

  searchText: string = '';


  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);

  }


}
