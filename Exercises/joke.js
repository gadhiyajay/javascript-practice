var jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call fake spaghetti? An impasta!",
    "I'm reading a book about anti-gravity. It's really uplifting!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "I used to play piano by ear, but now I use my hands.",
    "What's orange and sounds like a parrot? A carrot!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "I'm on a whiskey diet. I've lost three days already!",
    "What did the janitor say when he jumped out of the closet? 'Supplies!'",
    "Why did the math book look sad? Because it had too many problems.",
    "I'm trying to organize a hide and seek competition, but it's hard to find good players— they're always hiding!",
    "I'm friends with 25 letters of the alphabet. I don't know why.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call fake spaghetti? An impasta!",
    "I'm reading a book about anti-gravity. It's really uplifting!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "I used to play piano by ear, but now I use my hands.",
    "What's orange and sounds like a parrot? A carrot!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "I'm on a whiskey diet. I've lost three days already!",
    "What did the janitor say when he jumped out of the closet? 'Supplies!'",
    "Why did the math book look sad? Because it had too many problems.",
    "I'm trying to organize a hide and seek competition, but it's hard to find good players— they're always hiding!",
    "I'm friends with 25 letters of the alphabet. I don't know why.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call fake spaghetti? An impasta!",
    "I'm reading a book about anti-gravity. It's really uplifting!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "I used to play piano by ear, but now I use my hands.",
    "What's orange and sounds like a parrot? A carrot!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "I'm on a whiskey diet. I've lost three days already!",
    "What did the janitor say when he jumped out of the closet? 'Supplies!'",
    "Why did the math book look sad? Because it had too many problems.",
    "I'm trying to organize a hide and seek competition, but it's hard to find good players— they're always hiding!",
    "I'm friends with 25 letters of the alphabet. I don't know why.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call fake spaghetti? An impasta!",
    "I'm reading a book about anti-gravity. It's really uplifting!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "I used to play piano by ear, but now I use my hands.",
    "What's orange and sounds like a parrot? A carrot!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "I'm on a whiskey diet. I've lost three days already!",
    "What did the janitor say when he jumped out of the closet? 'Supplies!'",
    "Why did the math book look sad? Because it had too many problems.",
    "I'm trying to organize a hide and seek competition, but it's hard to find good players— they're always hiding!",
    "I'm friends with 25 letters of the alphabet. I don't know why."
];



function jokefunction(){
    //let items = jokes.split(', ');
    let temp = Math.floor(Math.random() * jokes.length);
    document.getElementById('joke').textContent = jokes[temp]
}