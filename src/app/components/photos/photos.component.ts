import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {FlickerService} from "../../flicker.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {
  
  @Input() type: string = null;
  
  public photos = [];
  public subscription: Subscription;
  
  constructor(public flicker: FlickerService) {
  }
  
  onScroll() {
    switch (this.type) {
      case 'owner': {
        this.flicker.ownerPhoto();
        return;
      }
      default:
        this.flicker.search();
        return;
    }
  }
  
  ngOnInit() {
    this.subscription = this.flicker.photos.subscribe(
      (photos) => {
        // const photoGallery = gallery.photo.map(iPhotoFromApi);
        this.photos = photos;
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
