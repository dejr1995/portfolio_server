const express = require("express");
const routes = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* LEFT */
routes.get("/col_left", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM column_left", (err, result) => {
      if (err) {
        console.error("Error al obtener personas: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json(result);
      }
    });
  });
});

routes.get("/col_left/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    conn.query(
      "SELECT * FROM column_left WHERE id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error al obtener persona por ID: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          if (result.length > 0) {
            res.status(200).json(result[0]);
          } else {
            res.status(404).json({ error: "Persona no encontrada" });
          }
        }
      }
    );
  });
});

routes.post("/col_left", (req, res) => {
  req.getConnection((err, conn) => {
    const {
      id,
      urlvideo,
      title,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      urlopen,
      urlgithub,
      urlprototype,
      type,
    } = req.body;
    conn.query(
      "INSERT INTO column_left (id, urlvideo, title, skill1, skill2, skill3, skill4, skill5, urlopen, urlgithub, urlprototype, type) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?)",
      [
        id,
        urlvideo,
        title,
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        urlopen,
        urlgithub,
        urlprototype,
        type,
      ],
      (err, result) => {
        if (err) {
          console.error("Error al agregar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res.status(200).json({ message: "Persona agregada correctamente" });
        }
      }
    );
  });
});

routes.delete("/col_left/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    if (err) return res.send(err);
    conn.query("DELETE FROM column_left WHERE id = ?", [id], (err, result) => {
      if (err) {
        console.error("Error al eliminar persona: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json({ message: "Persona eliminada correctamente" });
      }
    });
  });
});

routes.put("/col_left/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE column_left set ? WHERE id = ?",
      [req.body, req.params.id],
      (err, result) => {
        if (err) {
          console.error("Error al actualizar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res
            .status(200)
            .json({ message: "Persona actualizada correctamente" });
        }
      }
    );
  });
});
/* LEFT */

/* CENTER */
routes.get("/col_center", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM column_center", (err, result) => {
      if (err) {
        console.error("Error al obtener personas: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json(result);
      }
    });
  });
});

routes.get("/col_center/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    conn.query(
      "SELECT * FROM column_center WHERE id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error al obtener persona por ID: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          if (result.length > 0) {
            res.status(200).json(result[0]);
          } else {
            res.status(404).json({ error: "Persona no encontrada" });
          }
        }
      }
    );
  });
});

routes.post("/col_center", (req, res) => {
  req.getConnection((err, conn) => {
    const {
      id,
      urlvideo,
      title,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      urlopen,
      urlgithub,
      urlprototype,
      type,
    } = req.body;
    conn.query(
      "INSERT INTO column_center (id, urlvideo, title, skill1, skill2, skill3, skill4, skill5, urlopen, urlgithub, urlprototype, type) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?)",
      [
        id,
        urlvideo,
        title,
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        urlopen,
        urlgithub,
        urlprototype,
        type,
      ],
      (err, result) => {
        if (err) {
          console.error("Error al agregar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res.status(200).json({ message: "Persona agregada correctamente" });
        }
      }
    );
  });
});

routes.delete("/col_center/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM column_center WHERE id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error al eliminar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res.status(200).json({ message: "Persona eliminada correctamente" });
        }
      }
    );
  });
});

routes.put("/col_center/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE column_center set ? WHERE id = ?",
      [req.body, req.params.id],
      (err, result) => {
        if (err) {
          console.error("Error al actualizar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res
            .status(200)
            .json({ message: "Persona actualizada correctamente" });
        }
      }
    );
  });
});
/* CENTER */

/* RIGHT */
routes.get("/col_right", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM column_right", (err, result) => {
      if (err) {
        console.error("Error al obtener personas: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json(result);
      }
    });
  });
});

routes.get("/col_right/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    conn.query(
      "SELECT * FROM column_right WHERE id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error al obtener persona por ID: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          if (result.length > 0) {
            res.status(200).json(result[0]);
          } else {
            res.status(404).json({ error: "Persona no encontrada" });
          }
        }
      }
    );
  });
});

