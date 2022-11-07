export const books = [
  {
    _id: "BN001",
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbnNo: "987654321",
    genre: "Novel",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNz5c05Xs_fMpEvb2vwQA6JlwMtOpiCoJ7Cw&usqp=CAU",
    copies: 2,
  },
  {
    _id: "BN002",
    title: "Two States",
    author: "Chetan Bhagat",
    isbnNo: "87654321112",
    genre: "Fiction",
    img: "https://64.media.tumblr.com/c75051d27504c9b3ce197ca407eed6cd/3f2e9066449de0e5-5a/s640x960/6b42f995ee48d977d5b4fdefd1cc2ae4cbab9a41.jpg",
    copies: 0,
  },
  {
    _id: "BN003",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    isbnNo: "9876543223",
    genre: "Fiction",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpR9zkWaQEF-F_6Ywl4Zvqnv3jPR630f6hGWK9tt7GhEc1eYeMIALbbJH-30Q0EeTGRU&usqp=CAU",
    copies: 3,
  },
  {
    _id: "BN004",
    title: "Attitude Is Everything",
    author: "Jeff Keller",
    isbnNo: "987654321",
    genre: "Non-Fiction",
    img: "data:image/png;base64,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",
    copies: 2,
  },
  {
    _id: "BN005",
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbnNo: "987654321",
    genre: "Novel",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNz5c05Xs_fMpEvb2vwQA6JlwMtOpiCoJ7Cw&usqp=CAU",
    copies: 6,
  },
  {
    _id: "BN006",
    title: "Two States",
    author: "Chetan Bhagat",
    isbnNo: "98765432",
    genre: "Fiction",
    img: "https://64.media.tumblr.com/c75051d27504c9b3ce197ca407eed6cd/3f2e9066449de0e5-5a/s640x960/6b42f995ee48d977d5b4fdefd1cc2ae4cbab9a41.jpg",
    copies: 8,
  },
  {
    _id: "BN007",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    isbnNo: "98765432",
    genre: "Fiction",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpR9zkWaQEF-F_6Ywl4Zvqnv3jPR630f6hGWK9tt7GhEc1eYeMIALbbJH-30Q0EeTGRU&usqp=CAU",
    copies: 4,
  },
  {
    _id: "BN008",
    title: "Attitude Is Everything",
    author: "Jeff Keller",
    isbnNo: "98765432",
    genre: "Non-Fiction",
    img: "data:image/png;base64,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",
    copies: 8,
  },
  {
    _id: "BN009",
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbnNo: "98765432",
    genre: "Novel",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNz5c05Xs_fMpEvb2vwQA6JlwMtOpiCoJ7Cw&usqp=CAU",
    copies: 10,
  },
  {
    _id: "BN010",
    title: "Two States",
    author: "Chetan Bhagat",
    isbnNo: "987654321",
    genre: "Fiction",
    img: "https://64.media.tumblr.com/c75051d27504c9b3ce197ca407eed6cd/3f2e9066449de0e5-5a/s640x960/6b42f995ee48d977d5b4fdefd1cc2ae4cbab9a41.jpg",
    copies: 0,
  },
  {
    _id: "BN011",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    isbnNo: "987654321",
    genre: "Fiction",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpR9zkWaQEF-F_6Ywl4Zvqnv3jPR630f6hGWK9tt7GhEc1eYeMIALbbJH-30Q0EeTGRU&usqp=CAU",
    copies: 9,
  },
  {
    _id: "BN012",
    title: "Attitude Is Everything",
    author: "Jeff Keller",
    isbnNo: "98765432",
    genre: "Non-Fiction",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpR9zkWaQEF-F_6Ywl4Zvqnv3jPR630f6hGWK9tt7GhEc1eYeMIALbbJH-30Q0EeTGRU&usqp=CAU",
    copies: 0,
  },
];

export const users = [
  {
    _id: "UN001",
    name: "Siva",
    email: "siva@gmail.com",
    dob: "09-10-1998",
    createdAt: "05-11-2022",
  },
  {
    _id: "UN002",
    name: "Amith",
    email: "amith@gmail.com",
    dob: "19-01-1997",
    createdAt: "05-11-2022",
  },
  {
    _id: "UN003",
    name: "Gautham",
    email: "gautham@gmail.com",
    dob: "09-02-1999",
    createdAt: "05-11-2022",
  },
  {
    _id: "UN004",
    name: "Mithra",
    email: "mithra@gmail.com",
    dob: "24-05-2002",
    createdAt: "05-11-2022",
  },
  {
    _id: "UN005",
    name: "Manasi",
    email: "manasi@gmail.com",
    dob: "12-10-2000",
    createdAt: "05-11-2022",
  },
  {
    _id: "UN006",
    name: "Malu",
    email: "malu@gmail.com",
    dob: "07-10-1996",
    createdAt: "05-11-2022",
  },
];

export const allOrders = [
  {
    _id: "OD001",
    userId: "UN001",
    bookId: "BN001",
    date: "05-11-2022",
    expiry: "19-11-2022",
    returnDate: "12-11-2022",
  },
  {
    _id: "OD002",
    userId: "UN001",
    bookId: "BN002",
    date: "06-11-2022",
    expiry: "19-11-2022",
    returnDate: "15-11-2022",
  },
  {
    _id: "OD003",
    userId: "UN002",
    bookId: "BN003",
    date: "07-11-2022",
    expiry: "19-11-2022",
    returnDate: "17-11-2022",
  },
  {
    _id: "OD004",
    userId: "UN004",
    bookId: "BN004",
    date: "08-11-2022",
    expiry: "19-11-2022",
    returnDate: "13-11-2022",
  },
  {
    _id: "OD005",
    userId: "UN007",
    bookId: "BN005",
    date: "09-11-2022",
    expiry: "19-11-2022",
    returnDate: "11-11-2022",
  },
  {
    _id: "OD006",
    userId: "UN004",
    bookId: "BN006",
    date: "10-11-2022",
    expiry: "19-11-2022",
    returnDate: "10-11-2022",
  },
];

export const adminOrderHeaders = [
  "OrderId",
  "UserId",
  "BookId",
  "Date taken",
  "Return date",
];

export const adminOrderBody = ["userId", "bookId", "date", "returnDate"];

export const adminUserHeaders = [
  "UserId",
  "Name",
  "Email",
  "Date of birth",
  "Joined at",
];

export const adminUserBody = ["name", "email", "dob", "createdAt"];

export const adminBookHeaders = [
  "BookId",
  "Title",
  "Author",
  "Genre",
  "ISBN No",
  "Copies Available",
];

export const adminBookBody = ["title", "author", "genre", "isbnNo", "copies"];

export const orders = [
  {
    _id: "OD001",
    bookId: "BN001",
    date: "05-11-2022",
    expiry: "19-11-2022",
    returnDate: "12-11-2022",
  },
  {
    _id: "OD002",
    bookId: "BN002",
    date: "06-11-2022",
    expiry: "19-11-2022",
    returnDate: "15-11-2022",
  },
  {
    _id: "OD003",
    bookId: "BN003",
    date: "07-11-2022",
    expiry: "19-11-2022",
    returnDate: "17-11-2022",
  },
];
