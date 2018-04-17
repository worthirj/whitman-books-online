const BOOK_DATA = {
  1234567890: {
    title: 'To Kill a Mockingbird',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg',
    author: 'Harper Lee',
    ISBN: '9780061980268',
    listingIds: [
      '12345',
      '67890',
    ],
  },
  9876543210: {
    title: 'Gödel, Escher, Bach',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/512BblrQFqL._SX327_BO1,204,203,200_.jpg',
    author: 'Douglas Hofstadter',
    ISBN: '9780465026562',
    listingIds: [
      '24680',
    ],
  },
};

const LISTING_DATA = {
  12345: {
    price: '100',
    condition: 'Good',
    bookId: '1234567890',
    userId: 'a1s2d3',
  },
  67890: {
    price: '120',
    condition: 'Excellent',
    bookId: '1234567890',
    userId: 'a1s2d3',
  },
  24680: {
    price: '65',
    condition: 'Okay',
    bookId: '0987654321',
    userId: 'qw34rt',
  },
};

const USER_DATA = {
  a1s2d3: {
    name: 'Richard Farman',
    email: 'farmanrl@whitman.edu',
    userId: 'a1s2d3',
    listingIds: [
      '12345',
      '24680',
    ],
  },
  qw34rt: {
    name: 'Other Person',
    email: 'otherperson@whitman.edu',
    userId: 'qw34rt',
    listingIds: [
      24680,
    ]
  },
  xx00xx: {
    name: 'Another Person',
    emailJ: 'anotherperson@whitman.edu',
    userId: 'xx00xx',
  }
};

const sampleData = {
  BOOK_DATA,
  LISTING_DATA,
  USER_DATA,
};

export default sampleData;
