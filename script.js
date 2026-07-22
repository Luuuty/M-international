/* ---------------- DATA ---------------- */
const categories = [
  {key:'all', ru:'Все', ky:'Баары'},
  {key:'detox', ru:'Детокс и очищение', ky:'Детокс жана тазалоо'},
  {key:'immune', ru:'Иммунитет и клетки', ky:'Иммунитет жана клетка'},
  {key:'weight', ru:'Контроль веса', ky:'Салмакты көзөмөлдөө'},
  {key:'joints', ru:'Суставы и кости', ky:'Муундар жана сөөктөр'},
  {key:'women', ru:'Женское здоровье', ky:'Аялдардын ден соолугу'},
  {key:'men', ru:'Мужское здоровье', ky:'Эркектердин ден соолугу'},
  {key:'face', ru:'Уход за лицом', ky:'Жүзгө кам көрүү'},
];

const products = [
  {
    id:'greenmax', category:'detox',
    image:'https://m-internationall.ru/wp-content/uploads/2022/11/greenmax.jpg',
    name:'GreenMAX',
    tag:{ru:'Детокс, очищение кишечника', ky:'Детокс, ичегини тазалоо'},
    desc:{
      ru:'Безопасный и удобный способ очистить организм. Формула «3 в 1»: очищение, восстановление, омоложение — поддерживает здоровье кишечника, способствует похудению, выводит токсины, защищает печень.',
      ky:'Организмди коопсуз жана ыңгайлуу тазалоо ыкмасы. «3 in 1» формуласы: тазалоо, калыбына келтирүү, жашартуу — ичегинин ден соолугун колдойт, арыктоого жардам берет, уулуу заттарды чыгарат, боорду коргойт.'
    },
    composition:['Хлорофилл','Псиллиум','Пробиотик','Расторопша','KiOnutrime-Cs','Клетчатка киви','Яблоко','Моросил'],
    benefits:{
      ru:['Детоксикация кишечника','Сбалансированное питание','Регулирует сахар в крови','Улучшает обмен веществ','Укрепляет иммунитет','Контроль веса и похудение','Уменьшает жир в печени','Профилактика заболеваний'],
      ky:['Ичегини тазалоо','Тең салмактуу тамактануу','Кандагы канттын деңгээлин жөндөйт','Зат алмашууну жакшыртат','Иммунитетти чыңдайт','Салмакты көзөмөлдөө','Боордогу майды азайтат','Ооруларды алдын алуу']
    }
  },
  {
    id:'mimax', category:'immune',
    image:'https://m-internationall.ru/wp-content/uploads/2022/11/mimax-1.jpg',
    name:'MiMAX',
    tag:{ru:'Клеточное питание, омоложение', ky:'Клеткалык тамактануу, жашартуу'},
    desc:{
      ru:'Комплекс из растительного сырья с высокими антиоксидантными свойствами. Помогает восстановлению повреждённых клеток и нейтрализует свободные радикалы — с более здоровыми клетками вы живёте дольше.',
      ky:'Өсүмдүк чийки затынан жасалган, антиоксиданттык касиети жогору комплекс. Клеткалардын калыбына келишине жардам берет жана эркин радикалдарды нейтралдайт.'
    },
    composition:['Полифенолы яблока','Черничный порошок','Облепиха','Астаксантин','Экстракт сосны','Виноградная косточка'],
    benefits:{
      ru:['Замедляет старение','Улучшает состояние кожи','Противовоспалительное действие','Повышает тонус и энергию','Снимает усталость глаз','Защищает зрение','Усиливает метаболизм'],
      ky:['Карылыкты жайлатат','Теринин абалын жакшыртат','Сезгенүүгө каршы таасир','Тону жана энергияны жогорулатат','Көздүн чарчоосун басаңдатат','Көрүүнү коргойт','Зат алмашууну күчөтөт']
    }
  },
  {
    id:'blumax', category:'immune',
    image:'https://m-internationall.ru/wp-content/uploads/2022/11/blumax.jpg',
    name:'BluMAX',
    tag:{ru:'Иммунитет, витамин C', ky:'Иммунитет, витамин C'},
    desc:{
      ru:'Мощный источник витамина C, защищающего клетки от токсинов. Содержит сине-зелёные водоросли AFA и гриб agaricus, которые активируют иммунную систему для борьбы с вирусами и бактериями.',
      ky:'Клеткаларды уулуу заттардан коргогон витамин C булагы. АФА балырлары жана агарикус козу карыны иммундук системаны активдештирет.'
    },
    composition:['Гриб Agaricus','Лимон','Стевия','Агава','Витамин C'],
    benefits:{
      ru:['Поддерживает иммунную систему','Уменьшает боль в суставах','Снижает риск сердечных заболеваний','Противовоспалительное действие','Улучшает здоровье дыхания','Мощный антиоксидант'],
      ky:['Иммундук системаны колдойт','Муундардагы ооруну азайтат','Жүрөк оорууларынын коркунучун азайтат','Сезгенүүгө каршы таасир','Дем алуу органдарын жакшыртат','Күчтүү антиоксидант']
    }
  },
  {
    id:'nutrimax', category:'weight',
    image:'https://m-internationall.ru/wp-content/uploads/2022/11/nutrimax.jpg',
    name:'NutriMAX',
    tag:{ru:'Жиросжигание, контроль веса', ky:'Май жандыруу, салмакты көзөмөлдөө'},
    desc:{
      ru:'Полноценное питание организма. Помогает сбросить лишний вес и одновременно поддерживает здоровье, а тем, кому нужно — набрать мышечную массу.',
      ky:'Организмге толук кандуу тамактануу. Ашыкча салмакты түшүрүүгө жардам берет, ден соолукту колдойт, керек болсо булчуң массасын өстүрөт.'
    },
    composition:['Соевый белок','Зелёная фасоль','Кальций из водорослей','ФОС (пребиотик)','Стевия'],
    benefits:{
      ru:['Поддерживает здоровье мышц','Укрепляет кости и зубы','Контроль и снижение веса','Обеспечивает сытость','Помогает в регенерации клеток','Снижает холестерин','Антиоксидант'],
      ky:['Булчуңдардын ден соолугун колдойт','Сөөк жана тишти чыңдайт','Салмакты көзөмөлдөйт жана азайтат','Тоюнуучулукту камсыз кылат','Клеткалардын калыбына келишине жардам берет','Холестеринди азайтат','Антиоксидант']
    }
  },
  {
    id:'kordymax', category:'detox',
    image:'https://m-internationall.ru/wp-content/uploads/2024/01/product-graphic.png',
    name:'KordyMAX',
    tag:{ru:'Кордицепс, энергия', ky:'Кордицепс, энергия'},
    desc:{
      ru:'Ботанический напиток на основе Cordyceps sinensis — «короля ста лекарств». Содержит 16 видов аминокислот и селен, регулирует работу печени, почек, сердца, снимает усталость.',
      ky:'Cordyceps sinensis негизиндеги ботаникалык суусундук. 16 түрдөгү аминокислота жана селен камтыйт, боордун, бөйрөктүн, жүрөктүн иштешин жөндөйт, чарчоону басаңдатат.'
    },
    composition:['Cordyceps sinensis','16 аминокислот','Селен'],
    benefits:{
      ru:['Противоопухолевый эффект','Регулирует функцию печени','Регулирует функцию почек','Эффект против усталости','Регулирует иммунную систему','Улучшает энергию клеток','Регулирует работу сердца'],
      ky:['Шишикке каршы таасир','Боордун иштешин жөндөйт','Бөйрөктүн иштешин жөндөйт','Чарчоого каршы таасир','Иммундук системаны жөндөйт','Клеткалардын энергиясын жакшыртат','Жүрөктүн иштешин жөндөйт']
    }
  },
  {
    id:'fleximax', category:'joints',
    image:'https://m-internationall.ru/wp-content/uploads/2024/01/banner2-en.png',
    name:'FlexiMax',
    tag:{ru:'Суставы, кости, печень', ky:'Муундар, сөөктөр, боор'},
    desc:{
      ru:'Укрепляет суставы и кости, устраняет симптомы воспаления, облегчает боль при артрите и артрозе. Рекомендуется принимать после очищения курсами GreenMAX и MiMAX.',
      ky:'Муундар менен сөөктөрдү бекемдейт, сезгенүү белгилерин азайтат, артрит жана артроз оорусундагы ооруну жеңилдетет. GreenMAX жана MiMAX менен тазалангандан кийин кабыл алуу сунушталат.'
    },
    composition:['Витамин D','Апельсин','Глюкозамин (кукуруза)','Гиалуроновая кислота','Хондроитин (морской салат)','Куркума'],
    benefits:{
      ru:['Смазывает суставы','Укрепляет здоровье суставов и костей','Облегчает воспалительные симптомы','Облегчает боль в суставах','Снимает дискомфорт в пищеварении','Поддержка здоровья печени'],
      ky:['Муундарды майлайт','Муун жана сөөктүн ден соолугун чыңдайт','Сезгенүү белгилерин жеңилдетет','Муундардагы ооруну басаңдатат','Тамак сиңирүүдөгү дискомфортту жеңилдетет','Боордун ден соолугун колдойт']
    }
  },
  {
    id:'machoman', category:'men',
    image:'https://m-internationall.ru/wp-content/uploads/2024/01/product-1.png',
    name:'Machoman',
    tag:{ru:'Мужское сексуальное здоровье', ky:'Эркектердин жыныстык ден соолугу'},
    desc:{
      ru:'Формула для мужского сексуального здоровья с научно доказанными активными ингредиентами — обеспечивает здоровый кровоток и повышает энергию и выносливость.',
      ky:'Эркектердин жыныстык ден соолугу үчүн иштелип чыккан формула — кандын жакшы агылышын камсыз кылат, энергия жана чыдамкайлыкты жогорулатат.'
    },
    composition:['Грейпфрут','Экстракт маки','L-аргинин','Дамиана','Женьшень'],
    benefits:{
      ru:['Здоровая мужская сексуальная функция','Повышает энергию и выносливость','Улучшает кровоток','Улучшает концентрацию внимания','Снижает усталость','Улучшает мышечную силу'],
      ky:['Ден соолукка пайдалуу жыныстык функция','Энергия жана чыдамкайлыкты жогорулатат','Кандын агылышын жакшыртат','Көңүл топтоону жакшыртат','Чарчоону азайтат','Булчуң күчүн жогорулатат']
    }
  },
  {
    id:'yekaterina', category:'women',
    image:'https://m-internationall.ru/wp-content/uploads/2022/11/photo_2022-10-12_20-52-03.jpg',
    name:'Ye-Katerina',
    tag:{ru:'Интим-гель для женщин', ky:'Аялдар үчүн интим-гель'},
    desc:{
      ru:'Средство для женской интимной гигиены со 100% натуральным составом, разработано в Малайзии. Поддерживает чистоту и свежесть, облегчает менструальный и вагинальный дискомфорт.',
      ky:'Малайзияда иштелип чыккан, 100% табигый курамдагы аялдардын интимдик гигиенасы үчүн каражат. Тазалыкты жана жаңылыкты сактайт, айыз мезгилиндеги дискомфортту жеңилдетет.'
    },
    composition:['Лабизия Пумила','Лобата','Дуб Галл','Экстракт бетеля','Чеснок','Лаванда'],
    benefits:{
      ru:['Тонизирует и подтягивает стенки','Регулирует менструальный цикл','Уменьшает боль при менструации','Регулирует гормональный баланс','Контролирует выделения и запах','Устраняет зуд и раздражение'],
      ky:['Тонустайт жана бекемдейт','Айыз циклин жөндөйт','Айыз учурундагы ооруну азайтат','Гормоналдык балансты жөндөйт','Бөлүнүүлөрдү жана жытты көзөмөлдөйт','Кычышуу менен ирритацияны жоёт']
    }
  },
  {
    id:'lamor', category:'face',
    image:'https://m-internationall.ru/wp-content/uploads/2022/11/lamor-1.jpg',
    name:'L’amor',
    tag:{ru:'Маска-скраб для лица', ky:'Бет үчүн маска-скраб'},
    desc:{
      ru:'Маска и скраб с заживляющим, омолаживающим, противовоспалительным и отбеливающим эффектом. Подходит для всех возрастов, даже для чувствительной и проблемной кожи.',
      ky:'Айыктыруучу, жашартуучу, сезгенүүгө каршы жана агартуучу таасири бар бет үчүн маска-скраб. Бардык курактагы, сезимтал жана көйгөйлүү теринин ээлерине ылайыктуу.'
    },
    composition:['Рисовая пудра','Овсяная пудра (Avena Sativa)','Мультизерновой порошок','Соевый экстракт','Фукус','Алоэ вера','Масло чайного дерева','Мята','Жасмин'],
    benefits:{
      ru:['Удаляет омертвевшие клетки кожи','Питает кожу','Антибактериальное и антиоксидантное действие','Естественная защита от солнца','Улучшает упругость кожи','Эффективна при акне','Уменьшает морщины','Осветляет и придаёт сияние'],
      ky:['Өлгөн клеткаларды алып салат','Териге азык берет','Антибактериалдык жана антиоксиданттык таасир','Күндөн табигый коргоо','Теринин серпилгичтигин жакшыртат','Акнеге каршы натыйжалуу','Бырыштарды азайтат','Агартат жана жаркыратат']
    }
  }
];

