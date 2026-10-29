const books = [
  { id: 1, title: "Cien anios de soledad", author: "Gabriel Garcia Marquez" },
];
let nextId = 2;

function listBooks() {
  return books;
}

function createBook({ title, author }) {
  if (!title || typeof title !== "string" || !title.trim()) {
    throw new Error("title es obligatorio");
  }
  if (!author || typeof author !== "string" || !author.trim()) {
    throw new Error("author es obligatorio");
  }

  const created = { id: nextId++, title: title.trim(), author: author.trim() };
  books.push(created);
  return created;
}

export { listBooks, createBook };
