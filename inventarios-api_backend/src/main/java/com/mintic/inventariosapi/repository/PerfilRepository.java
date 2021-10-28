package com.mintic.inventariosapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mintic.inventariosapi.entity.Perfil;

@Repository
public interface PerfilRepository  extends JpaRepository<Perfil, Long>{

}
