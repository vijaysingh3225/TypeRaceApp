
const wordCountBtn1 = document.querySelector("#word-count-btn-1");
const wordCountBtn2 = document.querySelector("#word-count-btn-2");
const wordCountBtn3 = document.querySelector("#word-count-btn-3");
const startButton = document.querySelector("#start-btn");
const redLightL = document.querySelector(".light-red-l");
const orangeLightL = document.querySelector(".light-orange-l");
const greenLightL = document.querySelector(".light-green-l");
const redLightR = document.querySelector(".light-red-r");
const orangeLightR = document.querySelector(".light-orange-r");
const greenLightR = document.querySelector(".light-green-r");
const mainTrack = document.querySelector("#track-text");
const wordCount = document.querySelector("#word-count");
let currentWordCount = 0;
let sentenceString = "";
let randomNumber = Math.floor(Math.random() * 1000);
let nextKey = "";
let racer = 0;
let errorCount = 0;
let errorCommitted = false;
let gameRunning = false;

startButton.onclick = function() {
    if (currentWordCount > 0) {
        gameRunning = true;
        setTimeout(() => {
            redLightL.style.backgroundColor = "#830000";
            redLightR.style.backgroundColor = "#830000";
        }, 500);
    
        setTimeout(() => {
            orangeLightL.style.backgroundColor = "#BFB800";
            orangeLightR.style.backgroundColor = "#BFB800";
        }, 1500);
    
        setTimeout(() => {
            greenLightL.style.backgroundColor = "green";
            greenLightR.style.backgroundColor = "green";
            racer=0;
            colorCharacterAtPosition(0);
            document.addEventListener('keydown', handleKeyPress);
        }, 2500);
        
    } else {
        mainTrack.innerText = "SELECT WORD COUNT BEFORE STARTING!";
    }
};
function colorCharacterAtPosition(x) {
    const outputDiv = document.getElementById('track-text');
    const text = outputDiv.innerText;
    const newText = text.substring(0, x) + `<span class="cursor">${text.charAt(x)}</span>` + text.substring(x + 1);
    outputDiv.innerHTML = newText;
  }
  function errorColorChange(x) {
    const outputDiv = document.getElementById('track-text');
    const text = outputDiv.innerText;
    const newText = text.substring(0, x-errorCount) + `<span class="error-highlight">${text.substring(x-errorCount, x)}</span>`+`<span class="cursor">${text.charAt(x)}</span>` + text.substring(x + 1);
    outputDiv.innerHTML = newText;
    console.log("1: "+text.substring(0, x-1));
    console.log("2: "+text.substring(x-1, x-1));
    console.log("3: "+text.charAt(x));
    console.log("4: "+text.substring(0, x-1));
    console.log("5: "+text.substring(x+1));

  }
function handleKeyPress(event) {
    const key = event.key;
    if(key == nextKey &&  !errorCommitted){
        racer++;
            colorCharacterAtPosition(racer);           
            nextKey=sentenceString.charAt(racer);
    }else if(errorCount<4 && key != 'Backspace'){
        racer++;
        errorCount++;
        errorColorChange(racer);
        errorCommitted = true;
        
    }
    else if(key == 'Backspace'){
        if(racer>0)
        racer--;
        if(errorCount>1){
            errorCount--;
            errorColorChange(racer); 
        }else{
            errorCount=0;
            errorCommitted=false;
            colorCharacterAtPosition(racer);

        }
        nextKey=sentenceString.charAt(racer); 
    }
    else{
    }
    console.log("Error Count: "+errorCount);
    console.log("racer: "+racer);
  }
wordCountBtn1.onclick = function() {
    if(!gameRunning){
    sentenceString="";
    currentWordCount = 10;
    wordCount.innerText = 10;
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 1000);
        sentenceString+= wordsArray[randomNumber]+" ";
    }
    mainTrack.innerText = sentenceString;
    nextKey = sentenceString.charAt(0);
    }
}
//Changes word count to 25
wordCountBtn2.onclick = function() {
    if(!gameRunning){
    wordCount.innerText = 25;
    sentenceString="";
    currentWordCount = 25;
    for (let i = 0; i < 25; i++) {
        const randomNumber = Math.floor(Math.random() * 1000);
        sentenceString+= wordsArray[randomNumber]+" ";
    }
    mainTrack.innerText = sentenceString;
    nextKey = sentenceString.charAt(0);
}
};
//Changes word count to 50
wordCountBtn3.onclick = function() {
    if(!gameRunning){
    sentenceString="";
    wordCount.innerText = 50;
    currentWordCount = 50;
    for (let i = 0; i < 50; i++) {
        const randomNumber = Math.floor(Math.random() * 1000);
        sentenceString+= wordsArray[randomNumber]+" ";
    }
    mainTrack.innerText = sentenceString;
    nextKey = sentenceString.charAt(0);
}
}

