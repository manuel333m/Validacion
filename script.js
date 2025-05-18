document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('validationForm');
    const usuarioInput = document.getElementById('usuario');
    const correoInput = document.getElementById('correo');
    const telefonoInput = document.getElementById('telefono');
    const contrasenaInput = document.getElementById('contrasena');
    const confirmarContrasenaInput = document.getElementById('confirmarContrasena');

    const usuarioError = document.getElementById('usuarioError');
    const correoError = document.getElementById('correoError');
    const telefonoError = document.getElementById('telefonoError');
    const contrasenaError = document.getElementById('contrasenaError');
    const confirmarContrasenaError = document.getElementById('confirmarContrasenaError');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Validación del usuario (al menos una letra y un número)
        const usuarioRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
        if (!usuarioRegex.test(usuarioInput.value.trim())) {
            usuarioInput.classList.add('error');
            usuarioError.textContent = 'Debe tener al menos una letra y un número.';
            isValid = false;
        } else {
            usuarioInput.classList.remove('error');
            usuarioError.textContent = '';
        }

        // Validación del correo electrónico
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegex.test(correoInput.value.trim())) {
            correoInput.classList.add('error');
            correoError.textContent = 'Tiene que ser un correo valido.';
            isValid = false;
        } else {
            correoInput.classList.remove('error');
            correoError.textContent = '';
        }
        

        // Validación del número de teléfono (solo números)
        
        const telefonoRegex = /^[0-9]+$/;
        if (!telefonoRegex.test(telefonoInput.value.trim())) {
            telefonoInput.classList.add('error');
            telefonoError.textContent = 'Debe ingresar un numero valido.';
            isValid = false;
        } else {
            telefonoInput.classList.remove('error');
            telefonoError.textContent = '';
        }

        // Validación de la contraseña (mínimo 6 caracteres)
        if (contrasenaInput.value.trim() === '' || contrasenaInput.value.length < 6) {
            contrasenaInput.classList.add('error');
            contrasenaError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            isValid = false;
        } else {
            contrasenaInput.classList.remove('error');
            contrasenaError.textContent = '';
        }

        // Validación de la confirmación de la contraseña
        if (confirmarContrasenaInput.value !== contrasenaInput.value) {
            confirmarContrasenaInput.classList.add('error');
            confirmarContrasenaError.textContent = 'Las contraseñas no coinciden.';
            isValid = false;
        } else {
            confirmarContrasenaInput.classList.remove('error');
            confirmarContrasenaError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});