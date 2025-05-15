// Fluxo de conversa avançado
const conversationFlow = {
    
      
  "welcome": {
    "message": "👋 Olá! Eu sou o assistente digital da Group Thech MVR. Vamos criar juntos o orçamento para seu projeto digital!",
    "options": [
      { "text": "Vamos começar!", "next": "project_type" }
    ]
  },
  "project_type": {
    "message": "🛠️ Que tipo de projeto você deseja desenvolver?",
    "options": [
      { "text": "Aplicativo Mobile", "next": "app_type" },
      { "text": "Website", "next": "website_type" },
      { "text": "Sistema Web Completo", "next": "web_system" },
      { "text": "Loja Virtual/E-commerce", "next": "ecommerce" },
      { "text": "Outro tipo de projeto", "next": "other_project" }
    ]
  },
  "app_type": {
    "message": "📱 Entendi! Você quer desenvolver um aplicativo. Qual tipo?",
    "options": [
      { "text": "App nativo (melhor performance)", "next": "native_app" },
      { "text": "App híbrido (mais econômico)", "next": "hybrid_app" },
      { "text": "Não sei, preciso de orientação", "next": "app_advice" }
    ]
  },
  "native_app": {
    "message": "Ótima escolha! Apps nativos têm performance superior. Para qual plataforma?",
    "options": [
      { "text": "Android", "next": "audience" },
      { "text": "iOS", "next": "audience" },
      { "text": "Ambas", "next": "audience" }
    ]
  },
  "hybrid_app": {
    "message": "Aplicativos híbridos são ideais para reduzir custos e atingir múltiplas plataformas. Para qual público será o app?",
    "next": "audience"
  },
  "app_advice": {
    "message": "💡 Recomendamos apps nativos para performance máxima ou híbridos para custo reduzido. Vamos considerar:",
    "options": [
      { "text": "App Nativo", "next": "native_app" },
      { "text": "App Híbrido", "next": "hybrid_app" }
    ]
  },
  "website_type": {
    "message": "🌐 Que tipo de website você precisa?",
    "options": [
      { "text": "Site Institucional", "next": "website_pages" },
      { "text": "Landing Page", "next": "website_pages" },
      { "text": "Blog", "next": "website_pages" },
      { "text": "Portal de Notícias", "next": "website_pages" },
      { "text": "Outro", "next": "website_other" }
    ]
  },
  "website_other": {
    "message": "Descreva brevemente o tipo de website que você precisa:",
    "input": "text",
    "next": "website_pages"
  },
  "website_pages": {
    "message": "📄 Quantas páginas aproximadamente terá seu website?",
    "options": [
      { "text": "1-5 páginas", "next": "audience" },
      { "text": "6-10 páginas", "next": "audience" },
      { "text": "11+ páginas", "next": "audience" },
      { "text": "Não sei ainda", "next": "audience" }
    ]
  },
  "web_system": {
    "message": "💻 Sistemas web permitem automação complexa. Qual será o principal uso?",
    "options": [
      { "text": "ERP (Gestão Empresarial)", "next": "system_users" },
      { "text": "CRM (Gestão de Clientes)", "next": "system_users" },
      { "text": "Sistema de Gestão Interna", "next": "system_users" },
      { "text": "Outro", "next": "system_other" }
    ]
  },
  "system_other": {
    "message": "Descreva brevemente o sistema que você precisa:",
    "input": "text",
    "next": "system_users"
  },
  "system_users": {
    "message": "👥 Quantos usuários simultâneos devem usar o sistema?",
    "options": [
      { "text": "1-10 usuários", "next": "audience" },
      { "text": "11-50 usuários", "next": "audience" },
      { "text": "50+ usuários", "next": "audience" }
    ]
  },
  "ecommerce": {
    "message": "🛒 Excelente! Vamos criar sua loja virtual. Quantos produtos aproximadamente?",
    "options": [
      { "text": "Até 50 produtos", "next": "ecommerce_payments" },
      { "text": "51-200 produtos", "next": "ecommerce_payments" },
      { "text": "201+ produtos", "next": "ecommerce_payments" }
    ]
  },
  "ecommerce_payments": {
    "message": "💳 Quais formas de pagamento você deseja integrar?",
    "options": [
      { "text": "Cartão de crédito", "next": "audience", "multi": true },
      { "text": "Boleto", "next": "audience", "multi": true },
      { "text": "PIX", "next": "audience", "multi": true },
      { "text": "Outros", "next": "audience", "multi": true },
      { "text": "Próximo passo", "next": "audience" }
    ]
  },
  "other_project": {
    "message": "🛠️ Descreva brevemente o projeto que você deseja desenvolver:",
    "input": "text",
    "next": "audience"
  },
  "audience": {
    "message": "👥 Qual será o público-alvo do seu projeto?",
    "options": [
      { "text": "Clientes da minha empresa", "next": "goal" },
      { "text": "Usuários em geral (B2C)", "next": "goal" },
      { "text": "Funcionários internos", "next": "goal" },
      { "text": "Outro", "next": "audience_other" }
    ]
  },
  "audience_other": {
    "message": "Conte um pouco mais sobre o público-alvo:",
    "input": "text",
    "next": "goal"
  },
  "goal": {
    "message": "🎯 Qual é o principal objetivo do projeto?",
    "options": [
      { "text": "Vender produtos ou serviços", "next": "features" },
      { "text": "Automatizar processos", "next": "features" },
      { "text": "Fortalecer minha marca", "next": "features" },
      { "text": "Outro", "next": "goal_other" }
    ]
  },
  "goal_other": {
    "message": "Descreva seu objetivo com o projeto:",
    "input": "text",
    "next": "features"
  },
  "features": {
    "message": "✨ Quais funcionalidades você deseja? (pode marcar várias)",
    "options": [
      { "text": "Cadastro de usuários", "next": "features", "multi": true },
      { "text": "Pagamentos online", "next": "features", "multi": true },
      { "text": "Área administrativa", "next": "features", "multi": true },
      { "text": "Notificações", "next": "features", "multi": true },
      { "text": "Geolocalização", "next": "features", "multi": true },
      { "text": "Chat ou suporte ao cliente", "next": "features", "multi": true },
      { "text": "Próximo passo", "next": "deadline" }
    ]
  },
  "deadline": {
    "message": "📅 Qual o prazo desejado para o projeto?",
    "options": [
      { "text": "Urgente (1-2 semanas)", "next": "budget" },
      { "text": "Rápido (1-2 meses)", "next": "budget" },
      { "text": "Sem pressa (3+ meses)", "next": "budget" }
    ]
  },
  "budget": {
    "message": "💰 Qual é o orçamento disponível?",
    "options": [
      { "text": "Até R$ 2.000", "next": "budget_low" },
      { "text": "R$ 2.000 - R$ 5.000", "next": "budget_medium" },
      { "text": "Acima de R$ 5.000", "next": "budget_high" },
      { "text": "Preciso de orientação", "next": "budget_advice" }
    ]
  },
  "budget_low": {
    "message": "💡 Podemos te oferecer soluções enxutas e eficazes. Deseja ver pacotes prontos?",
    "options": [
      { "text": "Sim", "next": "contact" },
      { "text": "Quero orçamento personalizado", "next": "contact" }
    ]
  },
  "budget_medium": {
    "message": "⚖️ Um ótimo investimento para um projeto profissional. Vamos seguir!",
    "next": "contact"
  },
  "budget_high": {
    "message": "🚀 Excelente! Com esse valor podemos desenvolver algo robusto e escalável. Agora, o último passo:",
    "next": "contact"
  },
  "budget_advice": {
    "message": "📊 Podemos estimar o custo ideal para seu caso. Vamos seguir?",
    "options": [
      { "text": "Sim", "next": "contact" }
    ]
  },
  "contact": {
    "message": "📞 Como prefere ser contatado?",
    "options": [
      { "text": "WhatsApp (rápido)", "next": "whatsapp" },
      { "text": "E-mail (detalhado)", "next": "email" },
      { "text": "Ligação", "next": "call" }
    ]
  },
  "whatsapp": {
    "message": "📲 Toque no botão do WhatsApp para falar agora com nosso especialista. Até já!",
    "action": "openWhatsApp"
  },
  "email": {
    "message": "✉️ Informe seu e-mail para enviarmos a proposta:",
    "input": "email",
    "next": "thank_you"
  },
  "call": {
    "message": "📱 Informe seu número de telefone para entrarmos em contato por ligação:",
    "input": "text",
    "next": "thank_you"
  },
  "thank_you": {
    "message": "✅ Obrigado! Em breve entraremos em contato com sua proposta personalizada."
  }
};
// Variáveis globais
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const whatsappButton = document.getElementById('whatsapp-button');
let currentStep = 'welcome';
let userSelections = {};

