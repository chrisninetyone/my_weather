
window.addEventListener('DOMContentLoaded', (event) => {
    const weatherButton = document.getElementById('weather-btn');
    weatherButton.addEventListener('click', async (e) => {
        e.preventDefault();

        weatherButton.classList.add("loader");

        if(!navigator.geolocation) {
            status.textContent = 'Geolocation is not supported by your browser';
        } else {
            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(pos) {
                const crd = pos.coords;

                const lat = crd.latitude;
                const long = crd.longitude;

                const latField = document.getElementById('lat');
                latField.name = 'lat';
                latField.value = lat;

                const longField = document.getElementById('long');
                longField.name = 'long';
                longField.value = long;

                document.getElementById('hidden-form').submit()
            }

            function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            }

            navigator.geolocation.getCurrentPosition(success, error, options);
        }
    })
});
