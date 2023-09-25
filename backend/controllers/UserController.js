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

const loginPersonal = async (req, res) => {
  const {coutEmail, userEmail} = req.body;
  const user = await User.findOne({email: userEmail});
  if(!user) {
    res.status(422).json({message: 'E-mail inexiste ou incorreto!'});
    return
  }
  const filterEmail = user.cout.filter((email) => email === coutEmail);
  if(filterEmail){
    const userPersonal = {
      email: filterEmail[0],
      id: user._id
    }
    await createUserToken(userPersonal, req, res);
  }
}

const getUser = async (req, res) => {
  const token = getToken(req);
  if(!token){
    res.status(422).json({message: 'Usuário não autenticado'});
    return
  }
  const user = await getUserByToken(token);
  if(!user) {
    res.status(422).json({message: 'Usuário inválido ou inexistente'});
    return
  }
  res.status(200).json(user);
}

const updateUserBack = async (req, res) => {
  const token = getToken(req);
  const user = await getUserByToken(token);
  const { name, email, weight, birthDate, phone, password, cout } = req.body
  
  const userExists = await User.findOne({ email: email });

  if (user.email !== email && userExists) {
    res.status(422).json({ message: "Por favor, utilize outro e-mail!" });
    return;
  }
  user.name = name;
  user.email = email;
  user.birthDate = birthDate;
  user.phone = phone;
  user.weight = weight;
  user.cout = cout;

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);
  user.password = passwordHash;

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

module.exports = { register, login, updateUserBack, checkUser, loginPersonal, getUser };
