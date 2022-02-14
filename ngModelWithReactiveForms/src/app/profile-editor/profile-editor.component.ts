import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fBuilder.group ({
    firstName: ['', Validators.required], 
    lastName: ['', Validators.required], 
    address: this.fBuilder.group ({
      street: [''], 
      city: [''], 
      state: [''], 
      zip: ['']
    }),
    aliases: this.fBuilder.array([
      this.fBuilder.control('')
    ])
  })

  constructor(private fBuilder: FormBuilder) { }

  ngOnInit(): void { 
    console.log(this.profileForm.controls['address']);
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Furkan',
      address: {
        street: 'inönü street'
      }
    })
    console.log(this.profileForm.value);
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAliases() {
    this.aliases.push(this.fBuilder.control(''));
    console.log(this.aliases.controls);
  }

}
