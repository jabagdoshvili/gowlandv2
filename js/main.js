$('.interactive-menu-button a').click(function() {
  $(this).toggleClass('active');
});

var scroll = new SmoothScroll('a[href*="#"]');


$('.more-btn').click(function() {
  $('#hiden-gallery').toggleClass('hide');
  $('#hiden-gallery').toggleClass('open');
  if ( $('#hiden-gallery').is( ".open" ) ) {
    $(".more-btn-inside").text("Show Less.");
  }else {
    $(".more-btn-inside").text("Show More.");
  }
});





function slickify(){
  $('.blog-slider').slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
            breakpoint: 991,
            settings: "unslick"
        }
      ] 
  });
  $(".slick-next").text("");
  $(".slick-next").addClass("icofont-long-arrow-right");
  $(".slick-prev").text("");
  $(".slick-prev").addClass("icofont-long-arrow-left");
}

slickify();
$(window).resize(function(){
  var $windowWidth = $(window).width();
  if ($windowWidth > 991) {
      slickify(); 
      $('#blog-btn').addClass('hide-me');  
  }else if($windowWidth < 991) {
    $('#blog-btn').removeClass('hide-me');
  }
});

$('#blog-btn').click(function() {
  $('.hiden-blog').toggleClass('hide-blog');
  $('.hiden-blog').toggleClass('open-blog');
  if ( $('.hiden-blog').is( ".open-blog" ) ) {
    $("#blog-btn").text("Show Less Stories.");
  }else {
    $("#blog-btn").text("Show More Stories.");
  }
});


function createChart() {
  $("#chart").kendoChart({
      title: {
          position: "bottom",
          text: "Growland ის შემოსავლები 2022 თვის - 263,000"
        },
      legend: {
          visible: false
      },
      chartArea: {
          background: ""
      },
      seriesDefaults: {
          labels: {
              visible: true,
              background: "transparent",
              template: "#= category #: \n #= value#%"
          }
      },
      series: [{
          type: "pie",
          startAngle: 150,
          data: [{
              category: "მიწის შეფასება - 180,000",
              value: 53.8,
              color: "#9de219"
          },{
              category: "ონალინ მაღაზია - 30 000",
              value: 16.1,
              color: "#90cc38"
          },{
              category: "მოგების და რისკების განსაზღვრა - 20 000",
              value: 11.3,
              color: "#068c35"
          },{
              category: "ბიზნეს MAP - 18 000",
              value: 9.6,
              color: "#006634"
          },{
              category: "ხარჯების გამოთვლა - 10 000",
              value: 5.2,
              color: "#004d38"
          },{
              category: "აგრობლოგი - 5 000",
              value: 3.6,
              color: "#033939"
          }]
      }],
      tooltip: {
          visible: true,
          format: "{0}%"
      }
  });


  $("#chart2").kendoChart({
    title: {
        position: "bottom",
        text: "Growland ის ხარჯები 2022 თვის - 136,000"
    },
    legend: {
        visible: false
    },
    chartArea: {
        background: ""
    },
    seriesDefaults: {
        labels: {
            visible: true,
            background: "transparent",
            template: "#= category #: \n #= value#%"
        }
    },
    series: [{
        type: "pie",
        startAngle: 150,
        data: [{
            category: "მარკეტინგი - 60 000",
            value: 43.8,
            color: "#9de219"
        },{
            category: "მომუშავე პერსონალის ანაზღაურება - 36 000",
            value: 26.1,
            color: "#90cc38"
        },{
            category: "სერვერი და ვებ-გვერდი - 15 000",
            value: 11.3,
            color: "#068c35"
        },{
            category: "ვებ-გვერდზე მოდულების ჩაშენება - 20 000",
            value: 14.8,
            color: "#006634"
        },{
            category: "სხვა გაუთვალისწინებელი - 5000",
            value: 3.6,
            color: "#033939"
        }]
    }],
    tooltip: {
        visible: true,
        format: "{0}%"
    }
});
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);
