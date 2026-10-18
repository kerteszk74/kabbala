let curMode = 'quiz';
let curLesson = '1';
let curLang = 'hu';
let curIdx = 0;
let quizScore = 0;

const lessonTitles = {
  hu: [
    'Az emberi természet',
    'A Kabbala Bölcsességének lényege',
    'A háromtengelyes modell',
    'A valóság érzékelése',
    'A Kabbala bölcsességének alkalmazása',
    'A Kabbala Bölcsességének fejlődése a nemzedékek során',
    'Szabad akarat',
    'Szabad akarat (2. rész)',
    'Nincs más Rajta kívül',
    'Test és lélek',
    'A Kabbala Bölcsességének egyedisége',
    'A Közvetlen Fény négy fázisa',
    'A töréstől a korrekcióig',
    'A Tanár nagysága a Kabbala Bölcsességében',
    'A Tíz Szfira Tanulmánya',
    'A Gondviselésben rejlő ellentmondás',
    'Egy ellentétes világot fogok látni',
    'Az ima a Kabbala szerint',
    'Válaszd az életet!',
    'Az elrejtéstől a feltárulásig',
    'A teremtés gondolata',
    'Tzimtzum Aleph és Masach',
    'A Felső Világok felépítése',
    'A Felső világok szerkezete',
    'A Felső Világok szerkezete és a segítségnyújtás törvénye',
    'Az Adam Kadmon világ öt Partzufja'
  ],
  en: [
    'Human Nature',
    'The Essence of the Wisdom of Kabbalah',
    'The Three-Axis Model',
    'Perception of Reality',
    'Applying the Wisdom of Kabbalah',
    'The Development of the Wisdom of Kabbalah Through the Generations',
    'Free Will',
    'Free Will (Part 2)',
    'There Is None Else Besides Him',
    'Body and Soul',
    'The Uniqueness of the Wisdom of Kabbalah',
    'The Four Phases of the Direct Light',
    'From the Shattering to Correction',
    'The Greatness of the Teacher in the Wisdom of Kabbalah',
    'The Study of the Ten Sefirot',
    'The Contradiction in Providence',
    'I Will See an Opposite World',
    'Prayer According to Kabbalah',
    'Choose Life!',
    'From Concealment to Revelation',
    'The Thought of Creation',
    'Tzimtzum Aleph and Masach',
    'The Structure of the Upper Worlds',
    'The Structure of the Higher Worlds',
    'The Structure of the Upper Worlds and the Law of Assistance',
    'The Five Partzufim of the World of Adam Kadmon'
  ],
  he: [
    'הטבע האנושי',
    'מהות חכמת הקבלה',
    'מודל שלושת הצירים',
    'תפיסת המציאות',
    'יישום חכמת הקבלה',
    'התפתחות חכמת הקבלה לאורך הדורות',
    'בחירה חופשית',
    'בחירה חופשית (חלק 2)',
    'אין עוד מלבדו',
    'גוף ונשמה',
    'ייחודיות חכמת הקבלה',
    'ארבע בחינות של אור ישר',
    'מהשבירה לתיקון',
    'גדלות המורה בחכמת הקבלה',
    'תלמוד עשר הספירות',
    'הסתירה שבהשגחה',
    'עולם הפוך אראה',
    'תפילה לפי הקבלה',
    'בחר בחיים!',
    'מהסתר לגילוי',
    'מחשבת הבריאה',
    'צמצום אלף ומסך',
    'מבנה העולמות העליונים',
    'מבנה העולמות העליונים',
        'מבנה העולמות העליונים וחוק הסיוע',
        'חמשת הפרצופים של עולם אדם קדמון'
  ],
  ru: [
    'Человеческая природа',
    'Суть науки каббала',
    'Модель трёх осей',
    'Восприятие реальности',
    'Применение науки каббала',
    'Развитие науки каббала на протяжении поколений',
    'Свободная воля',
    'Свободная воля (часть 2)',
    'Нет никого, кроме Него',
    'Тело и душа',
    'Уникальность науки каббала',
    'Четыре стадии прямого света',
    'От разбиения к исправлению',
    'Величие учителя в науке каббала',
    'Учение о десяти сфирот',
    'Противоречие в управлении',
    'Увижу я мир наоборот',
    'Молитва согласно каббале',
    'Выбери жизнь!',
    'От сокрытия к раскрытию',
    'Замысел творения',
    'Цимцум Алеф и Масах',
    'Строение Высших миров',
    'Структура Высших миров',
    'Структура Высших миров и закон помощи',
    'Пять парцуфим мира Адам Кадмон'
  ],
  de: [
    'Die menschliche Natur',
    'Das Wesen der Weisheit der Kabbala',
    'Das Drei-Achsen-Modell',
    'Die Wahrnehmung der Wirklichkeit',
    'Die Anwendung der Weisheit der Kabbala',
    'Die Entwicklung der Weisheit der Kabbala im Laufe der Generationen',
    'Der freie Wille',
    'Der freie Wille (Teil 2)',
    'Es gibt nichts außer Ihm',
    'Körper und Seele',
    'Die Einzigartigkeit der Weisheit der Kabbala',
    'Die vier Phasen des direkten Lichts',
    'Vom Zerbrechen zur Korrektur',
    'Die Größe des Lehrers in der Weisheit der Kabbala',
    'Das Studium der Zehn Sefirot',
    'Der Widerspruch in der Vorsehung',
    'Ich werde eine umgekehrte Welt sehen',
    'Das Gebet gemäß der Kabbala',
    'Wähle das Leben!',
    'Von der Verhüllung zur Offenbarung',
    'Der Schöpfungsgedanke',
    'Tzimtzum Aleph und Masach',
    'Der Aufbau der Oberen Welten',
    'Die Struktur der Höheren Welten',
    'Die Struktur der Höheren Welten und das Gesetz der Hilfeleistung',
    'Die fünf Partzufim der Welt Adam Kadmon'
  ],
  es: [
    'La naturaleza humana',
    'La esencia de la sabiduría de la Cábala',
    'El modelo de tres ejes',
    'La percepción de la realidad',
    'La aplicación de la sabiduría de la Cábala',
    'El desarrollo de la sabiduría de la Cábala a través de las generaciones',
    'El libre albedrío',
    'El libre albedrío (parte 2)',
    'No hay nadie más aparte de Él',
    'Cuerpo y alma',
    'La singularidad de la sabiduría de la Cábala',
    'Las cuatro fases de la Luz Directa',
    'De la ruptura a la corrección',
    'La grandeza del maestro en la sabiduría de la Cábala',
    'El estudio de las Diez Sefirot',
    'La contradicción en la Providencia',
    'Veré un mundo al revés',
    'La oración según la Cábala',
    '¡Elige la vida!',
    'Del ocultamiento a la revelación',
    'El pensamiento de la creación',
    'Tzimtzum Aleph y Masach',
    'La estructura de los Mundos Superiores',
    'La estructura de los Mundos Superiores',
        'La estructura de los Mundos Superiores y la ley de la ayuda',
        'Los cinco Partzufim del mundo de Adam Kadmon'
      ],
  fr: [
    'La nature humaine',
    'L’essence de la sagesse de la Kabbale',
    'Le modèle à trois axes',
    'La perception de la réalité',
    'L’application de la sagesse de la Kabbale',
    'Le développement de la sagesse de la Kabbale au fil des générations',
    'Le libre arbitre',
    'Le libre arbitre (2e partie)',
    'Il n’y a rien en dehors de Lui',
    'Le corps et l’âme',
    'La singularité de la sagesse de la Kabbale',
    'Les quatre phases de la Lumière directe',
    'De la brisure à la correction',
    'La grandeur du maître dans la sagesse de la Kabbale',
    'L’étude des dix Sefirot',
    'La contradiction dans la Providence',
    'Je verrai un monde à l’envers',
    'La prière selon la Kabbale',
    'Choisis la vie !',
    'De la dissimulation à la révélation',
    'La pensée de la création',
    'Tzimtzum Aleph et Masach',
    'La structure des Mondes Supérieurs',
    'La structure des Mondes Supérieurs',
        'La structure des Mondes Supérieurs et la loi de l\'assistance',
        'Les cinq Partzoufim du monde d\'Adam Kadmon'
      ],
  it: [
    'La natura umana',
    'L’essenza della saggezza della Kabbalah',
    'Il modello a tre assi',
    'La percezione della realtà',
    'L’applicazione della saggezza della Kabbalah',
    'Lo sviluppo della saggezza della Kabbalah attraverso le generazioni',
    'Il libero arbitrio',
    'Il libero arbitrio (parte 2)',
    'Non c’è nessuno all’infuori di Lui',
    'Corpo e anima',
    'L’unicità della saggezza della Kabbalah',
    'Le quattro fasi della Luce Diretta',
    'Dalla rottura alla correzione',
    'La grandezza dell’insegnante nella saggezza della Kabbalah',
    'Lo studio delle Dieci Sefirot',
    'La contraddizione nella Provvidenza',
    'Vedrò un mondo capovolto',
    'La preghiera secondo la Kabbalah',
    'Scegli la vita!',
    'Dall’occultamento alla rivelazione',
    'Il pensiero della creazione',
    'Tzimtzum Aleph e Masach',
    'La struttura dei Mondi Superiori',
    'L\'ordinamento dei Mondi Superiori',
    'L\'ordinamento dei Mondi Superiori e la legge dell\'assistenza',
    'I cinque Partzufim del mondo di Adam Kadmon'
  ],
  pt: [
    'A natureza humana',
    'A essência da sabedoria da Cabalá',
    'O modelo de três eixos',
    'A percepção da realidade',
    'A aplicação da sabedoria da Cabalá',
    'O desenvolvimento da sabedoria da Cabalá ao longo das gerações',
    'Livre-arbítrio',
    'Livre-arbítrio (parte 2)',
    'Não há ninguém além Dele',
    'Corpo e alma',
    'A singularidade da sabedoria da Cabalá',
    'As quatro fases da Luz Direta',
    'Da quebra à correção',
    'A grandeza do professor na sabedoria da Cabalá',
    'O estudo das Dez Sefirot',
    'A contradição na Providência',
    'Verei um mundo ao contrário',
    'A oração segundo a Cabalá',
    'Escolha a vida!',
    'Do ocultamento à revelação',
    'O pensamento da criação',
    'Tzimtzum Aleph e Masach',
    'A estrutura dos Mundos Superiores',
    'A estrutura dos Mundos Superiores',
        'A estrutura dos Mundos Superiores e a lei da assistência',
        'Os cinco Partzufim do mundo de Adam Kadmon'
      ],
  uk: [
    'Людська природа',
    'Суть мудрості Кабали',
    'Модель трьох осей',
    'Сприйняття реальності',
    'Застосування мудрості Кабали',
    'Розвиток мудрості Кабали впродовж поколінь',
    'Свобода вибору',
    'Свобода вибору (частина 2)',
    'Немає нікого, крім Нього',
    'Тіло і душа',
    'Унікальність мудрості Кабали',
    'Чотири стадії прямого світла',
    'Від розбиття до виправлення',
    'Велич учителя в мудрості Кабали',
    'Вивчення Десяти сфірот',
    'Суперечність у Провидінні',
    'Побачу я світ навиворіт',
    'Молитва згідно з Кабалою',
    'Обери життя!',
    'Від приховання до розкриття',
    'Задум творіння',
    'Цимцум Алеф і Масах',
    'Будова Вищих світів',
    'Структура Вищих світів',
    'Структура Вищих світів і закон допомоги',
    'П’ять парцуфім світу Адам Кадмон'
  ],
  pl: [
    'Ludzka natura',
    'Istota mądrości Kabały',
    'Model trzech osi',
    'Postrzeganie rzeczywistości',
    'Zastosowanie mądrości Kabały',
    'Rozwój mądrości Kabały na przestrzeni pokoleń',
    'Wolna wola',
    'Wolna wola (część 2)',
    'Nie ma nikogo oprócz Niego',
    'Ciało i dusza',
    'Wyjątkowość mądrości Kabały',
    'Cztery fazy Światła Prostego',
    'Od rozbicia do naprawy',
    'Wielkość nauczyciela w mądrości Kabały',
    'Nauka o dziesięciu Sefirot',
    'Sprzeczność w Opatrzności',
    'Ujrzę świat na opak',
    'Modlitwa według Kabały',
    'Wybierz życie!',
    'Od ukrycia do objawienia',
    'Myśl stworzenia',
    'Tzimtzum Aleph i Masach',
    'Struktura Wyższych Światów',
    'Struktura Wyższych Światów',
        'Struktura Wyższych Światów i prawo pomocy',
        'Pięć Partzufim świata Adam Kadmon'
      ],
  ro: [
    'Natura umană',
    'Esența înțelepciunii Cabalei',
    'Modelul cu trei axe',
    'Percepția realității',
    'Aplicarea înțelepciunii Cabalei',
    'Dezvoltarea înțelepciunii Cabalei de-a lungul generațiilor',
    'Liberul arbitru',
    'Liberul arbitru (partea a 2-a)',
    'Nu există nimeni în afară de El',
    'Trupul și sufletul',
    'Unicitatea înțelepciunii Cabalei',
    'Cele patru faze ale Luminii Directe',
    'De la spargere la corectare',
    'Măreția profesorului în înțelepciunea Cabalei',
    'Studiul celor Zece Sefirot',
    'Contradicția în Providență',
    'Voi vedea o lume pe dos',
    'Rugăciunea conform Cabalei',
    'Alege viața!',
    'De la ascundere la revelare',
    'Gândul creației',
    'Tzimtzum Aleph și Masach',
    'Structura Lumilor Superioare',
    'Alcătuirea Lumilor Superioare',
    'Alcătuirea Lumilor Superioare și legea ajutorării',
    'Cele cinci Partzufim ale lumii Adam Kadmon'
  ],
  bg: [
    'Човешката природа',
    'Същността на науката кабала',
    'Моделът с три оси',
    'Възприемане на реалността',
    'Прилагане на науката кабала',
    'Развитието на науката кабала през поколенията',
    'Свободна воля',
    'Свободна воля (част 2)',
    'Няма никой освен Него',
    'Тяло и душа',
    'Уникалността на науката кабала',
    'Четирите фази на Пряката светлина',
    'От разпадането към поправянето',
    'Величието на учителя в науката кабала',
    'Изучаване на Десетте сфирот',
    'Противоречието в Провидението',
    'Ще видя обърнат свят',
    'Молитвата според кабала',
    'Избери живота!',
    'От скриването към разкриването',
    'Замисълът на творението',
    'Цимцум Алеф и Масах',
    'Устройството на Висшите светове',
    'Структурата на Висшите светове',
    'Структурата на Висшите светове и законът за помощта',
    'Петте парцуфим на света Адам Кадмон'
  ],
  cs: [
    'Lidská přirozenost',
    'Podstata moudrosti kabaly',
    'Model tří os',
    'Vnímání reality',
    'Uplatnění moudrosti kabaly',
    'Vývoj moudrosti kabaly napříč generacemi',
    'Svobodná vůle',
    'Svobodná vůle (2. část)',
    'Není nikdo kromě Něj',
    'Tělo a duše',
    'Jedinečnost moudrosti kabaly',
    'Čtyři fáze Přímého světla',
    'Od rozbití k nápravě',
    'Velikost učitele v moudrosti kabaly',
    'Studium Deseti sefirot',
    'Rozpor v Prozřetelnosti',
    'Uvidím svět naruby',
    'Modlitba podle kabaly',
    'Zvol si život!',
    'Od skrytí k odhalení',
    'Myšlenka stvoření',
    'Tzimtzum Aleph a Masach',
    'Struktura Vyšších světů',
    'Struktura Vyšších světů',
        'Struktura Vyšších světů a zákon pomoci',
        'Pět Partzufim světa Adam Kadmon'
      ],
  hr: [
    'Ljudska priroda',
    'Bit mudrosti Kabale',
    'Model s tri osi',
    'Percepcija stvarnosti',
    'Primjena mudrosti Kabale',
    'Razvoj mudrosti Kabale kroz generacije',
    'Slobodna volja',
    'Slobodna volja (2. dio)',
    'Nema nikoga osim Njega',
    'Tijelo i duša',
    'Jedinstvenost mudrosti Kabale',
    'Četiri faze Izravnog Svjetla',
    'Od razbijanja do ispravka',
    'Veličina učitelja u mudrosti Kabale',
    'Studij Deset Sefirota',
    'Proturječje u Providnosti',
    'Vidjet ću obrnut svijet',
    'Molitva prema Kabali',
    'Izaberi život!',
    'Od skrivenosti do otkrivanja',
    'Misao stvaranja',
    'Tzimtzum Aleph i Masach',
    'Struktura Viših svjetova',
    'Ustroj Viših svjetova',
    'Ustroj Viših svjetova i zakon pomoći',
    'Pet Partzufim svijeta Adam Kadmon'
  ],
  sr: [
    'Људска природа',
    'Суштина мудрости Кабале',
    'Модел три осе',
    'Перцепција стварности',
    'Примена мудрости Кабале',
    'Развој мудрости Кабале кроз генерације',
    'Слободна воља',
    'Слободна воља (2. део)',
    'Нема никога осим Њега',
    'Тело и душа',
    'Јединственост мудрости Кабале',
    'Четири фазе Директне Светлости',
    'Од разбијања до исправке',
    'Величина учитеља у мудрости Кабале',
    'Проучавање Десет Сфирота',
    'Противречност у Провиђењу',
    'Видећу свет наопако',
    'Молитва према Кабали',
    'Изабери живот!',
    'Од скривања до откривања',
    'Мисао стварања',
    'Цимцум Алеф и Масах',
    'Структура Виших светова',
    'Структура Виших светова',
        'Структура Виших светова и закон помоћи',
        'Пет Парцуфим света Адам Кадмон'
      ],
  tr: [
    'İnsan doğası',
    'Kabala bilgeliğinin özü',
    'Üç eksenli model',
    'Gerçekliğin algılanması',
    'Kabala bilgeliğinin uygulanması',
    'Kabala bilgeliğinin nesiller boyunca gelişimi',
    'Özgür irade',
    'Özgür irade (2. bölüm)',
    'O’ndan Başka Hiçbir Şey Yok',
    'Beden ve ruh',
    'Kabala bilgeliğinin benzersizliği',
    'Doğrudan Işığın dört aşaması',
    'Kırılmadan düzeltmeye',
    'Kabala bilgeliğinde öğretmenin yüceliği',
    'On Sefirot’un incelenmesi',
    'Yaradan’ın yönetimindeki çelişki',
    'Tersine bir dünya göreceğim',
    'Kabala’ya göre dua',
    'Hayatı seç!',
    'Gizlenmeden açığa çıkışa',
    'Yaratılış düşüncesi',
    'Tzimtzum Aleph ve Masach',
    'Yüksek Dünyaların yapısı',
    'Yüksek Dünyaların düzeni',
    'Yüksek Dünyaların düzeni ve yardım yasası',
    'Adam Kadmon dünyasının beş Partzufu'
  ],
  el: [
    'Η ανθρώπινη φύση',
    'Η ουσία της σοφίας της Καμπάλα',
    'Το μοντέλο των τριών αξόνων',
    'Η αντίληψη της πραγματικότητας',
    'Η εφαρμογή της σοφίας της Καμπάλα',
    'Η εξέλιξη της σοφίας της Καμπάλα μέσα στις γενιές',
    'Ελεύθερη βούληση',
    'Ελεύθερη βούληση (μέρος 2)',
    'Δεν υπάρχει κανείς εκτός από Εκείνον',
    'Σώμα και ψυχή',
    'Η μοναδικότητα της σοφίας της Καμπάλα',
    'Οι τέσσερις φάσεις του Άμεσου Φωτός',
    'Από τη θραύση στη διόρθωση',
    'Το μεγαλείο του δασκάλου στη σοφία της Καμπάλα',
    'Η μελέτη των Δέκα Σεφιρότ',
    'Η αντίφαση στην Πρόνοια',
    'Θα δω έναν ανάποδο κόσμο',
    'Η προσευχή σύμφωνα με την Καμπάλα',
    'Διάλεξε τη ζωή!',
    'Από την απόκρυψη στην αποκάλυψη',
    'Η σκέψη της δημιουργίας',
    'Τσιμτσούμ Αλέφ και Μασάχ',
    'Η δομή των Ανώτερων Κόσμων',
    'Η διάρθρωση των Ανώτερων Κόσμων',
    'Η διάρθρωση των Ανώτερων Κόσμων και ο νόμος της βοήθειας',
    'Τα πέντε Παρτσουφίμ του κόσμου Αντάμ Καντμόν'
  ],
  nl: [
    'De menselijke natuur',
    'De essentie van de wijsheid van Kabbala',
    'Het drie-assenmodel',
    'De waarneming van de werkelijkheid',
    'De toepassing van de wijsheid van Kabbala',
    'De ontwikkeling van de wijsheid van Kabbala door de generaties heen',
    'De vrije wil',
    'De vrije wil (deel 2)',
    'Er is niets anders dan Hij',
    'Lichaam en ziel',
    'Het unieke van de wijsheid van Kabbala',
    'De vier fasen van het Rechte Licht',
    'Van de breking naar de correctie',
    'De grootheid van de leraar in de wijsheid van Kabbala',
    'De studie van de Tien Sefirot',
    'De tegenstrijdigheid in de Voorzienigheid',
    'Ik zal een omgekeerde wereld zien',
    'Gebed volgens Kabbala',
    'Kies het leven!',
    'Van verhulling naar onthulling',
    'De gedachte van de schepping',
    'Tzimtzum Aleph en Masach',
    'De structuur van de Hogere Werelden',
    'De structuur van de Hogere Werelden',
        'De structuur van de Hogere Werelden en de wet van de hulp',
        'De vijf Partzufim van de wereld Adam Kadmon'
      ],
  da: [
    'Menneskets natur',
    'Kabbalah-visdommens væsen',
    'Modellen med tre akser',
    'Virkelighedsopfattelse',
    'Anvendelse af Kabbalah-visdommen',
    'Kabbalah-visdommens udvikling gennem generationerne',
    'Den frie vilje',
    'Den frie vilje (del 2)',
    'Der er ingen andre end Ham',
    'Krop og sjæl',
    'Kabbalah-visdommens særpræg',
    'Den Direkte Lys’ fire faser',
    'Fra brud til korrektion',
    'Lærerens storhed i Kabbalah-visdommen',
    'Studiet af de ti Sefirot',
    'Modsigelsen i Forsynet',
    'Jeg vil se en omvendt verden',
    'Bøn ifølge Kabbalah',
    'Vælg livet!',
    'Fra skjulthed til åbenbaring',
    'Skabelsens tanke',
    'Tzimtzum Aleph og Masach',
    'Opbygningen af de Højere Verdener',
    'Strukturen i de Højere Verdener',
    'Strukturen i de Højere Verdener og hjælpens lov',
    'De fem Partzufim i Adam Kadmons verden'
  ],
  sv: [
    'Människans natur',
    'Kabbalans visdoms väsen',
    'Treaksmodellen',
    'Verklighetsuppfattning',
    'Tillämpning av Kabbalans visdom',
    'Kabbalans visdoms utveckling genom generationerna',
    'Den fria viljan',
    'Den fria viljan (del 2)',
    'Det finns ingen annan än Han',
    'Kropp och själ',
    'Kabbalans visdoms särart',
    'Det direkta ljusets fyra faser',
    'Från krossning till korrigering',
    'Lärarens storhet inom Kabbalans visdom',
    'Studiet av de tio Sefirot',
    'Motsägelsen i Försynen',
    'Jag ska se en omvänd värld',
    'Bön enligt Kabbalan',
    'Välj livet!',
    'Från fördoldhet till uppenbarelse',
    'Skapelsens tanke',
    'Tzimtzum Aleph och Masach',
    'Uppbyggnaden av de Högre Världarna',
    'Strukturen i de Högre Världarna',
    'Strukturen i de Högre Världarna och hjälpens lag',
    'De fem Partzufim i Adam Kadmons värld'
  ],
  no: [
    'Menneskets natur',
    'Essensen i Kabbala-visdommen',
    'Modellen med tre akser',
    'Virkelighetsoppfatning',
    'Anvendelsen av Kabbala-visdommen',
    'Utviklingen av Kabbala-visdommen gjennom generasjonene',
    'Fri vilje',
    'Fri vilje (del 2)',
    'Det finnes ingen andre enn Ham',
    'Kropp og sjel',
    'Det særegne ved Kabbala-visdommen',
    'Den direkte Lyskraftens fire faser',
    'Fra knusing til korrigering',
    'Lærerens storhet i Kabbala-visdommen',
    'Studiet av de ti Sefirot',
    'Motsetningen i Forsynet',
    'Jeg skal se en omvendt verden',
    'Bønn ifølge Kabbala',
    'Velg livet!',
    'Fra skjulthet til åpenbaring',
    'Skapelsens tanke',
    'Tzimtzum Aleph og Masach',
    'Oppbygningen av de Høyere Verdener',
    'Strukturen i de Høyere Verdener',
    'Strukturen i de Høyere Verdener og hjelpens lov',
    'De fem Partzufim i Adam Kadmons verden'
  ],
  fi: [
    'Ihmisluonto',
    'Kabbalan viisauden olemus',
    'Kolmiakselinen malli',
    'Todellisuuden havaitseminen',
    'Kabbalan viisauden soveltaminen',
    'Kabbalan viisauden kehitys sukupolvien aikana',
    'Vapaa tahto',
    'Vapaa tahto (osa 2)',
    'Ei ole ketään muuta kuin Hän',
    'Keho ja sielu',
    'Kabbalan viisauden ainutlaatuisuus',
    'Suoran Valon neljä vaihetta',
    'Särkymisestä korjaukseen',
    'Opettajan suuruus Kabbalan viisaudessa',
    'Kymmenen Sefiran opiskelu',
    'Ristiriita kaitselmuksessa',
    'Näen nurinkurisen maailman',
    'Rukous Kabbalan mukaan',
    'Valitse elämä!',
    'Kätkeytymisestä paljastumiseen',
    'Luomisen ajatus',
    'Tzimtzum Aleph ja Masach',
    'Ylempien maailmojen rakenne',
    'Ylempien maailmojen rakenne',
        'Ylempien maailmojen rakenne ja avun laki',
        'Adam Kadmon -maailman viisi Partzufimia'
      ],
  et: [
    'Inimese loomus',
    'Kabbala tarkuse olemus',
    'Kolme telje mudel',
    'Reaalsuse tajumine',
    'Kabbala tarkuse rakendamine',
    'Kabbala tarkuse areng läbi põlvkondade',
    'Vaba tahe',
    'Vaba tahe (2. osa)',
    'Pole kedagi peale Tema',
    'Keha ja hing',
    'Kabbala tarkuse ainulaadsus',
    'Otsese Valguse neli faasi',
    'Purunemisest parandamiseni',
    'Õpetaja suurus Kabbala tarkuses',
    'Kümne Sefiroti õppimine',
    'Vastuolu Looja juhtimises',
    'Ma näen pööratud maailma',
    'Palve Kabbala järgi',
    'Vali elu!',
    'Varjatusest ilmutuseni',
    'Loomise mõte',
    'Tzimtzum Aleph ja Masach',
    'Kõrgemate maailmade ülesehitus',
    'Kõrgemate maailmade struktuur',
    'Kõrgemate maailmade struktuur ja abistamise seadus',
    'Adam Kadmoni maailma viis Partzufimit'
  ],
  lv: [
    'Cilvēka daba',
    'Kabbalas gudrības būtība',
    'Trīs asu modelis',
    'Realitātes uztvere',
    'Kabbalas gudrības pielietošana',
    'Kabbalas gudrības attīstība paaudžu gaitā',
    'Brīvā griba',
    'Brīvā griba (2. daļa)',
    'Nav neviena cita kā Viņš',
    'Ķermenis un dvēsele',
    'Kabbalas gudrības unikalitāte',
    'Četras Tiešās Gaismas fāzes',
    'No sašķelšanās līdz labošanai',
    'Skolotāja diženums Kabbalas gudrībā',
    'Desmit Sefirot mācība',
    'Pretruna Providencē',
    'Es redzēšu apgrieztu pasauli',
    'Lūgšana saskaņā ar Kabbalu',
    'Izvēlies dzīvi!',
    'No apslēptības līdz atklāsmei',
    'Radīšanas doma',
    'Tzimtzum Aleph un Masach',
    'Augstāko pasauļu uzbūve',
    'Augstāko pasauļu struktūra',
    'Augstāko pasauļu struktūra un palīdzības likums',
    'Adam Kadmon pasaules piecas Partzufim'
  ],
  lt: [
    'Žmogaus prigimtis',
    'Kabalos išminties esmė',
    'Trijų ašių modelis',
    'Realybės suvokimas',
    'Kabalos išminties taikymas',
    'Kabalos išminties raida per kartas',
    'Laisva valia',
    'Laisva valia (2 dalis)',
    'Nėra nieko kito, tik Jis',
    'Kūnas ir siela',
    'Kabalos išminties unikalumas',
    'Keturios Tiesioginės Šviesos fazės',
    'Nuo sudužimo iki ištaisymo',
    'Mokytojo didybė Kabalos išmintyje',
    'Dešimties Sefirų studija',
    'Prieštara Apvaizdoje',
    'Pamatysiu apverstą pasaulį',
    'Malda pagal Kabalą',
    'Rinkis gyvenimą!',
    'Nuo slėpimo iki atskleidimo',
    'Kūrimo mintis',
    'Tzimtzum Aleph ir Masach',
    'Aukštesniųjų pasaulių sandara',
    'Aukštesniųjų pasaulių struktūra',
    'Aukštesniųjų pasaulių struktūra ir pagalbos dėsnis',
    'Penki Adam Kadmon pasaulio Partzufim'
  ],
  ar: [
    'الطبيعة البشرية',
    'جوهر حكمة الكابالا',
    'نموذج المحاور الثلاثة',
    'إدراك الواقع',
    'تطبيق حكمة الكابالا',
    'تطور حكمة الكابالا عبر الأجيال',
    'حرية الإرادة',
    'حرية الإرادة (الجزء الثاني)',
    'لا يوجد أحد سواه',
    'الجسد والروح',
    'تميّز حكمة الكابالا',
    'المراحل الأربع للنور المباشر',
    'من التحطم إلى التصحيح',
    'عظمة المعلم في حكمة الكابالا',
    'دراسة السفيروت العشر',
    'التناقض في العناية الإلهية',
    'سأرى عالماً مقلوباً',
    'الصلاة وفقاً للكابالا',
    'اختر الحياة!',
    'من الاحتجاب إلى الكشف',
    'فكرة الخلق',
    'تسيمتسوم ألف والماساخ',
    'بنية العوالم العليا',
    'هيكل العوالم العليا',
    'هيكل العوالم العليا وقانون المساعدة',
    'البارتسوفيم الخمسة لعالم آدم قدمون'
  ],
  fa: [
    'طبیعت انسان',
    'جوهر حکمت کابالا',
    'الگوی سه‌محوری',
    'ادراک واقعیت',
    'کاربرد حکمت کابالا',
    'تکامل حکمت کابالا در طول نسل‌ها',
    'اراده آزاد',
    'اراده آزاد (بخش دوم)',
    'هیچ‌کس جز او نیست',
    'جسم و روح',
    'ویژگی منحصربه‌فرد حکمت کابالا',
    'چهار مرحله نور مستقیم',
    'از شکستگی تا اصلاح',
    'بزرگی استاد در حکمت کابالا',
    'مطالعه ده سفیروت',
    'تناقض در مشیت',
    'جهانی وارونه خواهم دید',
    'دعا بر اساس کابالا',
    'زندگی را انتخاب کن!',
    'از پنهان‌شدگی تا آشکارشدن',
    'اندیشه آفرینش',
    'تسیمتسوم الف و ماساخ',
    'ساختار جهان‌های برتر',
    'ساختار جهان‌های بالا',
    'ساختار جهان‌های بالا و قانون کمک',
    'پنج پارتسوف جهان آدم کادمون'
  ],
  hy: [
    'Մարդկային բնույթը',
    'Կաբալայի իմաստության էությունը',
    'Եռառանցք մոդելը',
    'Իրականության ընկալումը',
    'Կաբալայի իմաստության կիրառումը',
    'Կաբալայի իմաստության զարգացումը սերունդների ընթացքում',
    'Ազատ կամք',
    'Ազատ կամք (մաս 2)',
    'Նրանից բացի ոչ ոք չկա',
    'Մարմին և հոգի',
    'Կաբալայի իմաստության եզակիությունը',
    'Ուղիղ լույսի չորս փուլերը',
    'Կոտրումից դեպի ուղղում',
    'Ուսուցչի մեծությունը Կաբալայի իմաստության մեջ',
    'Տասը Սեֆիրոտի ուսումնասիրություն',
    'Հակասությունը Նախախնամության մեջ',
    'Կտեսնեմ հակառակ աշխարհ',
    'Աղոթքը՝ ըստ Կաբալայի',
    'Ընտրիր կյանքը՛',
    'Թաքցնելուց դեպի բացահայտում',
    'Արարման միտքը',
    'Ցիմցում Ալեֆ և Մասախ',
    'Վերին աշխարհների կառուցվածքը',
    'Բարձր աշխարհների կառուցվածքը',
    'Բարձր աշխարհների կառուցվածքը և օգնության օրենքը',
    'Ադամ Կադմոն աշխարհի հինգ Պարցուֆները'
  ],
  az: [
    'İnsan təbiəti',
    'Kabbala müdrikliyinin mahiyyəti',
    'Üç oxlu model',
    'Reallığın qavranılması',
    'Kabbala müdrikliyinin tətbiqi',
    'Kabbala müdrikliyinin nəsillər boyunca inkişafı',
    'Azad iradə',
    'Azad iradə (2-ci hissə)',
    'Ondan başqa heç kim yoxdur',
    'Bədən və ruh',
    'Kabbala müdrikliyinin özünəməxsusluğu',
    'Birbaşa İşığın dörd mərhələsi',
    'Qırılmadan düzəlişə',
    'Kabbala müdrikliyində müəllimin böyüklüyü',
    'On Sefirotun öyrənilməsi',
    'İlahi idarəetmədə ziddiyyət',
    'Tərsinə çevrilmiş bir dünya görəcəyəm',
    'Kabbalaya görə dua',
    'Həyatı seç!',
    'Gizlənmədən aşkara çıxmağa',
    'Yaradılışın düşüncəsi',
    'Tzimtzum Aleph və Masach',
    'Ali Dünyaların quruluşu',
    'Yüksək Dünyaların strukturu',
    'Yüksək Dünyaların strukturu və yardım qanunu',
    'Adam Kadmon dünyasının beş Partzufu'
  ],
  ka: [
    'ადამიანის ბუნება',
    'კაბალას სიბრძნის არსი',
    'სამღერძიანი მოდელი',
    'რეალობის აღქმა',
    'კაბალას სიბრძნის გამოყენება',
    'კაბალას სიბრძნის განვითარება თაობების განმავლობაში',
    'თავისუფალი ნება',
    'თავისუფალი ნება (ნაწილი 2)',
    'მის გარდა არავინაა',
    'სხეული და სული',
    'კაბალას სიბრძნის უნიკალურობა',
    'პირდაპირი სინათლის ოთხი ფაზა',
    'მსხვრევიდან შესწორებამდე',
    'მასწავლებლის სიდიადე კაბალას სიბრძნეში',
    'ათი სეფირას შესწავლა',
    'წინააღმდეგობა განგებულებაში',
    'ვიხილავ სამყაროს უკუღმა',
    'ლოცვა კაბალას მიხედვით',
    'აირჩიე სიცოცხლე!',
    'დამალვიდან გამჟღავნებამდე',
    'შექმნის ჩანაფიქრი',
    'ციმციმ ალეფი და მასახი',
    'ზედა სამყაროების აგებულება',
    'ზედა სამყაროების სტრუქტურა',
    'ზედა სამყაროების სტრუქტურა და დახმარების კანონი',
    'ადამ კადმონის სამყაროს ხუთი პარცუფი'
  ],
  'zh-cn': [
    '人性',
    '卡巴拉智慧的本质',
    '三轴模型',
    '现实的感知',
    '卡巴拉智慧的应用',
    '卡巴拉智慧在世代中的发展',
    '自由意志',
    '自由意志（第二部分）',
    '除祂以外别无他者',
    '身体与灵魂',
    '卡巴拉智慧的独特性',
    '直接光的四个阶段',
    '从破碎到修正',
    '卡巴拉智慧中老师的重要性',
    '十个质点的研究',
    '护理中的矛盾',
    '我将看见一个颠倒的世界',
    '卡巴拉中的祈祷',
    '选择生命！',
    '从隐藏到显现',
    '创造的思想',
    '第一次限制（Tzimtzum Aleph）与屏障（Masach）',
    '上层世界的结构',
    '高层世界的结构',
    '高层世界的结构与帮助法则',
    '亚当·卡德蒙世界的五个帕尔祖芬'
  ],
  'zh-hant': [
    '人性',
    '卡巴拉智慧的本質',
    '三軸模型',
    '現實的感知',
    '卡巴拉智慧的應用',
    '卡巴拉智慧在世代中的發展',
    '自由意志',
    '自由意志（第二部分）',
    '除祂以外別無他者',
    '身體與靈魂',
    '卡巴拉智慧的獨特性',
    '直接光的四個階段',
    '從破碎到修正',
    '卡巴拉智慧中老師的重要性',
    '十個質點的研究',
    '護理中的矛盾',
    '我將看見一個顛倒的世界',
    '卡巴拉中的祈禱',
    '選擇生命！',
    '從隱藏到顯現',
    '創造的思想',
    '第一次限制（Tzimtzum Aleph）與屏障（Masach）',
    '上層世界的結構',
    '高層世界的結構',
    '高層世界的結構與幫助法則',
    '亞當·卡德蒙世界的五個帕爾祖芬'
  ],
  ja: [
    '人間の本性',
    'カバラの知恵の本質',
    '三軸モデル',
    '現実の知覚',
    'カバラの知恵の実践',
    '世代を超えたカバラの知恵の発展',
    '自由意志',
    '自由意志（第2部）',
    '彼以外に誰もいない',
    '身体と魂',
    'カバラの知恵の独自性',
    '直接光の四つの段階',
    '破壊から修正へ',
    'カバラの知恵における教師の偉大さ',
    '十のセフィロトの学び',
    '摂理における矛盾',
    '逆さまの世界を見る',
    'カバラによる祈り',
    '命を選べ！',
    '隠蔽から開示へ',
    '創造の思考',
    'ツィムツム・アレフとマサフ',
    '上位世界の構造',
    '高次世界の構造',
    '高次世界の構造と援助の法則',
    'アダム・カドモン世界の五つのパルツフ'
  ],
  ko: [
    '인간의 본성',
    '카발라 지혜의 본질',
    '삼축 모델',
    '현실의 인식',
    '카발라 지혜의 적용',
    '세대를 거친 카발라 지혜의 발전',
    '자유의지',
    '자유의지 (제2부)',
    '그분 외에는 아무도 없다',
    '몸과 영혼',
    '카발라 지혜의 독특성',
    '직접광의 네 단계',
    '파괴에서 교정으로',
    '카발라 지혜에서 스승의 위대함',
    '열 개의 세피로트 연구',
    '섭리의 모순',
    '뒤집힌 세상을 보리라',
    '카발라에 따른 기도',
    '생명을 선택하라!',
    '은폐에서 계시로',
    '창조의 생각',
    '침침 알레프와 마사크',
    '상위 세계의 구조',
    '상위 세계의 구조',
        '상위 세계의 구조와 도움의 법칙',
        '아담 카드몬 세계의 다섯 파르추핌'
      ],
  hi: [
    'मानव स्वभाव',
    'कब्बाला ज्ञान का सार',
    'तीन-अक्षीय मॉडल',
    'वास्तविकता की धारणा',
    'कब्बाला ज्ञान का अनुप्रयोग',
    'पीढ़ियों के दौरान कब्बाला ज्ञान का विकास',
    'स्वतंत्र इच्छा',
    'स्वतंत्र इच्छा (भाग 2)',
    'उसके अलावा कोई नहीं',
    'शरीर और आत्मा',
    'कब्बाला ज्ञान की विशिष्टता',
    'प्रत्यक्ष प्रकाश के चार चरण',
    'विखंडन से सुधार तक',
    'कब्बाला ज्ञान में शिक्षक की महानता',
    'दस सेफिरोत का अध्ययन',
    'ईश्वरीय विधान में विरोधाभास',
    'मैं उलटी दुनिया देखूँगा',
    'कब्बाला के अनुसार प्रार्थना',
    'जीवन चुनें!',
    'छिपाव से उद्घाटन तक',
    'सृष्टि का विचार',
    'त्ज़िमत्ज़ुम अलेफ़ और मसाख़',
    'उच्च लोकों की संरचना',
    'उच्च लोकों की रचना',
    'उच्च लोकों की रचना और सहायता का नियम',
    'आदम कदमोन लोक के पाँच पार्ट्ज़ुफ़िम'
  ],
  id: [
    'Sifat manusia',
    'Hakikat kebijaksanaan Kabbalah',
    'Model tiga sumbu',
    'Persepsi realitas',
    'Penerapan kebijaksanaan Kabbalah',
    'Perkembangan kebijaksanaan Kabbalah lintas generasi',
    'Kehendak bebas',
    'Kehendak bebas (bagian 2)',
    'Tidak ada selain Dia',
    'Tubuh dan jiwa',
    'Keunikan kebijaksanaan Kabbalah',
    'Empat fase Cahaya Langsung',
    'Dari kehancuran menuju koreksi',
    'Keagungan guru dalam kebijaksanaan Kabbalah',
    'Studi Sepuluh Sefirot',
    'Kontradiksi dalam pemeliharaan Ilahi',
    'Aku akan melihat dunia yang terbalik',
    'Doa menurut Kabbalah',
    'Pilihlah kehidupan!',
    'Dari ketersembunyian menuju penyingkapan',
    'Pemikiran penciptaan',
    'Tzimtzum Aleph dan Masach',
    'Struktur Dunia-Dunia Atas',
    'Susunan Dunia-Dunia Tinggi',
    'Susunan Dunia-Dunia Tinggi dan hukum bantuan',
    'Lima Partzufim dunia Adam Kadmon'
  ],
  tl: [
    'Kalikasan ng tao',
    'Diwa ng karunungan ng Kabbalah',
    'Modelong may tatlong aksis',
    'Pang-unawa sa realidad',
    'Pagsasabuhay ng karunungan ng Kabbalah',
    'Pag-unlad ng karunungan ng Kabbalah sa bawat salinlahi',
    'Malayang kalooban',
    'Malayang kalooban (bahagi 2)',
    'Walang iba maliban sa Kanya',
    'Katawan at kaluluwa',
    'Natatangi ang karunungan ng Kabbalah',
    'Apat na yugto ng Direktang Liwanag',
    'Mula sa pagkabasag tungo sa pagwawasto',
    'Kadakilaan ng guro sa karunungan ng Kabbalah',
    'Pag-aaral ng Sampung Sefirot',
    'Salungatan sa Pamamatnubay',
    'Makakakita ako ng mundong baligtad',
    'Panalangin ayon sa Kabbalah',
    'Piliin ang buhay!',
    'Mula sa pagtatago tungo sa pagbubunyag',
    'Kaisipan ng paglikha',
    'Tzimtzum Aleph at Masach',
    'Ang Istruktura ng mga Mataas na Daigdig',
    'Ang Balangkas ng mga Mataas na Daigdig',
    'Ang Balangkas ng mga Mataas na Daigdig at ang batas ng tulong',
    'Ang limang Partzufim ng daigdig ng Adam Kadmon'
  ],
  am: [
    'የሰው ተፈጥሮ',
    'የካባላ ጥበብ ይዘት',
    'የሶስት ዘንግ ሞዴል',
    'የእውነታ ግንዛቤ',
    'የካባላ ጥበብን መተግበር',
    'የካባላ ጥበብ በትውልዶች ውስጥ ያለው እድገት',
    'ነፃ ፈቃድ',
    'ነፃ ፈቃድ (ክፍል 2)',
    'ከእርሱ በቀር ሌላ የለም',
    'ሰውነትና ነፍስ',
    'የካባላ ጥበብ ልዩነት',
    'የቀጥታ ብርሃን አራቱ ደረጃዎች',
    'ከመሰበር ወደ ማስተካከያ',
    'በካባላ ጥበብ ውስጥ የመምህሩ ታላቅነት',
    'የአሥሩ ሴፊሮት ጥናት',
    'በመለኮታዊ አስተዳደር ውስጥ ያለው ተቃርኖ',
    'ተቃራኒ ዓለምን አያለሁ',
    'በካባላ መሠረት ጸሎት',
    'ሕይወትን ምረጥ!',
    'ከመደበቅ ወደ መገለጥ',
    'የፍጥረት ሐሳብ',
    'ጽምጽም አሌፍ እና ማሳክ',
    'የላይኞቹ ዓለማት አወቃቀር',
    'የከፍተኛ ዓለማት መዋቅር',
    'የከፍተኛ ዓለማት መዋቅር እና የእርዳታ ሕግ',
    'የአዳም ቃድሞን ዓለም አምስቱ ፓርጹፊም'
  ]
};

