const stars = document.querySelectorAll('.star');

    function gfg(n) {
        stars.forEach(star => star.classList.remove('active'));

        
        for (let i = 0; i < n; i++) {
            stars[i].classList.add('active');
        }
    }
    
    function submitReview() {
    const review = document.getElementById("reviewText").value.trim();

    if (review) {
      alert("Thank you for your review!");
      return true; 
    } else {
      alert("Please enter a review before submitting.");
      return false; 
  }
  }