import { Component, Input } from '@angular/core';
import { IThumbnail } from 'src/app/interfaces/thumbnail.interface';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {

  colors = {
    ok: '#78C000',
    medium: '#f5ae32',
    low: '#d31d09'
  }

  @Input() lstThumbnail: IThumbnail[] = []

  getStrokeColor(rating: number) {
    const percent = rating * 10;
    let color = ''
    if (percent > 0 && percent <= 50) {
      color = this.colors.low
    } else if (percent > 51 && percent <= 80) {
      color = this.colors.medium
    } else if (percent > 80 && percent <= 100) {
      color = this.colors.ok
    }
    return color;
  }


}
