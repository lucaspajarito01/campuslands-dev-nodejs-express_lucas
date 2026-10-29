import { listBooks, createBook } from "../services/books.service.js";

function getBooks(req, res) {
  res.status(200).json({ ok: true, data: listBooks() });
}

function postBook(req, res) {
  try {
    const book = createBook(req.body || {});
    res.status(201).json({ ok: true, data: book });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
}

export { getBooks, postBook };
