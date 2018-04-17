const BOOK_DATA = {
  1234567890: {
<<<<<<< HEAD
    title: 'To Kill a Mockingbird',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg',
    author: 'Harper Lee',
    ISBN: '9780061980268',
    listingIds: [
      '12345',
      '67890',
=======
    title: 'Gödel, Escher, Bach',
    subtitle: 'An Eternal Golden Braid',
    authors: [
      'Douglas R. Hofstadter',
    ],
    publishedDate: '1979',
    industryIdentifiers: [
      {
        type: 'ISBN_10',
        identifier: '0140179976',
      },
      {
        type: 'ISBN_13',
        identifier: '9780140179972',
      }
    ],
    readingModes: {
      text: false,
      image: false,
    },
    pageCount: 777,
    printType: 'BOOK',
    categories: [
      'Artificial intelligence',
>>>>>>> 9c7463e5e358cb20024635fa0be7de9c2c2da1e1
    ],
    averageRating: 4.5,
    ratingsCount: 43,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: 'preview-1.0.0',
    imageLinks: {
      smallThumbnail: 'http://books.google.com/books/content?id=Lps7PgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      thumbnail: 'http://books.google.com/books/content?id=Lps7PgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    },
    language: 'en',
    previewLink: 'http://books.google.com/books?id=Lps7PgAACAAJ&dq=isbn:9780140179972&hl=&cd=1&source=gbs_api',
    infoLink: 'http://books.google.com/books?id=Lps7PgAACAAJ&dq=isbn:9780140179972&hl=&source=gbs_api',
    canonicalVolumeLink: 'https://books.google.com/books/about/G%C3%B6del_Escher_Bach.html?hl=&id=Lps7PgAACAAJ',
    listingIds: ['12345abcdef', '67890ghijkl'],
  },
  9876543210: {
<<<<<<< HEAD
    title: 'Gödel, Escher, Bach',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/512BblrQFqL._SX327_BO1,204,203,200_.jpg',
    author: 'Douglas Hofstadter',
    ISBN: '9780465026562',
    listingIds: [
      '24680',
=======
    title: 'Moby Dick; Or, the Whale',
    subtitle: 'Moby-Dick: Or. the Whale',
    authors: [
      'Herman Melville',
    ],
    publishedDate: '2017-08-08',
    description: 'A good book.',
    industryIdentifiers: [
      {
        type: 'ISBN_10',
        identifier: '1974305031',
      },
      {
        type: 'ISBN_13',
        identifier: '9781974305032',
      }
>>>>>>> 9c7463e5e358cb20024635fa0be7de9c2c2da1e1
    ],
    readingModes: {
      text: false,
      image: false,
    },
    pageCount: 682,
    printType: 'BOOK',
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: false,
    contentVersion: 'preview-1.0.0',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    language: 'en',
    previewLink: 'http://books.google.com/books?id=olHntAEACAAJ&dq=isbn:9781974305032&hl=&cd=1&source=gbs_api',
    infoLink: 'http://books.google.com/books?id=olHntAEACAAJ&dq=isbn:9781974305032&hl=&source=gbs_api',
    canonicalVolumeLink: 'https://books.google.com/books/about/Moby_Dick_Or_the_Whale.html?hl=&id=olHntAEACAAJ',
    listingIds: ['24680mnopqr'],
  },
};

const LISTING_DATA = {
  '12345abcdef': {
    price: '20',
    condition: 'Good',
    bookId: '1234567890',
    userId: '116605684008269061128',
  },
  '67890ghijkl': {
    price: '30',
    condition: 'Excellent',
    bookId: '1234567890',
    userId: '116605684008269061128',
  },
  '24680mnopqr': {
    price: '15',
    condition: 'Okay',
    bookId: '9876543210',
    userId: '224695082308269061127',
  },
};

const USER_DATA = {
  '116605684008269061128': {
    googleId: '116605684008269061128',
    imageUrl: 'https://lh4.googleusercontent.com/-7VP72H9qeRI/AAAAAAAAAAI/AAAAAAAAAs4/UktKA1ggNuw/s96-c/photo.jpg',
    email: 'farmanrl@whitman.edu',
    name: 'Richard Farman',
    givenName: 'Richard',
    familyName: 'Farman',
    listingIds: [
      '12345abcdef',
      '67890ghijkl',
    ],
  },
  '224695082308269061127': {
    googleId: '224695082308269061127',
    imageUrl: 'https://lh4.googleusercontent.com/-7VP72H9qeRI/AAAAAAAAAAI/AAAAAAAAAs4/UktKA1ggNuw/s96-c/photo.jpg',
    email: 'otherperson@whitman.edu',
    name: 'Other Person',
    givenName: 'Other',
    familyName: 'Person',
    listingIds: [
      '24680mnopqr',
    ],
  },
  xx00xx: {
    name: 'Another Person',
    emailJ: 'anotherperson@whitman.edu',
    userId: 'xx00xx',
  },
};

const sampleData = {
  BOOK_DATA,
  LISTING_DATA,
  USER_DATA,
};

export default sampleData;
