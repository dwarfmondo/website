require 'rubygems'
require 'sinatra'

get '/' do
  @page_title = 'Web Application Design + Rails Development'
  
  erb :index, {:layout => :index_layout}
end

get '/about' do
  @page_title = 'About'
  
  erb :about
end