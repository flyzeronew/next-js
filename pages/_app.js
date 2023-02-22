import { useRouter } from 'next/router'
import App from "next/app"
import '../styles/globals.css'
import '../styles/program_master.css'
import '../styles/program_article_share.css'
import '../styles/main.css'
import '../styles/p_footer_news.css'
import $ from 'jquery';

export default function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const postId=router.query.Post;
  const detailId=router.query.detail;
  const page1=pageProps;
  return <Component {...pageProps} postId={postId} detailId={detailId} myJquery={myJquery} />  
}

// App.getInitialProps = async ({ req }) => {
// const res = await fetch('https://2017tvbsapp-st.tvbs.com.tw/api3/news_program_api/menu?id=28')
// const json = await res.json()
// return { menu: json.program}
// }

function myJquery(){  
   
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  window.fbAsyncInit = function() {     
    window.FB.init({
    appId            : '1662762424018052',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.9'
  });
  window.FB.AppEvents.logPageView();
  };  


    // google搜尋
    var cx = '002254347943719830775:s6buouardhq';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
    $('#search_button_mobile').click(function(){ 
        $('button.gsc-search-button').click(); 
    }); 
 
    $("body").on('keyup','#search',function(){
        if($(this).val()!='') {
            $('#gsc-i-id1').val( $(this).val() );
            $('#search_button,#search_button_mobile').click(function(){ 
              $('button.gsc-search-button').click(); 
            }); 
        }
    });

    $("body").on('keyup','#search_mobile',function(event){
        if( $(this).val()!='' ) {   
            $('#gsc-i-id1').val( $(this).val() );
            $('#search_button_mobile').click(function(){ 
              $('button.gsc-search-button').click(); }); 
            if(event.keyCode==13) {
                $("#search_mobile").blur();
            }
        }
    });

    $('.keyword_btn').click(function(){
      $('#gsc-i-id1').val($(this).val());
      $('button.gsc-search-button').click(); 
    });
    
    $(document).on('keyup',function(event) {
        if(event.keyCode==13) {
            $('#gsc-i-id1').val('');
            if( $('#search').val()!='' ) {
                var searchKey = $('#search').val();                            
            } else {
                var searchKey = $('#search_mobile').val();
            }
            if( searchKey!='' ) { 
                $('#gsc-i-id1').val( searchKey );
                $('button.gsc-search-button').click();
            }
        }
    });
    // google搜尋 ed
    // /*內頁上下頁控制*/   
      $(".updown_page_L").mouseover(function(){
        $(".updown_page_L").find(".updown_page_context").fadeIn(100);      
      });
      $(".updown_page_L").mouseleave(function(){
        $(".updown_page_context").hide();   
      });
      $(".updown_page_R").mouseover(function(){
        $(".updown_page_R").find(".updown_page_context").fadeIn(100);      
      });
      $(".updown_page_R").mouseleave(function(){
        $(".updown_page_context").hide();   
      });    
    // /*內頁上下頁控制 ed*/
    // 社群跟著跑
    $(window).scroll(function(){object_scroll(); });
    var header_h=$('.program_header').outerHeight(true);
    var lastScrollTop = 0;
    function object_scroll(){
        if(($(window).scrollTop()>lastScrollTop)){
            if($(window).width()<1024){
                $('.program_content_community_list_mobile').show();
            }else{
                $('.program_content_community_list_mobile').hide();
            }
        }else{
            $('.program_content_community_list_mobile').hide();
        }
        lastScrollTop = $(window).scrollTop();
        if($(window).scrollTop()>header_h){
            $('.program_content_updown_page_box').fadeIn(300);
            $('.program_content_community_list').fadeIn(300);
        }else{
            $('.program_content_updown_page_box').hide();
            $('.program_content_community_list').hide();
        }

        if($(window).scrollTop()>50){
            $('#back').fadeIn(300);
        }else{
            $('#back').hide();
        }
    }

    // 社群跟著跑ed

    $(window).scroll(function(){
      if ($(window).scrollTop()>50){
        $('#back').fadeIn(); 
        $('#back').css({ 'bottom': '25px' });
      } else {
            $('#back').fadeOut(); 
        $('#back').css({ 'bottom': '-100px' });
      }
    });

    // 呼叫gotop
    var $el = $(scrollableElement('html', 'body'));
      var speed = 550;
      var $iconTOP = $('#back');
      $($iconTOP).click(function(event) {
          event.preventDefault();
          $el.stop().animate({ scrollTop: -50 }, speed);
      });
    // 呼叫gotop ed

    // 手機漢堡執行
    $(document).ready(function(){ 
      $('.ham').click(function() {
        header_go();
        $('.ham_close').fadeIn(200);
        $('.nav_inner_m').css({'right':'0'});
        $('.nav_bg').show();
      });
      $('.ham_close').click(function() {
          header_go();          
          $('.nav_inner_m').css({'right':'-100%'});
          $('.nav_bg').hide();
      });
      $('.header_search_m .search_btn').click(function() {
            $('.header_search_m .search_page').css({right:0});
            $('.nav_bg').show();            
      });
      $('.header_search_m .search_close_btn').click(function() {
            $('.header_search_m .search_page').css({right:'-100%'});
            $('.nav_bg').hide();            
      });

      // 箭頭漢堡
      $('.program_header_arraw').click(function(){
          $(this).toggleClass('open1');            
          if($(this).hasClass('open1')){
            console.log('sss');
              $(this).css({transform:'rotate(90deg)',transition:'0.3s'});
              $('.ham_box').show();
          }else{            
              $(this).css({transform:'rotate(0deg)',transition:'0.3s'});      
              $('.ham_box').hide();         
          }     
      });    
      // 箭頭漢堡ed
    });
    // 手機漢堡執行 ed

}
function scrollableElement() {
  var i, len, el, $el, scrollable;
  for (i = 0, len = arguments.length; i < len; i++) {
      el = arguments[i];
      $el = $(el);
      if ($el.scrollTop() > 0) {
          return el;
      } else {
          $el.scrollTop(1);
          scrollable = $el.scrollTop() > 0;
          $el.scrollTop(0);
          if (scrollable) {
              return el;
          }
      }
  }
  return [];
}
function header_go(){
  $('.nav_inner_m li').each(function(i) {
      $('.nav_inner_m li a').removeClass('op');
      $('.nav_inner_m li').find('.nav_sub').hide();
      $('.nav_inner_m li').eq(i).find('.aw1 img').css({transform:'rotate(0deg)'});
      
                    
      $(this).find('a').click(function() {                        
          $(this).toggleClass('op');
          if($(this).hasClass('op')){
                  $('.nav_inner_m li').eq(i).find('.aw1 img').css({transform:'rotate(180deg)'}); 
                  $('.nav_inner_m li').eq(i).find('.nav_sub').show();                                
              }else{ 
                  $('.nav_inner_m li').eq(i).find('.aw1 img').css({transform:'rotate(0deg)'});                               
                  $('.nav_inner_m li').find('.nav_sub').hide();
                  $(this).removeClass('op');
              }
      });

  });


}
