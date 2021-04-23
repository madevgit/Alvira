window.addEventListener('load', (e) => {
  //GLOBAL VARIABLES SOMTIMES USED
  let scrollMenuWidth = $("#scrollMenu").width();
  window.addEventListener('resize', (e) => {
    scrollMenuWidth = $("#scrollMenu").width();
  })
  let scrollingWidth = $("#scrollMenu").scrollLeft();
  //CLOSE AND OPEN SIDE MENU START
  $('#closeSideMenu').on('click', () => {
    let width = $('#sideMenu').width()
    $('#sideMenu').animate({
      right: -width
    }, {
      duration: 500,
      queue: false
    }).hide(600)
  })
  $('#openSideMenu').on('click', () => {
    $('#sideMenu').animate({
      right: 0
    }, {
      duration: 500,
      queue: false
    }).show(600)
  })
  //CLOSE AND OPEN SIDE MENU END

  //CLICK TO NAVIGATE IN SIDE MENU START
  $('#tabs a').click(() => {
    $('#tabs a').css({
      color: "inherit",
      boxShadow: "none"
    }).removeClass('shadow-inner bg-gray-200 rounded-md')
  })
  $.each($('#tabs a'), function (index, element) {
    $(element).click((e) => {
      e.preventDefault()
      $(element).css({
        color: "darkslategray",
      }).addClass('shadow-inner bg-gray-200 rounded-md')
      if (index == 0) {
        $("#scrollMenu").scrollLeft(0);
      } else if (index == 1) {

        $("#scrollMenu").scrollLeft(scrollMenuWidth);
      } else {
        $('#scrollMenu').scrollLeft(scrollMenuWidth * 2)
      }
    })
  })
  //CLICK TO NAVIGATE IN SIDE MENU END
  $('tbody tr:odd').addClass("bg-gray-100")
  $(window).scroll(() => {
    if ($(this).scrollTop() > 16) {
      $("#headNav").addClass("shadow-md bg-gray-100 bg-opacity-50");
    } else {
      $("#headNav").removeClass("shadow-md bg-gray-100 bg-opacity-50");
    }
  })
  $('.panelToggler').click(() => {
    e.preventDefault()
    $("#panelInviteIns").toggleClass('-translate-y-full opacity-0')
    $("#panelInviteCon").toggleClass('-translate-y-full opacity-0')
    $("#connexionForm").toggleClass('-translate-y-full opacity-0')
    $("#inscriptionForm").toggleClass('-translate-y-full opacity-0')
  })
  $('#start').click(() => {
    $('.welcomeBox').css({
      transform: " translateX(-100%)"
    })
    $('#wrapperConnexionInscription').css({
      transform: " translateX(-100%)"
    })
  })
  $('#retour').click(() => {
    $('.welcomeBox').css({
      transform: " translateX(0%)"
    })
    $('#wrapperConnexionInscription').css({
      transform: " translateX(0%)"
    })
  })
})
//61819101