routes.post("/col_right", (req, res) => {
  req.getConnection((err, conn) => {
    const {
      id,
      urlvideo,
      title,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      urlopen,
      urlgithub,
      urlprototype,
      type,
    } = req.body;
    conn.query(
      "INSERT INTO column_right (id, urlvideo, title, skill1, skill2, skill3, skill4, skill5, urlopen, urlgithub, urlprototype, type) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?)",
      [
        id,
        urlvideo,
        title,
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        urlopen,
        urlgithub,
        urlprototype,
        type,
      ],
      (err, result) => {
        if (err) {
          console.error("Error al agregar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res.status(200).json({ message: "Persona agregada correctamente" });
        }
      }
    );
  });
});

routes.delete("/col_right/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    if (err) return res.send(err);
    conn.query("DELETE FROM column_right WHERE id = ?", [id], (err, result) => {
      if (err) {
        console.error("Error al eliminar persona: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json({ message: "Persona eliminada correctamente" });
      }
    });
  });
});

routes.put("/col_right/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE column_right set ? WHERE id = ?",
      [req.body, req.params.id],
      (err, result) => {
        if (err) {
          console.error("Error al actualizar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res
            .status(200)
            .json({ message: "Persona actualizada correctamente" });
        }
      }
    );
  });
});
/* RIGHT */

routes.get("/image", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM gallery", (err, result) => {
      if (err) {
        console.error("Error al obtener personas: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json(result);
      }
    });
  });
});

routes.get("/image/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    conn.query(
      "SELECT * FROM gallery WHERE id = ?",
      [id],
      (err, result) => {
        if (err) {
          console.error("Error al obtener persona por ID: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          if (result.length > 0) {
            res.status(200).json(result[0]);
          } else {
            res.status(404).json({ error: "Persona no encontrada" });
          }
        }
      }
    );
  });
});

routes.post("/image", (req, res) => {
  req.getConnection((err, conn) => {
    const {
      id,
      urlimage,
    } = req.body;
    conn.query(
      "INSERT INTO gallery (id, urlimage) VALUES (?, ?)",
      [
        id,
        urlimage,
      ],
      (err, result) => {
        if (err) {
          console.error("Error al agregar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res.status(200).json({ message: "Persona agregada correctamente" });
        }
      }
    );
  });
});

routes.delete("/image/:id", (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    if (err) return res.send(err);
    conn.query("DELETE FROM gallery WHERE id = ?", [id], (err, result) => {
      if (err) {
        console.error("Error al eliminar persona: " + err.message);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.status(200).json({ message: "Persona eliminada correctamente" });
      }
    });
  });
});

routes.put("/image/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE gallery set ? WHERE id = ?",
      [req.body, req.params.id],
      (err, result) => {
        if (err) {
          console.error("Error al actualizar persona: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res
            .status(200)
            .json({ message: "Persona actualizada correctamente" });
        }
      }
    );
  });
});

routes.get("/image/rand", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "SELECT * FROM gallery ORDER BY RAND() LIMIT 5",
      (err, result) => {
        if (err) {
          console.error("Error al obtener personas: " + err.message);
          res.status(500).json({ error: "Error en el servidor" });
        } else {
          res.status(200).json(result);
        }
      }
    );
  });
});

/****************************************************** */
// Ruta para registrar un usuario

routes.post("/register", (req, res) => {
  req.getConnection((err, conn) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    conn.query(sql, [username, hashedPassword], (err) => {
      if (err) {
        console.error("Error al registrar usuario: ", err);
        res.status(500).send("Error al registrar usuario");
        return;
      }
      res.status(201).send("Usuario registrado exitosamente");
    });
  });
});

// Endpoint para autenticación de usuario
// ...

