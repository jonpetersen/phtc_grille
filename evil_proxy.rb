require 'evil-proxy'
require 'evil-proxy/store'
# EvilProxy::HTTPProxyServer is a subclass of Webrick::HTTPProxyServer;
#   it takes the same parameters.
proxy = EvilProxy::HTTPProxyServer.new Port: 8080

proxy.after_head do |req|
#  puts req.query_string
  if req.query_string  
    if req.query_string.include? "EvPoiWonDedans=1"
       puts "DEDANS!"
       system('omxplayer ~/Music/mj.m4a')
    end
    
    if req.query_string.include? "EvPoiWonGrille=1"
      puts "GRILLE!"
      system('omxplayer ~/Music/pinball_wizard.m4a')
    end
    
    if req.query_string.include? "EvPoiWonWinningGallery=1"
      puts "WINNING GALLERY!"
      system('omxplayer ~/Music/raining_men.m4a') 
    end
   
    if req.query_string.include? "MatIsFault=1"
##      puts "DOUBLE FAULT!"
    end

  end
  
end

proxy.start
