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
                            elemMods: { 'fragmented': 'yes' },
                            title: 'Первый слайд',
                            playtime: 2,
                            content: [
                                {
                                    block: 'b-list',
                                    mods: { nobullets: 'yes', 'fragment': '0' },
                                    content:
                                        [
                                            "Первый релиз 20 сентября 2009",
                                            "Крайний релиз 13 октяря 2012",
                                            "Лицензия BSD",
                                            "Уникальное имя - жутко удобно при поиске =)"
                                        ].map( function(val){
                                            return {elem: 'item', content: val};
                                        })
                                },
                                {
                                    elem: 'second',
                                    elemMods: { 'fragment': '1' }
                                }
                            ]
                        },
                        {
                            elem: 'slide',
                            title: 'Второй слайд и очень длинное название',
                            playtime: 6,
                            content: "Это второй слайдик"
                        },
                        {
                            elem: 'slide',
                            title: 'Третий слайд',
                            playtime: 2,
                            content: "А это действительно третий"
                        }
                    ]
                },
                {
                    elem: 'contents',
                    elemMods: { hidden: 'yes' },
                    content: [
                        {
                            elem: 'list',
                            content: [
                                {
                                    block: 'b-list',
                                    mods: { ordered: 'yes' },
                                    content: [
                                        { elem: 'item', mix: {block: 'b-slide-show', elem: 'contents-item' }, content: 'Пример списочка'},
                                        { elem: 'item', mix: {block: 'b-slide-show', elem: 'contents-item' }, content: 'Второй и очень длинное название слайда' },
                                        { elem: 'item', mix: {block: 'b-slide-show', elem: 'contents-item' }, content: 'А вот и третий' }
                                    ]
                                }
                            ]
                        },
                        { elem: 'bookmark' }
                    ]
                }
            ]
        }
    ]
})