const testimonials = [
  {
    ru:{text:'GreenMAX жана NutriMAX ичтим. Боордун майлануусу 3-даражадан 1-даражага түштү, бир жумада 3 кг арыктадым, шишиктер кетти — өзүмдү жеңил сезем!', name:'Таттыгүл'},
    ky:{text:'GreenMAX жана NutriMAX ичтим. Боордун майлануусу 3-даражадан 1-даражага түштү, бир жумада 3 кг арыктадым, шишиктер кетти — өзүмдү жеңил сезем!', name:'Таттыгүл'}
  },
  {
    ru:{text:'GreenMAX, MiMAX жана BluMAX ичкен 9 күндө 1,5 кг салмак кетти, беттеги шишик басылды. Операциядан кийинки бут оорусу басылды, муундар ооруба калды.', name:'Максат'},
    ky:{text:'GreenMAX, MiMAX жана BluMAX ичкен 9 күндө 1,5 кг салмак кетти, беттеги шишик басылды. Операциядан кийинки бут оорусу басылды, муундар ооруба калды.', name:'Максат'}
  },
  {
    ru:{text:'Балама бронхиалдык астма коюлган — түнкүсүн MiMAX менен GreenMAX бердим. Төрт жылдан бери биринчи жолу дем кыстыгуусуз!', name:'Айгүл'},
    ky:{text:'Балама бронхиалдык астма коюлган — түнкүсүн MiMAX менен GreenMAX бердим. Төрт жылдан бери биринчи жолу дем кыстыгуусуз!', name:'Айгүл'}
  }
];

