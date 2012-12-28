BEM.DOM.decl('b-graph', {

    onSetMod : {

        js : function() {

            this._draw();

        }

    },

    _draw : function() {

        var data = [{year: 2003, books: 14},
                    {year: 2004, books: 22},
                    {year: 2005, books: 73},
                    {year: 2006, books: 54},
                    {year: 2007, books: 43},
                    {year: 2008, books: 41},
                    {year: 2009, books: 44},
                    {year: 2010, books: 35}];


        var barWidth = 40;
        var width = (barWidth + 10) * data.length;
        var height = 200;

        var x = d3.scale.linear().domain([0, data.length]).range([0, width]);
        var y = d3.scale.linear().domain([0, d3.max(data, function(datum) { return datum.books; })]).
        rangeRound([0, height]);

        var barDemo =
            d3.select('.b-graph__drawing').
               append("svg:svg").
               attr("width", width).
               attr("height", height);

        barDemo.selectAll("rect").
                data(data).
                enter().
                append("svg:rect").
                attr("x", function(datum, index) { return x(index); }).
                attr("y", function(datum) { return height - y(datum.books); }).
                attr("height", function(datum) { return y(datum.books); }).
                attr("width", barWidth).
                attr("fill", "#2d578b");

        barDemo.selectAll("text").
                data(data).
                enter().
                append("svg:text").
                attr("x", function(datum, index) { return x(index) + barWidth; }).
                attr("y", function(datum) { return height - y(datum.books); }).
                attr("dx", -barWidth/2).
                attr("dy", "1.2em").
                attr("text-anchor", "middle").
                text(function(datum) { return datum.books;}).
                attr("fill", "white");

    }


});

