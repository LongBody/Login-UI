async function register(user) {
    for (let key in user) {
        console.log(key)
        if (user[key].length === 0) {
            throw new Error(`${key} cannot be empty`);
        }
        if (user.password !== user.RetypePassword) {
            throw new Error("Password not matched")
        }

    }
    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    firebase.auth().currentUser.sendEmailVerification();
    return true;

}

async function login(user) {
    if (user.email.length === 0 || user.password === 0) {
        throw new Error("Email and password cannot be empty!");
    }
    const loginResult = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    if (!loginResult.user.emailVerified) {
        throw new Error("User is not verified! Please check your inbox!");
    }
    return true;
}

export { register, login }