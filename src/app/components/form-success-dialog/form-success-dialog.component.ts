import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-success-dialog',
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle, MatButtonModule],
  templateUrl: './form-success-dialog.component.html',
  styleUrl: './form-success-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSuccessDialogComponent {}
