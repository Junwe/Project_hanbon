const koreanText = document.querySelector("#koreanText")
const JapaneseText = document.querySelector("#JapaneseText")

function init()
{
    console.log(koreanText.value);
}

function OnTranslate()
{
    JapaneseText.value = "";
    let koreatext = koreanText.value.split("");
    
    resultText = []
    koreatext.forEach(element => {
        const letter = getConstantVowel(element);
        resultText.push(letter);

        JapaneseText.value += getJapnaeseToKorean(letter);
    });

    console.log(resultText);
}

function getJapnaeseToKorean(letter)
{
    // 행과 단을 찾아야한다.
    // 행은 자음
    // 단은 모음이다.

    const firstLetter = getSplitSecondLltter(letter);
    const thridIndex = compareThirdLetter[letter.t]

    let thridLetter = JP_SYLLABLE_LETTER[thridIndex];

    if(thridLetter == null)
        thridLetter = "";

    console.log(firstLetter+thridLetter);

    return  firstLetter+thridLetter;
}

function getSplitSecondLltter(letter)
{
    let firstIndex = compareFistLetter[letter.f];
    let secIndex = compareSecLetter[letter.s];
    //긴 글자이다
    if(compareSecLetter[letter.s] == null)
    {
        secIndex = comapreSecLetter_long[letter.s];
        return JP_LONG_LTEER[firstIndex][secIndex];
    }
    //모음 분리 필요
    else if(secIndex >= 10)
    {
        return JP_NOMAL_letter[firstIndex][secIndex];
    }
    // 평범한 글자
    else
    {
        return JP_NOMAL_letter[firstIndex][secIndex];
    }
}

// 한글 분리하는 함수
function getConstantVowel(kor) 
{
    const ga = 44032;

    let uni = kor.charCodeAt(0);
            
    uni = uni - ga;
            
    let fn = parseInt(uni / 588);
    let sn = parseInt((uni - (fn * 588)) / 28);
    let tn = parseInt(uni % 28);

    return {
        f: KOREAN_FIRST_LETTER[fn],
        s: KOREAN_MIDDLE_LETTER[sn],
        t: KOREAN_LAST_LETTER[tn]
    };
}

function TestLog()
{
    for(let i=0; i<KOREAN_MIDDLE_LETTER.length;++i)
    {
        console.log(KOREAN_MIDDLE_LETTER[i] +' : '+ KOREAN_MIDDLE_LETTER[i].charCodeAt(0));
    }
}


// 모음 분리기 만들자
init();





// 한글 분리를 위해 사용
const KOREAN_FIRST_LETTER = 
['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const KOREAN_MIDDLE_LETTER = 
['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const KOREAN_LAST_LETTER = 
['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// 히라가나 기본 50음도
const JP_NOMAL_letter = 
[
//    0    1    2    3   4
    ['あ','い','う','え','お'],//0
    ['か','き','く','け','こ'],//1
    ['さ','し','す','せ','そ'],//2
    ['た','ち','つ','て','と'],//3
    ['な','に','ぬ','ね','の'],//4    
    ['は','ひ','ふ','へ','ほ'],//5
    ['ま','み','む','め','も'],//6
    ['ら','り','る','れ','ろ'],//7
    ['が','ぎ','ぐ','げ','ご'],//8
    ['ざ','じ','ず','ぜ','ぞ'],//9
    ['だ','ぢ','づ','で','ど'],//10
    ['ば','び','ぶ','べ','ぼ'],//11
    ['ぱ','ぴ','ぷ','ぺ','ぽ'],//12
];
// 초성, 행의 번호를 적는다.
const compareFistLetter = 
{
    'ㄱ' : 8,'ㄲ' : 1,'ㄴ' : 4,'ㄷ' : 10,'ㄸ' : 10,'ㄹ' : 7,'ㅁ' : 6,'ㅂ' : 11,
    'ㅃ' : 12,'ㅅ' : 2,'ㅆ' : 2,'ㅇ' : 0,'ㅈ' : 9,'ㅉ' : 9,'ㅊ' : 3,'ㅋ' : 1,'ㅌ' : 3,'ㅍ' : 12,'ㅎ' : 5
};
// 중성
const compareSecLetter = 
{
    'ㅏ':0,'ㅐ':3,'ㅒ':3,'ㅣ':1,'ㅓ':4,'ㅔ':3,
    'ㅗ':4,'ㅜ':2,'ㅡ':2,
    'ㅙ':43,'ㅚ':41,'ㅝ':24,'ㅞ':23,
    'ㅟ':21,'ㅢ':21
}
// 특별 중성
const comapreSecLetter_long =
{
    'ㅑ' : 0,'ㅠ':1,'ㅛ':2,'ㅘ':3,'ㅕ':2,'ㅖ':2
}
/*
['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
*/

const JP_LONG_LTEER = 
[
    ['や','ゆ','よ','わ'],
    ['きゃ','きゅ','きょ'],
    ['しゃ','しゅ','しょ'],
    ['ちゃ','ちゅ','ちょ'],
    ['にゃ','にゅ','にょ'],
    ['ひゃ','ひゅ','ひょ'],
    ['みゃ','みゅ','みょ'],
    ['りゃ','りゅ','りょ'],
    ['ぎゃ','ぎゅ','ぎょ'],
    ['じゃ','じゅ','じょ'],
    ['ぢゃ','ぢゅ','ぢょ'],
    ['びゃ','びゅ','びょ'],
    ['ぴゃ','ぴゅ','ぴょ'],  
];
// 받침
const compareThirdLetter = 
{
    'ㄱ':3, 'ㄲ':3, 'ㄳ':15, 'ㄴ':1, 'ㄵ':15, 'ㄶ':15,
    'ㄷ':0, 'ㄹ':9, 'ㄺ':15, 'ㄻ':15, 'ㄼ':15, 'ㄽ':15, 'ㄾ':15,
    'ㄿ':15, 'ㅀ':15, 'ㅁ':8, 'ㅂ':13, 'ㅄ':15 ,'ㅅ':0, 'ㅆ':0,
    'ㅇ':1, 'ㅈ':0, 'ㅊ':0, 'ㅋ':3, 'ㅌ':0, 'ㅍ':14, 'ㅎ':15
};
// 받침 일본어
const JP_SYLLABLE_LETTER = 
[
//  0     1    2    3    4   5    6    7    8    9   10   11   12   13   14  15
    'っ','ん','う','く','す','つ','ぬ','ふ','む','る','ぐ','ず','づ','ぶ','ぷ',''
]
