$.ajax({
    method: "GET",
    url: "test.html",
    success: function(data){
      $('#results').append(data);
    }
});
