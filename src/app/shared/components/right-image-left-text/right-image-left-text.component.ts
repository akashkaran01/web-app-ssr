import { Component, Input } from '@angular/core';
import { HeaderAndInfo } from '../../../core/models/headerAndnfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-image-left-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-image-left-text.component.html',
  styleUrls: ['./right-image-left-text.component.scss']
})
export class RightImageLeftTextComponent {
  @Input() bgImageClassName = '';
  @Input() headerAndInfo!: HeaderAndInfo;
}
