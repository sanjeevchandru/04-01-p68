document.write("32. to find the closest value to 100 from two numerical values"+"<br>");
function test32(x,y){
    if(x!=y){
        if(x<100 && y<100){
            if(x>y){
                return x+" is closer to 100";
            }
            return y+" is closer to 100";
        }
        return false;
    }
    return "Exit";

}
document.write("The numbers are :10,-20, Ans:"+test32(10,-20)+"<br><br>");