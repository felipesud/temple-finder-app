import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TempleService } from 'src/app/services/temple.service';
import { Temple } from 'src/app/models/temple.model';

@Component({
  selector: 'app-temple-form',
  templateUrl: './temple-form.component.html',
  styleUrls: ['./temple-form.component.css'],
})
export class TempleFormComponent implements OnInit {
  templeForm!: FormGroup;
  message: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private templeService: TempleService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.templeForm = this.formBuilder.group({
      name: [''],
      address: [''],
      telephone: [''],
      photoUrl: [''],
    });
  }

  submitForm(): void {
    const templeData: Temple = this.templeForm.value;
    this.templeService.createTemple(templeData).subscribe(
      (response) => {
        this.message = 'Temple created successfully';
        console.log('Temple created successfully:', response);
      },
      (error) => {
        this.message = 'Error creating temple';
        console.log('Error creating temple:', error);
      }
    );
  }
}
