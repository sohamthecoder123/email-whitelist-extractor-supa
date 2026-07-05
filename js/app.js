//please build you stupid b-
import { signIn, getUser, isAuthorized } from "./auth.js";

const loginButton = document.getElementById("loginBtn");
const emailInput = document.getElementById("email");
const status = document.getElementById("status");

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