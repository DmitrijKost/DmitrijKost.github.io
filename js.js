var arr = new Array();
        var items=0;
        function fuct(a){
               if(a <= 1){
                   return 1;
               }
            return(a*(fuct(a-1))) ;
        }
        function fib(a){
            if(a<=2){
                return 1;
            }
            return(fib(a-1)+fib(a-2));
        }
        function sort(){
            for(i=0; i < arr.length;i++){
                var min = i;
               for(j = i; j < arr.length;j++){
                   if(arr[min] > arr[j]){
                          min = j;
                      }
               }
                if(min != i){
                    j = arr[i];
                    arr[i] = arr[min];
                    arr[min] = j;
                }
            }
            alert(arr) ;
            return;
        }
        function func(a){
			a = new Number(a);
            arr[items] = a;
            items++;
            return;
        }

        function Reset(){
            arr = new Array();
            items = 0;
            return;
        }