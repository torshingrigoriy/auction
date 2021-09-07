import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../components/common/products/products.component";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _http: HttpClient
  ) {

  }

  getProducts(): Product[] {
    return products
  }
  getProductsById(id:number): Product {
    return <Product> products.find(p => p.id == id)
  }
}

let products: Product[] = [
  {
    id: 1,
    imageUrl: 'https://autoreview.ru/images/Article/46/Article_4699_860_575.jpg',
    title: 'WV Beetle',
    price: '6000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae et laborum libero mollitia nulla officiis similique voluptas voluptatum!',
    rating: 2,
  },
  {
    id: 3,
    imageUrl: 'https://cdn.motor1.com/images/mgl/GPJV1/s1/volkswagen-touareg-sondermodell-one-million.webp',
    title: 'WV Touareg',
    price: '16000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae et laborum libero mollitia nulla officiis similique voluptas voluptatum!',
    rating: 3,
  },
  {
    id: 2,
    imageUrl: 'https://cars1.com.ua/wp-content/uploads/2017/09/Volkswagen-Golf_R-2017-1280-01.jpg',
    title: 'WV Golf R',
    price: '12000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae et laborum libero mollitia nulla officiis similique voluptas voluptatum!',
    rating: 4,
  },
  {
    id: 4,
    imageUrl: 'https://cdn.motor1.com/images/mgl/nr6Jx/s3/porsche-911-carrera-992-2019.webp',
    title: 'Porsche Carrera',
    price: '13568',
    description: 'A timeless design, a contemporary interpretation. The unmistakable silhouette of the 911 is characterised by its iconic flyline. It has barely changed since 1963, and has shaped the DNA of all Porsche models. Including, of course, the 911 Cabriolet and Targa models.',
    rating: 4,
  },
  {
    id: 5,
    imageUrl: 'https://cars.usnews.com/pics/size/776x517/images/Auto/custom/13589/2018_Hyundai_Accent_4.jpg',
    title: 'Hyundai Accent',
    price: '15395',
    description: 'The 2021 Hyundai Accent offers plenty of passenger space and a user-friendly, though basic, infotainment system, but this small sedan can be slow to accelerate, and it\'s not as engaging to drive as some rivals.',
    rating: 4,
  },
  {
    id: 6,
    imageUrl: 'https://autoreview.ru/images/Article/1665/Article_166534_860_575.jpg',
    title: 'Kia Forte',
    price: '17890',
    description: 'The 2021 Kia Forte fares well in our compact car rankings. It comes loaded with safety and infotainment technology, it has a spacious cabin, and it earns an above-average predicted reliability score and fuel economy rating.',
    rating: 4,
  },
  {
    id: 7,
    imageUrl: 'https://images.drive.ru/i/0/5d527f25ec05c45370000003.jpg',
    title: 'Honda Odyssey',
    price: '31790',
    description: 'The 2021 Honda Odyssey earns a spot near the top of our minivan rankings thanks to its spacious and well-appointed interior, lively performance, and abundance of family-friendly technology.',
    rating: 4,
  },
  {
    id: 8,
    imageUrl: 'https://autoreview.ru/images/Article/1710/Article_171065_860_575.jpg',
    title: 'Kia Sorento',
    price: '29390',
    description: 'The fully redesigned 2021 Kia Sorento cracks the top half of our midsize SUV rankings. It’s enjoyable to drive, and it offers a quality interior and user-friendly tech features.',
    rating: 4,
  },
  {
    id: 9,
    imageUrl: 'https://cdn.motor1.com/images/mgl/MzxB8/s3/toyota-rav4-hybrid.webp',
    title: 'Toyota RAV4',
    price: '28500',
    description: 'The well-rounded Toyota RAV4 Hybrid earns a spot near the top of our hybrid and electric SUV rankings. Its refined performance, impressive fuel economy, and high-end interior all give this crossover a leg up on other hybrids.',
    rating: 4,
  }
]
