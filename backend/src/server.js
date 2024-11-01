import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = "your_jwt_secret_key";

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://RutaBus:1234@cluster0.hhodx.mongodb.net/RutaBus", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    contrasenia: { type: String, required: true },
    nombre: { type: String },
  },
  { collection: "Usuarios" }
);

const User = mongoose.model("User", userSchema);

app.post("/auth", async (req, res) => {
  const { email, contrasenia } = req.body;
  console.log("Email recibido:", email); // Registro de depuración

  try {
    const user = await User.findOne({ email });
    console.log("Usuario encontrado:", user); // Registro de depuración

    if (!user) {
      console.log("Usuario no encontrado para el email:", email); // Registro de depuración
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    const isMatch = await bcrypt.compare(contrasenia, user.contrasenia);
    console.log("Resultado de la comparación de contraseñas:", isMatch); // Registro de depuración

    if (!isMatch) {
      console.log("Contraseña incorrecta para el email:", email); // Registro de depuración
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, email: user.email, nombre: user.nombre });
  } catch (error) {
    console.error("Error durante la autenticación:", error); // Registro de depuración
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
