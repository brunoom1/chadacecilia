// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number;
  title: string;
  image: string;
  link: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {

  let data: Data[] = [
    {
      id: 1,
      title: 'Product',
      image: 'https://m.media-amazon.com/images/I/512hEEIBtrL._AC_SY355_.jpg',
      link: 'https://www.magazineluiza.com.br/fralda-pampers-premium-care-g-9-a-13kg-68-unidades/p/221144700/me/fdes/?&force=12&seller_id=magazineluiza&utm_source=bing&utm_medium=pla&partner_id=65140&msclkid=57de0bcda2991629f00c69d806ab3644&gclid=COuzl8frlPYCFc4FgQoddnQGxQ'
    },
    {
      id: 1,
      title: 'Product',
      image: 'https://m.media-amazon.com/images/I/512hEEIBtrL._AC_SY355_.jpg',
      link: 'https://www.magazineluiza.com.br/fralda-pampers-premium-care-g-9-a-13kg-68-unidades/p/221144700/me/fdes/?&force=12&seller_id=magazineluiza&utm_source=bing&utm_medium=pla&partner_id=65140&msclkid=57de0bcda2991629f00c69d806ab3644&gclid=COuzl8frlPYCFc4FgQoddnQGxQ'
    },
    {
      id: 1,
      title: 'Product',
      image: 'https://m.media-amazon.com/images/I/512hEEIBtrL._AC_SY355_.jpg',
      link: ''
    },
    {
      id: 1,
      title: 'Product',
      image: 'https://m.media-amazon.com/images/I/512hEEIBtrL._AC_SY355_.jpg',
      link: ''
    },
    {
      id: 1,
      title: 'Product',
      image: 'https://m.media-amazon.com/images/I/512hEEIBtrL._AC_SY355_.jpg',
      link: ''
    },
    {
      id: 1,
      title: 'Product',
      image: 'https://m.media-amazon.com/images/I/512hEEIBtrL._AC_SY355_.jpg',
      link: ''
    },
    {
      id: 1,
      title: 'Product',
      image: 'https://m.media-amazon.com/images/I/512hEEIBtrL._AC_SY355_.jpg',
      link: ''
    },
    {
      id: 1,
      title: 'Product',
      image: 'https://m.media-amazon.com/images/I/512hEEIBtrL._AC_SY355_.jpg',
      link: ''
    },
    {
      id: 1,
      title: 'Product',
      image: 'https://m.media-amazon.com/images/I/512hEEIBtrL._AC_SY355_.jpg',
      link: ''
    },
    {
      id: 1,
      title: 'Product',
      image: 'https://m.media-amazon.com/images/I/512hEEIBtrL._AC_SY355_.jpg',
      link: ''
    }
  ];

  res.status(200).json(data);
}
