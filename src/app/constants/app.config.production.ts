import { AppConfig } from '@annuadvent/ngx-core/app-config';

export const appConfig: AppConfig = {
  name: 'Annu Advent',
  copyrightText: 'copyright©annuadvent. All rights reserved.',
  themeName: 'armyGreen',
  siteEmail: 'annuadvent@gmail.com',
  apiBaseUrl: 'https://ngx-libs.annuadvent.com', // When running prod on hosting server
  imagesSourceUrl: '/getImage?imageId=',
  loginUrl: '/login',
  logoutUrl: '/logout',
  profileUrl: '/dashboard',
  adminEmail: 'sunil.divyam@gmail.com',
  defaultPageSize: 5,
  tNcUrl: '/tnc/terms-and-conditions',
  privacyPolicyUrl: '/tnc/privacy-policy',
  contactUsUrl:
    '/contact-us',
  aboutUsUrl: '/about-us',
  metaInfo: {
    title: 'Annu Advent Angular Components Libraries',
    description:
      'Annu Advent Angular Components Libraries are Angular libraries, consisting of {{libNames}}, offers a comprehensive set of UI components, services, and firebase functionality for developing web applications. These libraries are designed to simplify the development process by providing reusable and customizable components, handy tools, and seamless integration with Firebase services. By using these Angular libraries together, developers can accelerate their application development process while maintaining consistency and adherence to best practices. The libraries provide a robust set of UI components, utility functions, content management tools, and Firebase integration, enabling developers to create powerful and feature-rich web applications with ease.',
    keywords:
      'Angular libraries, UI components, Services, Firebase integration, Angular development, Content Management System (CMS)',
    robots: 'index, follow',
    'Content-Type': 'text/html; charset=utf-8',
    language: 'english',
    'revisit-after': '7 days',
    author: 'Annu Advent',
    type: 'article',
    'article:published_time': '2023-01-01T17:53:35.868Z',
    'article:author': 'Annu Advent',
    'article:section': 'technology',
    'article:tag':
      'Angular libraries, UI components, Services, Firebase integration, Angular development, Content Management System (CMS)',
    image: '/assets/ngx-libs-annu-advent.jpeg',
    url: '',
    card: 'summary_large_image',
    site_name: 'Annu Advent',
    audio: '',
    video: '',
  },
  mainMenuItems: [
    {
      title: 'ngx-common-ui',
      href: ['/libs/ngx-common-ui']
    },
    {
      title: 'ngx-tools',
      href: ['/libs/ngx-tools']
    },
    {
      title: 'ngx-cms',
      href: ['/libs/ngx-cms']
    },
    {
      title: 'ngx-core',
      href: ['/libs/ngx-core']
    },
  ],
};
