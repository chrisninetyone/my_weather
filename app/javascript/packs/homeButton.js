window.addEventListener('DOMContentLoaded', (event) => {
    // const weatherButton = document.getElementById('weather-btn')
    // weatherButton.addEventListener('click', () => {
        // console.log('clicked')
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

                //fetch the api endpoint /index with lat and long
                console.log('Your current position is:');
                console.log(`Latitude : ${crd.latitude}`);
                console.log(`Longitude: ${crd.longitude}`);
            }

            function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            }

            navigator.geolocation.getCurrentPosition(success, error, options);
        }
    // })
});
