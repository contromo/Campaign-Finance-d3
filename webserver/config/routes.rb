Webserver::Application.routes.draw do
  match ':action' => 'static#:action'
end
