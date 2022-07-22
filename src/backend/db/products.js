import { v4 as uuid } from "uuid";
import Img1 from '../../assests/images/img1.jpeg';
import Img2 from '../../assests/images/img2.jpeg';
import Img3 from '../../assests/images/img3.jpeg';
import Img4 from '../../assests/images/img4.jpeg';
import Img5 from '../../assests/images/img5.jpeg';
import Img6 from '../../assests/images/img6.jpeg';
import Img7 from '../../assests/images/img7.jpeg';
import Img8 from '../../assests/images/img8.jpeg';
import Img9 from '../../assests/images/img9.jpeg';
import Img10 from '../../assests/images/img10.jpeg';
import Img11 from '../../assests/images/img11.jpeg';
import Img12 from '../../assests/images/img12.jpeg';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: Img1,
    name: "IronMan T-shirt",
    originalPrice:799,
    categoryName: "T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice:399,
    delivery:40,
    discount:50,
    star: 2.3,
    tag: "New"
  },
  {
    _id: uuid(),
    image: Img2,
    name: "Marvel T-shirt",
    originalPrice: 799,
    categoryName: "T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice:560,
    delivery:40,
    discount:30,
    star: 2.2,
  },
  {
    _id: uuid(),
    image: Img3,
    name: "Arc T-shirt",
    originalPrice: 699,
    categoryName: "T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 525,
    delivery:40,
    discount:25,
    star: 3.6,
    tag: "Trending"
  },
  {
    _id: uuid(),
    image: Img4,
    name: "Marvel T-shirt",
    originalPrice: 749,
    categoryName: "T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 485,
    delivery:40,
    discount:35,
    star: 4.5
  },
  {
    _id: uuid(),
    image: Img5,
    name: "Spidey Hoodie",
    originalPrice: 1499,
    categoryName: "Hoodie",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 1200,
    delivery:40,
    discount:20,
    star: 3.8,
    tag: "BestSeller"
  },
  {
    _id: uuid(),
    image: Img6,
    name: "Avenger Hoodie ",
    originalPrice: 1699,
    categoryName: "Hoodie",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 1275,
    delivery:40,
    discount:25,
    star: 3.6
  },
  {
    _id: uuid(),
    image: Img7,
    name: "Marvel Hoodie",
    originalPrice: 1799,
    categoryName: "Hoodie",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 1530,
    delivery:40,
    discount:15,
    star: 3.7,
    tag: "New Offer"
  },
  {
    _id: uuid(),
    image: Img8,
    name: "Caption America Jacket",
    originalPrice: 2299,
    categoryName: "Jacket",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 1840,
    delivery:40,
    discount:20,
    star: 2.1
  },
  {
    _id: uuid(),
    image: Img9,
    name: "Avenger's Jacket ",
    originalPrice: 1999,
    categoryName: "Jacket",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 1800,
    delivery:40,
    discount:20,
    star: 3.5,
    tag: "BestSeller"
  },
  {
    _id: uuid(),
    image: Img10,
    name: "Spidey T-shirt",
    originalPrice: 799,
    categoryName: "Woman T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 625,
    delivery:40,
    discount:22,
    star: 4.2,
  },
  {
    _id: uuid(),
    image: Img11,
    name: "Captain Marvel's T-shirt",
    originalPrice: 699,
    categoryName: "Woman T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 595,
    delivery:40,
    discount:15,
    star: 2.5,
    tag: "Limited"
  },
  {
    _id: uuid(),
    image: Img12,
    name: "Captain Marvel's T-shirt",
    originalPrice: 699,
    categoryName: "Woman T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 560,
    delivery:40,
    discount:20,
    star: 2.5,
    tag: "Limited"
  },
];