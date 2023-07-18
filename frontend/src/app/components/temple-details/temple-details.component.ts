// temple-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Temple } from 'src/app/models/temple.model';
import { TempleService } from 'src/app/services/temple.service';

@Component({
  selector: 'app-temple-details',
  templateUrl: './temple-details.component.html',
  styleUrls: ['./temple-details.component.css'],
})
export class TempleDetailsComponent implements OnInit {
  temple: Temple = {
    id: '',
    name: '',
    address: '',
    telephone: '',
    photoUrl: '',
  };

  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private templeService: TempleService
  ) {}

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

  updateTempleDetails() {
    this.templeService.updateTemple(this.temple.id, this.temple).subscribe(
      (updatedTemple) => {
        this.message = 'Temple updated successfully';
        console.log('Temple updated successfully:', updatedTemple);
      },
      (error) => {
        this.message = 'Error updating temple';
        console.log('Error updating temple:', error);
      }
    );
  }

  deleteTemple(id: string) {
    this.templeService.deleteTemple(id).subscribe(
      (deleted) => {
        if (deleted) {
          this.message = 'Temple deleted successfully';
          console.log('Temple deleted successfully');
          this.temple =  {
            id: '',
            name: '',
            address: '',
            telephone: '',
            photoUrl: '',
          };

        } else {
          console.log('Error deleting temple');
          this.updateTempleDetails();

        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
