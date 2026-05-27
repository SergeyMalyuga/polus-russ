// partner.component.ts
import { Component, inject } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { CertificateDialog } from '../certificate-dialog/certificate-dialog';

@Component({
  selector: 'app-partner',
  standalone: true,
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss',
})
export class PartnerComponent {
  public dialogService = inject(DialogService);
  protected readonly CertificateDialog = CertificateDialog;
}