const i18n = {
  brandSub:{ru:'Global Mindset. Local Impact.', ky:'Global Mindset. Local Impact.'},
  navCatalog:{ru:'Курсы', ky:'Курстар'},
  navAbout:{ru:'О компании', ky:'Компания жөнүндө'},
  navReviews:{ru:'Отзывы', ky:'Пикирлер'},
  navBlog:{ru:'Блог', ky:'Блог'},
  navContact:{ru:'Контакты', ky:'Байланыш'},
  navCta:{ru:'Выбрать курс', ky:'Курс тандоо'},
  heroEyebrow:{ru:'Здоровье и красота · M-International', ky:'Ден соолук жана сулуулук · M-International'},
  heroTitle:{ru:'Курсы и продукция M-International: обучение, здоровье и красота', ky:'M-International курстары жана продукциясы: окуу, ден соолук жана сулуулук'},
  heroLead:{ru:'Практические курсы и натуральная продукция для детокса, иммунитета, контроля веса и красоты. Айсулуу поможет подобрать программу под ваш запрос и оформить заказ в Бишкеке и по всему Кыргызстану.', ky:'Практикалык курстар жана детокс, иммунитет, салмакты көзөмөлдөө, сулуулук үчүн табигый продукция. Айсулуу сурооңузга жараша программа тандап, Бишкекте жана Кыргызстан боюнча буйрутма тариздөөгө жардам берет.'},
  heroBtn1:{ru:'Смотреть каталог', ky:'Каталогду көрүү'},
  heroBtn2:{ru:'Написать в WhatsApp', ky:'WhatsApp\'ка жазуу'},
  heroCall:{ru:'Позвонить Айжан', ky:'Айжанга чалуу'},
  heroTag:{ru:'Прямые продажи', ky:'Түз сатуу'},
  valueKnowledge:{ru:'Курсы', ky:'Курстар'},
  valueOpportunities:{ru:'Продукция', ky:'Продукция'},
  valueGrowth:{ru:'Здоровье', ky:'Ден соолук'},
  valueCommunity:{ru:'Красота', ky:'Сулуулук'},
  valueQuality:{ru:'Качество', ky:'Сапат'},
  trustLabel:{ru:'Нам доверяют', ky:'Бизге ишенишет'},
  trustStudents:{ru:'студентов уже достигли своих целей', ky:'студент максаттарына жетти'},
  metric1:{ru:'Практических курсов по востребованным направлениям', ky:'Суроо-талаптагы багыттар боюнча практикалык курстар'},
  metric2:{ru:'Студентов уже достигли своих целей', ky:'Студент максаттарына жетти'},
  metric3:{ru:'Студентов рекомендуют наши курсы друзьям и коллегам', ky:'Студенттер курстарды досторуна жана кесиптештерине сунуштайт'},
  metric4Title:{ru:'Эксперты', ky:'Эксперттер'},
  metric4:{ru:'Преподаватели-практики с опытом в реальных проектах', ky:'Реалдуу долбоорлордо тажрыйбасы бар практик мугалимдер'},
  consultantRole:{ru:'Консультант M-International', ky:'M-International кеңешчиси'},
  consultantLocation:{ru:'Бишкек · Кыргызстан', ky:'Бишкек · Кыргызстан'},
  stat1:{ru:'товаров в каталоге', ky:'каталогдогу товар'},
  stat2:{ru:'натуральный состав', ky:'табигый курам'},
  stat3:{ru:'сертификат', ky:'сертификат'},
  trust1:{ru:'100% натуральные компоненты', ky:'100% табигый компоненттер'},
  trust2:{ru:'Халяль сертификат', ky:'Халал сертификаты'},
  trust3:{ru:'Лицензия прямых продаж', ky:'Түз сатуу лицензиясы'},
  trust4:{ru:'Доставка по Кыргызстану', ky:'Кыргызстан боюнча жеткирүү'},
  aboutEyebrow:{ru:'О продукции', ky:'Продукция жөнүндө'},
  aboutTitle:{ru:'Одна философия — три шага заботы о теле', ky:'Бир философия — денеге кам көрүүнүн үч кадамы'},
  aboutLead:{ru:'Очищение, восстановление и питание — вся линейка M-International построена вокруг этих трёх шагов, чтобы результат от каждого продукта был заметен и держался долго.', ky:'Тазалоо, калыбына келтирүү жана тамактануу — M-International линиясы ушул үч кадамга негизделген, ошондуктан ар бир продукциянын натыйжасы көрүнүктүү жана узак сакталат.'},
  catEyebrow:{ru:'Каталог', ky:'Каталог'},
  catTitle:{ru:'Продукция M-International', ky:'M-International продукциясы'},
  catLead:{ru:'Выберите категорию, чтобы найти нужное решение — от детокса до ухода за лицом.', ky:'Керектүү чечимди табуу үчүн категорияны тандаңыз — детокстон бет кароого чейин.'},
  revEyebrow:{ru:'Пикирлер', ky:'Пикирлер'},
  revTitle:{ru:'Кардарлар эмне дейт', ky:'Кардарлар эмне дейт'},
  ctTitle:{ru:'Готовы начать заботу о здоровье?', ky:'Ден соолукка кам көрүүнү баштоого даярсызбы?'},
  ctLead:{ru:'Свяжитесь с нами удобным способом — мы ответим на ваши вопросы и поможем подобрать лучшее решение для вас.', ky:'Биз менен ыңгайлуу жол менен байланышыңыз — суроолоруңузга жооп берип, сизге ылайыктуу чечимди тандоого жардам беребиз.'},
  ctNote:{ru:'Отвечаем быстро, работаем каждый день с 9:00 до 21:00.', ky:'Тез жооп беребиз, күн сайын 9:00дөн 21:00гө чейин иштейбиз.'},
  ctWa:{ru:'Написать в WhatsApp', ky:'WhatsApp\'ка жазуу'},
  ctTg:{ru:'Написать в Telegram', ky:'Telegram\'га жазуу'},
  ctInstagram:{ru:'Написать в Instagram', ky:'Instagram\'га жазуу'},
  footText:{ru:'Натуральная продукция M-International для здоровья, красоты и ежедневной заботы о себе.', ky:'Ден соолук, сулуулук жана күнүмдүк кам көрүү үчүн M-International табигый продукциясы.'},
  footerProducts:{ru:'Продукция', ky:'Продукция'},
  footerCourses:{ru:'Курсы', ky:'Курстар'},
  footerAllCourses:{ru:'Все курсы', ky:'Бардык курстар'},
  footerPopular:{ru:'Популярные', ky:'Популярдуу'},
  footerNew:{ru:'Новые', ky:'Жаңы'},
  footerCompany:{ru:'Для компаний', ky:'Компаниялар үчүн'},
  footerAbout:{ru:'О компании', ky:'Компания жөнүндө'},
  footerAboutUs:{ru:'О нас', ky:'Биз жөнүндө'},
  footerMission:{ru:'Наша миссия', ky:'Биздин миссия'},
  footerTeam:{ru:'Команда', ky:'Команда'},
  footerPartners:{ru:'Партнёры', ky:'Өнөктөштөр'},
  footerUseful:{ru:'Полезное', ky:'Пайдалуу'},
  footerBlog:{ru:'Блог', ky:'Блог'},
  footerArticles:{ru:'Статьи', ky:'Макалалар'},
  footerWebinars:{ru:'Вебинары', ky:'Вебинарлар'},
  footerFaq:{ru:'FAQ', ky:'FAQ'},
  footerSupport:{ru:'Поддержка', ky:'Колдоо'},
  footerHelp:{ru:'Помощь', ky:'Жардам'},
  footerTermsStudy:{ru:'Условия обучения', ky:'Окуу шарттары'},
  footerRefund:{ru:'Политика возврата', ky:'Кайтаруу саясаты'},
  footerContacts:{ru:'Контакты', ky:'Байланыш'},
  footerSubscribe:{ru:'Будьте в курсе', ky:'Кабардар болуңуз'},
  footerSubscribeText:{ru:'Подпишитесь на новости и получайте полезные материалы и предложения.', ky:'Жаңылыктарга жазылып, пайдалуу материалдарды жана сунуштарды алыңыз.'},
  footerCopy:{ru:'© 2024 minternational. Все права защищены.', ky:'© 2024 minternational. Бардык укуктар корголгон.'},
  footerPrivacy:{ru:'Политика конфиденциальности', ky:'Купуялуулук саясаты'},
  footerAgreement:{ru:'Пользовательское соглашение', ky:'Колдонуучу келишими'},
  lessonsEyebrow:{ru:'Видео-уроки', ky:'Видео сабактар'},
  coursePriceEyebrow:{ru:'Цены курса', ky:'Курстун баалары'},
  coursePriceTitle:{ru:'Выберите удобный формат обучения', ky:'Окуунун ыңгайлуу форматын тандаңыз'},
  coursePriceLead:{ru:'Стоимость можно уточнить у Айсулуу: она подскажет актуальные условия, набор уроков и формат сопровождения.', ky:'Баасын Айсулуудан тактасаңыз болот: ал актуалдуу шарттарды, сабактар топтомун жана коштоо форматын түшүндүрөт.'},
  priceStartLabel:{ru:'Старт', ky:'Старт'},
  priceStartTitle:{ru:'Видео-уроки', ky:'Видео сабактар'},
  priceProLabel:{ru:'Популярный', ky:'Популярдуу'},
  priceProTitle:{ru:'Курс с поддержкой', ky:'Колдоо менен курс'},
  priceVipLabel:{ru:'VIP', ky:'VIP'},
  priceVipTitle:{ru:'Индивидуально', ky:'Жеке формат'},
  priceByRequest:{ru:'Цена по запросу', ky:'Баасы суроо боюнча'},
  priceStart1:{ru:'Доступ к базовым урокам', ky:'Негизги сабактарга жетүү'},
  priceStart2:{ru:'Материалы для самостоятельного обучения', ky:'Өз алдынча окуу үчүн материалдар'},
  priceStart3:{ru:'Подходит для знакомства с программой', ky:'Программа менен таанышууга ылайыктуу'},
  pricePro1:{ru:'Видео-уроки и пошаговый план', ky:'Видео сабактар жана кадамдык план'},
  pricePro2:{ru:'Ответы на вопросы по обучению', ky:'Окуу боюнча суроолорго жооптор'},
  pricePro3:{ru:'Рекомендации по применению на практике', ky:'Практикада колдонуу боюнча сунуштар'},
  priceVip1:{ru:'Персональная консультация', ky:'Жеке консультация'},
  priceVip2:{ru:'Подбор программы под вашу цель', ky:'Максатыңызга жараша программа тандоо'},
  priceVip3:{ru:'Сопровождение и обратная связь', ky:'Коштоо жана кайтарым байланыш'},
  priceCta:{ru:'Уточнить цену', ky:'Баасын тактоо'},
  lessonsTitle:{ru:'Официальные уроки по TikTok, CapCut, ChatGPT и видео', ky:'TikTok, CapCut, ChatGPT жана видео боюнча расмий сабактар'},
  lessonsLead:{ru:'Реальные YouTube-видео: воспроизводим через официальный плеер YouTube, не скачиваем и не перезаливаем чужой контент.', ky:'Чыныгы YouTube видеолору: YouTube расмий плеери аркылуу көрсөтөбүз, башка адамдардын контентин жүктөп алып кайра жарыялабайбыз.'},
  lessonTikTokTitle:{ru:'TikTok на русском', ky:'TikTok орусча'},
  lessonTikTokText:{ru:'Реальный YouTube-урок по TikTok: запуск, контент и продвижение без перезалива видео.', ky:'TikTok боюнча чыныгы YouTube сабагы: контент жана продвижение, видеону кайра жүктөбөй.'},
  lessonCapCutTitle:{ru:'CapCut на русском', ky:'CapCut орусча'},
  lessonCapCutText:{ru:'Реальный YouTube-урок по CapCut: монтаж, эффекты и приёмы для коротких роликов.', ky:'CapCut боюнча чыныгы YouTube сабагы: монтаж, эффекттер жана кыска роликтер үчүн ыкмалар.'},
  lessonChatGPTTitle:{ru:'ChatGPT на русском', ky:'ChatGPT орусча'},
  lessonChatGPTText:{ru:'Реальный YouTube-урок на русском: как начать пользоваться ChatGPT и применять его в задачах.', ky:'ChatGPT колдонуп баштоо жана аны тапшырмаларда колдонуу боюнча орусча YouTube сабак.'},
  lessonVideoTitle:{ru:'Монтаж видео', ky:'Видео монтаж'},
  lessonVideoText:{ru:'Реальный YouTube-урок на русском по монтажу и созданию видео для начинающих.', ky:'Жаңы баштагандар үчүн видео монтаж жана видео түзүү боюнча орусча YouTube сабак.'},
  lessonOpen:{ru:'Открыть уроки →', ky:'Сабактарды ачуу →'},
  lessonOpenYouTube:{ru:'Открыть на YouTube →', ky:'YouTubeдан ачуу →'},
  modalComp:{ru:'Состав', ky:'Курамы'},
  modalBen:{ru:'Польза для здоровья', ky:'Ден соолукка пайдасы'},
  modalOrder:{ru:'Заказать в WhatsApp', ky:'WhatsApp аркылуу буйрутма берүү'},
  modalClose:{ru:'Закрыть', ky:'Жабуу'},
  more:{ru:'Подробнее', ky:'Толугураак'},
};

