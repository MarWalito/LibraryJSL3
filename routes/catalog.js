const express = require("express");
const router = express.Router();
// Require controller modules.
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
/// BOOK ROUTES ///
// GET catalog home page.
router.get("/", book_controller.index);
// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/book/create", book_controller.book_create_get);
// POST request for creating Book.
router.post("/book/create", book_controller.book_create_post);
// GET request to delete Book.
router.get("/book/:id/delete", book_controller.book_delete_get);
// POST request to delete Book.
router.post("/book/:id/delete", book_controller.book_delete_post);
// GET request to update Book.
router.get("/book/:id/update", book_controller.book_update_get);
// POST request to update Book.
router.post("/book/:id/update", book_controller.book_update_post);
// GET request for one Book.
router.get("/book/:id", book_controller.book_detail);
// GET request for list of all Book items.
router.get("/books", book_controller.book_list);
/// AUTHOR ROUTES ///
// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/author/create", author_controller.author_create_get);
// POST request for creating Author.
router.post("/author/create", author_controller.author_create_post);
// GET request to delete Author.
router.get("/author/:id/delete", author_controller.author_delete_get);
// POST request to delete Author.
router.post("/author/:id/delete", author_controller.author_delete_post);
// GET request to update Author.
router.get("/author/:id/update", author_controller.author_update_get);
// POST request to update Author.
router.post("/author/:id/update", author_controller.author_update_post);
// GET request for one Author.
router.get("/author/:id", author_controller.author_detail);
// GET request for list of all Authors.
router.get("/authors", author_controller.author_list);
/// GENRE ROUTES ///
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
module.exports = router;
