import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ListService } from '../list.service';
import { Empresa } from '../models/empresa';
import { map, startWith, debounceTime, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<any>;
  options :Empresa[] = [];



  constructor(private listService:ListService) {
    this.filteredOptions =this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(100),
      switchMap(value =>{return this.filter(value || '')})


    );
   }

   displayFn(user: Empresa): string {
    return user && user.nome ? user.nome : '';
  }
   public filter(value: string): Observable<Empresa[]> {
    return this.listService.getEmpresas().pipe(map(response=> response.filter(option=>{
      return option.nome?.toLowerCase().indexOf(value.toLowerCase())===0
    }))
    )
  }


  ngOnInit(): void {

  }


}