let lang = 'ru';
let activeCat = 'all';

function t(key){ return i18n[key] ? i18n[key][lang] : key; }

function setLang(l){
  lang = l;
  document.getElementById('btn-ru').classList.toggle('active', l==='ru');
  document.getElementById('btn-ky').classList.toggle('active', l==='ky');
  document.documentElement.lang = l === 'ru' ? 'ru' : 'ky';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(key === 'heroTitle'){
      const text = t(key);
      const lastSpace = text.lastIndexOf(' ');
      el.innerHTML = `${text.slice(0, lastSpace)} <span>${text.slice(lastSpace + 1)}</span>`;
      return;
    }
    el.textContent = t(key);
  });
  renderFilters();
  renderGrid();
  renderTesti();
}

function renderFilters(){
  const el = document.getElementById('filters');
  el.innerHTML = '';
  categories.forEach(c=>{
    const b = document.createElement('button');
    b.textContent = c[lang];
    b.className = c.key===activeCat ? 'active' : '';
    b.onclick = ()=>{ activeCat = c.key; renderFilters(); renderGrid(); };
    el.appendChild(b);
  });
}

function renderGrid(){
  const el = document.getElementById('grid');
  el.innerHTML = '';
  const list = products.filter(p => activeCat==='all' || p.category===activeCat);
  list.forEach((p,i)=>{
    const card = document.createElement('div');
    const revealTypes = ['reveal-scale', 'reveal-left', 'reveal-right', 'reveal-pop'];
    card.className = `card reveal ${revealTypes[i % revealTypes.length]}`;
    card.style.setProperty('--delay', ((i%3)*0.08)+'s');
    card.innerHTML = `
      <div class="card-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="card-body">
        <p class="card-tag">${p.tag[lang]}</p>
        <h3>${p.name}</h3>
        <p class="card-desc">${p.desc[lang]}</p>
        <div class="card-foot">
          <button class="link-more" onclick="openModal('${p.id}')">${t('more')} →</button>
        </div>
      </div>`;
    el.appendChild(card);
  });
}

