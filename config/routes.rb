Webserver::Application.routes.draw do
  root :to => 'static#start'
  match ':action' => 'static#:action'
  match 'datawrapper/alldata' => 'datawrapper#alldata'
  match 'datawrapper/companynames' => 'datawrapper#companynames'  
end
