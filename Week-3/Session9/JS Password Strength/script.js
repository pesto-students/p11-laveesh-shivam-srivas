
function isStrongPassword(password) {
    if (password.length < 8 || password.includes("password") || !/[A-Z]/.test(password)) {
        return false;
    }

    return true;
}

const isStrong = isStrongPassword("qwerty123");
console.log(isStrong);  // Output: false