routes.post("/login", (req, res) => {
  req.getConnection((err, conn) => {
    const { username, password } = req.body;

    const sqlSelect = "SELECT * FROM users WHERE username = ?";
    const sqlUpdateAttempts =
      "UPDATE users SET login_attempts = login_attempts + 1 WHERE username = ?";
    const sqlUpdateCode =
      "UPDATE users SET verification_code = ? WHERE username = ?";

    conn.query(sqlSelect, [username], (err, results) => {
      if (err) {
        console.error("Error al autenticar usuario: ", err);
        res.status(500).send("Error al autenticar usuario");
        return;
      }

      if (results.length === 0) {
        res.status(401).send("Nombre de usuario o contraseña incorrectos");
        return;
      }

      const user = results[0];
      const passwordMatch = bcrypt.compareSync(password, user.password);

      if (!passwordMatch) {
        // Verificar el número de intentos fallidos
        if (user.login_attempts >= 3) {
          // Cambiar 2 a la cantidad de intentos permitidos
          res
            .status(401)
            .send(
              "Demasiados intentos fallidos. Se requiere código de verificación."
            );
        } else {
          // Incrementar el número de intentos fallidos solo si no se ha alcanzado el límite
          if (user.login_attempts + 1 < 3) {
            // Cambiar 2 a la cantidad de intentos permitidos antes de generar el código
            conn.query(sqlUpdateAttempts, [username], (err) => {
              if (err) {
                console.error(
                  "Error al incrementar los intentos fallidos: ",
                  err
                );
                res.status(500).send("Error al autenticar usuario");
                return;
              }
            });
          }

          // Verificar si se alcanzó el límite de intentos
          if (user.login_attempts + 1 >= 3) {
            // Cambiar 2 a la cantidad de intentos permitidos antes de generar el código
            // Generar y guardar un código de verificación aleatorio
            const verificationCode = generateRandomCode();
            conn.query(sqlUpdateCode, [verificationCode, username], (err) => {
              if (err) {
                console.error(
                  "Error al guardar el código de verificación: ",
                  err
                );
                res.status(500).send("Error al autenticar usuario");
                return;
              }

              res
                .status(401)
                .send(
                  "Demasiados intentos fallidos. Se requiere código de verificación."
                );
            });
          } else {
            res.status(401).send("Nombre de usuario o contraseña incorrectos");
          }
        }
      } else {
        // Restablecer el número de intentos fallidos
        const sqlResetAttempts =
          "UPDATE users SET login_attempts = 0 WHERE username = ?";
        conn.query(sqlResetAttempts, [username], (err) => {
          if (err) {
            console.error("Error al restablecer los intentos fallidos: ", err);
            res.status(500).send("Error al autenticar usuario");
            return;
          }

          // Reiniciar el código de verificación
          conn.query(sqlUpdateCode, [null, username], (err) => {
            if (err) {
              console.error(
                "Error al reiniciar el código de verificación: ",
                err
              );
              res.status(500).send("Error al autenticar usuario");
              return;
            }

            // Generar y guardar un token de acceso JWT
            const token = jwt.sign({ id: user.id }, "secreto", {
              expiresIn: "1h",
            });
            res.status(200).json({ token });
          });
        });
      }
    });
  });
});

// ...

// Endpoint para verificar el código de verificación
routes.post("/verify-code", (req, res) => {
  req.getConnection((err, conn) => {
    const { username, code, newPassword } = req.body;

    const sqlSelect =
      "SELECT * FROM users WHERE username = ? AND verification_code = ?";
    const sqlUpdatePassword =
      "UPDATE users SET password = ?, verification_code = NULL WHERE username = ?";

    conn.query(sqlSelect, [username, code], (err, results) => {
      if (err) {
        console.error("Error al verificar el código de verificación: ", err);
        res.status(500).send("Error al verificar el código de verificación");
        return;
      }

      if (results.length === 0) {
        res.status(401).send("Código de verificación incorrecto");
        return;
      }

      // Actualizar la contraseña y eliminar el código de verificación
      const hashedPassword = bcrypt.hashSync(newPassword, 10);
      conn.query(sqlUpdatePassword, [hashedPassword, username], (err) => {
        if (err) {
          console.error("Error al actualizar la contraseña: ", err);
          res.status(500).send("Error al actualizar la contraseña");
          return;
        }

        res.status(200).send("Contraseña actualizada correctamente");
      });
    });
  });
});

// Función para generar un código aleatorio
const generateRandomCode = () => {
  const codeLength = 6;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";

  for (let i = 0; i < codeLength; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return code;
};

module.exports = routes;
