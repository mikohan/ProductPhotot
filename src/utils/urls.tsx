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
  /** Services */
  serviceProduct: () => `/photo/product-photography`,
  serviceAmazon: () => `/photo/amazon-photography`,
  serviceFood: () => `/photo/food-photography`,
  serviceRealEstate: () => `/photo/real-estate-photography`,
  serviceVideo: () => `/photo/videography`,
  serviceCars: () => `/photo/cars-photography`,
  projectSingle: (slug: string) => `/photo/projects/${slug}`
};

export const projectsNavigation = [
  {
    title: 'Our All Services',
    children: [
      { id: 1, title: 'Product Photography', url: url.serviceProduct() },
      { id: 2, title: 'Amazon (Ecommerce) Photography', url: url.serviceAmazon() },
      { id: 3, title: 'Cars Photography', url: url.serviceCars() },
      { id: 4, title: 'Food Photography', url: url.serviceFood() },
      { id: 5, title: 'Real Estate Photography', url: url.serviceRealEstate() }
    ]
  }
];