const wordsArray = [
    "the", "of", "to", "and", "a", "in", "is", "it", "you", "that", 
    "he", "was", "for", "on", "are", "with", "as", "I", "his", "they", 
    "be", "at", "one", "have", "this", "from", "or", "had", "by", "not", 
    "word", "but", "what", "some", "we", "can", "out", "other", "were", 
    "all", "there", "when", "up", "use", "your", "how", "said", "an", 
    "each", "she", "which", "do", "their", "time", "if", "will", "way", 
    "about", "many", "then", "them", "write", "would", "like", "so", 
    "these", "her", "long", "make", "thing", "see", "him", "two", "has", 
    "look", "more", "day", "could", "go", "come", "did", "number", "sound", 
    "no", "most", "people", "my", "over", "know", "water", "than", "call", 
    "first", "who", "may", "down", "side", "been", "now", "find", "any", 
    "new", "work", "part", "take", "get", "place", "made", "live", "where", 
    "after", "back", "little", "only", "round", "man", "year", "came", 
    "show", "every", "good", "me", "give", "our", "under", "name", "very", 
    "through", "just", "form", "sentence", "great", "think", "say", "help", 
    "low", "line", "differ", "turn", "cause", "much", "mean", "before", 
    "move", "right", "boy", "old", "too", "same", "tell", "does", "set", 
    "three", "want", "air", "well", "also", "play", "small", "end", "put", 
    "home", "read", "hand", "port", "large", "spell", "add", "even", "land", 
    "here", "must", "big", "high", "such", "follow", "act", "why", "ask", 
    "men", "change", "went", "light", "kind", "off", "need", "house", 
    "picture", "try", "us", "again", "animal", "point", "mother", "world", 
    "near", "build", "self", "earth", "father", "head", "stand", "own", 
    "page", "should", "country", "found", "answer", "school", "grow", "study", 
    "still", "learn", "plant", "cover", "food", "sun", "four", "between", 
    "state", "keep", "eye", "never", "last", "let", "thought", "city", 
    "tree", "cross", "farm", "hard", "start", "might", "story", "saw", 
    "far", "sea", "draw", "left", "late", "run", "don't", "while", "press", 
    "close", "night", "real", "life", "few", "north", "open", "seem", "together", 
    "next", "white", "children", "begin", "got", "walk", "example", "ease", 
    "paper", "group", "always", "music", "those", "both", "mark", "often", 
    "letter", "until", "mile", "river", "car", "feet", "care", "second", 
    "book", "carry", "took", "science", "eat", "room", "friend", "began", 
    "idea", "fish", "mountain", "stop", "once", "base", "hear", "horse", 
    "cut", "sure", "watch", "color", "face", "wood", "main", "enough", 
    "plain", "girl", "usual", "young", "ready", "above", "ever", "red", 
    "list", "though", "feel", "talk", "bird", "soon", "body", "dog", 
    "family", "direct", "pose", "leave", "song", "measure", "door", "product", 
    "black", "short", "numeral", "class", "wind", "question", "happen", 
    "complete", "ship", "area", "half", "rock", "order", "fire", "south", 
    "problem", "piece", "told", "knew", "pass", "since", "top", "whole", 
    "king", "space", "heard", "best", "hour", "better", "true", "during", 
    "hundred", "five", "remember", "step", "early", "hold", "west", "ground", "interest", "reach", "fast", 
    "verb", "sing", "listen", "six", "table", "travel", "less", "morning", "ten", "simple", 
    "several", "vowel", "toward", "war", "lay", "against", "pattern", "slow", "center", "love", 
    "person", "money", "serve", "appear", "road", "map", "rain", "rule", "govern", "pull", "cold", 
    "notice", "voice", "unit", "power", "town", "fine", "certain", "fly", "fall", "lead", "cry", 
    "dark", "machine", "note", "wait", "plan", "figure", "star", "box", "noun", "field", "rest", 
    "correct", "able", "pound", "done", "beauty", "drive", "stood", "contain", "front", "teach", 
    "week", "final", "gave", "green", "oh", "quick", "develop", "ocean", "warm", "free", "minute", 
    "strong", "special", "mind", "behind", "clear", "tail", "produce", "fact", "street", "inch", 
    "multiply", "nothing", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", 
    "surface", "deep", "moon", "island", "foot", "system", "busy", "test", "record", "boat", 
    "common", "gold", "possible", "plane", "stead", "dry", "wonder", "laugh", "thousand", "ago", 
    "ran", "check", "game", "shape", "equate", "hot", "miss", "brought", "heat", "snow", "tire", 
    "bring", "yes", "distant", "fill", "east", "paint", "language", "among", "grand", "ball", 
    "yet", "wave", "drop", "heart", "am", "present", "heavy", "dance", "engine", "position", 
    "arm", "wide", "sail", "material", "size", "vary", "settle", "speak", "weight", "general", 
    "ice", "matter", "circle", "pair", "include", "divide", "syllable", "felt", "perhaps", "pick", 
    "sudden", "count", "square", "reason", "length", "represent", "art", "subject", "region", 
    "energy", "hunt", "probable", "bed", "brother", "egg", "ride", "cell", "believe", "fraction", 
    "forest", "sit", "race", "window", "store", "summer", "train", "sleep", "prove", "lone", 
    "leg", "exercise", "wall", "catch", "mount", "wish", "sky", "board", "joy", "winter", "sat", 
    "written", "wild", "instrument", "kept", "glass", "grass", "cow", "job", "edge", "sign", 
    "visit", "past", "soft", "fun", "bright", "gas", "weather", "month", "million", "bear", 
    "finish", "happy", "hope", "flower", "clothe", "strange", "gone", "jump", "baby", "eight", 
    "village", "meet", "root", "buy", "raise", "solve", "metal", "whether", "push", "seven", 
    "paragraph", "third", "shall", "held", "hair", "describe", "cook", "floor", "either", "result", 
    "burn", "hill", "safe", "cat", "century", "consider", "type", "law", "bit", "coast", "copy", 
    "phrase", "silent", "tall", "sand", "soil", "roll", "temperature", "finger", "industry", 
    "value", "fight", "lie", "beat", "excite", "natural", "view", "sense", "ear", "else", "quite", 
    "broke", "case", "middle", "kill", "son", "lake", "moment", "scale", "loud", "spring", 
    "observe", "child", "straight", "consonant", "nation", "dictionary", "milk", "speed", "method", 
    "organ", "pay", "age", "section", "dress", "cloud", "surprise", "quiet", "stone", "tiny", "climb", "cool", "design", 
    "poor", "lot", "experiment", "bottom", "key", "iron", "single", "stick", "flat", "twenty", 
    "skin", "smile", "crease", "hole", "trade", "melody", "trip", "office", "receive", "row", 
    "mouth", "exact", "symbol", "die", "least", "trouble", "shout", "except", "wrote", "seed", 
    "tone", "join", "suggest", "clean", "break", "lady", "yard", "rise", "bad", "blow", "oil", 
    "blood", "touch", "grew", "cent", "mix", "team", "wire", "cost", "lost", "brown", "wear", 
    "garden", "equal", "sent", "choose", "fell", "fit", "flow", "fair", "bank", "collect", "save", 
    "control", "decimal", "gentle", "woman", "captain", "practice", "separate", "difficult", "doctor", 
    "please", "protect", "noon", "whose", "locate", "ring", "character", "insect", "caught", "period", 
    "indicate", "radio", "spoke", "atom", "human", "history", "effect", "electric", "expect", "crop", 
    "modern", "element", "hit", "student", "corner", "party", "supply", "bone", "rail", "imagine", 
    "provide", "agree", "thus", "capital", "won't", "chair", "danger", "fruit", "rich", "thick", 
    "soldier", "process", "operate", "guess", "necessary", "sharp", "wing", "create", "neighbor", 
    "wash", "bat", "rather", "crowd", "corn", "compare", "poem", "string", "bell", "depend", 
    "meat", "rub", "tube", "famous", "dollar", "stream", "fear", "sight", "thin", "triangle", 
    "planet", "hurry", "chief", "colony", "clock", "mine", "tie", "enter", "major", "fresh", 
    "search", "send", "yellow", "gun", "allow", "print", "dead", "spot", "desert", "suit", "current", 
    "lift", "rose", "continue", "block", "chart", "hat", "sell", "success", "company", "subtract", 
    "event", "particular", "deal", "swim", "term", "opposite", "wife", "shoe", "shoulder", "spread", 
    "arrange", "camp", "invent", "cotton", "born", "determine", "quart", "nine", "truck", "noise", 
    "level", "chance", "gather", "shop", "stretch", "throw", "shine", "property", "column", "molecule", 
    "select", "wrong", "gray", "repeat", "require", "broad", "prepare", "salt", "nose", "plural", 
    "anger", "claim", "continent", "oxygen", "sugar", "death", "pretty", "skill", "women", "season", 
    "solution", "magnet", "silver", "thank", "branch", "match", "suffix", "especially", "fig", "afraid", 
    "huge", "sister", "steel", "discuss", "forward", "similar", "guide", "experience", "score", "apple", 
    "bought", "led", "pitch", "coat", "mass", "card", "band", "rope", "slip", "win", "dream", "evening", 
    "condition", "feed", "tool", "total", "basic", "smell", "valley", "nor", "double", "seat", "arrive", 
    "master", "track", "parent", "shore", "division", "sheet", "substance", "favor", "connect", "post", 
    "spend", "chord", "fat", "glad", "original", "share", "station", "dad", "bread", "charge", "proper", 
    "bar", "offer", "segment", "slave", "duck", "instant", "market", "degree", "populate", "chick", "dear", 
    "enemy", "reply", "drink", "occur", "support", "speech", "nature", "range", "steam", "motion", "path", 
    "liquid", "log", "meant", "quotient", "teeth", "shell", "neck"
    ];
