// products.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 'taraflex',
      name: 'Taraflex®',
      desc: 'Спортивные и многофункциональные ПВХ-покрытия',
      image: 'assets/images/taraflex.jpg',
    },
    {
      id: 'mipolam',
      name: 'Mipolam®',
      desc: 'Гомогенные и гетерогенные покрытия для интенсивных нагрузок',
      image: 'assets/images/mipolam.jpg',
    },
    {
      id: 'virtuo',
      name: 'Virtuo',
      desc: 'Дизайнерские LVT-покрытия с реалистичной текстурой',
      image: 'assets/images/virtuo.jpg',
    },
  ];
}