const lessonTitleFormats = {
  hu: '{n}. lecke: {title}', en: 'Lesson {n}: {title}', he: 'שיעור {n}: {title}',
  ru: 'Урок {n}: {title}', de: 'Lektion {n}: {title}', es: 'Lección {n}: {title}',
  fr: 'Leçon {n} : {title}', it: 'Lezione {n}: {title}', pt: 'Lição {n}: {title}',
  uk: 'Урок {n}: {title}', pl: 'Lekcja {n}: {title}', ro: 'Lecția {n}: {title}',
  bg: 'Урок {n}: {title}', cs: '{n}. lekce: {title}', hr: '{n}. lekcija: {title}',
  sr: '{n}. лекција: {title}', tr: '{n}. ders: {title}', el: 'Μάθημα {n}: {title}',
  nl: 'Les {n}: {title}', da: 'Lektion {n}: {title}', sv: 'Lektion {n}: {title}',
  no: 'Leksjon {n}: {title}', fi: 'Oppitunti {n}: {title}', et: '{n}. tund: {title}',
  lv: '{n}. nodarbība: {title}', lt: '{n} pamoka: {title}', ar: 'الدرس {n}: {title}',
  fa: 'درس {n}: {title}', hy: 'Դաս {n}: {title}', az: 'Dərs {n}: {title}',
  ka: 'გაკვეთილი {n}: {title}', 'zh-cn': '第{n}课：{title}', 'zh-hant': '第{n}課：{title}',
  ja: '第{n}課：{title}', ko: '제{n}과: {title}', hi: 'पाठ {n}: {title}',
  id: 'Pelajaran {n}: {title}', tl: 'Aralin {n}: {title}', am: 'ትምህርት {n}: {title}'
};

