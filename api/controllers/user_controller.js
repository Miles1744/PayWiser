const USER = require("../data/USER_STORE");

function getAllUsers() {
  return USER;
}

function getUSERById(userId) {
  const result = USER.filter((user) => user.id == userId);
  return result[0];
}

function createUSER(user) {
  user.id = USER.length + 1;
  USER.push(user);
  return MOVIES[user.id];
}

function updateUSERById(userId, updatedUser) {
  const index = USER.findIndex((user) => user.id === userId);
  if (index > -1) {
    MOVIES[index] = updatedUser;
    return updatedUser;
  }

  throw new Error(`movie at id ${userId} does not exist`);
}

function deleteUSERById(userId) {
  const index = USER.findIndex((user) => user.id === userId);

  if (index > -1) {
    return USER.splice(index, 1)[0];
  }

  throw new Error(`movie at id ${movieId} does not exist`);
}

module.exports = {
  getAllUsers,
  getUSERById,
  createUSER,
  updateUSERById,
  deleteUSERById,
};
