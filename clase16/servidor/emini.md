# eMini

- Objetivo: Implementar un sitio de comercio electronico completo usando MERN

- Funcionalidad:
    * Gestión de usuarios
        * Crear usuario
        * Ingresar
        * Salir
        * Recuperar Contraseña
        * Ingresar nueva contraseña

    * Gestion de productos
        * ABM de productos
        * Agregar Producto
        * Vender producto
        * Ver historial de ventas
        * Listar productos (ordenados)
        * Buscar productos 

    * Gestion de cliente
        * ABM de cliente
        * Listar compras pendientes
        * Listar compras completas
        * Anular compras canceladas

    * Gestion de vendedor
        * ABM de vendedor
        * Listar existencias
        * Listar compras pendientes
        * Listar compras canceladas
        * Listar compras completas

    * Gestion de compra
        * Agregar producto a la compra
        * Eliminar producto a la compra
        * Confirmar compra
        * Cancelar compra

    # Modelos

    * Producto
        - codigo
        - descripcion
        - precio
        - vendedor
        - clasificacion
        - imagen
        - activo
        - movimientos
            - fecha
            - cantidad

    * Usuario
        * usuario
        * password
        * email

    * Cliente
        - usuario
        - nombre
        - domicilio

    * Vendedor
        - usuario
        - empresa
        - domicilio

    * Venta
        - usuario
        - productos
            - codigo
            - cantidad
            - precio
        - estado {'comprando','pendiente','enviando','entregado', 'cancelado'}

    # Funciones
        * Producto
            - agregar
            - modificar
            - borrar
    

