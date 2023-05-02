<!-- useEffect -->

# useEffect(()=>{},[])

Node:

# useEffect molotu 1ta function Call Se 2ta urgomemt ney:

1. CallBack functon: "()=>{}"
2. Array: "[]"

# CallBack functon: e je je kaz golo huy

1. ========= Sintax ===========
   useEffect(()=>{

   })

1. ey function ta component er protita Update, render e se run huy
1. componentDidMount() er kaz kure
1. componentDidUpdate() er kaz kure

# Array: "[]" ey takle jeje kaz kure

2.  ========= Sintax ===========
    useEffect(()=>{

    },[])

=> judi blanck [] deoya huy tayle se 'componentDidMount()' er kaz kurbe
=> ortat protom bar rendar huoyar somoy ekbar run hube
=> porobortite se State ba props change hule , component update hule se run hube na.

3. ========= Sintax ===========
   useEffect(()=>{

   },[count])

=> jukon Array er modda kono value diye debo
=> tukon sodo mattoro oy value change hule useEffect run hube
=> amra cayle [count] er muto onek value "," diye diye dite pari

4.  ========= Sintax ===========
    useEffect(()=>{

         return () => {
            // Componenet unMount
         }

    },[count])

=> return er bitorer code golo componentUnMount er kaz kurbe
=> ortat ey code ta tukoney run hube jukon componet delete hube, 
=> ba onno kono screen e navigate hubo



