interface Book {
  id: number
  filename: string
  bookName: string
  uploadedAt: string
}

type BookList = Book[]

export type { Book, BookList }
