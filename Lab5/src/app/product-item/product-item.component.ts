import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  standalone: true,
  imports: [RouterModule,ProductDetailComponent]
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() remove = new EventEmitter<void>();

  onLike() {
    this.product.likes++;
  }

  onRemove() {
    this.remove.emit();
  }
}
