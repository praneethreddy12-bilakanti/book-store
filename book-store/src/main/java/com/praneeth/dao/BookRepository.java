package com.praneeth.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.praneeth.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
