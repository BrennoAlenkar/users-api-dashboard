const usersContainer = document.getElementById("users");
const loading = document.getElementById("loading");

async function carregarUsuarios() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Erro ao buscar dados");
        }

        const users = await response.json();

        loading.style.display = "none";

        users.forEach(user => {
            const card = document.createElement("div");
            card.classList.add("user-card");

            card.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Empresa:</strong> ${user.company.name}</p>
                <p><strong>Cidade:</strong> ${user.address.city}</p>
            `;

            usersContainer.appendChild(card);
        });

    } catch (error) {
        loading.innerText = "Erro ao carregar usuários 😢";
        console.error(error);
    }
}

carregarUsuarios();