function renderTesti(){
  const el = document.getElementById('testiGrid');
  el.innerHTML = '';
  testimonials.forEach((x,i)=>{
    const d = document.createElement('div');
    d.className = `testi reveal ${i % 2 ? 'reveal-right' : 'reveal-left'}`;
    d.style.setProperty('--delay', (i*0.1)+'s');
    d.innerHTML = `<p>«${x[lang].text}»</p><div class="name">— ${x[lang].name}</div>`;
    el.appendChild(d);
  });
}

function openModal(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  document.getElementById('modalImg').src = p.image;
  document.getElementById('modalImg').alt = p.name;
  document.getElementById('modalTag').textContent = p.tag[lang];
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc[lang];
  document.getElementById('modalComp').innerHTML = p.composition.map(c=>`<span class="chip">${c}</span>`).join('');
  document.getElementById('modalBen').innerHTML = p.benefits[lang].map(b=>`<li>${b}</li>`).join('');
  document.getElementById('modalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function playHeroVideo(){
  const el = document.getElementById('heroVideo');
  if(!el) return;
  if(window.location.protocol === 'file:'){
    const link = el.querySelector('.youtube-link');
    if(link) link.classList.add('is-highlighted');
    if(!el.querySelector('.video-local-note')){
      el.insertAdjacentHTML('beforeend', '<div class="video-local-note">Для просмотра внутри сайта откройте страницу через локальный сервер: http://127.0.0.1:8000</div>');
    }
    return;
  }
  const origin = window.location.origin && window.location.origin !== 'null'
    ? `&origin=${encodeURIComponent(window.location.origin)}`
    : '';
  el.classList.add('is-playing');
  el.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/58yFGVMdz2E?autoplay=1&rel=0&modestbranding=1&playsinline=1${origin}"
      title="Айсулуу · M-International"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
    <a class="youtube-link is-floating" href="https://youtu.be/58yFGVMdz2E" target="_blank" rel="noopener">YouTube</a>
  `;
}

function playLessonVideo(button){
  const card = button.closest('.lesson-card');
  const thumb = button.closest('.lesson-thumb');
  const videoId = card ? card.dataset.videoId : '';
  if(!thumb || !videoId) return;

  if(window.location.protocol === 'file:'){
    window.open(`https://youtu.be/${videoId}`, '_blank', 'noopener');
    return;
  }

  const origin = window.location.origin && window.location.origin !== 'null'
    ? `&origin=${encodeURIComponent(window.location.origin)}`
    : '';
  thumb.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1${origin}"
      title="YouTube video lesson"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;
}

