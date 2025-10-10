/**
 * Check login details against a simple in-memory user store.
 *
 * @param {string} username
 * @param {string} password
 * @param {Object} usersDb  - map of username => password|string or username => { password, ...meta }
 * @returns {{ ok: boolean, error?: string, user?: Object }}
 *
 * Example:
 * const users = {
 *   "alice": "s3cret",
 *   "bob": { password: "hunter2", role: "admin" }
 * };
 * const result = checkLoginDetails("alice", "s3cret", users);
 */
function checkLoginDetails(username, password, usersDb = {}) {
  // basic input validation
  if (typeof username !== "string" || typeof password !== "string") {
    return { ok: false, error: "Username and password must be strings." };
  }

  const uname = username.trim();
  if (!uname) return { ok: false, error: "Username is required." };
  if (password.length === 0) return { ok: false, error: "Password is required." };

  const entry = usersDb[uname];
  if (!entry) return { ok: false, error: "User not found." };

  const storedPassword = typeof entry === "string" ? entry : entry.password;
  if (typeof storedPassword !== "string") {
    return { ok: false, error: "Stored password invalid." };
  }

  if (password !== storedPassword) return { ok: false, error: "Invalid credentials." };

  // return user info without password
  const userInfo = typeof entry === "string" ? { username: uname } : { ...entry };
  if (userInfo.password) delete userInfo.password;
  userInfo.username = uname;

  return { ok: true, user: userInfo };
}

// support both CommonJS and ES modules
if (typeof module !== "undefined" && module.exports) module.exports = { checkLoginDetails };
export { checkLoginDetails };