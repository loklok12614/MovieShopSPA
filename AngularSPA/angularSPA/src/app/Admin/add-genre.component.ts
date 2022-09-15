import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GenreService } from '../Core/Services/genre.service';
import { GenreCreate } from '../Shared/Models/Genre-Create';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  tnc:boolean = false
  name!:string
  genre:GenreCreate = {name: ''}
  successFlag:boolean = false
  errorFlag:boolean = false

  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
  }

  addGenre(genreForm:NgForm):void{
    this.genre.name = genreForm.value.name
    if(!this.tnc){
      this.errorFlag = true
    }
    this.genreService.addGenre(this.genre).subscribe((g:any) => {
      this.successFlag = true;
    })
  }

  resetForm(genreForm:NgForm):void{
    genreForm.resetForm();
  }

  checkTnc(){
    this.tnc = !this.tnc
  }

}