renderFilters();
renderGrid();
renderTesti();

/* ---------------- SCROLL REVEAL OBSERVER ---------------- */
function prepareRevealAnimations(){
  document.querySelectorAll('.hero-stats div').forEach((el,i)=>{
    el.classList.add('reveal', 'reveal-pop');
    el.style.setProperty('--delay', `${i * 0.1}s`);
  });
  document.querySelectorAll('.contact-methods a').forEach((el,i)=>{
    el.classList.add('reveal', i % 2 ? 'reveal-right' : 'reveal-left');
    el.style.setProperty('--delay', `${i * 0.1}s`);
  });
  document.querySelectorAll('.leafline, footer').forEach(el=>{
    el.classList.add('reveal');
  });
  document.querySelectorAll('.section-head').forEach((el,i)=>{
    if(!el.classList.contains('reveal-left') && !el.classList.contains('reveal-right') && !el.classList.contains('reveal-scale')){
      el.classList.add(i % 2 ? 'reveal-right' : 'reveal-left');
    }
  });
}

const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
    }else{
      entry.target.classList.remove('in-view');
    }
  });
}, {threshold:0.18, rootMargin:'0px 0px -8% 0px'});

function observeReveals(){
  document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
}
// initial pass for static content
prepareRevealAnimations();
observeReveals();
// re-scan after every dynamic render (grid/testimonials rebuilt on filter/lang change)
const origRenderGrid = renderGrid;
renderGrid = function(){ origRenderGrid(); prepareRevealAnimations(); observeReveals(); };
const origRenderTesti = renderTesti;
renderTesti = function(){ origRenderTesti(); prepareRevealAnimations(); observeReveals(); };
renderGrid();
renderTesti();