function updateLessonLabels() {
  const lessonSelect = document.getElementById('lesson-select');
  if (!lessonSelect) return;

  const titles = lessonTitles[curLang] || lessonTitles.en;
  const format = lessonTitleFormats[curLang] || lessonTitleFormats.en;
  Array.from(lessonSelect.options).forEach(option => {
    const lessonNumber = Number(option.value);
    const title = titles[lessonNumber - 1];
    if (title) {
      option.textContent = format
        .replace('{n}', lessonNumber === 22 ? '22-26' : String(lessonNumber))
        .replace('{title}', title);
    }
  });
}

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createRandomizedQuestion(question) {
  if (!question || !Array.isArray(question.options)) {
    return question;
  }

  const originalCorrect = Number.isInteger(question.correct) ? question.correct : 0;
  const indexed = question.options.map((text, i) => ({ text, originalIndex: i }));
  const shuffled = shuffleArray(indexed);
  const newCorrect = shuffled.findIndex(item => item.originalIndex === originalCorrect);

  return {
    ...question,
    options: shuffled.map(item => item.text),
    correct: newCorrect >= 0 ? newCorrect : 0
  };
}

function getCurrentData() {
  const modeObj = window.lessonDB[curLesson]?.[curMode] || {};
  const localizedData = modeObj[curLang] || modeObj.en || modeObj.hu || [];
  return Array.isArray(localizedData) ? localizedData : localizedData.questions || [];
}

