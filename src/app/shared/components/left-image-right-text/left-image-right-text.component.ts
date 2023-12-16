import { Component, Input } from '@angular/core';
import { HeaderAndInfo } from '../../../core/models/headerAndnfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-image-right-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-image-right-text.component.html',
  styleUrls: ['./left-image-right-text.component.scss']
})
export class LeftImageRightTextComponent {
  @Input() bgImageClassName = '';
  @Input() headerAndInfo!: HeaderAndInfo;
}
