
// banner w/ current date
console.log('---------------');
const date = new Date();
console.log(date.toDateString());
console.log('---------------');


// array of all quotes
const quotes = [
'Act as if what you do makes a difference. It does. - William James',
'Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill',
'Never bend your head. Always hold it high. Look the world straight in the eye. - Helen Keller',
'What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar',
'Believe you can and you\'re halfway there. - Theodore Roosevelt',
'When you have a dream, you\'ve got to grab it and never let go. - Carol Burnett',
'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean',
'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. - William James',
'Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein',
'Just don\'t give up trying to do what you really want to do. Where there is love and inspiration, I don\'t think you can go wrong. - Ella Fitzgerald',
'Limit your "always" and your "nevers." - Amy Poehler',
'You are never too old to set another goal or to dream a new dream. - C.S. Lewis',
'Try to be a rainbow in someone else\'s cloud. - Maya Angelou',
'You do not find the happy life. You make it. - Camilla Eyring Kimball',
'Sometimes you will never know the value of a moment, until it becomes a memory. - Dr. Seuss',
'The most wasted of days is one without laughter. - E. E. Cummings',
'You must do the things you think you cannot do. - Eleanor Roosevelt',
'Some people look for a beautiful place. Others make a place beautiful. - Hazrat Inayat Khan',
'Life changes very quickly, in a very positive way, if you let it. - Lindsey Vonn',
'Be the change that you wish to see in the world. - Mahatma Gandhi',

];
// console.log(quotes.length);

// print random quote from array
console.log(quotes[Math.floor(Math.random() * (quotes.length))]);