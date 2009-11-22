require 'rubygems'
require 'sinatra'

get '/' do
  @page_title = 'Web Application Design + Rails Development'
  
  erb :index
end