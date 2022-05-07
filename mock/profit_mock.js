const filters =  [
    {
        "code": "black-friday",
        "name": "Чёрная пятница",
        "isActive": true
    },
    {
        "code": "promotion",
        "name": "Интернет-продвижение",
        "isActive": false
    },
    {
        "code": "buhgalteria",
        "name": "Бухгалтерия",
        "isActive": false
    },
    {
        "code": "svyaz",
        "name": "Всегда на связи",
        "isActive": true
    },
    {
        "code": "program",
        "name": "Сервисы",
        "isActive": false
    },
    {
        "code": "personnel",
        "name": "Персонал",
        "isActive": false
    },
    {
        "code": "staff",
        "name": "Доставки",
        "isActive": false
    },
    {
        "code": "cargo",
        "name": "Автобизнес",
        "isActive": false
    },
    {
        "code": "cards",
        "name": "По карте Точки",
        "isActive": true
    },
    {
        "code": "marketplaces",
        "name": "Маркетплейсы",
        "isActive": false
    },
    {
        "code": "purchases",
        "name": "Госзакупки",
        "isActive": false
    },
    {
        "code": "bonus_month",
        "name": "Бонус месяца",
        "Ru sclad isActive": false
    }
]

const profits = [
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/REFERRAL_BF.TOCHKA.1637297394.svg",
            "title": "1 год",
            "subtitle": "бесплатного обслуживания для ваших друзей и контрагентов"
        },
        "categories": [
            "black-friday, svyaz"
        ],
        "code": "REFERRAL_BF"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/TOCHKA.TOCHKA.svg",
            "title": "от&nbsp;3&nbsp;000&nbsp;₽ в&nbsp;год",
            "subtitle": "за&nbsp;онлайн-бухгалтерию для&nbsp;ИП"
        },
        "categories": [
            "buhgalteria"
        ],
        "code": "ACCOUNTING"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/megafon8800.TOCHKA.svg",
            "title": "Бесплатное",
            "subtitle": "подключение бронзового номера 8 800 и 3 месяца Виртуальной АТС"
        },
        "categories": [
            "svyaz"
        ],
        "code": "MEGAFON8800"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/ACQUIRING.TOCHKA.1623307175.svg",
            "title": "От&nbsp;0,4%",
            "subtitle": "за&nbsp;торговый эквайринг"
        },
        "categories": [
            "program"
        ],
        "code": "ACQUIRING"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/HH.TOCHKA.svg",
            "title": "14 дней",
            "subtitle": "бесплатной работы в сервисе подбора сотрудников"
        },
        "categories": [
            "personnel"
        ],
        "code": "HH"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/dellin.TOCHKA.svg",
            "title": "Скидка 25%",
            "subtitle": "на междугороднюю перевозку и доставку груза от адреса"
        },
        "categories": [
            "staff"
        ],
        "code": "DELLIN"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/opti24.TOCHKA.svg",
            "title": "Скидка 5%",
            "subtitle": "на все виды топлива в первые три месяца"
        },
        "categories": [
            "cargo"
        ],
        "code": "OPTI24"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/BUSINESS_CARD.TOCHKA.1636523550.svg",
            "title": "Бизнес-карта",
            "subtitle": "с кэшбэком за покупки до 5%"
        },
        "categories": [
            "cards"
        ],
        "code": "BUSINESS_CARD"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/OZON.TOCHKA.1634201835.svg",
            "title": "3 000 бонусов",
            "subtitle": "на рекламу"
        },
        "categories": [
            "marketplaces"
        ],
        "code": "OZON"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/GUARANTEES.TOCHKA.1631247219.svg",
            "title": "Банковские гарантии",
            "subtitle": "с решением за 3 минуты"
        },
        "categories": [
            "purchases"
        ],
        "code": "GUARANTEES"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/VK_ONE_WEEK.TOCHKA.svg",
            "title": "9&nbsp;000&nbsp;₽",
            "subtitle": "и помощь в настройке рекламных кампаний ВКонтакте"
        },
        "categories": [
            "promotion"
        ],
        "code": "VKONTAKTE9000"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/OZON_BF.TOCHKA.1637298846.svg",
            "title": "Кешбэк 10% рублями",
            "subtitle": "за покупки на Ozon"
        },
        "categories": [
            "black-friday"
        ],
        "code": "OZON_BF"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/elba-god.TOCHKA.svg",
            "title": "12 месяцев",
            "subtitle": "онлайн-бухгалтерии для ИП от Контур.Эльбы"
        },
        "categories": [
            "buhgalteria"
        ],
        "code": "ELBA-GOD"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/megafon_tariff.TOCHKA.svg",
            "title": "3 месяца",
            "subtitle": "бесплатных звонков и интернета на бизнес-тарифах «Управляй»"
        },
        "categories": [
            "svyaz"
        ],
        "code": "MEGAFON_TARIFF"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/metrocash.TOCHKA.svg",
            "title": "Скидка 20%",
            "subtitle": "для новых клиентов"
        },
        "categories": [
            "program"
        ],
        "code": "METROCASH"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/LOYALTY_BF.TOCHKA.1637299642.svg",
            "title": "5% кешбэка",
            "subtitle": "баллами за все покупки по карте "
        },
        "categories": [
            "black-friday"
        ],
        "code": "LOYALTY_BF"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/TOCHKA.TOCHKA.svg",
            "title": "1&nbsp;месяц",
            "subtitle": "бесплатной работы в&nbsp;сервисе Кадры"
        },
        "categories": [
            "personnel"
        ],
        "code": "STAFF"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/dhl.TOCHKA.svg",
            "title": "Скидка до&nbsp;40%  ",
            "subtitle": "на доставку от DHL&nbsp;Express"
        },
        "categories": [
            "staff"
        ],
        "code": "DHL"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/europlan.TOCHKA.svg",
            "title": "Скидка до 20%",
            "subtitle": "на лизинговые автомобили"
        },
        "categories": [
            "cargo"
        ],
        "code": "EUROPLAN"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/BOOKING.TOCHKA.1636525003.svg",
            "title": "Кешбэк до 10%",
            "subtitle": "за бронь номера, апартаментов или виллы на сайте"
        },
        "categories": [
            "cards"
        ],
        "code": "BOOKING"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/POINT_ALIEXPRESS.TOCHKA.1635843494.svg",
            "title": "1 000 баллов",
            "subtitle": "от Точки за первую продажу на AliExpress"
        },
        "categories": [
            "marketplaces"
        ],
        "code": "POINT_ALIEXPRESS"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/TENDERS_SUPPORT.TOCHKA.1635325854.svg",
            "title": "Документы для тендера",
            "subtitle": "под вашу заявку"
        },
        "categories": [
            "purchases"
        ],
        "code": "TENDERS_SUPPORT"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/mytarget.TOCHKA.svg",
            "title": "Удваиваем первые два платежа",
            "subtitle": "до 75 000 ₽ каждый"
        },
        "categories": [
            "promotion"
        ],
        "code": "MYTARGET"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/moedelo.TOCHKA.svg",
            "title": "6 месяцев",
            "subtitle": "онлайн бухгалтерии для ИП&nbsp;и&nbsp;ООО"
        },
        "categories": [
            "buhgalteria"
        ],
        "code": "MOEDELO"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/megafon_target.TOCHKA.0138619ecf90aa4cf7db51d8a0dc9221.svg",
            "title": "2 000",
            "subtitle": "бесплатных смс-рассылок по базе МегаФон"
        },
        "categories": [
            "promotion",
            "svyaz"
        ],
        "code": "MEGAFON_TARGET"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/SAMSUNG_CLIENT.TOCHKA.svg",
            "title": "До 45%",
            "subtitle": "на технику Samsung до конца года"
        },
        "categories": [
            "program"
        ],
        "code": "SAMSUNG_CLIENT"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/zarplata.TOCHKA.svg",
            "title": "1&nbsp;месяц",
            "subtitle": "размещения вакансии и&nbsp;доступ к&nbsp;15&nbsp;резюме"
        },
        "categories": [
            "personnel"
        ],
        "code": "ZARPLATA"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/ROCKET_OZON.TOCHKA.1637211115.svg",
            "title": "Скидка 30% ",
            "subtitle": "на доставку заказов покупателям"
        },
        "categories": [
            "staff"
        ],
        "code": "ROCKET_OZON"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/baltijskij-lizing.TOCHKA.svg",
            "title": "Автотранспорт",
            "subtitle": "без удорожания"
        },
        "categories": [
            "cargo"
        ],
        "code": "BALTIJSKIJ-LIZING"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/YANDEX_REFUELING.TOCHKA.1636524272.svg",
            "title": "Скидка до 5%",
            "subtitle": "на топливо"
        },
        "categories": [
            "cards"
        ],
        "code": "YANDEX_REFUELING"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/MARKETPLACES.TOCHKA.1632307121.svg",
            "title": "Запуск продаж",
            "subtitle": "на OZON или Яндекс.Маркете за 5 000 ₽"
        },
        "categories": [
            "marketplaces"
        ],
        "code": "MARKETPLACES"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/podpis.TOCHKA.svg",
            "title": "3 месяца",
            "subtitle": "электронной подписи для торгов от Удостоверяющего центра СКБ Контур"
        },
        "categories": [
            "purchases"
        ],
        "code": "PODPIS"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/kontur_new.TOCHKA.svg",
            "title": "6 месяцев",
            "subtitle": "онлайн-бухгалтерии для ОСНО от Контур.Бухгалтерии"
        },
        "categories": [
            "buhgalteria"
        ],
        "code": "KONTUR_NEW"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/YOTA.TOCHKA.svg",
            "title": "Скидка 30%",
            "subtitle": "на безлимитный интернет для&nbsp;бизнеса"
        },
        "categories": [
            "svyaz"
        ],
        "code": "YOTA_INTERNET"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/s7_welcome.TOCHKA.svg",
            "title": "Скидка&nbsp;5%",
            "subtitle": "и&nbsp;500 бонусных рублей на&nbsp;первый полёт c&nbsp;S7&nbsp;Profi"
        },
        "categories": [
            "program"
        ],
        "code": "S7_WELCOME"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/WORKI.TOCHKA.svg",
            "title": "2 000 бонусных рублей",
            "subtitle": "на&nbsp;размещение и&nbsp;продвижение вакансий"
        },
        "categories": [
            "personnel"
        ],
        "code": "VKRABOTA"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/dpd_dostavka.TOCHKA.1585641053.svg",
            "title": "Скидка 25%",
            "subtitle": "на доставку по России"
        },
        "categories": [
            "staff"
        ],
        "code": "DPD_DOSTAVKA"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/ati.TOCHKA.svg",
            "title": "до 5 000 ₽",
            "subtitle": "от стоимости первой покупки лицензии АТИ"
        },
        "categories": [
            "cargo"
        ],
        "code": "ATI"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/ULTIMA.TOCHKA.1636524730.svg",
            "title": "Кэшбэк 20%",
            "subtitle": "баллами Яндекс Плюс за поездки в премиальных классах Ultima в Яндекс Go"
        },
        "categories": [
            "cards"
        ],
        "code": "ULTIMA"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/AliExpress.TOCHKA.1592201958.svg",
            "title": "100 товаров без комиссии",
            "subtitle": "и бесплатная доставка покупателю"
        },
        "categories": [
            "marketplaces"
        ],
        "code": "ALIEXPRESS"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/SELDON.TOCHKA.1634124823.svg",
            "title": "3 месяца ",
            "subtitle": "бесплатного доступа ко всем сервисам"
        },
        "categories": [
            "purchases"
        ],
        "code": "SELDON"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/elba2.TOCHKA.svg",
            "title": "3 месяца",
            "subtitle": "онлайн-бухгалтерии для ИП и ООО от Контур.Эльбы"
        },
        "categories": [
            "buhgalteria"
        ],
        "code": "ELBA2"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/YOTA.TOCHKA.svg",
            "title": "Скидка 30%",
            "subtitle": "на&nbsp;мобильную связь для бизнеса"
        },
        "categories": [
            "svyaz"
        ],
        "code": "YOTA_MOBILE"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/SKYENG.TOCHKA.1631516109.svg",
            "title": "4 урока английского",
            "subtitle": "и месяц разговорных клубов бесплатно"
        },
        "categories": [
            "program"
        ],
        "code": "SKYENG"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/DELLIN.TOCHKA.svg",
            "title": "Персональный менеджер",
            "subtitle": "и скидка 20% на межтерминальные перевозки"
        },
        "categories": [
            "staff"
        ],
        "code": "DELLIN_PREMIUM"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/yandex_drive.TOCHKA.a2d6fbe94385fe6560208f0a365fd5f9.svg",
            "title": "Скидка 50%",
            "subtitle": "на первую поездку"
        },
        "categories": [
            "cargo"
        ],
        "code": "YANDEX_DRIVE"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/CROSSSALE.TOCHKA.1630401413.svg",
            "title": "Выход на маркетплейсы",
            "subtitle": "со скидкой 50 000 ₽ и бесплатным сопровождением"
        },
        "categories": [
            "marketplaces"
        ],
        "code": "CROSSSALE"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/MYBOOK.TOCHKA.1636525899.svg",
            "title": "Скидка 35%",
            "subtitle": "на электронную библиотеку"
        },
        "categories": [
            "cards"
        ],
        "code": "MYBOOK"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/MAYAK.TOCHKA.1635498401.svg",
            "title": "7 дней",
            "subtitle": "доступа бесплатно"
        },
        "categories": [
            "marketplaces"
        ],
        "code": "MAYAK"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/WEEEK.TOCHKA.1635332605.svg",
            "title": "2 месяца",
            "subtitle": "в подарок при оплате первого"
        },
        "categories": [
            "bonus_month"
        ],
        "code": "WEEEK"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/aori_google.TOCHKA.svg",
            "title": "3 600 ₽",
            "subtitle": "на первую рекламную кампанию в Google"
        },
        "categories": [
            "promotion"
        ],
        "code": "AORI_GOOGLE"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/moysklad.TOCHKA.svg",
            "title": "Скидка 10&nbsp;200&nbsp;₽",
            "subtitle": "на автоматизацию розницы, опта и&nbsp;интернет-магазина"
        },
        "categories": [
            "buhgalteria"
        ],
        "code": "MOYSKLAD"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/regru.TOCHKA.1595406493.svg",
            "title": "Скидка до 80% ",
            "subtitle": "на год обслуживания"
        },
        "categories": [
            "svyaz"
        ],
        "code": "REGRU"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/bitrix24.TOCHKA.svg",
            "title": "3 месяца",
            "subtitle": "бесплатной работы на тарифе «Стандартный»"
        },
        "categories": [
            "program"
        ],
        "code": "BITRIX24"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/IGOOODS.TOCHKA.1627375715.svg",
            "title": "5 бесплатных доставок",
            "subtitle": "продуктов для вашего бизнеса"
        },
        "categories": [
            "staff"
        ],
        "code": "IGOOODS"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/STONEXXI.TOCHKA.svg",
            "title": "Скидки до 13,5%",
            "subtitle": "на&nbsp;лизинговые автомобили"
        },
        "categories": [
            "cargo"
        ],
        "code": "STONEXXI"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/VK_ONE_WEEK.TOCHKA.svg",
            "title": "3&nbsp;000&nbsp;₽",
            "subtitle": "и помощь в настройке рекламных кампаний ВКонтакте"
        },
        "categories": [
            "promotion"
        ],
        "code": "VKONTAKTE3000"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/MOEDELO_ONLINE_BUH.TOCHKA.1621254418.svg",
            "title": "От&nbsp;1&nbsp;000&nbsp;₽ в&nbsp;месяц",
            "subtitle": "за&nbsp;онлайн-бухгалтерию для&nbsp;ИП и&nbsp;ООО"
        },
        "categories": [
            "buhgalteria"
        ],
        "code": "MOEDELO_ONLINE_BUH"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/YCLIENTS.TOCHKA.1632991446.svg",
            "title": "Скидка 10%",
            "subtitle": "на покупку любого тарифа"
        },
        "categories": [
            "program"
        ],
        "code": "YCLIENTS"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/LITRES.TOCHKA.1636525458.svg",
            "title": "Скидка 25%",
            "subtitle": "на все электронные и аудиокниги"
        },
        "categories": [
            "cards"
        ],
        "code": "LITRES"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/EXPAND_SOLUTIONS.TOCHKA.1635326927.svg",
            "title": "Магазин на Wildberries",
            "subtitle": "и подготовка к запуску продаж бесплатно"
        },
        "categories": [
            "marketplaces"
        ],
        "code": "EXPAND_SOLUTIONS"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/SELLERCENTER.TOCHKA.1630662934.svg",
            "title": "10 000 ₽",
            "subtitle": "на запуск онлайн-продаж "
        },
        "categories": [
            "marketplaces"
        ],
        "code": "SELLERCENTER"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/UR66.TOCHKA.1636622896.svg",
            "title": "Скидка 20%",
            "subtitle": "на создание сайта или интернет-магазина"
        },
        "categories": [
            "bonus_month"
        ],
        "code": "UR66"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/yandex_pos.TOCHKA.57a531a723b3aff46f91e77bdd622146.svg",
            "title": "5 000 ₽",
            "subtitle": "на Рекламную подписку от Яндекс.Бизнеса"
        },
        "categories": [
            "promotion"
        ],
        "code": "YANDEX_POS"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/OVERDRAFT.TOCHKA.1632382859.svg",
            "title": "Овердрафт на топливо",
            "subtitle": "для пользователей ОПТИ 24"
        },
        "categories": [
            "cargo"
        ],
        "code": "OVERDRAFT"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/checkbox.TOCHKA.4bff743905547efa1b6191ff46bc9007.svg",
            "title": "15 доставок",
            "subtitle": "от магазина до двери покупателя бесплатно"
        },
        "categories": [
            "staff"
        ],
        "code": "CHECKBOX"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/KNOPKA.TOCHKA.svg",
            "title": "Скидка 50%",
            "subtitle": "на первый месяц ведения бухгалтерии"
        },
        "categories": [
            "buhgalteria"
        ],
        "code": "KNOPKA"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/MEGAGROUP.TOCHKA.1635509423.svg",
            "title": "Бесплатный",
            "subtitle": "сайт «Бизнес» или интернет-магазин"
        },
        "categories": [
            "promotion",
            "svyaz"
        ],
        "code": "MEGAGROUP"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/SKYENG_PREMIUM.TOCHKA.1631516326.svg",
            "title": "3 премиум-урока английского",
            "subtitle": "и месяц разговорных клубов бесплатно"
        },
        "categories": [
            "program"
        ],
        "code": "SKYENG_PREMIUM"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/hh_new.TOCHKA.svg",
            "title": "1&nbsp;месяц",
            "subtitle": "размещения вакансии «Стандарт плюс» на&nbsp;hh.ru"
        },
        "categories": [
            "program"
        ],
        "code": "HH_NEW"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/TOCHKA.TOCHKA.svg",
            "title": "3&nbsp;месяца",
            "subtitle": "электронного документооборота бесплатно"
        },
        "categories": [
            "program"
        ],
        "code": "DOCUMENTS_SAVER"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/ROISTAT.TOCHKA.svg",
            "title": "5 000 ₽",
            "subtitle": "на сквозную бизнес-аналитику"
        },
        "categories": [
            "promotion"
        ],
        "code": "ROISTAT"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/2TIPRU.TOCHKA.1632379588.svg",
            "title": "Безналичные чаевые",
            "subtitle": "без комиссии в первые два месяца"
        },
        "categories": [
            "bonus_month"
        ],
        "code": "2TIPRU"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/IHERB.TOCHKA.1636525312.svg",
            "title": "Скидка 10%",
            "subtitle": "на витамины, косметику, спортивное питание и другие товары"
        },
        "categories": [
            "cards"
        ],
        "code": "IHERB"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/KNAP.TOCHKA.svg",
            "title": "1&nbsp;месяц",
            "subtitle": "бесплатного заведения первичных документов в&nbsp;1С"
        },
        "categories": [
            "buhgalteria"
        ],
        "code": "KNAP"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/DIGITAL_DOLINA_PR.TOCHKA.1634125670.svg",
            "title": "Скидка 10%",
            "subtitle": "на курс «Безбюджетный пиар в РФ и США»"
        },
        "categories": [
            "program"
        ],
        "code": "DIGITAL_DOLINA_PR"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/MASTERCARD_AIRPORT.TOCHKA.1636526206.svg",
            "title": "Приоритетное",
            "subtitle": "прохождение контроля безопасности в аэропорту"
        },
        "categories": [
            "cards"
        ],
        "code": "MASTERCARD_AIRPORT"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/EKOM.TOCHKA.1630661600.svg",
            "title": "Скидка 50%",
            "subtitle": "на логистику или продвижение на маркетплейсах"
        },
        "categories": [
            "marketplaces"
        ],
        "code": "EKOM"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/online-patent.TOCHKA.svg",
            "title": "Скидка 5&nbsp;000&nbsp;₽",
            "subtitle": "на регистрацию товарного знака в&nbsp;Роспатенте"
        },
        "categories": [
            "program"
        ],
        "code": "ONLINE-PATENT"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/YANDEX_PRACTICUM.TOCHKA.1636525157.svg",
            "title": "Скидка 7%",
            "subtitle": "на курсы Яндекс.Практикума"
        },
        "categories": [
            "cards"
        ],
        "code": "YANDEX_PRACTICUM"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/MARKETPLACEGURU.TOCHKA.svg",
            "title": "10 000 ₽",
            "subtitle": "для продвижения на маркетплейсах"
        },
        "categories": [
            "marketplaces"
        ],
        "code": "MARKETPLACEGURU"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/2gis.TOCHKA.svg",
            "title": "Логотипы на карте",
            "subtitle": "в подарок при размещении местной рекламы"
        },
        "categories": [
            "promotion"
        ],
        "code": "2GIS"
    },
    {
        "showParams": {
            "image": "https://stage-web-bank20.bank24.int/static/v1/involve-profit/public/1674.TOCHKA.1637060190.png",
            "title": "Услуга",
            "subtitle": "за услугу"
        },
        "categories": [
            "svyaz"
        ],
        "code": "EGORYCHEV"
    }
];


function useFilter () {
    const result = [];
    const isAlreadyHave = {}

    profits.forEach(offer => {
        const {categories} = offer;
        categories.forEach( category => {
            const foundCategory = filters.find(filter => filter.code === category)
            if(foundCategory.isActive && (foundCategory.code in isAlreadyHave)) {
                result.push(offer)
                isAlreadyHave[foundCategory.code] = true
                return
            }
        })
    })
    return result
}


// useFilter()



