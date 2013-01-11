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
                    elem: 'slide',
                    title: 'Первый слайд',
                    content: [
                        {
                            block: 'b-list',
                            mods: { nobullets: 'yes' },
                            content:
                                [
                                    "Первый релиз 20 сентября 2009",
                                    "Крайний релиз 13 октяря 2012",
                                    "Лицензия BSD",
                                    "Уникальное имя - жутко удобно при поиске =)"
                                ].map( function(val){
                                    return {elem: 'item', content: val};
                                })
                        }
                    ]
                },
                {
                    elem: 'slide',
                    title: 'Второй слайд и очень длинное название',
                    content: "Это второй слайдик"
                },
                {
                    elem: 'slide',
                    title: 'Третий слайд',
                    content: "А это действительно третий"
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
