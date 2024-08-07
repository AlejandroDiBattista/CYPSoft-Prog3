# Objetivo: Implementación de e-commerce

## Definicion.
- El sitio de debe permitir  a los *clientes* comprar uno o mas *productos* a uno o mas *proveedores*
 
- El sitio debe poder _registrar_ *usuarios*
- Los *proveedores* y los *clientes* tiene un *usuario* asociado
- Los *usuarios* pueden _cambiar la contraseña_
- Los *usuarios* pueden _recuperar la contraseña_
 
- Los *proveedores* tiene un catálogo de *productos*
- Los *proveedores* realizan los envios en forma independiente aun cuando la _compra_ haya sido hecha en conjunto
- Los *proveedores* pueden consultar el estado de los *envios perdientes* y realizar los mismos
- Los *proveedores* pueden ver la lista de *productos mas vendidos*
- Los *proveedores* pueden ver los _ingresos generados_ por sus ventas (deduciendo los envios)
- Los *proveedores* pueden sacar de actividad o poner cualquier *producto*
 
- Los *clientes* puede _agregar_ o _quitar_ *producto* de la *compra* mientra la misma esté _abierta_ 
- Los *clientes* siempre pueden abandonar la *compra* o rechazar un *envio*
- Los *clientes* pueder ver en cualquier momento el _estado de envio_
- Los *clientes* pueden ver el _listado de las compras realizadas_
 
- Las *compras* tiene un _costo de envio_ por proveedor
- Las *compras* superiores a monto tienen *envio* gratis
- Las *compras* deben realizar un unico _cobro_ que incluya todos los importes
 
- Los *productos* tiene un codigo, descripcion y precio y mantiene un _historial de movimientos_
- Los *productos* pueden indicar cuanto unidades tiene _disponible_
- El *movimiento* de un *producto* registra las acciones del *proveedor* y de los *clientes*
- El *proveedor* puede realizar *movimientos* de _ingreso_ o _egreso_ de unidades a un *producto*
- El *cliente* puede realizar *movimientos* por _compra_ o _devolucion_ de *productos*
 
- Los *proveedores* deben _enviar_ los *productos* de cada *compra*
- Los *movientos* del *cliente* pueden tener tres estados: comprado, entregado, devuelto.
- Los *proveedores* deben indicar el _envio_ de una *compra* e impactar en el *movimiento* correspondiente
 


## Modelos

---
### Usuario

#### Campos
- email
- contraseña
- ingreso
- token

#### Funciones
- Buscar por email                           | Usuario.buscarPorEmail(email)
- Registrar                                  | Usuario.registrar(email, contraseña)
- Ingresar                                   | Usuario.ingresar(email, contaseña)
- Salir                                      | usuario.salir()
- Recuperar contraseña                       | Usuario.recuperarContraseña(email)
- Cambiar contraseña                         | Usuario.cambiarContaseña(token, contraseña)              
- Revisar estado de ingreso                  | usuario.estaIngresado()    

---
### Cliente

#### Campos
- usuario
- nombre y apellido
- domicilio
- numero de tarjeta de credito

#### Funciones
- crear cliente                                 | Cliente.crear(usuario, nombre)
- cambiar datos personales                      | cliente.cambiar(nombre, domicio, tarjeta)
- iniciar compra                                | Compra.comenzar(cliente)
- compra actual                                 | cliente.compraActual
- agregar producto a la compra                  | cliente.agregar(producto)
- quitar producto de la compra                  | cliente.quitar(producto)
- cancelar compra                               | cliente.cancelar()
- devolver compra                               | cliente.devolver()
- total comprado                                | cliente.totalComprado()
---
### Proveedor

#### Campos
- usuario
- nombre
- cuit
- [ Productos ]

#### Funciones
- agregar productos                             | proveedor.agregar(producto)
- activar/desactivar productos                  | proveedor.activar(producto, activo)
- ingresar unidades a productos                 | proveedor.ingresar(producto, unidad)
- quitar unidades a productos                   | proveedor.quitar(producto, unidad)
- enviar compra                                 | proveedor.enviar(compra)
- ver listado de productos activos              | proveedor.listaProductoActivos()
- ver listado de envios pendientes              | proveedor.listaEnviosPendientes()
- ver listado de los productos mas vendidos     | proveedor.listaProcutosMasVendido()
- ingresos                                      | proveedor.totalIngreso


---
### Productos

#### Campos 
- codigo
- descripcion
- precio
- existencia
- [ Movimientos ]

#### Funciones
- crear producto                                | Producto.crear(codigo, descripcion)
- cambiar precio                                | producto.cambiar(precio)
- agregar producto                              | producto.agregar(unidades)
- quitar producto                               | producto.quitar(unidades)
- reservar compra                               | producto.reservar(compra)
- confirmar compra                              | producto.confirmar(compra)
- cancelar compra                               | producto.cancelar(compra)
- existencia disponible                         | producto.disponible

---
### Movimiento 

#### Campos
- producto
- compra
- fecha
- unidades
- tipo: [ingreso, egreso, compra, enviado, devuelto]

#### Funciones
- agregar producto                              | producto.agregar(unidades)
- quitar producto                               | producto.quitar(unidades)
- comprar                                       | producto.comprar(compra)
- enviar                                        | producto.enviar(compra)
- cancelar                                      | producto.cancelar(compra)
- listar productos disponibles                  | Producto.listarDisponible()

---
### Compra

#### Campos
- cliente
- [ Pedidos ]
- total importe
- total envio
- domicilio
- tarjeta

#### Funciones
- crear                                         | Compra.crear(cliente)
- agregar productos                             | compra.agregar(producto)
- quitar productos                              | compra.quitar(producto)
- confirmar compra                              | compra.confirmar()
- cancelar compra                               | compra.cancelar()

