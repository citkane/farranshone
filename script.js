const mailLink = document.getElementById("emailLink");
mailLink.innerText = mailLink.innerText.replace(`"at"`, "@");
mailLink.setAttribute("href", `mailto:${mailLink.innerText}`);
