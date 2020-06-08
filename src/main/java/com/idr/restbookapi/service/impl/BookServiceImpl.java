package com.idr.restbookapi.service.impl;

import com.idr.restbookapi.domain.Book;
import com.idr.restbookapi.service.BookService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class BookServiceImpl implements BookService {

    private Long bookId=100L;
    private Map<Long,Book> bookMap=new HashMap<Long,Book>();

    {
        Book book=new Book();
        book.setId(bookId);
        book.setTitle("Heartland");
        book.setAuthor("Bhavya");

        book.setCoverPhotoURL("https://youtube.com");
        book.setIsbnNumber(167826L);
        book.setPrice(2776.00);
        book.setLanguage("English");
        bookMap.put(book.getId(),book);

    }

    @Override
    public Collection<Book> findAll() {
        return bookMap.values();
    }

    @Override
    public Book findById(Long id) {
        return bookMap.get(id);
    }

    @Override
    public Book save(Book book) {
        Long newBookId=++bookId;
        book.setId(newBookId);
        bookMap.put(book.getId(),book);

        return bookMap.get(newBookId);
    }

    @Override
    public Book update(Book book) {
        bookId = book.getId();
        if (bookMap.get(bookId) != null){
            bookMap.put(bookId, book);
        return bookMap.get(bookId);
    }
        return null;
    }

    @Override
    public Book deleteById(Long id) {
    if(bookMap.get(id) !=null) {
        return bookMap.remove(id);
    }
        return null;
    }
}
