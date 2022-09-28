let questions = [
    {
        prompt:"香蕉是什麼顏色\n(a)紅色\n(b)綠色\n(c)黃色",
        answer:"c"
    },
    {
        prompt:"草莓是什麼顏色\n(a)紅色\n(b)綠色\n(c)黃色",
        answer:"a"
    },
    {
        prompt:"西瓜是什麼顏色\n(a)紅色\n(b)綠色\n(c)黃色",
        answer:"b"
    }
]
let score = 0;
for(let i = 0;i<questions.length;i++){
    let input = prompt(questions[i].prompt);
    if(input == questions[i].answer){
        score++;
        alert("答對了");
    }else{
        alert("答錯了")
    }   
    }   