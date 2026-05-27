import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContainer, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-certificate-dialog',
  imports: [MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './certificate-dialog.html',
  styleUrl: './certificate-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateDialog {
  public data = inject(MAT_DIALOG_DATA);
}
