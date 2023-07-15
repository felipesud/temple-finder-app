// temple-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Temple } from 'src/app/models/temple.model';
import { TempleService } from 'src/app/services/temple.service';

@Component({
  selector: 'app-temple-details',
  templateUrl: './temple-details.component.html',
  styleUrls: ['./temple-details.component.css']
})
export class TempleDetailsComponent implements OnInit {
  temple:Temple = {
    id: '',
    name: '',
    address: '',
    telephone: '',
    photoUrl: ''
  };

  constructor(private route: ActivatedRoute, private templeService: TempleService) {}

  ngOnInit(): void {
    const templeId = this.route.snapshot.params['id'];

    this.templeService.getTemple(templeId).subscribe(
      (temple: Temple) => {
        this.temple = temple;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateTempleDetails(id: string, templeData: Temple) {
    this.templeService.updateTemple(id, templeData).subscribe(
      (updatedTemple) => {

        console.log("Temple updated successfully:", updatedTemple);
      },
      (error) => {
        console.log("Error updating temple:", error);
      }
    );
  }


  deleteTemple(id: string) {
    this.templeService.deleteTemple(id).subscribe(
      (response) => {
        this.getTempleList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTempleList() {
    // Lógica para obter a lista de templos atualizada
  }
}
