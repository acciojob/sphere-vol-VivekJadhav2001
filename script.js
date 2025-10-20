const form = document.getElementById("MyForm");

    form.addEventListener("submit", volume_sphere);

    function volume_sphere(e) {
      e.preventDefault();

      const radiusInput = document.getElementById("radius").value;
      const volumeOutput = document.getElementById("volume");

      const radius = parseFloat(radiusInput);

      // Validate input
      if (isNaN(radius) || radius < 0) {
        volumeOutput.value = "NaN";
        return;
      }

      // Calculate volume: V = (4/3) * π * r^3
      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

      // Display result rounded to 4 decimal places
      volumeOutput.value = volume.toFixed(4);
    }


// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
