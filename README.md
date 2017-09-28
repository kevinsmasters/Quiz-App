# Quiz-App
I built an AngularJS frontend to a headless Drupal site that reads JSON data from a REST view. The whole thing was kind of a 2-prong exercise in learning some SDLC concepts and practice working in AngularJS.

Dependencies:
Drupal 8 minimal with 
- REST Views module (https://www.drupal.org/project/rest_views) This was needed so the multiple output field would render as an array in the JSON. By default it was just rendering my answer values as a comma separated string.
- RESTful Web Services and whatever that depends on. :P

I also used gulp and gulp browser-sync to run this on my local machine.
The D8 setup was run via an acquia dev desktop instance.
