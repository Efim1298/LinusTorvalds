jQuery(document).ready(function(){


    let quotes = [
        "Життя - це те, що з тобою відбувається, поки ти будуєш плани",
        "Логіка може привести вас. від пункту А до пункту Б, а уява – куди завгодно.",
        "80% успіху — це з'явитися в потрібному місці в потрібний час.",
        "У моєму словнику немає слова неможливо.",
        "Свобода нічого не варта, якщо вона не включає в себе свободу помилятися",
        ];

        let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
        $('.quote').append(randomQuote);
    

});