require "json"

class SearchController < ApplicationController
  def index
    if params['lat'] && params['long']
      @response = Openweather::Search.by_location(params['lat'], params['long'])
    end
  end

end
