package com.praneeth.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.praneeth.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
