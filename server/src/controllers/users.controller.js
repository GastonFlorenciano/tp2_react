const usersValidate = ["gaston", "facundo", "mateo"];

export const rootHandler = (_req, res) => {
  res.json({ probando: "hola" });
};

export const validateUser = (req, res) => {
  const name = req.params.name;

  if (usersValidate.includes(name)) {
    return res.json({
      validate: true,
      message: `El usuario ${name} es válido`,
    });
  }

  return res.json({
    validate: false,
    message: `El usuario ${name} no es válido`,
  });
};
