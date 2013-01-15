({
    block: 'b-page',
    title: 'Learning TMUX the hard way',
    favicon: '/vim_logo.jpeg',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' }
    ],
    content:[
        {
            block: 'b-slide-show',
            content: [
                {
                    elem: 'slides',
                    content: [
                        {
                            elem: 'slide',
                            title: 'Вступление',
                            playtime: 10,
                            style: "position: absolute; top: 40%; width: 100%; font-size: 100px",
                            content: 'Screen vs. TMUX'
                        },
                        {
                            elem: 'slide',
                            title: 'Чем-нибудь пользуетесь?',
                            playtime: 10,
                            style: "position: absolute; top: 40%; width: 100%",
                            content: 'Каким из них вы пользуетесь?'
                        },
                        {
                            elem: 'slide',
                            title: 'Для чего они вообще нужны?',
                            playtime: 2,
                            style: "position: absolute; top: 40%; width: 100%",
                            content: 'А для чего они вообще нужны?'
                        },
                        {
                            elem: 'slide',
                            elemMods: { 'fragmented': 'yes' },
                            title: 'Вот для чего',
                            playtime: 8,
                            style: "position: absolute; top: 10%; left: 10%; width: 80%; text-align: left",
                            content: [
                                {
                                    block: 'b-list',
                                    content:
                                        [
                                            {
                                                elem: 'item',
                                                mix: [{ block: 'b-slide-show', elem: 'fragment', elemMods: { show: 'yes' } }],
                                                content: 'Можно оперировать множеством терминалов через один.'
                                            },
                                            {
                                                elem: 'item',
                                                mix: [{ block: 'b-slide-show', elem: 'fragment', elemMods: { show: 'no'} }],
                                                content: 'Вся навигация осуществляется при помощи клавиатуры.'
                                            },
                                            {
                                                elem: 'item',
                                                mix: [{ block: 'b-slide-show', elem: 'fragment', elemMods: { show: 'no' } }],
                                                content: 'Наличие сессий. Можно подключаться и отключаться не теряя окружение.'
                                            },
                                            {
                                                elem: 'item',
                                                mix: [{ block: 'b-slide-show', elem: 'fragment', elemMods: { show: 'no'} }],
                                                content: 'Доступна навигация и текстовый поиск по истории вывода терминала на стороне сервера.'
                                            },
                                            {
                                                elem: 'item',
                                                mix: [{ block: 'b-slide-show', elem: 'fragment', elemMods: { show: 'no' } }],
                                                content: 'Можно получать unobtrusive визуальные уведомления об активности в скрытом терминале.'
                                            }
                                        ]
                                }
                            ]
                        },
                        {
                            elem: 'slide',
                            elemMods: { 'fragmented': 'yes' },
                            title: 'А также',
                            playtime: 8,
                            style: "position: absolute; top: 10%; left: 10%; width: 80%; text-align: left",
                            content: [
                                {
                                    elem: 'fragment',
                                    elemMods: { show: 'yes' },
                                    style: "text-align: center",
                                    content: 'А также:'
                                },
                                {
                                    block: 'b-list',
                                    content:
                                        [
                                            {
                                                elem: 'item',
                                                mix: [{ block: 'b-slide-show', elem: 'fragment', elemMods: { show: 'no' } }],
                                                content: 'Облегчает работу при нестабильном соединении.'
                                            },
                                            {
                                                elem: 'item',
                                                mix: [{ block: 'b-slide-show', elem: 'fragment', elemMods: { show: 'no'} }],
                                                content: 'Даёт возможность работать в одной и той же сессии вместе с несколькими людьми.'
                                            },
                                            {
                                                elem: 'item',
                                                mix: [{ block: 'b-slide-show', elem: 'fragment', elemMods: { show: 'no'} }],
                                                content: 'Позволяет легко извлекать и передавать историю вывода терминала.'
                                            }
                                        ]
                                }
                            ]
                        },
                        {
                            elem: 'slide',
                            elemMods: { 'fragmented': 'yes' },
                            title: 'screen не торт',
                            playtime: 2,
                            style: "position: absolute; top: 30%; width: 100%",
                            content: [
                                {
                                    elem: 'fragment',
                                    elemMods: { show: 'yes' },
                                    content: 'К сожалению screen уже не торт'
                                },
                                {
                                    elem: 'fragment',
                                    elemMods: { show: 'no' },
                                    content: 'Он полностью функционален, просто потихоньку умирает...'
                                },
                                {
                                    elem: 'fragment',
                                    elemMods: { show: 'no' },
                                    content: 'уже давно.'
                                }

                            ]
                        },
                        {
                            elem: 'slide',
                            elemMods: { 'fragmented': 'yes' },
                            title: 'Недостатки screen',
                            playtime: 8,
                            style: "position: absolute; top: 10%; left: 10%; width: 80%; text-align: left",
                            content: [
                                {
                                    block: 'b-list',
                                    content:
                                        [
                                            {
                                                elem: 'item',
                                                mix: [{ block: 'b-slide-show', elem: 'fragment', elemMods: { show: 'yes' } }],
                                                content: 'Патч от 2006 года, позволяющий делать вертикальный сплит так и не был влит в основную ветку.'
                                            },
                                            {
                                                elem: 'item',
                                                mix: [{ block: 'b-slide-show', elem: 'fragment', elemMods: { show: 'no'} }],
                                                content: 'Да и вообще самая свежая версия screen 4.0.3 была выпущена в 2005 году.'
                                            },
                                            {
                                                elem: 'item',
                                                mix: [{ block: 'b-slide-show', elem: 'fragment', elemMods: { show: 'no'} }],
                                                content: 'Можно было бы подумать что screen совершенен и в патчах нет необходимости...'
                                            },
                                            {
                                                elem: 'item',
                                                mix: [{ block: 'b-slide-show', elem: 'fragment', elemMods: { show: 'no'} }],
                                                content: 'но багов и фич-реквестов очень много, а люди копавшиеся в коде говорят что это полная ж**а.'
                                            }
                                        ]
                                }
                            ]
                        },
                        {
                            elem: 'slide',
                            title: 'TMUX to the rescue',
                            playtime: 2,
                            style: "position: absolute; top: 40%; width: 100%; font-size: 100px;",
                            content: 'Но TMUX нас всех спасёт!'
                        }
                    ]
                }
            ]
        }
    ]
})
