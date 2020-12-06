require 'json'
require 'rest-client'

module Openweather
    class Search
        def self.by_location(lat, long)


        url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + ENV['API_KEY']
        response = RestClient.get(url)
        @response = JSON.parse(response)

        end
    end
end
# Faraday.get 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + ENV['API_KEY']