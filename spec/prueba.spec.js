const { Activity, Repository } = require("../scripts/modulo.js");

describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});


// Pruebas para la clase Activity
describe("testing clase Activity", () => {
  it("debería tener todos los atributos", () => {
    const nuevaActivity = new Activity(1, "Test Title", "Test Description", "http://example.com/image.jpg"); // Corregido: Se pasaron argumentos para inicializar la instancia

    // Obteniendo las claves del objeto Activity
    const keys = Object.keys(nuevaActivity);

    // Comprobando que el objeto tiene 4 claves
    expect(keys.length).toBe(4);
    expect(keys).toContain("id");
    expect(keys).toContain("title");
    expect(keys).toContain("description");
    expect(keys).toContain("imgUrl");
  });
});

// Pruebas para la clase Repository
describe("testing clase Repository", () => {
  it("debería tener los atributos correspondientes", () => {
    const nuevoRepository = new Repository(); // Corregido: Usar directamente la clase Repository

    // Obteniendo las claves del objeto Repository
    const keys = Object.keys(nuevoRepository);

    // Comprobando que el objeto tiene 2 claves (activities e id)
    expect(keys.length).toBe(2); // Actualizado: Repository solo debería tener 2 propiedades por constructor
    expect(keys).toContain("activities");
    expect(keys).toContain("id");

    // Comprobando que las actividades están vacías al inicio
    expect(nuevoRepository.activities).toEqual([]);
    expect(nuevoRepository.id).toBe(1);
  });
});