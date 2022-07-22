import { v4 as uuid } from "uuid";
import Img1 from '../../assests/images/img1.jpeg';
import Img5 from '../../assests/images/img5.jpeg';
import Img8 from '../../assests/images/img8.jpeg';
import Img11 from '../../assests/images/img11.jpeg';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "T-shirt",
    image: Img1,
    alt:"t_shirt",
    description:
      "",
  },
  {
    _id: uuid(),
    categoryName: "Hoodie",
    image: Img5,
    alt:"hoodie",
    description:
      "",
  },
  {
    _id: uuid(),
    categoryName: "Jacket",
    image: Img8,
    alt:"jacket",
    description:
      "",
  },
  {
    _id: uuid(),
    categoryName: "Woman T-shirt",
    image: Img11,
    alt:"woman_t_shirt",
    description:
      "",
  },
];