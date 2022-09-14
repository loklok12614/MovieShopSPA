import { Component, OnInit } from '@angular/core';
import { CastDetails } from '../Shared/Models/Cast-Details';
import { ActivatedRoute } from '@angular/router';
import { CastService } from '../Core/Services/cast.service';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {

  id!:number
  castDetails!:CastDetails

  constructor(private route:ActivatedRoute, private castService:CastService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get("castId")!);
    this.castService.getCastDetails(this.id).subscribe((c:CastDetails) => {
      this.castDetails = c
    })
  }

}
