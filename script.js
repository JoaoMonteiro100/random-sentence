$(document).ready(function() {
    var quotes = [
        "You fall asleep thinking about what you'll cook the next day.",
        "You go to bed before midnight, even when you don't need to wake up early.",
        "You start making grocery shopping lists.",
        "You begin to really appreciate eating out.",
        "You choose to eat out at healthy places.",
        "You gift yourself nice things once in a while (because you deserve it).",
        "You start watching movies not knowing if you'll still be awake by the end.",
        "You become genuinely excited by promotions in your local supermarket.",
        "The best use of your free time is doing literally nothing, just resting.",
        "Your friends start getting married and having kids.",
        "\"Going out\" means having a low-alcohol drink with friends and be home no later than 1 am.",
        "Only insomnia makes you stay awake after 1 am.",
        "You really, truly understand the value proposition of home delivery companies.",
        "You realise that all your non-close friends have become acquaintances.",
        "You are heads over heels because your new home has central heating.",
        "You have mastered the skill of small talk (but you still hate it).",
        "You day-dream about going to bed.",
        "You have to put in the effort to keep old friends."
    ];

    var colours = [{
        "text": "ffffff",
        "one": "DECBA4",
        "two": "3E5151",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "FF0080",
        "two": "FF8C00",
        "three": "40E0D0",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "4b134f",
        "two": "c94b4b",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "0f0c29",
        "two": "302b63",
        "three": "0f0c29",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "96c93d",
        "two": "00b09b",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "f7b733",
        "two": "fc4a1a",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "fdbb2d",
        "two": "b21f1f",
        "three": "1a2a6c",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "ff5e62",
        "two": "ff9966",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "5B86E5",
        "two": "36D1DC",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "BD3F32",
        "two": "CB356B",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "FF8235",
        "two": "30E8BF",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "45B649",
        "two": "DCE35B",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "2F0743",
        "two": "41295a",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "ff6a00",
        "two": "ee0979",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "e55d87",
        "two": "5fc3e4",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "f09819",
        "two": "edde5d",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "eb3349",
        "two": "f45c43",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "1f1c2c",
        "two": "928dab",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "1d976c",
        "two": "93f9b9",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "d53369",
        "two": "cbad6d",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "5d4157",
        "two": "a8caba",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "83a4d4",
        "two": "b6fbff",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "feac5e",
        "two": "c779d0",
        "three": "4bc0c8",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "00bf8f",
        "two": "001510",
        "three": "zzzzzz",
        "orientation": "right"
    }, {
        "text": "ffffff",
        "one": "d1913c",
        "two": "ffd194",
        "three": "zzzzzz",
        "orientation": "right"
}];

    function getCssValuePrefix()
    {
        var rtrnVal = ''; //default to standard syntax
        var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

        // Create a temporary DOM object for testing
        var dom = document.createElement('div');

        for (var i = 0; i < prefixes.length; i++)
        {
            // Attempt to set the style
            dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';

            // Detect if the style was successfully set
            if (dom.style.background)
            {
                rtrnVal = prefixes[i];
            }
        }

        dom = null;
        delete dom;

        return rtrnVal;
    }

    function getQuote() {
        var randomIndexOne = Math.floor(Math.random() * quotes.length);
        var randomIndexTwo = Math.floor(Math.random() * colours.length);
        var selectedQuote = quotes[randomIndexOne];
        var selectedColours = colours[randomIndexTwo];

        $('#main-quote').text(selectedQuote);
        var font = selectedColours.text;
        var orientation = selectedColours.orientation;
        var one = selectedColours.one;
        var two = selectedColours.two;
        var three = selectedColours.three;

        var stringBG = getCssValuePrefix() + 'linear-gradient(' + orientation + ', #' + one + ', #' + two;

        if(three != "zzzzzz") {
            stringBG += ', #' + three + ')';
        }
        else {
            stringBG += ')';
        }

        $("body").css("color", "#" + font);
        $("body").css("background", stringBG);
    }

    $('#random-quote').click(getQuote);
    getQuote();
});