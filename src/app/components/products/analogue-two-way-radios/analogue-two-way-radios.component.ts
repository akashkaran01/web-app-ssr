import { Component } from '@angular/core';
import { HeaderAndInfo } from '../../../core/models/headerAndnfo';
import { SubHeaderPageImageContainerComponent } from '../../../shared/components/sub-header-page-image-container/sub-header-page-image-container.component';
import { LeftImageRightTextComponent } from '../../../shared/components/left-image-right-text/left-image-right-text.component';
import { RightImageLeftTextComponent } from '../../../shared/components/right-image-left-text/right-image-left-text.component';
import { HeaderAndTextComponent } from '../../../shared/components/header-and-text/header-and-text.component';

@Component({
  selector: 'app-analogue-two-way-radios',
  standalone: true,
  imports: [SubHeaderPageImageContainerComponent, LeftImageRightTextComponent, RightImageLeftTextComponent, HeaderAndTextComponent],
  templateUrl: './analogue-two-way-radios.component.html',
  styleUrls: ['./analogue-two-way-radios.component.scss']
})
export class AnalogueTwoWayRadiosComponent {

  imageContent: HeaderAndInfo = {
    header: 'Analogue Radio',
    headerExplanationPara: 'Functional, Reliable Solutions for Your Workforce'
  }

  textContent0: HeaderAndInfo = {
    header: 'Analogue Radio',
    headerExplanationPara: `Perfect for the on-the-go workforce, Saikia's analogue radios offer excellent performance allied with great value. If what you need is a simple, practical solution, then analogue could be the technology for you.  Used across many industries, from construction and transportation to hospitality and facilities, our analogue radio devices have a history and pedigree of no-nonsense communications.`
  }

  textContent1: HeaderAndInfo = {
    header: 'Powerful Simplicity',
    headerExplanationPara: `MORE THAN JUST A RADIO
    Go beyond traditional analog technology, and discover Saikia's feature-packed two-way radios, enhancing worker safety and improving your communications & productivity.
    <br>
    JUST WHAT YOU NEED
    Robust, stylish radios that deliver exactly what you need - simple, one-to-one, or one-to-group communication that keeps your business running smoothly.`,
  }

}
