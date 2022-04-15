 var a = null , b = null , o = null ;

 function lam_lai() {
     a = null ;
     b = null ;
     o  =null ; 
 }

function toan_tu(x) {
     o = x ;
 }

function toan_hang(x) {
     if ( a == null) {
         a = x ;
     } else { 
         b = x  ;
    }
 }
 
 function thuc_hien() {
     switch(o) {
         case '+' :
             var c = Number(a) + Number(b) ;
             alert(' Tổng :' + a + '+' + b + '=' + c ) ;
             break ;
             
        case '-' :
            var d = a - b ;
            alert (" Hiệu :" + a + '-' + b + '=' + d ) ;
            break;

        case 'x' :
            var e = a * b ;
            alert("Tích :" + a + 'x' + b + '=' + e );
            break;
        
        case ':' :
            var f = a / b ;
            alert("Thương :" + a + '/' + b + '=' + f);
            break;
        
        default :
            alert( o + 'không là toán tử')
     }
     lam_lai();
 }