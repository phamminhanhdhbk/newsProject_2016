
$(document).ready(function(){
  $("#mytable #checkall").click(function () {
    if ($("#mytable #checkall").is(':checked')) {
      $("#mytable input[type=checkbox]").each(function () {
        $(this).prop("checked", true);
      });

    } else {
      $("#mytable input[type=checkbox]").each(function () {
        $(this).prop("checked", false);
      });
    }
  });

  $("[data-toggle=tooltip]").tooltip();


  $(this).find('#mytable tbody .edit').click(function(event)
  {

  // var ten =  $(this).find('class').val();
  // var birthday = $("td").eq(3).html();
  // var location = $("td").eq(4).html();
  // var like = $("td").eq(5).html();

  var that = $(this),
  id = that.attr('id_edit');


  // if (window.confirm('Bạn có Muốn Xóa Cái Này Không  ?')) 
  // {

    // Muốn Xóa Cái Này
    // alert('xoa thành công'+id);

    $.ajax({
      url: 'id_post',
      type: 'post',
      data: { id : id},
      success: function(response)
      {
        for (var key in response)
        {

          // var value = response[key].like;
          $('#edit #id').val(response[key].id);
          $('#edit #like').val(response[key].like);
          $('#edit #name').val(response[key].name);
          $('#edit #location').html(response[key].location);
          $('#edit #birthday').val(response[key].daybirthday);


        }


      },
      error: function(error){
        alert('lỗi...')

      }
    });

//post update
$('#edit #submit_edit').click(function(event) 
{
  var  id =    $('#edit #id').val();
  var like=    $('#edit #like').val();
  var name =      $('#edit #name').val();
  var location =   $('#edit #location').html();
  var daybirthday =$('#edit #birthday').val();

  alert(like);

  $.ajax({
    url: 'updateuser',
    type: 'post',
    data: {
      id:  id,
      name:   name,
      daybirthday:  daybirthday,
      location: location,
    },

    success: function(response)
    {

      alert("Thành Công");
      window.location.replace("list");


    },
    error: function(error){
     alert('Không Thành Công');

    }
  });




});

  // } 

   //  // không muốn xóa
   //  else 
   //  {
   //   // Không Hiện gì Hết
   // }



 });



});
