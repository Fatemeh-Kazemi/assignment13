
$(document).ready(function(){
    $('#play-game-icon').click(function(){     // وقتی که روی ضربدر کلیک شد پاپ اپ و شدو از بین می رود
        $('.popup').fadeOut(1200);
        $('.shadow').fadeOut(1200);
    })

    $('.shadow').mousedown(function(){  //وقتی روی شدو کلیک شد پاپ اپ از بین می رود
         $('.popup').fadeOut(1200);
        $('.shadow').fadeOut(1200);
    }) 
})

var score_x= document.getElementById('score-x');
var score_o= document.getElementById('score-o');
var score_draw= document.getElementById('score-draw');
var score_x_counter=0, score_o_counter= 0, score_draw_counter= 0;
var cells= document.getElementsByClassName('cell');
var result = document.getElementById("result");
var time = 0;
var gameend=false;
var ply= "X";    // نوبت کدام بازیکن؟

// UI - frontEnd
var buttons= [[cells[0], cells[1], cells[2]],
                [cells[3], cells[4], cells[5]],
                [cells[6], cells[7], cells[8]]];

//logic - backEnd
var flags= [[null, null, null],
            [null, null, null],
            [null, null, null]];

var player_mode = document.getElementById('player-mode');    // radio button player
var computer_mode = document.getElementById('computer-mode');    // radio button computer
var play_mode;     // save for which mode?

// select player mode
function select_mode(selectMode){
    if(selectMode == "player"){     // select radio button player ...
        play_mode = "player";
        computer_mode.disabled = true;
    }
    else if(selectMode == "computer"){     // select radion button computer ...
        play_mode = "computer";
        player_mode.disabled = true;
    }
}

// random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// random play
function computer(){
    if(time < 9 && gameend==false){
        var i = randomNumber(0,3);
        var j = randomNumber(0,3);
        console.log(i, j)
        if(flags[i][j] == null ){
            flags[i][j] = "O";
            buttons[i][j].innerHTML = "O";
            buttons[i][j].classList.add("O");
            ply = "X";
        } 
        else {
            computer()
        }
        check_game();  
    }
}

// start play
function play(x, y){
    if(gameend == false){
        if(flags[x][y] == null){
            if(play_mode == "player"){    // play with player
                if(ply == "X"){
                    flags[x][y]= "X";
                    buttons[x][y].innerHTML= "X";
                    buttons[x][y].classList.add("X");
                    ply= "O";
                    time++;
                    check_game();
                }
                else if(ply == "O"){
                    flags[x][y]= "O";
                    buttons[x][y].innerHTML= "O";
                    buttons[x][y].classList.add("O");
                    ply= "X";
                    time++;
                    check_game();
                }
            }
            else if(play_mode == "computer"){
                if(ply == "X"){
                    flags[x][y]= "X";
                    buttons[x][y].innerHTML= "X";
                    buttons[x][y].classList.add("X");
                    time++;
                    
                    check_game();
                    if(gameend==false){
                        ply= "O";
                        computer();
                    }
                }
                else if(ply == "O"){   // play with computer
                    
                }
            }
            else{
                alert("select mode player")
            }
        }
    }
}


function check_game(){
    //check game for X player
    if(flags[0][0]=="X" && flags[0][1]=="X" && flags[0][2]=="X"){   // ردیف اول
        result.innerHTML="Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[1][0]=="X" && flags[1][1]=="X" && flags[1][2]=="X"){   // ردیف دوم
        result.innerHTML="Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[2][0]=="X" && flags[2][1]=="X" && flags[2][2]=="X"){   // ردیف سوم
        result.innerHTML="Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[0][0]=="X" && flags[1][0]=="X" && flags[2][0]=="X"){   // ستون اول
        result.innerHTML="Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[0][1]=="X" && flags[1][1]=="X" && flags[2][1]=="X"){    // ستون دوم
        result.innerHTML="Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[0][2]=="X" && flags[1][2]=="X" && flags[2][2]=="X"){    // ستون سوم
        result.innerHTML="Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[0][0]=="X" && flags[1][1]=="X" && flags[2][2]=="X"){   // عمودی از چپ
        result.innerHTML="Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    if(flags[0][2]=="X" && flags[1][1]=="X" && flags[2][0]=="X"){   // عمودی از راست
        result.innerHTML="Player X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        gameend = true;
    }
    //check game for O player
    if(flags[0][0]=="O" && flags[0][1]=="O" && flags[0][2]=="O"){   // ردیف اول
        result.innerHTML="Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[1][0]=="O" && flags[1][1]=="O" && flags[1][2]=="O"){   // ردیف دوم
        result.innerHTML="Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[2][0]=="O" && flags[2][1]=="O" && flags[2][2]=="O"){   // ردیف سوم 
        result.innerHTML="Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[0][0]=="O" && flags[1][0]=="O" && flags[2][0]=="O"){    // ستون اول
        result.innerHTML="Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[0][1]=="O" && flags[1][1]=="O" && flags[2][1]=="O"){   // ستون دوم
        result.innerHTML="Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[0][2]=="O" && flags[1][2]=="O" && flags[2][2]=="O"){    // ستون سوم
        result.innerHTML="Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[0][0]=="O" && flags[1][1]=="O" && flags[2][2]=="O"){   // عمودی از چپ
        result.innerHTML="Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }
    if(flags[0][2]=="O" && flags[1][1]=="O" && flags[2][0]=="O"){   // عمودی از راست
        result.innerHTML="Player O Won";
        score_o_counter++;
        score_o.innerHTML=score_o_counter;
        gameend = true;
    }

    //checkgame for draw
    if(score_x_counter == 0 && score_o_counter == 0){
        if((flags[0][0]=="X" || flags[0][0]=="O") && (flags[0][1]=="X" || flags[0][1]=="O")
            && (flags[0][2]=="X" || flags[0][2]=="O" ) && (flags[1][0]=="X" || flags[1][0]=="O") 
            && (flags[1][1]=="X" || flags[1][1]=="O") && (flags[1][2]=="X" || flags[1][2]=="O") 
            && (flags[2][0]=="X" || flags[2][0]=="O") && (flags[2][1]=="X" || flags[2][1]=="O") 
            && (flags[2][2]=="X" || flags[2][2]=="O")){
                result.innerHTML="Match Draw";
                score_draw_counter++;
                score_draw.innerHTML=score_draw_counter;
                gameend = true;
        }   
    }
    
}


function Reset_game(){

    // remove content of variable
    time = 0;
    ply = "X"
    gameend=false;
    play_mode = null;

    // remove radio buttons mode
    player_mode.disabled = false;
    player_mode.checked = false;
    computer_mode.disabled = false;
    computer_mode.checked = false;
    result.innerHTML = "";

    // remove class X and O of butoons
    for(var i = 0 ; i < 3 ; i++)
    {
        for(var j = 0 ; j < 3 ; j++)
        {
            buttons[i][j].disabled = false;
            buttons[i][j].classList.remove("X");
            buttons[i][j].classList.remove("O");
            buttons[i][j].innerHTML= "";
            flags[i][j]= null;
        }
    }

    //document.location.reload(true)
}