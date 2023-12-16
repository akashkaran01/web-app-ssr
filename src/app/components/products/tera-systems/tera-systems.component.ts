import { Component } from '@angular/core';
import { HeaderAndInfo } from '../../../core/models/headerAndnfo';
import { HeaderAndTextComponent } from '../../../shared/components/header-and-text/header-and-text.component';
import { LeftImageRightTextComponent } from '../../../shared/components/left-image-right-text/left-image-right-text.component';
import { RightImageLeftTextComponent } from '../../../shared/components/right-image-left-text/right-image-left-text.component';
import { SubHeaderPageImageContainerComponent } from '../../../shared/components/sub-header-page-image-container/sub-header-page-image-container.component';

@Component({
  selector: 'app-tera-systems',
  standalone: true,
  imports: [SubHeaderPageImageContainerComponent, LeftImageRightTextComponent, RightImageLeftTextComponent, HeaderAndTextComponent],
  templateUrl: './tera-systems.component.html',
  styleUrls: ['./tera-systems.component.scss'],
})
export class TeraSystemsComponent {
  imageContent: HeaderAndInfo = {
    header: 'TETRA System',
    headerExplanationPara: 'MISSION-CRITICAL COMMUNICATIONS',
  };

  textContent0: HeaderAndInfo = {
    header: 'TETRA System',
    headerExplanationPara: `Saikia's TETRA System provide powerful reliability when you need it most, and our radios offer an expansive feature list compliant with the ETSI TETRA open standard, managed through our impressive applications. Discover how we can provide your TETRA infrastructure today to deliver mission-critical communications.`,
  };

  textContent1: HeaderAndInfo = {
    header: 'Secure and Resilient',
    headerExplanationPara: `TETRA encryption (E2EE and AIE) and authentication, combined with excellent voice quality thanks to digital TETRA technology, ensures every communication is transmitted clearly and securely. Intelligent redundancy functions provides maximum system reliability.`,
  };

  textContent2: HeaderAndInfo = {
    header: 'TETRA System Scalability',
    headerExplanationPara: `Saikia TETRA ACCESSNET®&#174;-T IP can be scaled to grow in line with your user demands, from single-cell systems to nationwide networks.`,
  };

  textContent3: HeaderAndInfo = {
    header: 'Utilise Existing IP Infrastructure',
    headerExplanationPara: `The IP-based connectivity of the individual network elements allows you to use existing IP infrastructure, which makes extra transmission links superfluous and saves on cost. Make use of high-grade IP networks for voice communication that may already exist at many sites.`,
  };

  textContent4: HeaderAndInfo = {
    header: 'Network Architecture Designed for Flexibility',
    headerExplanationPara: `Centralized or decentralized network topologies offer flexibility in your network design and adaptation, while the flexible distribution of gateways is possible across all nodes, ensuring the system is configured to your individual requirements.`,
  };

}
