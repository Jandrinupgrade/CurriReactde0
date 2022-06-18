const users = [
  { email: "rosuasa@gmail.com", password: "jandrin", name: "PAlejandror" },
  { email: "user@gmail.com", password: "demo", name: "Usuario" },
];

export const authenticateUser = (userForm) => {
  // Esto simula un fetch a Node: /auth/login
  const result = users.find(
    (user) =>
      user.email === userForm.email && user.password === userForm.password
  );

  if (result) {
    return result;
  }
  return false;
};