function updateView() {
  const dir = (curLang === 'he' || curLang === 'ar' || curLang === 'fa') ? 'rtl' : 'ltr';
  document.body.dir = dir;

  const lData = getCurrentData();
  const total = lData.length;

  if (total === 0) {
    document.getElementById('counter-txt').innerText = "0 / 0";
    document.getElementById('progress-fill').style.width = "0%";
    if (curMode === 'quiz') {
      document.getElementById('q-text').innerText = "Ehhez a leckéhez még nincs kvíz feltöltve ezen a nyelven.";
      document.getElementById('options-box').innerHTML = "";
      document.getElementById('fb-box').className = 'feedback';
    } else {
      document.getElementById('card-front-text').innerText = "Hamarosan érkezik...";
      document.getElementById('card-back-text').innerText = "Ehhez a leckéhez még nincsenek feltöltve a kártyák.";
    }
    return;
  }

  if (curIdx >= total) curIdx = 0;

  document.getElementById('counter-txt').innerText = `${curIdx + 1} / ${total}`;
  document.getElementById('progress-fill').style.width = `${((curIdx + 1) / total) * 100}%`;

  if (curMode === 'quiz') {
    document.getElementById('quiz-view').style.display = 'block';
    document.getElementById('flashcard-view').style.display = 'none';
    document.getElementById('score-txt').innerText = `Pontszám: ${quizScore}`;
    renderQuizQuestion(lData[curIdx], total);
  } else {
    document.getElementById('quiz-view').style.display = 'none';
    document.getElementById('flashcard-view').style.display = 'block';
    document.getElementById('score-txt').innerText = `Kártya`;
    renderFlashcard(lData[curIdx], total);
  }
}

