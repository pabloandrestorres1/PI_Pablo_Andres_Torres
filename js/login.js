// Obtener la lista de usuarios registrados del localStorage
var usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

// Función para registrar un nuevo usuario
function registrarUsuario() {
    // Obtener los valores del formulario de registro
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Verificar si el correo electrónico ya está registrado
    var usuarioExistente = usuariosRegistrados.find(function (usuario) {
        return usuario.email === email;
    });

    if (usuarioExistente) {
        alert("Ya existe un usuario registrado con ese correo electrónico.");
        return;
    }

    // Agregar el nuevo usuario a la lista de usuarios registrados
    var nuevoUsuario = {
        nombre: nombre,
        email: email,
        password: password
    };
    usuariosRegistrados.push(nuevoUsuario);

    // Guardar la lista de usuarios registrados en el localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

    // Mostrar un mensaje de éxito y limpiar el formulario de registro
    alert("Usuario registrado exitosamente.");
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    // Redirigir al usuario a la página index
    window.location.href = '../html/login.html';
}

// Función para iniciar sesión
function iniciarSesion() {
    // Obtener los valores del formulario de inicio de sesión
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Buscar el usuario correspondiente al correo electrónico y contraseña ingresados
    var usuario = usuariosRegistrados.find(function (usuario) {
        return usuario.email === email && usuario.password === password;
    });

    // Guardar la lista de usuarios registrados en el localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario));


    if (usuario) {
        // Mostrar un mensaje de éxito y limpiar el formulario de inicio de sesión
        alert("Inicio de sesión exitoso.");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        // Redirigir al usuario a la página index
        window.location.href = '../html/user.html';
    } else {
        alert("El correo electrónico o la contraseña son incorrectos.");
    }
}

