export const url = {
  home: () => `/`,
  about: () => `/photo/about`,
  contact: () => `/photo/contact`,
  portfolio: () => `/photo/portfolio`,
  prices: () => `/photo/prices`,
  services: () => `/photo/services`,
  process: () => `/photo/process`
};

export const projectsNavigation = [
  {
    title: 'PROJECT PAGES',
    children: [
      { id: 1, title: 'Project I', url: '/projects-1' },
      { id: 2, title: 'Project II', url: '/projects-2' },
      { id: 3, title: 'Project III', url: '/projects-3' },
      { id: 4, title: 'Project VI', url: '/projects-4' }
    ]
  },
  {
    title: 'SINGLE PROJECTS',
    children: [
      { id: 1, title: 'Single Project I', url: '/single-project-1' },
      { id: 2, title: 'Single Project II', url: '/single-project-2' },
      { id: 3, title: 'Single Project III', url: '/single-project-3' },
      { id: 4, title: 'Single Project VI', url: '/single-project-4' }
    ]
  }
];
