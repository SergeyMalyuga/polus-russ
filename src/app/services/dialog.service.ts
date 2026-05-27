import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialog = inject(MatDialog);

  public openDialog<T>(component: ComponentType<T>, data?: string) {
    return this.dialog.open(component, {data: data ?? null});
  }
}
