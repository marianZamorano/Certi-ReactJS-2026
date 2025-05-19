## Alias y valores por defecto
Dado el siguiente objeto:

```
const empleado = {
  id: 501,
  nombre: "Camila",
  cargo: "Analista de Datos"
};
```

Usa desestructuración para extraer:
nombre (con alias nombreEmpleado)
cargo
departamento con valor por defecto "Sin asignar"

## Desestructuración anidada

```
const pedido = {
  cliente: {
    nombre: "Luis",
    contacto: {
      telefono: "77777777",
      email: "luis@example.com"
    }
  },
  productos: ["monitor", "teclado"]
};
```

Extrae nombre, telefono y el segundo producto del array productos.

Resultado esperado: Mostrar los tres datos por separado.

## Desestructuración en arrays de objetos

```
const cursos = [
  { codigo: "JS01", nombre: "JavaScript Avanzado", duracion: "8 semanas" },
  { codigo: "DB01", nombre: "Bases de Datos", duracion: "6 semanas" }
];
```

Extrae el nombre del primer curso y la duracion del segundo usando desestructuración.

## Construcción de objeto con spread

```
const baseUsuario = {
  nombre: "Daniel",
  email: "daniel@example.com"
};
```
Crea una función crearUsuarioActivo que tome un objeto base y retorne uno nuevo con:
Todas las propiedades originales
Una propiedad activo: true
Un campo createdAt con la fecha actual

## Construcción dinámica de objeto a partir de desestructuración parcial

```
const entrada = {
  usuario: "Paula",
  rol: "admin",
  sesion: {
    token: "abc123",
    expiraEn: "1h"
  }
};
```

Construye un nuevo objeto reporteSesion que tenga:
usuario
rol
token
expiraEn

