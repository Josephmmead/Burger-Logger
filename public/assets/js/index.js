$(function() {
    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
      var eaten = true;

      var devoured = {
        devoured: eaten
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devoured
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
      burger: $("#newBurger").val().trim()
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




