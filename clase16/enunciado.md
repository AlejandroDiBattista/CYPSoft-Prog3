# Gestión de Usuario

En el marco del desarrollo de un sitio de comercio electrónico debemos implementar la funcionalidad de los usuarios con MongoDB usando Mongoose


## Modelo
- User
    - email             (unico)
    - password          (entre 4 y 8 letras)
    - lastLoginAt       (fecha)
    - loginExpiration   (10 minutos)
    - tokenReset        (10 digitos al azar)
    - resetExpiration   (15 minutes)


## Funcionalidad

- **User.register(email, password) : user**
    * Registra un nuevo usuario verificando que el email sea unico y la contraseña lo suficientemente compleja

- **User.logIn(email, password) : user**
    * Verifica credenciales y registra el ingreso

- **user.logOut()**
    * Cierra la sesión del usuario actual

- **user.isLoggedIn : bool**
    * Averigua si el usuario esta en sesión (cada vez que se consulta extiende el tiempo de session 10 minutos)

- **User.reset(email) : user**
    * Marca que el usuario va a cambiar la contraseña usando un token temporal (15 minutos).

- **User.changePassword(token, email)**
    * Cambia la contraseña asociada al token (en el plazo dado)

Nota: Cuando hay un error en alguna de la funciones se debe gestionar mediante excepción