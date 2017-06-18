$(function() {

    // acak

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    posts = shuffle(posts)

    // menampilkan related posts

    $target = $(".row a.list-group-item")

    for (n = 0; n < posts.length; n++) {
        $target.eq(n).html(posts[n].judul)
        $target.eq(n).attr("href", posts[n].link)
    }

})
