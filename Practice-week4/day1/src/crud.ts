import User from "../src/models/schema.js";

async function createUser(user: object) {
  await User.create(user);
  return user;
}
async function deleteUser(userName: string) {
  await User.deleteOne({ name: userName });
  return userName;
}

export { createUser, deleteUser };
