import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl : './list-header.component.html',

})
export class ListHeaderComponent { }
