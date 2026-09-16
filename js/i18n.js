// ===== INTERNATIONALIZATION (EN / PT-BR) =====
// English is the default language. The choice is persisted in localStorage.
(function () {
    const STORAGE_KEY = '0rientd-lang';
    const DEFAULT_LANG = 'en';

    const translations = {
        en: {
            'meta.title': '0rientd.dev | Carlos Henrique',
            'meta.description': 'Full Stack Developer specialized in Ruby on Rails. Web systems, automations, Telegram bots and custom solutions.',
            'lang.label': 'PT',
            'lang.ariaLabel': 'Switch language to Portuguese',

            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.portfolio': 'Portfolio',
            'nav.skills': 'Tech Stack',
            'nav.contact': 'Contact',

            'hero.title': 'Hi, my name is Carlos Henrique',
            'hero.subtitle': 'Full Stack Developer specialized in Ruby on Rails, turning ideas into digital solutions!',
            'hero.btnProjects': 'View Projects',
            'hero.btnContact': 'Get in Touch',
            'hero.scroll': 'Check out my work',

            'about.title': 'About Me',
            'about.subtitle': 'A developer passionate about turning ideas into reality',
            'about.p1': "I'm a developer experienced in building complete web systems, from concept to delivery. I work mainly with <strong>Ruby on Rails</strong>, but I also have experience with <strong>Node.js</strong>, <strong>C++</strong>, <strong>Python</strong>, <strong>Perl</strong> and <strong>Swift</strong>.",
            'about.p2': "I've delivered projects for many clients, including inventory and sales management platforms, Telegram automation bots and custom APIs. My approach is always focused on shipping practical and efficient solutions.",
            'about.p3': 'Beyond professional work, I give back to the community by building open source projects.',
            'about.stat1': 'Repositories',
            'about.stat2': 'Years of Experience',
            'about.stat3': 'Clients Served',
            'about.github': 'View GitHub',

            'portfolio.title': 'Portfolio',
            'portfolio.subtitle': 'Take a look at some of the projects I built for clients and the community',
            'tag.client': 'Client',
            'tag.own': 'Personal Project',
            'tag.automation': 'Automation',
            'tag.openSource': 'Open Source',
            'portfolio.card1.desc': 'Digital deals supplied through an API to the Nintendo Barato portal',
            'portfolio.card1.btn': 'See more',
            'portfolio.card2.desc': 'A deals platform for eShop, PSN and Xbox that aggregates offers from several stores, with Telegram notification bots, image generation and more.',
            'portfolio.card2.btn': 'Visit',
            'portfolio.card3.desc': 'Infrastructure maintenance, WordPress page building and Captive Portal deployment',
            'portfolio.card4.desc': 'Sales and order management system, sales dashboard, customer registry and sales receipt generation.',
            'portfolio.card5.title': 'Telegram Bots',
            'portfolio.card5.desc': 'Custom bots built for support automation, notifications and integration with external systems.',
            'portfolio.card6.desc': 'Open source contributions including Gems for the Ruby community, a port of the game 2048 and other Nintendo 3DS applications.',
            'portfolio.card6.btn': 'See 2048 on GitHub',

            'skills.title': 'Tech Stack',
            'skills.subtitle': 'Tools and languages I use to turn ideas into reality',
            'skills.main': 'Main',
            'skills.c': 'C (3DS Dev)',

            'benefits.title': 'How I Work',
            'benefits.subtitle': 'My approach to delivering quality projects',
            'benefits.imgAlt': 'Work methodology',
            'benefits.heading': 'From concept to delivery',
            'benefits.item1.title': 'Direct Communication',
            'benefits.item1.desc': 'I stay in touch throughout the whole project, making sure your needs are met at every step.',
            'benefits.item2.title': 'Agile Development',
            'benefits.item2.desc': 'Incremental deliveries that allow constant validation and quick adjustments as the project evolves.',
            'benefits.item3.title': 'Quality Code',
            'benefits.item3.desc': 'I follow development best practices, automated testing and clear documentation to ensure maintainability.',
            'benefits.item4.title': 'Post-Delivery Support',
            'benefits.item4.desc': 'I offer support after the project is finished to make sure everything runs perfectly.',

            'footer.about': 'Full Stack Developer passionate about building solutions that make a difference. Shall we turn your idea into reality?',
            'footer.emailAria': 'Email',
            'footer.linksTitle': 'Quick Links',
            'footer.contactTitle': 'Get in Touch',
            'footer.location': 'Rio de Janeiro, Brazil',

            'backToTop': 'Back to top'
        },

        pt: {
            'meta.title': '0rientd.dev | Carlos Henrique',
            'meta.description': 'Desenvolvedor Full Stack especializado em Ruby on Rails. Criação de sistemas web, automações, bots para Telegram e soluções personalizadas.',
            'lang.label': 'EN',
            'lang.ariaLabel': 'Mudar idioma para inglês',

            'nav.home': 'Início',
            'nav.about': 'Sobre',
            'nav.portfolio': 'Portfólio',
            'nav.skills': 'Tecnologias',
            'nav.contact': 'Contato',

            'hero.title': 'Olá, me chamo Carlos Henrique',
            'hero.subtitle': 'Desenvolvedor Full Stack especializado em Ruby on Rails, transformando ideias em soluções digitais!',
            'hero.btnProjects': 'Ver Projetos',
            'hero.btnContact': 'Fale Comigo',
            'hero.scroll': 'Conheça meu trabalho',

            'about.title': 'Sobre Mim',
            'about.subtitle': 'Desenvolvedor apaixonado por transformar ideias em realidade',
            'about.p1': 'Sou desenvolvedor com experiência em criar sistemas web completos, desde a concepção até a entrega. Trabalho principalmente com <strong>Ruby on Rails</strong>, mas também tenho experiência com <strong>Node.js</strong>, <strong>C++</strong>, <strong>Python</strong>, <strong>Perl</strong> e <strong>Swift</strong>.',
            'about.p2': 'Já desenvolvi projetos para diversos clientes, incluindo plataformas de gerenciamento de estoque e vendas, bots de automação para Telegram e APIs customizadas. Minha abordagem é sempre focada em entregar soluções práticas e eficientes.',
            'about.p3': 'Além do desenvolvimento profissional, contribuo com a comunidade criando projetos open source.',
            'about.stat1': 'Repositórios',
            'about.stat2': 'Anos de Experiência',
            'about.stat3': 'Clientes Atendidos',
            'about.github': 'Ver GitHub',

            'portfolio.title': 'Portfólio',
            'portfolio.subtitle': 'Conheça alguns dos projetos que desenvolvi para clientes e comunidade',
            'tag.client': 'Cliente',
            'tag.own': 'Projeto Próprio',
            'tag.automation': 'Automação',
            'tag.openSource': 'Open Source',
            'portfolio.card1.desc': 'Fornecimento de promoções digitais via API para o portal Nintendo Barato',
            'portfolio.card1.btn': 'Veja mais',
            'portfolio.card2.desc': 'Plataforma de promoções da eShop, PSN e Xbox que agrega ofertas de diversas lojas, com bots de notificação para Telegram, geração de imagens e mais.',
            'portfolio.card2.btn': 'Visitar',
            'portfolio.card3.desc': 'Manutenção de infraestrutura, criação de páginas no WordPress e implantação de sistema Captive Portal',
            'portfolio.card4.desc': 'Sistema de gerenciamento de vendas e pedidos, dashboard de vendas, cadastro de clientes e geração de recibo de venda.',
            'portfolio.card5.title': 'Bots para Telegram',
            'portfolio.card5.desc': 'Desenvolvimento de bots personalizados para automação de atendimento, notificações e integração com sistemas externos.',
            'portfolio.card6.desc': 'Contribuições open source incluindo Gems para a comunidade Ruby, port do jogo 2048 e outras aplicações para Nintendo 3DS.',
            'portfolio.card6.btn': 'Ver 2048 no GitHub',

            'skills.title': 'Tecnologias',
            'skills.subtitle': 'Ferramentas e linguagens que utilizo para transformar ideias em realidade',
            'skills.main': 'Principal',
            'skills.c': 'C (Dev 3DS)',

            'benefits.title': 'Como Trabalho',
            'benefits.subtitle': 'Minha abordagem para entregar projetos de qualidade',
            'benefits.imgAlt': 'Metodologia de trabalho',
            'benefits.heading': 'Do conceito à entrega',
            'benefits.item1.title': 'Comunicação Direta',
            'benefits.item1.desc': 'Mantenho contato constante durante todo o projeto, garantindo que suas necessidades sejam atendidas em cada etapa.',
            'benefits.item2.title': 'Desenvolvimento Ágil',
            'benefits.item2.desc': 'Entregas incrementais que permitem validação constante e ajustes rápidos conforme o projeto evolui.',
            'benefits.item3.title': 'Código de Qualidade',
            'benefits.item3.desc': 'Sigo boas práticas de desenvolvimento, testes automatizados e documentação clara para garantir manutenibilidade.',
            'benefits.item4.title': 'Suporte Pós-Entrega',
            'benefits.item4.desc': 'Ofereço suporte após a conclusão do projeto para garantir que tudo funcione perfeitamente.',

            'footer.about': 'Desenvolvedor Full Stack apaixonado por criar soluções que fazem a diferença. Vamos transformar sua ideia em realidade?',
            'footer.emailAria': 'E-mail',
            'footer.linksTitle': 'Links Rápidos',
            'footer.contactTitle': 'Entre em Contato',
            'footer.location': 'Rio de Janeiro, Brasil',

            'backToTop': 'Voltar ao topo'
        }
    };

    const htmlLangAttr = { en: 'en', pt: 'pt-br' };

    function getStoredLang() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return translations[stored] ? stored : DEFAULT_LANG;
        } catch (e) {
            return DEFAULT_LANG;
        }
    }

    function storeLang(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            /* storage unavailable (private mode) - language still applies for this visit */
        }
    }

    let currentLang = DEFAULT_LANG;

    function applyLanguage(lang) {
        const dict = translations[lang] || translations[DEFAULT_LANG];
        currentLang = translations[lang] ? lang : DEFAULT_LANG;

        document.documentElement.setAttribute('lang', htmlLangAttr[currentLang]);
        document.title = dict['meta.title'];

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.setAttribute('content', dict['meta.description']);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = dict[el.getAttribute('data-i18n')];
            if (value !== undefined) el.textContent = value;
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const value = dict[el.getAttribute('data-i18n-html')];
            if (value !== undefined) el.innerHTML = value;
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            const value = dict[el.getAttribute('data-i18n-aria-label')];
            if (value !== undefined) el.setAttribute('aria-label', value);
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const value = dict[el.getAttribute('data-i18n-alt')];
            if (value !== undefined) el.setAttribute('alt', value);
        });
    }

    function toggleLanguage() {
        applyLanguage(currentLang === 'en' ? 'pt' : 'en');
        storeLang(currentLang);
    }

    function initI18n() {
        applyLanguage(getStoredLang());

        const button = document.getElementById('langSwitch');
        if (button) {
            button.addEventListener('click', () => {
                toggleLanguage();
                button.classList.add('switching');
                setTimeout(() => button.classList.remove('switching'), 400);
            });
        }
    }

    window.i18n = { apply: applyLanguage, toggle: toggleLanguage, init: initI18n };
})();
