$(function(){
    newgame();
});
function newgame(){
    /* 初始化棋盘格 */
    init();
  /*   generateOneNumber();
    generateOneNumber(); */
}
/* 定义一个二维数组来创建4*4的方格 */
var board = new Array();
function init(){
    //i表示4*4中的行
    for(var i=0;i<4;i++){
        board[i]= new Array();
        for(var j=0;j<4;j++){

            board[i][j]=0;
            //将每格子的初始化值 为0
            var gridcell =$("#grid-cell-"+i+"-"+j);
            //对取到的每个格子对象设置 css样式
            gridcell.css("top",getPosTop(i,j));
            gridcell.css("left",getPosLeft(i,j));

        }
    }

}