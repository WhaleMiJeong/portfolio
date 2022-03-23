(($,window,document,undefined)=>{

    class portfolio {
        init(){
            this.Parallax(); //페럴럭스
            this.header();
            this.section3();
            this.section4();
        }

        Parallax(){
          
          let ParallaxObj = {
            init(){
                this.section2();
                this.section4();
                this.section5();
            },
            section2(){
                const  sec2     = $('#section2');
                let    sec2Top  = $('#section2').offset().top-$(window).height()+300;
  
                  $(window).scroll(()=>{
                    if ( $(window).scrollTop() == 0 ){
                      sec2.removeClass('addParallax');
                    }
                    if ( $(window).scrollTop() > sec2Top ){
                      sec2.addClass('addParallax');
                    }
                  });
              },
            section4(){
                const sec4Title       = $('#section4 .column-container');
                const sec4Row1Col     = $('#section4 .row1-col');
                const sec4Row2Col     = $('#section4 .row2-col');
                let sec4TitleTop      = $('#section4 .column-container').offset().top-$(window).height()-200;
                let sec4Row1ColTop    = $('#section4 .row1-col').offset().top-$(window).height()-900;
                let sec4Row2ColTop    = $('#section4 .row2-col').offset().top-$(window).height()-900;
                let t1=false;
                let t2=false;
            
                          
                  $(window).scroll(()=>{
                    if( $(window).scrollTop() > sec4TitleTop ){
                      sec4Title.addClass('addParallax');
                      }
      
                    if( $(window).scrollTop() > sec4Row1ColTop ){
                      if(t1==false){
                        t1=true;
                      sec4Row1Col.addClass('addParallax');
                    }
                  }
                    if( $(window).scrollTop() > sec4Row2ColTop ){
                      if(t2==false){
                        t2=true;
                      sec4Row2Col.addClass('addParallax');
                      }
                    }
                  }); 
            },
            section5(){
              const  sec5     = $('#section5');
              let    sec5Top  = $('#section5').offset().top-$(window).height()+300;

                $(window).scroll(()=>{
                  if ( $(window).scrollTop() == 0 ){
                    sec5.removeClass('addParallax');
                  }
                  if ( $(window).scrollTop() > sec5Top ){
                    sec5.addClass('addParallax');
                  }
                });
            }
          }
            ParallaxObj.init();
          }
        header(){
            
            let header = $('#header');

            $(window).scroll(()=>{
                if($(window).scrollTop() > 0 ){
                    header.addClass('sticky');
                }else{
                    header.removeClass('sticky');
                }
            });
            

            $('.mobile-btn').on({
              click: function(){
                
                 $(this).children().toggleClass('addMobile');
              }
            });

            const toggleBtn = document.querySelector('.mobile-btn');
            const menu = document.querySelector('.nav-right, span');

            toggleBtn.addEventListener('click',()=>{
              menu.classList.toggle('active');
            });
        }
        section3(){

            let    sec3Top  = $('#section3').offset().top-$(window).height()+300;
            let    t        = false;
  
            $(window).scroll(function(){
    
              if( $(window).scrollTop() == 0 ){
                t=false;
              } 
  
              if( $(window).scrollTop() > sec3Top ){
                  if(t==false){
                    t=true;
                    Num();
                  }
              }
            });
            
            function Num() {
              $('#section3 .container .wrap .nem').each(function () {
                console.log($(this));
            
                $(this)
                  .prop('Counter', 0)
                  .animate(
                    {
                      Counter: $(this).text()
                    },
                    {
                      duration: 1500,
                      easing: 'swing',
                      step: function (now) {
                        $(this).text(Math.ceil(now));
                      },
                    }
                  );
              });
            }
        }
        section4(){
        const galleryBtn  = $('.gallery-btn');
        const galleryItem = $('.gallery-item');
        const gallery = $('.gallery');
        let   galW = $(window).innerWidth()/4;
        let   galH = galW*0.8125;
        let   idx  = 0;  //8개 이미지 기본 선택 - 첫번째 버튼
        let   col = 4;
        let   winW = $(window).innerWidth();


        //버튼 클릭시 리사이즈(반응형) 함수 호출 실행
        function resizefn(){
            winW = $(window).innerWidth();

            
            if( winW >= 1200 ){  
                col=4;
            }
            else if( winW >= 992 ){  
                col=3;
            }            
            else if( winW >= 761 ){  
                col=2;
            }
            else {  //761미만 ~ 0
                col=1;
            }
            
            galW = $(window).innerWidth()/col;
            galH = galW*0.8125;
            galleryItem.animate({width:galW, height:galH},0); 

            galleryItem.removeClass('addParallax');  //패럴럭스 효과 삭제
            galleryItem.removeClass('addGallery');   //줌효과       

                if(idx==0){ //8개 보이기 ALL
                gallery.css({height:galH*Math.ceil(8/col)});  //줄수
                    //4칸 
                    if(col==4){
                        galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                        galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                        galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);
                        galleryItem.eq(3).show().animate({left:galW*3, top:galH*0},0);
                        galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                        galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                        galleryItem.eq(6).show().animate({left:galW*2, top:galH*1},0);
                        galleryItem.eq(7).show().animate({left:galW*3, top:galH*1},0);
                    
                    }                 
                    else if(col==3){  //3칸 
                        galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                        galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                        galleryItem.eq(2).show().animate({left:galW*2, top:galH*0},0);

                        galleryItem.eq(3).show().animate({left:galW*0, top:galH*1},0);
                        galleryItem.eq(4).show().animate({left:galW*1, top:galH*1},0);
                        galleryItem.eq(5).show().animate({left:galW*2, top:galH*1},0);

                        galleryItem.eq(6).show().animate({left:galW*0, top:galH*2},0);
                        galleryItem.eq(7).show().animate({left:galW*1, top:galH*2},0);

                    }
                    else if(col==2){ //2칸
                        galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                        galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);

                        galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                        galleryItem.eq(3).show().animate({left:galW*1, top:galH*1},0);

                        galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                        galleryItem.eq(5).show().animate({left:galW*1, top:galH*2},0);
    
                        galleryItem.eq(6).show().animate({left:galW*0, top:galH*3},0);
                        galleryItem.eq(7).show().animate({left:galW*1, top:galH*3},0);
                    
                    }
                    else{ //1칸  
                        galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                        galleryItem.eq(1).show().animate({left:galW*0, top:galH*1},0);
                        galleryItem.eq(2).show().animate({left:galW*0, top:galH*2},0);
                        galleryItem.eq(3).show().animate({left:galW*0, top:galH*3},0);
                        galleryItem.eq(4).show().animate({left:galW*0, top:galH*4},0);
                        galleryItem.eq(5).show().animate({left:galW*0, top:galH*5},0);
                        galleryItem.eq(6).show().animate({left:galW*0, top:galH*6},0);
                        galleryItem.eq(7).show().animate({left:galW*0, top:galH*7},0);
                    }

                    galleryItem.eq(4).removeClass('row1-col');
                    galleryItem.eq(5).removeClass('row1-col');
                    galleryItem.eq(6).removeClass('row1-col');
                    galleryItem.eq(7).removeClass('row1-col');

                    galleryItem.eq(4).removeClass('row2-col');
                    galleryItem.eq(5).removeClass('row2-col');
                    galleryItem.eq(6).removeClass('row2-col');
                    galleryItem.eq(7).removeClass('row2-col');

                } //0번 버튼 끝
                else if(idx==1){ //5
                //hide
                gallery.css({height:galH*Math.ceil(5/col)});  //줄수
                galleryItem.eq(1).hide();
                galleryItem.eq(3).hide();
                galleryItem.eq(6).hide();

                if(col==4){
                    //show                    
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(5).show().animate({left:galW*3, top:galH*0},0);
                    
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);
                }
                else if(col==3){
                    //show
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);

                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*1},0);                    
                    galleryItem.eq(7).show().animate({left:galW*1, top:galH*1},0);
                }
                else if(col==2){
                    //show
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);

                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(5).show().animate({left:galW*1, top:galH*1},0);
                    
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*2},0);
                }
                else {
                    //show
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(5).show().animate({left:galW*0, top:galH*3},0);
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*4},0);
                }


                    galleryItem.eq(1).removeClass('row2-col');
                    galleryItem.eq(3).removeClass('row2-col');
                    galleryItem.eq(1).addClass('row1-col');
                    galleryItem.eq(3).addClass('row1-col');
                    
                    galleryItem.eq(6).removeClass('row1-col');
                    galleryItem.eq(6).addClass('row2-col');
                }
                else if(idx==2){
                //hide
                gallery.css({height:galH*Math.ceil(6/col)});
                galleryItem.eq(1).hide();
                galleryItem.eq(3).hide();
                galleryItem.eq(4).hide();
                galleryItem.eq(5).hide();
                galleryItem.eq(6).hide();
                galleryItem.eq(7).hide();
                //show
                if(col==4){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                }
                else if(col==3){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                }
                else if(col==2){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                }
                else {
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                }

                    galleryItem.eq(1).removeClass('row2-col');
                    galleryItem.eq(1).addClass('row1-col');

                    galleryItem.eq(3).removeClass('row2-col');
                    galleryItem.eq(3).addClass('row1-col');

                    galleryItem.eq(4).removeClass('row2-col');
                    galleryItem.eq(4).addClass('row1-col');

                    galleryItem.eq(5).removeClass('row2-col');
                    galleryItem.eq(5).addClass('row1-col');

                    galleryItem.eq(6).removeClass('row2-col');
                    galleryItem.eq(6).addClass('row1-col');

                    galleryItem.eq(7).removeClass('row2-col');
                    galleryItem.eq(7).addClass('row1-col');

          
                }
                else if(idx==3){
                //hide
                gallery.css({height:galH*Math.ceil(4/col)});

                galleryItem.eq(1).hide();
                galleryItem.eq(3).hide();
                galleryItem.eq(5).hide();
                galleryItem.eq(6).hide();
                //show

            
                if(col==4){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);
                    galleryItem.eq(7).show().animate({left:galW*3, top:galH*0},0);
                }
                else if(col==3){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(4).show().animate({left:galW*2, top:galH*0},0);

                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*1},0);
                }
                else if(col==2){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*1, top:galH*0},0);

                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(7).show().animate({left:galW*1, top:galH*1},0);
                }
                else {
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(2).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(4).show().animate({left:galW*0, top:galH*2},0);
                    galleryItem.eq(7).show().animate({left:galW*0, top:galH*3},0);
                }

                galleryItem.eq(1).removeClass('row2-col');
                galleryItem.eq(1).addClass('row1-col');

                galleryItem.eq(3).removeClass('row2-col');
                galleryItem.eq(3).addClass('row1-col');

                galleryItem.eq(5).removeClass('row2-col');
                galleryItem.eq(5).addClass('row1-col');

                galleryItem.eq(6).removeClass('row2-col');
                galleryItem.eq(6).addClass('row1-col');
                }
                else if(idx==4){
                //hide
                gallery.css({height:galH*Math.ceil(5/col)});

                galleryItem.eq(0).hide();
                galleryItem.eq(2).hide();
                galleryItem.eq(5).hide();
                galleryItem.eq(4).hide();
                galleryItem.eq(7).hide();


                //show
                if(col==4){
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(3).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(6).show().animate({left:galW*2, top:galH*0},0);
                }
                else if(col==3){
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(3).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(6).show().animate({left:galW*2, top:galH*0},0);
                }
                else if(col==2){
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(3).show().animate({left:galW*1, top:galH*0},0);

                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*1},0);
                }
                else {
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(3).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(6).show().animate({left:galW*0, top:galH*2},0);
                }

                galleryItem.eq(0).removeClass('row2-col');
                galleryItem.eq(0).addClass('row1-col');

                galleryItem.eq(2).removeClass('row2-col');
                galleryItem.eq(2).addClass('row1-col');

                galleryItem.eq(5).removeClass('row2-col');
                galleryItem.eq(5).addClass('row1-col');

                galleryItem.eq(4).removeClass('row2-col');
                galleryItem.eq(4).addClass('row1-col');

                galleryItem.eq(7).removeClass('row2-col');
                galleryItem.eq(7).addClass('row1-col');
                }
                else if(idx==5){

                    gallery.css({height:galH*Math.ceil(3/col)});
                    //hide
                    galleryItem.eq(2).hide();
                    galleryItem.eq(4).hide();
                    galleryItem.eq(5).hide();
                    galleryItem.eq(6).hide();
                    galleryItem.eq(7).hide();
                    //show


                    if(col==4){
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(3).show().animate({left:galW*2, top:galH*0},0);
                    }
                    else if(col==3){

                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);
                    galleryItem.eq(3).show().animate({left:galW*2, top:galH*0},0);
                    }
                    else if(col==2){

                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*1, top:galH*0},0);

                    galleryItem.eq(3).show().animate({left:galW*0, top:galH*1},0);
                    }
                    else {
                    galleryItem.eq(0).show().animate({left:galW*0, top:galH*0},0);
                    galleryItem.eq(1).show().animate({left:galW*0, top:galH*1},0);
                    galleryItem.eq(3).show().animate({left:galW*0, top:galH*2},0);
                    }

                    galleryItem.eq(2).removeClass('row2-col');
                    galleryItem.eq(2).addClass('row1-col');

                    galleryItem.eq(4).removeClass('row2-col');
                    galleryItem.eq(4).addClass('row1-col');

                    galleryItem.eq(5).removeClass('row2-col');
                    galleryItem.eq(5).addClass('row1-col');

                    galleryItem.eq(6).removeClass('row2-col');
                    galleryItem.eq(6).addClass('row1-col');

                    galleryItem.eq(7).removeClass('row2-col');
                    galleryItem.eq(7).addClass('row1-col');

                } //end if

            galleryItem.addClass('addGallery');                  

        }  //리사이드끝

        $(window).resize(function(){
            resizefn();
        });
        resizefn();

        // 갤러리버튼을 클릭하면 해당 이미지 배치를 
        // hide(), show() 메서드를 이용 배치
        //버튼 6개 반복처리
        galleryBtn.each(function(index){      
            $(this).on({
                click: function(e){
                    e.preventDefault();   

                    idx = index;
                    resizefn();  //반응형 호출 

                }
            });
        });


        }

    }
const newPortfolio = new portfolio();
newPortfolio.init();


})(jQuery,window,document);