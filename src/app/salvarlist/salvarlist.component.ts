import { Component, OnInit, Input,Output } from '@angular/core';

import { ListService } from '../list.service';
import { Empresa } from '../models/empresa';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-salvarlist',
  templateUrl: './salvarlist.component.html',
  styleUrls: ['./salvarlist.component.css']
})
export class SalvarlistComponent implements OnInit {

empresa = {
  nome:"",
  published: false
};
submitted = false;


  constructor(private listService: ListService, private route: ActivatedRoute, private router:Router ) {}

  ngOnInit(): void {

    }



  saveEmpresa(): void{
    const data = {
      nome: this.empresa.nome
    };
    this.listService.create(data).subscribe(response =>{console.log(response);this.submitted =true;});

    }
  }



