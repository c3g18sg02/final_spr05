package com.mintic.inventariosapi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mintic.inventariosapi.entity.Producto;
import com.mintic.inventariosapi.repository.ProductoRepository;
import com.mintic.inventariosapi.validators.ProductoValidator;

@Service
public class ProductoService {
	
	@Autowired
	private ProductoRepository productoRepo;

	public Producto findById(Long productoId) {
		Producto objProducto = productoRepo.findById(productoId)
				.orElseThrow(() -> new RuntimeException("No existe el producto."));
		return objProducto;
	}

	@Transactional
	public void delete(Long productoId) {
		Producto objProducto = productoRepo.findById(productoId)
				.orElseThrow(() -> new RuntimeException("No existe el producto."));

		productoRepo.delete(objProducto);
	}

	public List<Producto> findAll() {
		List<Producto> producto = productoRepo.findAll();
		return producto;
	}

	@Transactional
	public Producto create(Producto producto) {
		ProductoValidator.save(producto);
		
		Producto nuevoProducto = productoRepo.save(producto);
		return nuevoProducto;
	}

	@Transactional
	public Producto update(Producto producto) {
		Producto existeProducto = productoRepo.findById(producto.getId())
				.orElseThrow(() -> new RuntimeException("No existe el producto."));
		
		existeProducto.setNombre(producto.getNombre());
		productoRepo.save(existeProducto);
		return existeProducto;
	}
}
