package com.mintic.inventariosapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mintic.inventariosapi.entity.Producto;

@Repository
public interface ProductoRepository  extends JpaRepository<Producto, Long>{

}
