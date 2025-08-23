const waitingForSomething = (ms)=>{
    const start =Date.now();
    let now =start  
    while(now - start <ms){
        now = Date.now(); 
    }
} // this component is slow to render 

export default function SlowComponent(){
    waitingForSomething(1000);
    return null;
}