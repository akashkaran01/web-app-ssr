import { Component, Input } from '@angular/core';
import { HeaderAndInfo } from '../../../core/models/headerAndnfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sub-header-page-image-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-header-page-image-container.component.html',
  styleUrls: ['./sub-header-page-image-container.component.scss']
})
export class SubHeaderPageImageContainerComponent {
  @Input() bgImageClassName = '';
  @Input() headerAndInfo!: HeaderAndInfo;
}
