</head>
<body>
    <header>
        <div class="container">
            <div class="logo">
                <i class="fas fa-book-open"></i>
                <span>BD Creator</span>
            </div>
            <nav>
                <ul>
                    <li><a href="#features">Fonctionnalités</a></li>
                    <li><a href="#how-it-works">Comment ça marche</a></li>
                    <li><a href="#app">Créer ma BD</a></li>
                    <li><a href="#" id="login-btn">Connexion</a></li>
                </ul>
            </nav>
        </div>
    </header>
<section class="hero">
    <div class="container">
        <h1>Créez des bandes dessinées incroyables avec l'IA</h1>
        <p>Transformez vos idées en scénarios complets, storyboards détaillés et prompts optimisés pour Midjourney en quelques clics.</p>
        <a href="#app" class="btn">Commencer maintenant</a>
    </div>
</section>

<section class="features" id="features">
    <div class="container">
        <div class="section-title">
            <h2>Fonctionnalités</h2>
            <p>Découvrez les outils puissants qui vous aideront à créer des bandes dessinées professionnelles sans effort.</p>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <i class="fas fa-brain"></i>
                <h3>Génération de scénarios</h3>
                <p>Créez des scénarios complets et détaillés à partir de simples mots-clés grâce à notre IA avancée. Obtenez une histoire structurée avec introduction, développement et conclusion.</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-pencil-alt"></i>
                <h3>Storyboard automatique</h3>
                <p>Transformez votre scénario en storyboard détaillé avec des descriptions de pages et de cases. Notre système vous aide à visualiser votre histoire avant même de commencer à dessiner.</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-image"></i>
                <h3>Prompts Midjourney</h3>
                <p>Générez des prompts optimisés pour Midjourney afin de créer des illustrations professionnelles pour chaque case de votre BD. Obtenez des résultats cohérents et de haute qualité.</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-save"></i>
                <h3>Sauvegarde de sessions</h3>
                <p>Sauvegardez votre travail à tout moment et reprenez-le plus tard. Gérez plusieurs projets simultanément et organisez vos idées créatives sans perdre votre progression.</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-language"></i>
                <h3>Support multilingue</h3>
                <p>Créez des scénarios en français et obtenez des prompts en anglais pour une utilisation optimale avec Midjourney. Notre système gère automatiquement les traductions nécessaires.</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-share-alt"></i>
                <h3>Exportation facile</h3>
                <p>Exportez votre travail dans différents formats pour le partager ou l'utiliser avec d'autres outils. Intégrez facilement vos créations dans votre flux de travail créatif.</p>
            </div>
        </div>
    </div>
</section>

<section class="how-it-works" id="how-it-works">
    <div class="container">
        <div class="section-title">
            <h2>Comment ça marche</h2>
            <p>Suivez ces étapes simples pour créer votre bande dessinée avec l'aide de l'IA.</p>
        </div>
        <div class="steps">
            <div class="step">
                <div class="step-number">1</div>
                <h3>Entrez vos mots-clés</h3>
                <p>Commencez par saisir quelques mots-clés ou une brève description de l'histoire que vous souhaitez créer.</p>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <h3>Générez votre scénario</h3>
                <p>Notre IA transforme vos mots-clés en un scénario complet avec une structure narrative cohérente et des personnages intéressants.</p>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <h3>Visualisez le storyboard</h3>
                <p>Explorez le storyboard généré automatiquement qui décompose votre histoire en pages et en cases avec des descriptions détaillées.</p>
            </div>
            <div class="step">
                <div class="step-number">4</div>
                <h3>Utilisez les prompts</h3>
                <p>Copiez les prompts optimisés pour Midjourney et créez des illustrations professionnelles pour chaque case de votre BD.</p>
            </div>
        </div>
    </div>
</section>

