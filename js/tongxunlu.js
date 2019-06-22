$(function () {
    let arr=[
        {name:'李四',py:'lisi' ,tell:1840656284},
        {name:'李三',py:'lisan' ,tell:1840656284},
        {name:'李二',py:'lier' ,tell:1840656284},
        {name:'阿迪',py:'adi',tell:1840654896},
        {name:'安迪',py:'andi',tell:1840654896},
        {name:'宝蓝',py:'baolan',tell:1840654896},
        {name:'耐克',py:'naike',tell:18406521596},
        {name:'鸽子',py:'gezi',tell:1846522354},
        {name:'吃鸡',py:'chiji',tell:1846524896},
        {name:'王五',py:'wangwu',tell:1846524246},
        {name:'王四',py:'wangsi',tell:1846524246},
        {name:'王三',py:'wangsan',tell:1846524246},
        {name:'张三丰',py:'zhangsanfeng',tell:1846524246},
        {name:'张无忌',py:'zhangwuji',tell:1846524246},
        {name:'张阿迪',py:'zhangadi',tell:1846524246},
        {name:'张阿迪',py:'zhangadi',tell:1846524246},
        {name:'张阿迪',py:'zhangadi',tell:1846524246},
        {name:'张阿迪',py:'zhangadi',tell:1846524246},
        {name:'张阿迪',py:'zhangadi',tell:1846524246},
        {name:'张阿迪',py:'zhangadi',tell:1846524246},


    ]
    let main=  $('.main')
    let aside=$('.aside')
   let input=$('input')
    input.on('input',function () {
        let val=  $(this).val()
               let newarr=  arr.filter(ele=>ele.name.includes(val)||ele.py.includes(val))

               render(newarr)
    })
   render(arr)
    function render(arr){
       main.empty();
         aside.empty();
     var person={};
      arr.forEach(ele=>{
         var fristChar=ele.py.charAt(0).toUpperCase()
         if(!person[fristChar]){
             person[fristChar]=[]
         }
         person[fristChar].push(ele)
     })
  let keysarr=Object.keys(person).sort();
     let html='';
     let html1='';
     for (let i=0;i<keysarr.length;i++){
         let ele=keysarr[i]
          html1+=`
          <li>${ele}</li>
`;
           html+=`<ul >
    <h3>${ele}</h3>
           `;
          for (let j=0;j<person[ele].length;j++){
               let info=person[ele][j];
               html+=`<li><a href="tel:${info.tell}"> ${info.name}</a></li>
               `
          }

          html+='</ul>'
     }
     aside.html(html1)
    main.html(html)

}
    let viewH=window.innerHeight;
    let h3=$('.main ul h3')


    let toparr=[]
    h3.each(function () {
       let   top=  $(this).offset().top
        toparr.push(top+viewH)
    })
    console.log(toparr);
    window.onscroll=function () {
          let scrolltop=document.documentElement.scrollTop
          for (let i=0;i<toparr.length;i++){
              if (scrolltop+viewH>=toparr[i]){
                  console.log(h3[i].innerText);
              }
          }
      }
    
});