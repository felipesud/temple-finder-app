import { Component, OnInit } from '@angular/core';
import { TempleService } from 'src/app/services/temple.service';

@Component({
  selector: 'app-temple-list',
  templateUrl: './temple-list.component.html',
  styleUrls: ['./temple-list.component.css']
})
export class TempleListComponent implements OnInit {
  constructor(private templeService: TempleService) {}

  ngOnInit(): void {
    // Initialize component logic
  }

  createNewTemple(templeData: any) {
    this.templeService.createTemple(templeData).subscribe(
      (response) => {
        // Logic to handle response after creating the temple
      },
      (error) => {
        // Logic to handle errors
      }
    );
  }

  getTempleDetails(id: string) {
    this.templeService.getTemple(id).subscribe(
      (temple) => {
        // Logic to handle temple details
      },
      (error) => {
        // Logic to handle errors
      }
    );
  }

  updateTempleDetails(id: string, templeData: any) {
    this.templeService.updateTemple(id, templeData).subscribe(
      (response) => {
        // Logic to handle response after updating the temple
      },
      (error) => {
        // Logic to handle errors
      }
    );
  }

  deleteTemple(id: string) {
    this.templeService.deleteTemple(id).subscribe(
      (response) => {
        // Logic to handle response after deleting the temple
      },
      (error) => {
        // Logic to handle errors
      }
    );
  }
}
