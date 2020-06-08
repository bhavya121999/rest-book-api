package com.idr.restbookapi.domain;

public class Book {
    private Long id;
    private String title;
    private String author;

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    private Double price;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCoverPhotoURL() {
        return coverPhotoURL;
    }

    public void setCoverPhotoURL(String coverPhotoURL) {
        this.coverPhotoURL = coverPhotoURL;
    }

    public Long getIsbnNumber() {
        return isbnNumber;
    }

    public void setIsbnNumber(Long isbnNumber) {
        this.isbnNumber = isbnNumber;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    private String coverPhotoURL;
    private Long isbnNumber;
    private String language;

}
