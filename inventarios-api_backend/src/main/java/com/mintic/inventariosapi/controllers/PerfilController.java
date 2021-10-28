package com.mintic.inventariosapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mintic.inventariosapi.entity.Perfil;
import com.mintic.inventariosapi.services.PerfilService;

@RestController
public class PerfilController {

	@Autowired
	private PerfilService perfilService;

	@CrossOrigin(origins = "*")
	@GetMapping(value = "/perfiles/{perfilId}")
	public ResponseEntity<Perfil> findById(@PathVariable("perfilId") Long perfilId) {
		Perfil objPerfil = perfilService.findById(perfilId);
		return new ResponseEntity<Perfil>(objPerfil, HttpStatus.OK);
	}

	@CrossOrigin(origins = "*")
	@DeleteMapping(value = "/perfiles/{perfilId}")
	public ResponseEntity<Void> delete(@PathVariable("perfilId") Long perfilId) {
		perfilService.delete(perfilId);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	//@CrossOrigin(origins = "http://localhost:3000")
	@CrossOrigin(origins = "*")
	@GetMapping(value = "/perfiles")
	public ResponseEntity<List<Perfil>> findAll() {
		List<Perfil> perfiles = perfilService.findAll();
		return new ResponseEntity<List<Perfil>>(perfiles, HttpStatus.OK);
	}

	@CrossOrigin(origins = "*")
	@PostMapping(value = "/perfiles")
	public ResponseEntity<Perfil> create(@RequestBody Perfil perfil) {
		Perfil nuevoPerfil = perfilService.create(perfil);
		return new ResponseEntity<Perfil>(nuevoPerfil, HttpStatus.CREATED);
	}
	@CrossOrigin(origins = "*")
	@PutMapping(value = "/perfiles")
	public ResponseEntity<Perfil> update(@RequestBody Perfil perfil) {
		Perfil existePerfil = perfilService.update(perfil);
		return new ResponseEntity<Perfil>(existePerfil, HttpStatus.OK);
	}

}