function renderQuizQuestion(qObj, total) {
  if (!qObj) return;
  const randomizedQ = createRandomizedQuestion(qObj);
  document.getElementById('q-text').innerText = randomizedQ.q;
  const box = document.getElementById('options-box');
  box.innerHTML = '';
  randomizedQ.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    btn.onclick = () => selectQuizAnswer(idx, randomizedQ, btn);
    box.appendChild(btn);
  });
  const fb = document.getElementById('fb-box');
  fb.className = 'feedback';
  fb.innerText = '';
  const nxt = document.getElementById('quiz-next-btn');
  nxt.disabled = true;
  nxt.innerText = (curIdx === total - 1) ? 'Befejezés / Újrakezdés' : 'Következő ➔';
}

function selectQuizAnswer(idx, qObj, btn) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(b => b.disabled = true);
  if (idx === qObj.correct) {
    btn.classList.add('correct');
    quizScore++;
    document.getElementById('score-txt').innerText = `Pontszám: ${quizScore}`;
  } else {
    btn.classList.add('wrong');
    buttons[qObj.correct]?.classList.add('correct');
  }
  const fb = document.getElementById('fb-box');
  fb.innerText = qObj.r || qObj.rationale || "";
  fb.classList.add('show');
  document.getElementById('quiz-next-btn').disabled = false;
}

