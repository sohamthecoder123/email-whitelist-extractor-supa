//please build you stupid bi
import { signIn, getUser, isAuthorized, signOut } from "./auth.js";

console.log("app.js loaded");

const loginButton = document.getElementById("loginBtn");
const emailInput = document.getElementById("email");
const status = document.getElementById("status");

console.log(loginButton);

loginButton.addEventListener("click", async () => {

    const email = emailInput.value.trim();

    if (!email) {

        status.textContent = "Please enter an email.";
        return;

    }

    status.textContent = "Sending magic link...";

    const error = await signIn(email);

    if (error) {

        status.textContent = error.message;
        return;

    }

    status.textContent =
        "Check your email for the sign-in link.";

});

const user = await getUser();

if (user) {
    status.textContent = `Logged in as ${user.email}`;

    const authorized = await isAuthorized();

    if (authorized) {
        document.getElementById("protected").hidden = "false";

        status.textContent += " (Authorized)";
    } else {
        status.textContent += " (Not Authorized)";
    }
}

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {
    await signOut();
    location.reload();
});