
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const pic = document.getElementById('bimg');

const img = {
    0:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    1: 'https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    2: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=866&q=80',
    3: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80'
}


let Cactive =1;
next.addEventListener('click',()=>{
      Cactive++;
      if(Cactive>circles.length){
          Cactive = circles.length;
      }
      
      update();
    });

prev.addEventListener('click',()=>{
       Cactive--;
        if(Cactive < 1){
            Cactive =1;
        }

        update();
        
      });

function update(){
    circles.forEach((circle, idx)=>{
        if(idx < Cactive){
            pic.src = img[idx];
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    });

}

