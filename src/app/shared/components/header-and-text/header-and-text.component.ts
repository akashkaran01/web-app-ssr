import { Component, Input } from '@angular/core';
import { HeaderAndInfo } from '../../../core/models/headerAndnfo';

@Component({
  selector: 'app-header-and-text',
  standalone: true,
  imports: [],
  templateUrl: './header-and-text.component.html',
  styleUrls: ['./header-and-text.component.scss']
})
export class HeaderAndTextComponent {
  @Input() headerAndInfo!: HeaderAndInfo;
}
