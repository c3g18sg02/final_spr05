package com.mintic.inventariosapi.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="productos")
public class Producto {

	@Id
	@Column(name="id", nullable = false, length =20, unique = true)
		private Long id;
	
	@Column(name="categoria", nullable = true, length = 50)
	private String categoria;

	@Column(name="codigo_fabricante", nullable = true, length = 50)
	private String codigo_fabricante;

	@Column(name="costo", nullable = true)
	private Long  costo;
	
	@Column(name="costo_ant", nullable = true)
	private Long  costo_ant;
	
	@Column(name="descripcion", nullable = true, columnDefinition="Text")
	private String descripcion;
	
	
	@Column(name="estado", nullable = true, length = 10)
	private String estado;

	@Column(name="garantia_cliente", nullable = true)
	private Long garantia_cliente;
	
	@Column(name="garantia_proveedor", nullable = true)
	private Long garantia_proveedor;
	
	@Column(name="marca", nullable = true, length = 20)
	private String marca;
	
	@Column(name="nombre", nullable = true, length = 60)
	private String nombre;
		
	@Column(name="por_descuento", nullable = true)
	private Long por_descuento;

	@Column(name="precio_venta", nullable = true)
	private Long  precio_venta;
	
	@Column(name="stock_minimo", nullable = true)
	private Integer stock_minimo;
	
	@Column(name="fecha_creacion", nullable = true)
	private Date fecha_creacion;
	
		
	public Producto() {
		
	}
}

