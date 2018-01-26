  $(function() {
      var animationName = 'animated shake';
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

      $('#triangle-small').on('click',function() {
        
        $('#rectangle1').addClass(animationName).one(animationend,function() {
          $(this).removeClass(animationName);
        });

      });

    });

$(function() {
      var animationName = 'animated bounceInLeft';
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

      $('#circle').on('click',function() {
        
        $('#triangle-right').addClass(animationName).one(animationend,function() {
          $(this).removeClass(animationName);
        });

      });

    });

$(function() {
      var animationName = 'animated slideOutRight';
      var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

      $('#rectangle').on('click',function() {
        
        $('#rectangle2, #rectangle3, #rectangle4').addClass(animationName).one(animationend,function() {
          $(this).removeClass(animationName);
        });

      });

    });