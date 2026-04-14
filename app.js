// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Setup Benefits Tabs
function switchTab(tabId) {
    // Esconder todas as abas
    document.querySelectorAll('.tab-content').forEach(element => {
        element.style.display = 'none';
        element.classList.remove('active');
    });

    // Remover "active" de todos os botões
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Mostrar aba correta
    const selectedTab = document.getElementById(`tab-${tabId}`);
    if(selectedTab) {
        selectedTab.style.display = 'block';
        setTimeout(() => selectedTab.classList.add('active'), 50); // Para animação suave se necessário
    }

    // Adicionar "active" no botão clicado
    const clickedBtn = document.querySelector(`.tab-btn[onclick="switchTab('${tabId}')"]`);
    if(clickedBtn) {
        clickedBtn.classList.add('active');
    }
}

// Setup FAQ Accordion
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            // Close all other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Iniciar eventos no carregamento
document.addEventListener('DOMContentLoaded', () => {
    switchTab('negocio');
    setupFAQ();
});
