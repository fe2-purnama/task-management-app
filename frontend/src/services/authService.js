// services/authService.js
export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const setUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const clearUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const loginUser = async (usernameOrEmail, password) => {
  try {
    const response = await fetch(
      "https://api-msib-6-travel-management-03.educalab.id/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usernameOrEmail, password }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      setUserToLocalStorage(data);
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw error;
  }
};