// Inicia o chat
loadStep(currentStep);

// Configura o botão do WhatsApp
whatsappButton.href = generateWhatsAppLink();

function loadStep(step) {
    const stepData = conversationFlow[step];
    
    // Adiciona mensagem do bot
    addMessage(stepData.message, 'bot');
    
    // Limpa opções anteriores
    chatInput.innerHTML = '';
    
    // Se houver opções
    if (stepData.options) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options-container';
        
        stepData.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.text;
            
            button.onclick = () => {
                // Armazena a seleção do usuário
                if (!option.multi) {
                    userSelections[step] = option.text;
                } else {
                    if (!userSelections[step]) userSelections[step] = [];
                    userSelections[step].push(option.text);
                }
                
                addMessage(option.text, 'user');
                currentStep = option.next;
                loadStep(currentStep);
            };
            
            optionsDiv.appendChild(button);
        });
        
        chatInput.appendChild(optionsDiv);
    }
    
    // Se precisar de input
    if (stepData.input) {
        const inputDiv = document.createElement('div');
        inputDiv.className = 'email-form';
        
        if (stepData.input === 'email') {
            inputDiv.innerHTML = `
                <input type="email" id="user-input" placeholder="seu@email.com" required>
                <button onclick="submitInput('email')">Enviar</button>
            `;
        } else {
            inputDiv.innerHTML = `
                <input type="text" id="user-input" placeholder="Digite aqui..." required>
                <button onclick="submitInput('text')">Enviar</button>
            `;
        }
        
        chatInput.appendChild(inputDiv);
    }
    
    // Se tiver ação especial
    if (stepData.action === 'openWhatsApp') {
        whatsappButton.href = generateWhatsAppLink(); // Atualiza o link com os dados atuais
        whatsappButton.style.display = 'flex';
    } else {
        whatsappButton.style.display = 'none';
    }
}    
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function submitInput(type) {
    const input = document.getElementById('user-input').value;
    
    if (type === 'email' && !input.includes('@')) {
        alert('Por favor, insira um e-mail válido');
        return;
    }
    
    userSelections[currentStep] = input;
    addMessage(input, 'user');
    
    if (type === 'email') {
        currentStep = 'thank_you';
    } else {
        currentStep = 'contact'; // Ou outro passo lógico
    }
    
    loadStep(currentStep);
}

function generateWhatsAppLink() {
    const phone = '48999715860';
    let message = '';

    // Primeiro os dados
    for (const [key, value] of Object.entries(userSelections)) {
        message += `${key}: ${Array.isArray(value) ? value.join(', ') : value}\n`;
    }

    // Depois a mensagem final
    message += '\nOlá, recebi suas informações. Em breve entro em contato.';

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
