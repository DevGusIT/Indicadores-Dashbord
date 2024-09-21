// Dados iniciais
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
let vendasData = [120, 150, 180, 220, 170, 250];
let usuariosData = [30, 45, 60, 70, 50, 90];

// Gráfico de Vendas
const ctxVendas = document.getElementById('chartVendas').getContext('2d');
const chartVendas = new Chart(ctxVendas, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Vendas',
            data: vendasData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Novos Usuários
const ctxUsuarios = document.getElementById('chartUsuarios').getContext('2d');
const chartUsuarios = new Chart(ctxUsuarios, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Novos Usuários',
            data: usuariosData,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Captura de dados do formulário
const form = document.getElementById('dataForm');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio do formulário

    const mes = document.getElementById('mes').value;
    const vendas = document.getElementById('vendas').value;
    const usuarios = document.getElementById('usuarios').value;

    const index = labels.indexOf(mes);

    // Atualiza os dados com os valores inseridos
    if (index !== -1 && vendas && usuarios) {
        vendasData[index] = parseInt(vendas);
        usuariosData[index] = parseInt(usuarios);

        // Atualiza os gráficos
        chartVendas.update();
        chartUsuarios.update();
    }
});
