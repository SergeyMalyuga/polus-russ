// contact.component.ts
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { SubmitStatus } from '../../core/constants/consts';
import { DialogService } from '../../services/dialog.service';
import { FormSuccessDialogComponent } from '../form-success-dialog/form-success-dialog.component';
import { ContactForm } from '../../core/models/contact-form.model';
import { FormErrorDialogComponent } from '../form-error-dialog/form-error-dialog.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private emailService = inject(EmailService);
  private dialogService = inject(DialogService);
  private fb = inject(FormBuilder);

  public submitStatus = signal<SubmitStatus | null>(null);

  public contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.submitStatus.set(SubmitStatus.LOADING);
      const contact: ContactForm = this.contactForm.getRawValue();
      console.log(contact);
      this.emailService.sendEmail(contact).subscribe({
        next: () => {
          this.submitStatus.set(SubmitStatus.SUCCESS);
          this.dialogService
            .openDialog(FormSuccessDialogComponent)
            .afterClosed()
            .subscribe(() => this.submitStatus.set(null));
          this.contactForm.reset();
        },
        error: () => {
          this.submitStatus.set(SubmitStatus.ERROR);
          this.dialogService
            .openDialog(FormErrorDialogComponent)
            .afterClosed()
            .subscribe(() => {
              this.submitStatus.set(null);
            });
        },
      });
    }
  }
}
