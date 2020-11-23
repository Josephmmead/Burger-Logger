$(function() {
    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
      var eaten = $(this).data("newdevoured");

      var newEat= {
        devoured: eaten
      };

      // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEat
    }).then(
      function() {
        console.log("changed devoured to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
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
});