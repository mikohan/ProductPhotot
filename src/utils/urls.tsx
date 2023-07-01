export const url = {
  home: () => `/`,
  about: () => `/photo/about`,
  contact: () => `/photo/contact`,
  portfolio: () => `/photo/portfolio`,
  prices: () => `/photo/pricing`,
  services: () => `/photo/services`,
  process: () => `/photo/process`,
  policy: () => `/photo/terms`,
  termsOfUse: () => `/photo/terms`,
  blog: () => `/photo/blog`,
  post: (slug: string) => `/photo/blog-post/${slug}`,
  /** Services */
  serviceProduct: () => `/photo/product-photography`,
  serviceAmazon: () => `/photo/amazon-photography`,
  serviceJewelry: () => `/photo/jewelry-photography`,
  serviceFood: () => `/photo/food-photography`,
  serviceRealEstate: () => `/photo/real-estate-photography`,
  serviceVideo: () => `/photo/video-production`,
  serviceCars: () => `/photo/cars-photography`,
  projectSingle: (slug: string) => `/photo/projects/${slug}`
};
// commetn:w

export const projectsNavigation = [
  {
    title: 'Our All Services',
    children: [
      { id: 1, title: 'Product Photography', url: url.serviceProduct(), show: true },
      { id: 2, title: 'Amazon (Ecommerce) Photography', url: url.serviceAmazon(), show: false },
      { id: 3, title: 'Jewelry Photography', url: url.serviceJewelry(), show: true },
      { id: 4, title: 'Cars Photography', url: url.serviceCars(), show: true },
      { id: 5, title: 'Food Photography', url: url.serviceFood(), show: false },
      { id: 6, title: 'Real Estate Photography', url: url.serviceRealEstate(), show: false },
      { id: 7, title: 'Video Production', url: url.serviceVideo(), show: true }
    ]
  }
];
