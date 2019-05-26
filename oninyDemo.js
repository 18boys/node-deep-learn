/**
 * @file oninyDemo
 * @author shuai.li
 */

function App(){
   this.middlewareList =[];
}

App.prototype.use=function(middleware){
  this.middlewareList.push(middleware);
};


App.prototype.execute=function(index){
  if(this.middlewareList.length === 0 || this.middlewareList.length-1 < index ) return;
  const middleware = this.middlewareList[index];
  const next = ()=>{
    this.execute(index+1);
  };
  middleware.call(this,next)
};



const app = new App();

app.use((next)=>{
  console.log(1);
  next();
  console.log(2);
});


app.use((next)=>{
  console.log(3);
  next();
  console.log(4);
});

app.use((next)=>{
  console.log(5);
  next();
  console.log(6);
});

app.execute(0);