function nextQuizQuestion() {
  const lData = getCurrentData();
  if (curIdx < lData.length - 1) {
    curIdx++;
  } else {
    curIdx = 0;
    quizScore = 0;
  }
  updateView();
}

function renderFlashcard(cObj, total) {
  if (!cObj) return;
  document.getElementById('card-inner').classList.remove('flipped');
  document.getElementById('card-front-text').innerText = cObj.f;
  document.getElementById('card-back-text').innerText = cObj.b;
  document.getElementById('card-prev-btn').disabled = (curIdx === 0);
  document.getElementById('card-next-btn').disabled = (curIdx === total - 1);
}

function flipCard() {
  document.getElementById('card-inner').classList.toggle('flipped');
}

function prevCard() {
  if (curIdx > 0) { curIdx--; updateView(); }
}

function nextCard() {
  const lData = getCurrentData();
  if (curIdx < lData.length - 1) { curIdx++; updateView(); }
}
// Betöltéskor megnézzük, választott-e már nyelvet korábban
function checkFirstVisit() {
  const savedLang = localStorage.getItem('user_lang');
  const langSelect = document.getElementById('lang-select');

  if (!savedLang) {
    document.documentElement.lang = curLang;
    updateLessonLabels();
    showLanguageSpotlight();
    return;
  }

  curLang = savedLang;
  if (langSelect) {
    langSelect.value = savedLang;
  }
  document.documentElement.lang = savedLang;
  updateLessonLabels();
  updateView();
}

