// Wait for the DOM to be ready
$(document).ready(function () {
    // Function to fetch cupcakes from the API and update the page
    function getCupcakes() {
      axios.get('/api/cupcakes')
        .then(function (response) {
          // Clear the existing list
          $('#cupcakes-list').empty();
  
          // Iterate over the cupcakes and add them to the list
          response.data.cupcakes.forEach(function (cupcake) {
            $('#cupcakes-list').append(`<li>${cupcake.flavor}</li>`);
          });
        })
        .catch(function (error) {
          console.error('Error fetching cupcakes:', error);
        });
    }

      // Fetch cupcakes on page load
  getCupcakes();

  // Handle form submission
  $('#new-cupcake-form').submit(function (event) {
    event.preventDefault();

    const formData = {
      flavor: $('#form-flavor').val(),
      size: $('#form-size').val(),
      rating: $('#form-rating').val(),
      image: $('#form-image').val(),
    };

    axios.post('/api/cupcakes', formData)
      .then(function (response) {
        // Clear the form fields
        $('#form-flavor').val('');
        $('#form-size').val('');
        $('#form-rating').val('');
        $('#form-image').val('');

        // Fetch cupcakes again to update the list
        getCupcakes();
      })
      .catch(function (error) {
        console.error('Error creating cupcake:', error);
      });
  });
});