<section class="app" id="app">
    <div class="container">
        <div class="section-title">
            <h2>Créez votre BD maintenant</h2>
            <p>Utilisez notre application pour transformer vos idées en bandes dessinées complètes.</p>
        </div>
        
        <div class="session-controls">
            <button class="btn" id="new-session">Nouvelle session</button>
            <button class="btn" id="save-session">Sauvegarder la session</button>
            <button class="btn" id="load-session">Charger une session</button>
        </div>

        <div class="tabs">
            <button class="tab-btn active" data-tab="home">Accueil</button>
            <button class="tab-btn" data-tab="scenario">Scénario</button>
            <button class="tab-btn" data-tab="storyboard">Storyboard</button>
            <button class="tab-btn" data-tab="prompts">Prompts</button>
        </div>

        <div class="tab-content active" id="home-content">
            <h3>Bienvenue dans BD Creator</h3>
            <p>Pour commencer, entrez quelques mots-clés qui décrivent l'histoire que vous souhaitez créer. Notre IA générera un scénario complet, un storyboard détaillé et des prompts optimisés pour Midjourney.</p>
            
            <div class="input-group">
                <label for="keywords">Mots-clés (séparés par des virgules)</label>
                <input type="text" id="keywords" placeholder="Ex: aventure spatiale, robots, amitié">
            </div>
            
            <button class="btn btn-primary" id="generate-scenario">Générer un scénario</button>
            
            <div id="loading-indicator">
                <div class="spinner"></div>
                <p>Génération en cours... Cela peut prendre quelques instants.</p>
            </div>
        </div>

        <div class="tab-content" id="scenario-content">
            <h3>Votre scénario</h3>
            <p>Générez d'abord un scénario depuis l'onglet Accueil.</p>
        </div>

        <div class="tab-content" id="storyboard-content">
            <h3>Votre storyboard</h3>
            <p>Générez d'abord un scénario pour voir le storyboard correspondant.</p>
        </div>

        <div class="tab-content" id="prompts-content">
            <h3>Vos prompts Midjourney</h3>
            <p>Générez d'abord un scénario pour voir les prompts correspondants.</p>
        </div>
    </div>
</section>

<footer>
    <div class="container">
        <p>© 2025 BD Creator. Tous droits réservés.</p>
        <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
        <div class="footer-links">
            <a href="#">À propos</a>
            <a href="#">Confidentialité</a>
            <a href="#">Conditions d'utilisation</a>
            <a href="#">Contact</a>
            <a href="#" id="create-website-btn">Créer mon site web</a>
        </div>
    </div>
</footer>

