// ===== INTERNATIONALIZATION (EN / PT-BR) =====
// English is the default language. The choice is persisted in localStorage.
(function () {
    const STORAGE_KEY = '0rientd-lang';
    const DEFAULT_LANG = 'en';

    const translations = {
        en: {
            'meta.title': '0rientd.dev | Carlos Henrique',
            'meta.description': 'Carlos Henrique, Full Stack developer working with Ruby on Rails. Web systems, APIs and automations, graphics programming in C++ with SDL2 and experiments with local AI models.',
            'lang.label': 'PT',
            'lang.ariaLabel': 'Switch language to Portuguese',
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.portfolio': 'Portfolio',
            'nav.skills': 'Tech Stack',
            'nav.contact': 'Contact',
            'hero.title': 'Hi, I\'m Carlos Henrique',
            'hero.subtitle': 'Full Stack developer working mostly with Ruby on Rails. I build web systems, APIs and automations — and, off the clock, games and homebrew in C++.',
            'hero.btnProjects': 'See My Work',
            'hero.btnContact': 'Let\'s Talk',
            'hero.scroll': 'Take a look at what I\'ve built',
            'about.title': 'About Me',
            'about.subtitle': 'A developer who likes shipping things that actually get used',
            'about.p1': 'I\'ve been building web systems for over five years, from the first conversation to the day they go live. <strong>Ruby on Rails</strong> is where I feel most at home, and I reach for <strong>Python</strong> or <strong>C++</strong> when the problem asks for something else.',
            'about.p2': 'I\'ve delivered sales and inventory platforms, custom APIs and Telegram bots for clients — usually as the person responsible for the whole thing: database, backend, deploy and the support that comes after.',
            'about.p3': 'Outside of client work I spend my time on open source and on lower-level things: graphics and games with <strong>C++ and SDL2</strong>, plus homebrew for the Nintendo 3DS. That is what keeps me curious about how things work under the hood.',
            'about.p4': 'Lately I have been running AI models locally with Ollama and LM Studio, and wiring them into agents and MCP tools — mostly to find out where they genuinely help in day-to-day development, and where they just get in the way.',
            'about.stat1': 'Repositories',
            'about.stat2': 'Years of Experience',
            'about.stat3': 'Clients Served',
            'about.github': 'See My GitHub',
            'portfolio.title': 'Portfolio',
            'portfolio.subtitle': 'A mix of client work, personal projects and open source',
            'tag.client': 'Client',
            'tag.own': 'Personal Project',
            'tag.openSource': 'Open Source',
            'tag.gamedev': 'Game Dev',
            'portfolio.card1.desc': 'An API that feeds digital game deals to the Nintendo Barato portal, refreshed automatically every day.',
            'portfolio.card1.btn': 'See more',
            'portfolio.card2.desc': 'My own deals platform for eShop, PSN and Xbox. It gathers offers from several stores and delivers them through a public API, generated images and Telegram bots that push each new deal out as soon as it appears.',
            'portfolio.card2.btn': 'Visit',
            'portfolio.card3.desc': 'Network infrastructure, WordPress pages and a Captive Portal set up to give visitors controlled Wi-Fi access.',
            'portfolio.card4.desc': 'A fix of mine merged into this privacy-focused analytics gem for Rails: the install migration generated an index name past the 64-character limit and broke rails db:migrate on a fresh setup. Found it, fixed it, sent it upstream.',
            'portfolio.card4.btn': 'See the contribution',
            'portfolio.card5.title': 'Nintendo 3DS Homebrew',
            'portfolio.card5.desc': 'A port of the game 2048 to the Nintendo 3DS, written in C against the console homebrew SDK — no engine, no framework, just the hardware and a render loop. The repo also holds other small homebrew apps of mine.',
            'portfolio.card5.btn': 'See on GitHub',
            'portfolio.card6.title': 'Particles & Graphics',
            'portfolio.card6.desc': 'Real-time particle effects written in C++ with SDL2, where the render loop, the physics and the input handling are all built by hand. My playground for graphics programming.',
            'portfolio.card6.btn': 'See on GitHub',
            'skills.title': 'Tech Stack',
            'skills.subtitle': 'What I reach for at work, and what I explore on my own time',
            'skills.cat1': 'Day to day',
            'skills.cat2': 'Games & low level',
            'skills.cat3': 'Local AI',
            'skills.homebrew': '3DS Homebrew',
            'skills.agents': 'Agents & MCP',
            'skills.openModels': 'Open models',
            'benefits.title': 'How I Work',
            'benefits.subtitle': 'What you can expect when we work together',
            'benefits.imgAlt': 'Work methodology',
            'benefits.heading': 'From the first conversation to production',
            'benefits.item1.title': 'Direct Communication',
            'benefits.item1.desc': 'You talk straight to the person writing the code. I keep you posted as things move, in plain language and without jargon.',
            'benefits.item2.title': 'Agile Development',
            'benefits.item2.desc': 'I deliver in small pieces, so you see something working early and we can change course without starting from scratch.',
            'benefits.item3.title': 'Quality Code',
            'benefits.item3.desc': 'Automated tests, clear documentation and good practices — so the system is still easy to change a year from now.',
            'benefits.item4.title': 'I Stick Around',
            'benefits.item4.desc': 'Launch day is not the end. I stay available to fix, adjust and help the system grow with your needs.',
            'footer.about': 'Full Stack developer based in Rio de Janeiro. I build web systems that people actually use, and tinker with games and homebrew when I\'m off the clock. Got an idea? Let\'s talk.',
            'footer.emailAria': 'Email',
            'footer.linksTitle': 'Quick Links',
            'footer.contactTitle': 'Talk to Me',
            'footer.location': 'Rio de Janeiro, Brazil',
            'backToTop': 'Back to top'
        },

        pt: {
            'meta.title': '0rientd.dev | Carlos Henrique',
            'meta.description': 'Carlos Henrique, desenvolvedor Full Stack que trabalha com Ruby on Rails. Sistemas web, APIs e automações, programação gráfica em C++ com SDL2 e experimentos com IA local.',
            'lang.label': 'EN',
            'lang.ariaLabel': 'Mudar idioma para inglês',
            'nav.home': 'Início',
            'nav.about': 'Sobre',
            'nav.portfolio': 'Portfólio',
            'nav.skills': 'Tecnologias',
            'nav.contact': 'Contato',
            'hero.title': 'Olá, eu sou o Carlos Henrique',
            'hero.subtitle': 'Desenvolvedor Full Stack, trabalho principalmente com Ruby on Rails. Construo sistemas web, APIs e automações — e, nas horas vagas, jogos e homebrew em C++.',
            'hero.btnProjects': 'Ver Meu Trabalho',
            'hero.btnContact': 'Vamos Conversar',
            'hero.scroll': 'Dá uma olhada no que eu já construí',
            'about.title': 'Sobre Mim',
            'about.subtitle': 'Desenvolvedor que gosta de entregar coisas que realmente são usadas',
            'about.p1': 'Construo sistemas web há mais de cinco anos, da primeira conversa até o dia em que entram no ar. <strong>Ruby on Rails</strong> é onde me sinto mais em casa, e recorro a <strong>Python</strong> ou <strong>C++</strong> quando o problema pede outra coisa.',
            'about.p2': 'Já entreguei plataformas de vendas e estoque, APIs customizadas e bots de Telegram para clientes — normalmente como o responsável por tudo: banco de dados, backend, deploy e o suporte que vem depois.',
            'about.p3': 'Fora do trabalho com clientes, dedico meu tempo a open source e a coisas mais de baixo nível: gráficos e jogos com <strong>C++ e SDL2</strong>, além de homebrew para Nintendo 3DS. É o que me mantém curioso sobre como as coisas funcionam por baixo do capô.',
            'about.p4': 'Ultimamente tenho rodado modelos de IA localmente com Ollama e LM Studio, e ligado eles a agentes e ferramentas MCP — principalmente para descobrir onde eles ajudam de verdade no dia a dia de desenvolvimento, e onde só atrapalham.',
            'about.stat1': 'Repositórios',
            'about.stat2': 'Anos de Experiência',
            'about.stat3': 'Clientes Atendidos',
            'about.github': 'Ver Meu GitHub',
            'portfolio.title': 'Portfólio',
            'portfolio.subtitle': 'Uma mistura de trabalho para clientes, projetos pessoais e open source',
            'tag.client': 'Cliente',
            'tag.own': 'Projeto Próprio',
            'tag.openSource': 'Open Source',
            'tag.gamedev': 'Game Dev',
            'portfolio.card1.desc': 'Uma API que abastece o portal Nintendo Barato com promoções de jogos digitais, atualizadas automaticamente todo dia.',
            'portfolio.card1.btn': 'Veja mais',
            'portfolio.card2.desc': 'Minha própria plataforma de promoções da eShop, PSN e Xbox. Ela reúne ofertas de várias lojas e as entrega por uma API pública, imagens geradas automaticamente e bots de Telegram que avisam assim que uma promoção nova aparece.',
            'portfolio.card2.btn': 'Visitar',
            'portfolio.card3.desc': 'Infraestrutura de rede, páginas em WordPress e um Captive Portal configurado para dar acesso controlado ao Wi-Fi dos visitantes.',
            'portfolio.card4.desc': 'Uma correção minha mergeada nessa gem de analytics com foco em privacidade para Rails: a migration de instalação gerava um nome de índice acima do limite de 64 caracteres e quebrava o rails db:migrate numa instalação nova. Achei, corrigi e mandei para o upstream.',
            'portfolio.card4.btn': 'Ver a contribuição',
            'portfolio.card5.title': 'Homebrew para Nintendo 3DS',
            'portfolio.card5.desc': 'Um port do jogo 2048 para o Nintendo 3DS, escrito em C sobre o SDK de homebrew do console — sem engine, sem framework, só o hardware e um loop de renderização. O repositório também guarda outros homebrews pequenos meus.',
            'portfolio.card5.btn': 'Ver no GitHub',
            'portfolio.card6.title': 'Partículas & Gráficos',
            'portfolio.card6.desc': 'Efeitos de partículas em tempo real escritos em C++ com SDL2, onde o loop de renderização, a física e o tratamento de input são feitos na mão. Meu laboratório de programação gráfica.',
            'portfolio.card6.btn': 'Ver no GitHub',
            'skills.title': 'Tecnologias',
            'skills.subtitle': 'O que uso no trabalho e o que exploro no meu tempo livre',
            'skills.cat1': 'No dia a dia',
            'skills.cat2': 'Jogos & baixo nível',
            'skills.cat3': 'IA local',
            'skills.homebrew': 'Homebrew 3DS',
            'skills.agents': 'Agentes & MCP',
            'skills.openModels': 'Modelos abertos',
            'benefits.title': 'Como Trabalho',
            'benefits.subtitle': 'O que você pode esperar quando a gente trabalha junto',
            'benefits.imgAlt': 'Metodologia de trabalho',
            'benefits.heading': 'Da primeira conversa até a produção',
            'benefits.item1.title': 'Comunicação Direta',
            'benefits.item1.desc': 'Você fala direto com quem escreve o código. Mantenho você informado conforme as coisas andam, em português claro e sem jargão.',
            'benefits.item2.title': 'Desenvolvimento Ágil',
            'benefits.item2.desc': 'Entrego em pedaços pequenos, assim você vê algo funcionando cedo e dá para mudar de rumo sem começar do zero.',
            'benefits.item3.title': 'Código de Qualidade',
            'benefits.item3.desc': 'Testes automatizados, documentação clara e boas práticas — para que o sistema continue fácil de mudar daqui a um ano.',
            'benefits.item4.title': 'Não Sumo Depois',
            'benefits.item4.desc': 'O dia da entrega não é o fim. Continuo disponível para corrigir, ajustar e ajudar o sistema a crescer junto com a sua necessidade.',
            'footer.about': 'Desenvolvedor Full Stack no Rio de Janeiro. Construo sistemas web que as pessoas realmente usam e mexo com jogos e homebrew no tempo livre. Tem uma ideia? Vamos conversar.',
            'footer.emailAria': 'E-mail',
            'footer.linksTitle': 'Links Rápidos',
            'footer.contactTitle': 'Fale Comigo',
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
