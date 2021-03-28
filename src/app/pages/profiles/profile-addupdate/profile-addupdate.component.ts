import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '@app/services';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';;
@Component({
  selector: 'profile-addupdate',
  templateUrl: './profile-addupdate.component.html',
  styleUrls: ['./profile-addupdate.component.scss']
})
export class ProfileAddupdateComponent implements OnInit {
 id:string = '';
  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private profileSvc: ProfileService,
    private router: Router) {
   
   }
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    image: ['', Validators.required]
  })

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(o=> {
        if(o.id == 'create') {
          return of({});
        }
        this.id = o.id;
        return this.profileSvc.getById(o.id);
      })
    ).subscribe((o: any) => {
      
      this.form.setValue({
        name: o.name,
        image: o.image
      })
    })
  }

  save() {
    let profile = {...this.form.value};
    console.log(this.id, profile);
    if(this.id) {
      this.profileSvc.update(this.id, profile).subscribe(o => {
        this.router.navigateByUrl('/profiles');
      });
    } else {
      this.profileSvc.save(profile).subscribe(o => {
        this.router.navigateByUrl('/profiles');
      });
    }
  }

}
