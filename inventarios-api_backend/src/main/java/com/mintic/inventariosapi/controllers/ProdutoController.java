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

import com.mintic.inventariosapi.entity.Producto;
import com.mintic.inventariosapi.services.ProductoService;

@RestController
public class ProdutoController {

	@Autowired
	private ProductoService productoService;

	@CrossOrigin(origins = "*")
	@GetMapping(value = "/productos/{productoId}")
	public ResponseEntity<Producto> findById(@PathVariable("productoId") Long productoId) {
		Producto objProducto = productoService.findById(productoId);
		return new ResponseEntity<Producto>(objProducto, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "*")
	@DeleteMapping(value = "/productos/{productoId}")
	public ResponseEntity<Void> delete(@PathVariable("productoId") Long productoId) {
		productoService.delete(productoId);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "*")
	//@CrossOrigin(origins= "http://localhost:3000")
	@GetMapping(value = "/productos")
	public ResponseEntity<List<Producto>> findAll() {
		List<Producto> productos = productoService.findAll();
		return new ResponseEntity<List<Producto>>(productos, HttpStatus.OK);
	}

	@CrossOrigin(origins = "*")
	@PostMapping(value = "/productos")
	public ResponseEntity<Producto> create(@RequestBody Producto producto) {
		Producto nuevoProducto = productoService.create(producto);
		return new ResponseEntity<Producto>(nuevoProducto, HttpStatus.CREATED);
	}

	@CrossOrigin(origins = "*")
	@PutMapping(value = "/productos")
	public ResponseEntity<Producto> update(@RequestBody Producto producto) {
		Producto existeProducto = productoService.update(producto);
		return new ResponseEntity<Producto>(existeProducto, HttpStatus.OK);
	}

}
