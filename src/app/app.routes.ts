import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { PartnerComponent } from './components/partner/partner.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HeroComponent, title: 'Полюс Русс — коммерческие напольные покрытия' },
  { path: 'products', component: ProductsComponent, title: 'Продукция | Полюс Русс' },
  { path: 'partner', component: PartnerComponent, title: 'Gerflor | Полюс Русс' },
  { path: 'contact', component: ContactComponent, title: 'Контакты | Полюс Русс' },
  { path: '**', redirectTo: '' },
];
