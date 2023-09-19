const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUserToken = require("../helpers/create-user-token");
const getToken = require("../helpers/get-Token");
const getUserByToken = require("../helpers/get-user-by-token");

const register = async (req, res) => {
  const { name, weight, birthDate, email, password, cout, phone } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(422).json({ message: "Erro, porfavor utiliza outro e-mail!" });
    return;
  }
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = {
    name,
    weight,
    email,
    phone,
    cout,
    birthDate: new Date(birthDate),
    password: passwordHash,
  };

  try {
    const newUser = await User.create(user);
    await createUserToken(newUser, req, res);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(422).json({ message: "E-mail ou senha incorretos!" });
    return;
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    res.status(422).json({ message: "E-mail ou senha incorretos!" });
  }
  await createUserToken(user, req, res);
};

const updateUser = async (req, res) => {
  //regex de validação de e-mail!
  const emailValid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const token = getToken(req);
  const user = await getUserByToken(token);
  const { name, cpf, email, dataNascimento, telefone, password, confirmPassword } = req.body;

  let image = "";
  if (req.file) {
    user.image = req.file.filename;
  }
  if (!name) {
    res.status(422).json({ message: "O nome é obrigatório!" });
    return;
  } else if (name) {
    const explodeName = name.split(" ");
    if (!explodeName[1]) {
      res.status(422).json({ message: "Nome completo é obrigatorio" });
      return;
    }
  }
  user.name = name;
  //validação cpf
  if (!cpf) {
    res.status(422).json({ message: "CPF é obrigátorio!" });
    return;
  }
  user.cpf = cpf;

  //validação email
  if (!email) {
    res.status(422).json({ message: "O e-mail é obrigatório" });
    return;
  }
  //test de e-mail com a regex de validação
  if (email) {
    const validate = emailValid.test(email);
    if (!validate) {
      res.status(422).json({ message: "Por favor, informe um e-mail válido!" });
      return;
    }
  }
  const userExists = await User.findOne({ email: email });

  if (user.email !== email && userExists) {
    res.status(422).json({ message: "Por favor, utilize outro e-mail!" });
    return;
  }
  user.email = email;

  //atribuição da imagem
  if (image) {
    const imageName = req.file.filename;
    user.image = imageName;
  }

  if (!dataNascimento) {
    res.status(422).json({ message: "Data de nascimento é obrigatório!" });
    return;
  }
  user.dataNascimento = dataNascimento;
  if (!telefone) {
    res.status(422).json({ message: "Telefone é obrigatório!" });
    return;
  }
  user.telefone = telefone;

  if (!password) {
    res.status(422).json({ message: "Senha é obrigatório!" });
    return;
  } else if (password) {
    if (password.length < 6) {
      res.status(422).json({ message: "A senha deve possuir no mínimo 6 caracteries!" });
      return;
    }
  }
  if (!confirmPassword) {
    res.status(422).json({ message: "Confirmação de senha é obrigatório!" });
    return;
  }
  if (password !== confirmPassword) {
    res.status(422).json({ message: "As senhas devem ser iguais!" });
    return;
  } else if (password == confirmPassword) {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
    user.password = passwordHash;
  }

  try {
    const updateUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $set: user },
      { new: true }
    );
    res.status(200).json({ message: "Usuário atualizado com sucesso!", data: updateUser });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const checkUser = async (req, res) => {
  const secret = process.env.JWT_SECRET;

  let currentUser;

  if (req.headers.authorization) {
    const token = getToken(req);

    const decoded = jwt.verify(token, secret);
    currentUser = await User.findById(decoded.id);

    currentUser.password = undefined;
  } else {
    currentUser = null;
  }
  res.status(200).json(currentUser);
};

module.exports = { register, login, updateUser, checkUser };
