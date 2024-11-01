import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
    FecNac: { type: Date },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { collection: "Usuarios" }
);

const User = mongoose.model("User", userSchema);

const checkUser = async (email, contrasenia) => {
  console.log("Buscando usuario con email:", email); // Registro de depuración
  try {
    const user = await User.findOne({ email });
    if (user) {
      console.log("Usuario encontrado:", user);
      const isMatch = await bcrypt.compare(contrasenia, user.contrasenia);
      console.log("Resultado de la comparación de contraseñas:", isMatch); // Registro de depuración
      if (isMatch) {
        console.log("Contraseña correcta para el email:", email);
      } else {
        console.log("Contraseña incorrecta para el email:", email);
      }
    } else {
      console.log("Usuario no encontrado para el email:", email);
    }
  } catch (error) {
    console.error("Error durante la búsqueda:", error);
  }
};

checkUser("eliastinuk@gmail.com", "tu_contrasenia").then(() =>
  mongoose.disconnect()
);
