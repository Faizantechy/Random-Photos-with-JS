const imageContainer=document.querySelector('.image-container')

const btn=document.querySelector('.btn')

btn.addEventListener('click', function(){


    addNewImgs();
})



let imgNumber=0;

function addNewImgs(){

    for(imgNumber=0; imgNumber <11; imgNumber++){
        let randomNum=Math.floor(Math.random()*1000)

        let newImg=document.createElement('img');
        newImg.src=`https://picsum.photos/200/300?random=${randomNum}`
    
        imageContainer.appendChild(newImg)

    }


}