require 'slide_hero'

presentation 'ajax_intro' do
  slide "Let's Learn AJAX!" do
    point "Making your apps refreshingly non-refreshing"
  end

  slide "What is AJAX?" do
    point "Asynchronous JavaScript and XML"
    point "Client-side code that talks to a server"
    point "Dynamic conent without a page refresh"
  end

  slide "We Can Do Awesome Things with AJAX" do
    list do
      point "<a href='http://www.google.com/' target='_blank'>Autocompletion</a>"
      point "<a href='http://www.boxed.com/' target='_blank'>Infinite Scroll</a>"
      point "<a href='http://todomvc.com/examples/vanillajs/' target='_blank'>Inline Editing</a>"
    end
  end

  slide "How AJAX Works" do
    point "Handles requests and responses in the background, asynchronously"
    image "ajax-diagram.png"
  end

  slide "jQuery + AJAX === <3" do
    point "...and the <a href='http://api.jquery.com/jquery.ajax/' target='_blank'>documentation</a> is awesome!"
  end

  slide "AJAX Without jQuery" do
    code(:javascript) do
      "vanilla-js-ajax.js"  
    end
  end

  slide "AJAX With jQuery" do
    code(:javascript) do
      "jquery-ajax.js"  
    end
  end

  slide "Using AJAX to Consume an API" do
    code(:javascript) do
      "spotify.js"  
    end
  end

  slide "DEMO TIME!" do
    # use code/spotify-api-demo.html
  end
end