<script>
    // Simulation de génération d'histoire en français
    // Dans un environnement de production, ceci serait remplacé par l'appel à l'API Transformers.js
    
    document.addEventListener('DOMContentLoaded', function() {
        // Gestion des onglets
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                this.classList.add('active');
                document.getElementById(`${tabId}-content`).classList.add('active');
            });
        });
        
        // Gestion des sessions
        const newSessionBtn = document.getElementById('new-session');
        const saveSessionBtn = document.getElementById('save-session');
        const loadSessionBtn = document.getElementById('load-session');
        
        newSessionBtn.addEventListener('click', function() {
            if (confirm('Êtes-vous sûr de vouloir créer une nouvelle session ? Toutes les données non sauvegardées seront perdues.')) {
                document.getElementById('keywords').value = '';
                document.getElementById('scenario-content').innerHTML = '<h3>Votre scénario</h3><p>Générez d\'abord un scénario depuis l\'onglet Accueil.</p>';
                document.getElementById('storyboard-content').innerHTML = '<h3>Votre storyboard</h3><p>Générez d\'abord un scénario pour voir le storyboard correspondant.</p>';
                document.getElementById('prompts-content').innerHTML = '<h3>Vos prompts Midjourney</h3><p>Générez d\'abord un scénario pour voir les prompts correspondants.</p>';
                
                document.querySelector('[data-tab="home"]').click();
            }
        });
        
        saveSessionBtn.addEventListener('click', function() {
            const sessionData = {
                keywords: document.getElementById('keywords').value,
                scenario: document.getElementById('scenario-content').innerHTML,
                storyboard: document.getElementById('storyboard-content').innerHTML,
                prompts: document.getElementById('prompts-content').innerHTML
            };
            
            const sessionName = prompt('Donnez un nom à cette session:');
            if (sessionName) {
                localStorage.setItem(`bdcreator_session_${sessionName}`, JSON.stringify(sessionData));
                alert(`Session "${sessionName}" sauvegardée avec succès!`);
            }
        });
        
        loadSessionBtn.addEventListener('click', function() {
            const sessions = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith('bdcreator_session_')) {
                    sessions.push(key.replace('bdcreator_session_', ''));
                }
            }
            
            if (sessions.length === 0) {
                alert('Aucune session sauvegardée trouvée.');
                return;
            }
            
            const sessionName = prompt(`Choisissez une session à charger (${sessions.join(', ')}):`, sessions[0]);
            if (sessionName && sessions.includes(sessionName)) {
                const sessionData = JSON.parse(localStorage.getItem(`bdcreator_session_${sessionName}`));
                
                document.getElementById('keywords').value = sessionData.keywords;
                document.getElementById('scenario-content').innerHTML = sessionData.scenario;
                document.getElementById('storyboard-content').innerHTML = sessionData.storyboard;
                document.getElementById('prompts-content').innerHTML = sessionData.prompts;
                
                alert(`Session "${sessionName}" chargée avec succès!`);
            }
        });
        
        // Correction du lien "Create my website"
        document.getElementById('create-website-btn').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Cette fonctionnalité sera bientôt disponible!');
        });
        
        // Génération de scénario
        document.getElementById('generate-scenario').addEventListener('click', function() {
            const keywords = document.getElementById('keywords').value.trim();
            if (!keywords) {
                alert('Veuillez entrer des mots-clés pour générer un scénario.');
                return;
            }
            
            // Afficher l'indicateur de chargement
            document.getElementById('loading-indicator').style.display = 'block';
            
            // Simuler un délai de traitement
            setTimeout(() => {
                // Générer le contenu
                const content = generateStory(keywords);
                
                // Mettre à jour les onglets avec le contenu généré
                document.getElementById('scenario-content').innerHTML = content.scenario;
                document.getElementById('storyboard-content').innerHTML = content.storyboard;
                document.getElementById('prompts-content').innerHTML = content.prompts;
                
                // Masquer l'indicateur de chargement
                document.getElementById('loading-indicator').style.display = 'none';
                
                // Passer à l'onglet Scénario
                document.querySelector('[data-tab="scenario"]').click();
            }, 2000);
        });
        
        // Fonction de génération d'histoire
        function generateStory(keywords) {
            // Créer un facteur d'aléatoire basé sur l'horodatage et un nombre aléatoire
            const randomSeed = Date.now() + Math.floor(Math.random() * 1000000);
            
            // Extraire les mots-clés
            const keywordsList = keywords.split(',').map(k => k.trim());
            
            // Générer un titre aléatoire
            const titles = [
                `Les Chroniques de ${getRandomElement(keywordsList, randomSeed)}`,
                `Le Secret de ${getRandomElement(keywordsList, randomSeed)}`,
                `${getRandomElement(keywordsList, randomSeed)} : Une Aventure Extraordinaire`,
                `La Quête de ${getRandomElement(keywordsList, randomSeed)}`,
                `${getRandomElement(keywordsList, randomSeed)} et le Mystère de ${getRandomElement(keywordsList, randomSeed)}`,
                `L'Odyssée de ${getRandomElement(keywordsList, randomSeed)}`,
                `Le Monde de ${getRandomElement(keywordsList, randomSeed)}`
            ];
            
            const title = getRandomElement(titles, randomSeed);
            
            // Générer des personnages
            const characterTypes = [
                'un héros courageux', 'une héroïne intrépide', 'un scientifique brillant', 
                'une détective perspicace', 'un enfant curieux', 'une artiste talentueuse',
                'un voyageur du temps', 'une guerrière redoutable', 'un magicien puissant',
                'une exploratrice audacieuse', 'un robot sensible', 'une créature mystérieuse'
            ];
            
            const mainCharacter = getRandomElement(characterTypes, randomSeed);
            const secondaryCharacter = getRandomElement(characterTypes, randomSeed + 1);
            
            // Générer des lieux
            const locations = [
                'une cité futuriste', 'un village médiéval', 'une forêt enchantée',
                'une planète lointaine', 'un laboratoire secret', 'une école de magie',
                'un monde parallèle', 'une métropole grouillante', 'un désert infini',
                'une île mystérieuse', 'un vaisseau spatial', 'un royaume oublié'
            ];
            
            const mainLocation = getRandomElement(locations, randomSeed + 2);
            
            // Générer des thèmes
            const themes = [
                'l\'amitié', 'la trahison', 'la rédemption', 'la découverte de soi',
                'le courage face à l\'adversité', 'la lutte contre l\'injustice',
                'la préservation de la nature', 'l\'exploration de l\'inconnu',
                'la réconciliation', 'le pouvoir de l\'imagination', 'la famille',
                'le dépassement de soi'
            ];
            
            const mainTheme = getRandomElement(themes, randomSeed + 3);
            const secondaryTheme = getRandomElement(themes, randomSeed + 4);
            
            // Générer l'introduction
            const introduction = `
            <div class="scenario-section">
                <h3>Introduction</h3>
                <p>Dans ${mainLocation} où ${getRandomElement(keywordsList, randomSeed)} et ${getRandomElement(keywordsList, randomSeed + 5)} se côtoient, nous suivons l'histoire de ${mainCharacter} qui va vivre une aventure extraordinaire. Cette histoire explore les thèmes de ${mainTheme} et ${secondaryTheme}, tout en nous plongeant dans un univers où l'imagination n'a pas de limites.</p>
                
                <p>Notre récit commence par une journée qui semblait ordinaire, mais qui allait changer à jamais le destin de notre protagoniste. Un événement inattendu lié à ${getRandomElement(keywordsList, randomSeed + 6)} bouleverse sa vie paisible, le forçant à quitter sa zone de confort pour se lancer dans une quête périlleuse.</p>
            </div>`;
            
            // Générer l'idée principale
            const mainIdea = `
            <div class="scenario-section">
                <h3>Développement de l'idée principale</h3>
                <p>${title} raconte l'histoire de ${mainCharacter} qui vit dans ${mainLocation}. Un jour, un événement extraordinaire impliquant ${getRandomElement(keywordsList, randomSeed + 7)} vient perturber sa vie quotidienne. Notre protagoniste découvre qu'il possède un lien spécial avec ${getRandomElement(keywordsList, randomSeed + 8)}, ce qui le place au centre d'un conflit plus grand que lui.</p>
                
                <p>Accompagné de ${secondaryCharacter}, il devra surmonter de nombreux obstacles, affronter ses peurs les plus profondes et découvrir la vérité sur ${getRandomElement(keywordsList, randomSeed + 9)}. Au cours de son voyage, il explorera des lieux fascinants, rencontrera des personnages hauts en couleur et apprendra d'importantes leçons sur ${mainTheme}.</p>
                
                <p>Cette histoire explore comment les choix que nous faisons définissent qui nous sommes, et comment le courage peut naître dans les moments les plus inattendus. Elle nous rappelle que même dans les situations les plus désespérées, l'espoir et la persévérance peuvent triompher.</p>
            </div>`;
            
            // Générer le synopsis
            const synopsis = `
            <div class="scenario-section">
                <h3>Synopsis</h3>
                <p>Dans un monde où ${getRandomElement(keywordsList, randomSeed + 10)} est omniprésent, ${mainCharacter} mène une existence tranquille jusqu'au jour où un mystérieux artefact lié à ${getRandomElement(keywordsList, randomSeed + 11)} entre en sa possession. Cet objet attire l'attention de forces obscures qui convoitent son pouvoir pour des raisons néfastes.</p>
                
                <p>Contraint de fuir, notre héros rencontre ${secondaryCharacter} qui détient des connaissances cruciales sur l'artefact et son histoire. Ensemble, ils entreprennent un périple à travers ${mainLocation} et au-delà, poursuivis par un antagoniste redoutable déterminé à s'emparer de l'artefact à tout prix.</p>
                
                <p>Au fil de leur voyage, ils découvrent que l'artefact est en réalité une clé permettant d'accéder à un pouvoir ancien lié à ${getRandomElement(keywordsList, randomSeed + 12)}. Ils comprennent également que leur rencontre n'est pas due au hasard, mais fait partie d'une prophétie ancienne qui prédit que seule leur alliance peut sauver le monde d'une catastrophe imminente.</p>
                
                <p>Après de nombreuses épreuves qui mettent à l'épreuve leur courage et leur amitié, ils parviennent à déjouer les plans du villain et à utiliser l'artefact pour restaurer l'équilibre. Cependant, cette victoire a un prix, et notre héros doit faire un choix déchirant qui changera à jamais le cours de sa vie.</p>
            </div>`;
            
            // Générer les chapitres
            const chapters = [];
            const numChapters = 3 + (randomSeed % 3); // Entre 3 et 5 chapitres
            
            for (let i = 1; i <= numChapters; i++) {
                const chapterEvents = [
                    `la découverte d'un secret lié à ${getRandomElement(keywordsList, randomSeed + i * 10)}`,
                    `une confrontation avec un adversaire qui maîtrise ${getRandomElement(keywordsList, randomSeed + i * 10 + 1)}`,
                    `l'exploration d'un lieu mystérieux où ${getRandomElement(keywordsList, randomSeed + i * 10 + 2)} règne en maître`,
                    `une alliance inattendue avec un personnage lié à ${getRandomElement(keywordsList, randomSeed + i * 10 + 3)}`,
                    `la résolution d'une énigme ancienne concernant ${getRandomElement(keywordsList, randomSeed + i * 10 + 4)}`,
                    `un sacrifice nécessaire pour protéger ${getRandomElement(keywordsList, randomSeed + i * 10 + 5)}`
                ];
                
                const chapterLocations = [
                    `un temple abandonné`, `une cité souterraine`, `une forteresse imprenable`,
                    `un marché grouillant de vie`, `un palais somptueux`, `une bibliothèque ancienne`,
                    `un laboratoire secret`, `une arène de combat`, `un navire volant`,
                    `une prison de haute sécurité`, `un jardin enchanté`, `une tour qui touche les nuages`
                ];
                
                const chapterEvent = getRandomElement(chapterEvents, randomSeed + i * 20);
                const chapterLocation = getRandomElement(chapterLocations, randomSeed + i * 20 + 5);
                
                const chapter = `
                <div class="scenario-chapter">
                    <h4>Chapitre ${i}: ${getRandomChapterTitle(keywordsList, randomSeed + i * 30)}</h4>
                    
                    <p><strong>Synopsis:</strong> Ce chapitre se concentre sur ${chapterEvent}. Nos héros se retrouvent dans ${chapterLocation} où ils doivent faire face à de nouveaux défis et découvrir des indices cruciaux pour leur quête.</p>
                    
                    <p><strong>Séquencier:</strong> Le chapitre commence par l'arrivée des protagonistes à ${chapterLocation}, où ils sont immédiatement confrontés à un obstacle inattendu. Après avoir surmonté cette première difficulté, ils explorent les lieux et découvrent des informations importantes. Une rencontre avec un personnage mystérieux leur révèle de nouvelles perspectives sur leur quête. Le chapitre culmine avec ${chapterEvent}, qui change leur compréhension de la situation et les pousse à prendre une décision importante pour la suite de leur aventure.</p>
                    
                    <p><strong>Découpage:</strong> Ce chapitre se déroule sur 6 pages, avec une moyenne de 5 cases par page. Les moments clés incluent l'arrivée spectaculaire à ${chapterLocation} (page 1), la découverte d'indices cachés (page 3), une confrontation tendue avec un adversaire ou un allié potentiel (page 4-5), et une révélation surprenante qui conclut le chapitre (page 6).</p>
                    
                    <p><strong>Dialogues clés:</strong></p>
                    <ul>
                        <li>"Je n'aurais jamais cru que ${getRandomElement(keywordsList, randomSeed + i * 40)} puisse être lié à tout ceci..."</li>
                        <li>"La prophétie parlait de ${getRandomElement(keywordsList, randomSeed + i * 40 + 1)}, mais pas de ce que nous venons de découvrir!"</li>
                        <li>"Si nous ne trouvons pas ${getRandomElement(keywordsList, randomSeed + i * 40 + 2)} avant le prochain cycle, tout sera perdu."</li>
                        <li>"Je commence à croire que notre rencontre n'était pas un hasard, mais plutôt le début d'une histoire écrite bien avant notre naissance."</li>
                    </ul>
                </div>`;
                
                chapters.push(chapter);
            }
            
            // Générer la conclusion
            const conclusion = `
            <div class="scenario-section">
                <h3>Conclusion</h3>
                <p>Au terme de cette aventure extraordinaire, notre héros a non seulement accompli sa quête initiale, mais a également découvert des vérités profondes sur lui-même et sur le monde qui l'entoure. La confrontation finale avec l'antagoniste révèle que le véritable enjeu n'était pas tant l'artefact lui-même, mais ce qu'il représente: le pouvoir de ${getRandomElement(keywordsList, randomSeed + 100)}.</p>
                
                <p>Après un combat épique où toutes les forces en présence donnent leur maximum, notre héros parvient à triompher grâce à sa compréhension nouvellement acquise de ${getRandomElement(keywordsList, randomSeed + 101)} et à l'aide précieuse de ses alliés. L'équilibre est restauré, mais le monde ne sera plus jamais le même.</p>
                
                <p>Dans les dernières pages, nous voyons notre protagoniste contemplant l'horizon, transformé par son voyage. Il a appris que ${mainTheme} et ${secondaryTheme} sont des forces qui peuvent changer le monde, et que chaque individu a le pouvoir de faire une différence. L'histoire se termine sur une note d'espoir, suggérant que de nouvelles aventures attendent nos héros, mais qu'ils sont désormais prêts à y faire face ensemble.</p>
                
                <p>Cette conclusion rappelle au lecteur que les véritables trésors ne sont pas les objets que nous cherchons, mais les leçons que nous apprenons et les liens que nous tissons en chemin. ${title} est ainsi une célébration de l'esprit humain et de sa capacité à surmonter les obstacles les plus insurmontables.</p>
            </div>`;
            
            // Assembler le scénario complet
            const fullScenario = `
            <h3>${title}</h3>
            ${introduction}
            ${mainIdea}
            ${synopsis}
            ${chapters.join('')}
            ${conclusion}`;
            
            // Générer le storyboard
            const storyboard = generateStoryboard(title, keywordsList, randomSeed);
            
            // Générer les prompts Midjourney
            const prompts = generatePrompts(title, keywordsList, randomSeed);
            
            return {
                scenario: fullScenario,
                storyboard: storyboard,
                prompts: prompts
            };
        }
        
        // Fonction pour générer un titre de chapitre aléatoire
        function getRandomChapterTitle(keywords, seed) {
            const titles = [
                `La Découverte de ${getRandomElement(keywords, seed)}`,
                `Le Secret de ${getRandomElement(keywords, seed + 1)}`,
                `La Confrontation`,
                `L'Alliance Inattendue`,
                `La Trahison`,
                `La Révélation`,
                `Le Voyage vers ${getRandomElement(keywords, seed + 2)}`,
                `L'Épreuve du ${getRandomElement(keywords, seed + 3)}`,
                `La Prophétie Accomplie`,
                `Le Choix Impossible`,
                `La Dernière Chance`,
                `L'Héritage de ${getRandomElement(keywords, seed + 4)}`
            ];
            
            return getRandomElement(titles, seed);
        }
        
        // Fonction pour générer le storyboard
        function generateStoryboard(title, keywords, seed) {
            let storyboard = `<h3>Storyboard pour "${title}"</h3>`;
            
            // Générer 6-8 pages
            const numPages = 6 + (seed % 3); // Entre 6 et 8 pages
            
            for (let i = 1; i <= numPages; i++) {
                const numCases = 3 + (seed % 5); // Entre 3 et 7 cases par page
                
                storyboard += `
                <div class="storyboard-page">
                    <h4>Page ${i}</h4>
                    <p><strong>Description générale:</strong> ${getRandomPageDescription(keywords, seed + i * 100)}</p>
                    <p><strong>Ambiance:</strong> ${getRandomAmbiance(seed + i * 100 + 50)}</p>
                    <p><strong>Cases:</strong></p>
                    <ol>`;
                
                for (let j = 1; j <= numCases; j++) {
                    storyboard += `
                        <li>
                            <p><strong>Case ${j}:</strong> ${getRandomCaseDescription(keywords, seed + i * 1000 + j * 10)}</p>
                            <p><strong>Personnages:</strong> ${getRandomCharacterDescription(seed + i * 1000 + j * 10 + 5)}</p>
                            <p><strong>Dialogue:</strong> "${getRandomDialogue(keywords, seed + i * 1000 + j * 10 + 7)}"</p>
                        </li>`;
                }
                
                storyboard += `
                    </ol>
                </div>`;
            }
            
            return storyboard;
        }
        
        // Fonction pour générer les prompts Midjourney
        function generatePrompts(title, keywords, seed) {
            let promptsHTML = `<h3>Prompts Midjourney pour "${title}"</h3>`;
            
            // Générer 5-8 prompts
            const numPrompts = 5 + (seed % 4); // Entre 5 et 8 prompts
            
            for (let i = 1; i <= numPrompts; i++) {
                const promptScene = getRandomPromptScene(keywords, seed + i * 200);
                const promptStyle = getRandomPromptStyle(seed + i * 200 + 50);
                const promptMood = getRandomPromptMood(seed + i * 200 + 100);
                
                // Générer le prompt en anglais
                const englishPrompt = `${promptScene}, ${promptStyle}, ${promptMood}, detailed, high quality, 4k`;
                
                promptsHTML += `
                <div class="prompt-item">
                    <h4>Prompt ${i}: ${getRandomElement(keywords, seed + i * 300)}</h4>
                    <p><strong>Description en français:</strong> Une illustration montrant ${promptScene}, avec un style ${promptStyle} et une ambiance ${promptMood}.</p>
                    <p><strong>Prompt Midjourney (en anglais):</strong></p>
                    <pre>${englishPrompt}</pre>
                </div>`;
            }
            
            return promptsHTML;
        }
        
        // Fonctions utilitaires pour la génération aléatoire
        function getRandomElement(array, seed) {
            const index = Math.abs(Math.sin(seed) * 10000) % array.length;
            return array[Math.floor(index)];
        }
        
        function getRandomPageDescription(keywords, seed) {
            const descriptions = [
                `Cette page introduit le décor principal et présente ${getRandomElement(keywords, seed)} dans son environnement naturel.`,
                `Un moment de tension où les personnages découvrent un indice crucial lié à ${getRandomElement(keywords, seed + 1)}.`,
                `Une scène d'action intense où les protagonistes affrontent des adversaires utilisant ${getRandomElement(keywords, seed + 2)}.`,
                `Un moment émotionnel où les personnages réfléchissent sur leur quête et leur lien avec ${getRandomElement(keywords, seed + 3)}.`,
                `Une révélation surprenante concernant l'origine de ${getRandomElement(keywords, seed + 4)} qui change tout.`,
                `Une scène de transition montrant le voyage des héros vers un nouveau lieu où ${getRandomElement(keywords, seed + 5)} est omniprésent.`,
                `Un flashback révélant l'histoire ancienne de ${getRandomElement(keywords, seed + 6)} et son importance dans l'intrigue.`,
                `La préparation d'un plan audacieux impliquant l'utilisation de ${getRandomElement(keywords, seed + 7)} de manière inattendue.`
            ];
            
            return getRandomElement(descriptions, seed);
        }
        
        function getRandomAmbiance(seed) {
            const ambiances = [
                'mystérieuse et inquiétante', 'lumineuse et pleine d\'espoir',
                'tendue et oppressante', 'mélancolique et nostalgique',
                'dynamique et énergique', 'sereine et contemplative',
                'chaotique et désordonnée', 'majestueuse et impressionnante',
                'intime et émotionnelle', 'étrange et surréaliste'
            ];
            
            return getRandomElement(ambiances, seed);
        }
        
        function getRandomCaseDescription(keywords, seed) {
            const descriptions = [
                `Gros plan sur un personnage réagissant à la découverte de ${getRandomElement(keywords, seed)}.`,
                `Vue d'ensemble d'un paysage où ${getRandomElement(keywords, seed + 1)} domine l'horizon.`,
                `Séquence d'action montrant l'utilisation spectaculaire de ${getRandomElement(keywords, seed + 2)}.`,
                `Moment intime entre deux personnages discutant de l'importance de ${getRandomElement(keywords, seed + 3)}.`,
                `Plan détaillé d'un artefact ou objet lié à ${getRandomElement(keywords, seed + 4)}.`,
                `Confrontation entre le protagoniste et un adversaire, avec ${getRandomElement(keywords, seed + 5)} au centre du conflit.`,
                `Scène de révélation où un secret concernant ${getRandomElement(keywords, seed + 6)} est dévoilé.`,
                `Moment de transformation où un personnage établit une connexion avec ${getRandomElement(keywords, seed + 7)}.`
            ];
            
            return getRandomElement(descriptions, seed);
        }
        
        function getRandomCharacterDescription(seed) {
            const descriptions = [
                'Le protagoniste affiche une expression déterminée, prêt à affronter le danger.',
                'Le personnage secondaire semble inquiet, ses yeux scrutant les environs avec méfiance.',
                'L\'antagoniste arbore un sourire malveillant, savourant sa position de force.',
                'Un nouveau personnage mystérieux observe la scène depuis les ombres.',
                'Le mentor du héros montre une expression sage et bienveillante.',
                'Le protagoniste est blessé mais résolu, refusant d\'abandonner malgré l\'adversité.',
                'Deux personnages se font face, leurs expressions révélant une tension palpable.',
                'Un groupe de personnages collabore, chacun apportant ses compétences uniques.',
                'Le personnage principal est en pleine réflexion, son regard perdu dans le vide.',
                'Un personnage secondaire révèle sa vraie nature, surprenant tous ceux autour de lui.'
            ];
            
            return getRandomElement(descriptions, seed);
        }
        
        function getRandomDialogue(keywords, seed) {
            const dialogues = [
                `Je n'aurais jamais cru que ${getRandomElement(keywords, seed)} puisse être aussi puissant.`,
                `Si nous ne trouvons pas ${getRandomElement(keywords, seed + 1)} avant le coucher du soleil, tout sera perdu.`,
                `Tu ne comprends pas l'importance de ${getRandomElement(keywords, seed + 2)}, n'est-ce pas?`,
                `J'ai consacré ma vie à étudier ${getRandomElement(keywords, seed + 3)}, et maintenant tout prend sens.`,
                `Nous devons protéger ${getRandomElement(keywords, seed + 4)} à tout prix, l'avenir en dépend.`,
                `La prophétie parlait de ${getRandomElement(keywords, seed + 5)}, mais pas de ce que nous venons de découvrir!`,
                `Je commence à croire que ${getRandomElement(keywords, seed + 6)} n'est qu'une partie d'un mystère bien plus grand.`,
                `Ensemble, nous pouvons utiliser ${getRandomElement(keywords, seed + 7)} pour changer le cours de l'histoire.`
            ];
            
            return getRandomElement(dialogues, seed);
        }
        
        function getRandomPromptScene(keywords, seed) {
            // En anglais pour Midjourney
            const scenes = [
                `a hero discovering ${translateToEnglish(getRandomElement(keywords, seed))} in a mysterious temple`,
                `a battle scene with ${translateToEnglish(getRandomElement(keywords, seed + 1))} in the background`,
                `a character using ${translateToEnglish(getRandomElement(keywords, seed + 2))} powers`,
                `a majestic landscape with ${translateToEnglish(getRandomElement(keywords, seed + 3))} as the focal point`,
                `two characters discussing the importance of ${translateToEnglish(getRandomElement(keywords, seed + 4))}`,
                `a close-up of an ancient artifact related to ${translateToEnglish(getRandomElement(keywords, seed + 5))}`,
                `a character transforming due to the influence of ${translateToEnglish(getRandomElement(keywords, seed + 6))}`,
                `a dramatic confrontation between good and evil with ${translateToEnglish(getRandomElement(keywords, seed + 7))} at stake`
            ];
            
            return getRandomElement(scenes, seed);
        }
        
        function getRandomPromptStyle(seed) {
            // En anglais pour Midjourney
            const styles = [
                'comic book style', 'manga art', 'realistic digital painting',
                'watercolor illustration', 'cinematic rendering', 'concept art',
                'fantasy illustration', 'sci-fi art', 'steampunk aesthetic',
                'noir comic style', 'vibrant cartoon', 'detailed line art'
            ];
            
            return getRandomElement(styles, seed);
        }
        
        function getRandomPromptMood(seed) {
            // En anglais pour Midjourney
            const moods = [
                'dramatic lighting', 'mysterious atmosphere', 'epic scene',
                'emotional moment', 'tense standoff', 'serene environment',
                'dynamic action', 'heroic pose', 'ominous setting',
                'hopeful dawn', 'magical aura', 'dystopian world'
            ];
            
            return getRandomElement(moods, seed);
        }
        
        // Fonction simple de traduction (simulation)
        function translateToEnglish(word) {
            // Dans un environnement réel, on utiliserait une API de traduction
            // Ici, on simule une traduction basique
            const translations = {
                'aventure': 'adventure',
                'spatiale': 'space',
                'robots': 'robots',
                'amitié': 'friendship',
                'magie': 'magic',
                'dragon': 'dragon',
                'futur': 'future',
                'mystère': 'mystery',
                'voyage': 'journey',
                'temps': 'time',
                'héros': 'hero',
                'bataille': 'battle',
                'amour': 'love',
                'science': 'science',
                'fiction': 'fiction',
                'fantastique': 'fantasy',
                'médiéval': 'medieval',
                'moderne': 'modern',
                'apocalypse': 'apocalypse',
                'nature': 'nature',
                'technologie': 'technology',
                'histoire': 'story',
                'aventurier': 'adventurer',
                'explorateur': 'explorer',
                'guerrier': 'warrior',
                'magicien': 'wizard',
                'princesse': 'princess',
                'roi': 'king',
                'reine': 'queen',
                'chevalier': 'knight',
                'monstre': 'monster',
                'créature': 'creature',
                'alien': 'alien',
                'extraterrestre': 'extraterrestrial',
                'vaisseau': 'spaceship',
                'épée': 'sword',
                'bouclier': 'shield',
                'arme': 'weapon',
                'pouvoir': 'power',
                'forêt': 'forest',
                'montagne': 'mountain',
                'océan': 'ocean',
                'désert': 'desert',
                'ville': 'city',
                'château': 'castle',
                'planète': 'planet',
                'galaxie': 'galaxy',
                'univers': 'universe',
                'dimension': 'dimension',
                'portail': 'portal',
                'quête': 'quest',
                'mission': 'mission',
                'destin': 'destiny',
                'prophétie': 'prophecy',
                'légende': 'legend',
                'mythe': 'myth',
                'ancien': 'ancient',
                'futuriste': 'futuristic',
                'cyberpunk': 'cyberpunk',
                'steampunk': 'steampunk',
                'post-apocalyptique': 'post-apocalyptic'
            };
            
            // Si la traduction existe, la retourner, sinon retourner le mot original
            return translations[word.toLowerCase()] || word;
        }
    });
