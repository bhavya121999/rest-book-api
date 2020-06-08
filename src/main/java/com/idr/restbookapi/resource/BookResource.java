package com.idr.restbookapi.resource;


import com.idr.restbookapi.domain.Book;
import com.idr.restbookapi.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/books")
public class BookResource {
    @Autowired
    private BookService bookService;

    @GetMapping
    public Collection<Book> findAll() {
        return bookService.findAll();
    }

    @GetMapping("{id}")
    public Book findById(@PathVariable Long id) {
        return bookService.findById((id));
    }

   @PostMapping(consumes= MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Book save(@RequestBody Book book) {
        return bookService.save(book);
    }

    @PutMapping(consumes= MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Book update(@RequestBody Book book) {
        return bookService.update(book);
    }

    @DeleteMapping("{id}")
    public Book deleteById(@PathVariable Long id) {
        return bookService.findById(id);
    }
}