function showLanguageSpotlight() {
  const overlay = document.createElement('div');
  overlay.id = 'lang-overlay';
  overlay.className = 'spotlight-overlay';
  overlay.innerHTML = `
    <div style="color:white; text-align:center; font-size:1.1rem; font-weight:600; margin-bottom: 120px;">
      🌐 Please choose your language!<br>
      <span style="font-size:0.9rem; font-weight:normal; opacity:0.8;">Kérlek, válassz nyelvet a folytatáshoz!</span>
    </div>
  `;
  document.body.appendChild(overlay);

  const langSelect = document.getElementById('lang-select');
  langSelect.classList.add('lang-highlight');

  // Amint kiválaszt egy nyelvet, elhalványul és elmentődik
  langSelect.addEventListener('change', function dismiss() {
    localStorage.setItem('user_lang', langSelect.value);
    langSelect.classList.remove('lang-highlight');
    overlay.style.opacity = '0';
    setTimeout(() => overlay.remove(), 400);
    langSelect.removeEventListener('change', dismiss);
  });
}

function switchMode(m) { curMode = m; curIdx = 0; quizScore = 0; updateView(); }
function switchLesson(l) { curLesson = l; curIdx = 0; quizScore = 0; updateView(); }
function switchLanguage(lang) {
  curLang = lang;
  localStorage.setItem('user_lang', lang);
  document.documentElement.lang = lang;
  updateLessonLabels();
  updateView();
}

// Betöltéskor indítás
window.addEventListener('DOMContentLoaded', checkFirstVisit);