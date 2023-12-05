import { Component } from '@angular/core';
import { ISelect } from 'src/app/interfaces/select.interface';
import * as $ from 'jquery';


@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent {

  sortItems: ISelect[] = [
    { value: 0, description: 'None' },
    { value: 1, description: 'Title' },
    { value: 2, description: 'Release date' },
  ]

  sortOptions: ISelect[] = [
    { value: 1, description: 'Ascending' },
    { value: 2, description: 'Descending' },
  ]

  change_genre(genre: string, event: any) {
    console.log($(event)[0].checked)
  }

}
