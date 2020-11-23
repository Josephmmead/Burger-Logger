$(function() {
    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
      var eaten = $(this).data("newdevoured");

      console.log(id);
      console.log(eaten);

      var newEat= {
        devoured: eaten
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEat
      }).then(
        function() {
          console.log("Changed devoured to: ", eaten)

          location.reload();
        }
      );
    });
});

$(".create-form").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: false
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Created new burger: " + newBurger);

        location.reload();
      }
    );
  });