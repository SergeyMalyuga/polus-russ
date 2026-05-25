import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-form-error-dialog',
  imports: [MatButton, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
  templateUrl: './form-error-dialog.component.html',
  styleUrl: './form-error-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormErrorDialogComponent {}
