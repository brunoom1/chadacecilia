import { FC } from 'react';
import Swal from 'sweetalert2';

interface ProductsProps {
  products: any[],
  productsSelecteds: any[],
  onClick: (evt: Event) => void;
}

export const Products:FC<ProductsProps> = ({
  products, 
  productsSelecteds
}) => {
  return products.map ((product, i) => 
    <div className="produto" 
      key={ i } 
      data-selected={ !!product.requerente }
      data-active={ productsSelecteds.includes(i) }
      onClick={ (evt) => {
        onclick(evt);
        evt.stopPropagation();
        evt.preventDefault();
      } }
    >
    </div>
  )
}