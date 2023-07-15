import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TempleService } from 'src/app/services/temple.service';
import { Temple } from 'src/app/models/temple.model';

@Component({
  selector: 'app-temple-list',
  templateUrl: './temple-list.component.html',
  styleUrls: ['./temple-list.component.css']
})
export class TempleListComponent implements OnInit {
  temples: Temple[] = [];

  constructor(private templeService: TempleService, private router: Router) {}

  ngOnInit(): void {
    this.getTempleList();
  }

  getTempleList() {
    this.templeService.getTemples().subscribe(
      (temples: Temple[]) => {
        this.temples = temples;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createNewTemple(templeData: Temple) {
    this.templeService.createTemple(templeData).subscribe(
      (response) => {
        this.getTempleList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTempleDetails(id: string) {
    this.templeService.getTemple(id).subscribe(
      (temple: Temple) => {
        // Lógica para lidar com os detalhes do templo
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateTempleDetails(id: string, templeData: Temple) {
    this.templeService.updateTemple(id, templeData).subscribe(
      (response) => {
        // Lógica para lidar com a resposta após a atualização do templo
      },
      (error) => {
        console.log(error);
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

  openTempleDetails(id: string) {
    this.router.navigate(['/temples', id]);
  }
}
