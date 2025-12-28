const USER_STORAGE_KEY = "arco_currentUser";
const TOKEN_STORAGE_KEY = "arco_token";

export const register = (name, email, password) => {
  return new Promise((resolve, reject) => {
    const existingUser = localStorage.getItem(USER_STORAGE_KEY);

    if (existingUser) {
      const user = JSON.parse(existingUser);
      if (user.email === email) {
        reject({ message: "User with this email already exists" });
        return;
      }
    }

    const newUser = {
      _id: `user_${Date.now()}`,
      name,
      email,
      password,
    };

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));

    const fakeToken = `fake_token_${Date.now()}`;
    localStorage.setItem(TOKEN_STORAGE_KEY, fakeToken);

    resolve({
      token: fakeToken,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  });
};

export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);

    if (!savedUser) {
      reject({ message: "Incorrect email or password" });
      return;
    }

    const user = JSON.parse(savedUser);

    if (user.email !== email || user.password !== password) {
      reject({ message: "Incorrect email or password" });
      return;
    }

    const fakeToken = `fake_token_${Date.now()}`;
    localStorage.setItem(TOKEN_STORAGE_KEY, fakeToken);

    resolve({
      token: fakeToken,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    const savedToken = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (!savedToken || savedToken !== token) {
      reject({ message: "Invalid token" });
      return;
    }

    const savedUser = localStorage.getItem(USER_STORAGE_KEY);

    if (!savedUser) {
      reject({ message: "User not found" });
      return;
    }

    const user = JSON.parse(savedUser);

    resolve({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    resolve({ message: "Logged out successfully" });
  });
};
