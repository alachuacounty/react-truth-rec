
        var map;
        var InforObj = [];
        var centerCords = {
          lat:29.6516, lng:-82.3248
        };
        var markersOnMap = [{
                placeName: "Newnansville (1)",
                details: "Newnansville (1) Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.",
                moreDetailsURL: "/details_page.html",
                locationImage: "img/Intersection 23.png",
                LatLng: [{
                lat:29.8050, lng:-82.4798
                }]
            },
            {
                placeName: "Newnansville (2)",
                details: "Newnansville (2) Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.",
                LatLng: [{
                lat:29.8051, lng:-82.4800
                }]
            },
            {
                placeName: "Newnansville (3)",
                details: "Newnansville (3) Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.",
                moreDetailsURL: "/details_page.html",
                locationImage: "img/Intersection 23.png",
                LatLng: [{
                  lat:29.8052, lng:-82.4802
                }]
            },
            {
                placeName: "Newnansville (4)",
                details: "Newnansville (4) Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.",
                moreDetailsURL: "/details_page.html",
                locationImage: "img/Intersection 23.png",
                LatLng: [{
                  lat:29.8055, lng:-82.4806
                }]
            },
            {
                placeName: "Micanopy (1)",
                details: "Micanopy (1) Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.",
                moreDetailsURL: "/details_page.html",
                locationImage: "img/Intersection 23.png",
                LatLng: [{
                  lat:29.5047, lng:-82.2798
                }]
            },
            {
                placeName: "Waldo (1)",
                details: "Waldo (1) Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.",
                moreDetailsURL: "/details_page.html",
                locationImage: "img/Intersection 23.png",
                LatLng: [{
                  lat:29.7897, lng:-82.1673
                }]
            },
            {
                placeName: "Rochelle (1)",
                details: "Rochelle (1) Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.",
                moreDetailsURL: "/details_page.html",
                locationImage: "img/Intersection 23.png",
                LatLng: [{
                lat:29.5964, lng:-82.2178
                }]
            },
            {
                placeName: "Archer (1)",
                details: "Archer (1) Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.",
                moreDetailsURL: "/details_page.html",
                locationImage: "img/Intersection 23.png",
                LatLng: [{
                  lat:29.5300, lng:-82.5190
                }]
            },
            {
                placeName: "Newberry (1)",
                details: "Newberry (1) Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.",
                moreDetailsURL: "/details_page.html",
                locationImage: "img/Intersection 23.png",
                LatLng: [{
                  lat:29.6464, lng:-82.6065
                }]
            },
            {
                placeName: "High Springs (1)",
                details: "High Springs (1) Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.",
                moreDetailsURL: "/details_page.html",
                locationImage: "img/Intersection 23.png",
                LatLng: [{
                lat:29.8269, lng:-82.5968
                }]
            },
            {
                placeName: "Campville (1)",
                details: " Campville Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.",
                moreDetailsURL: "/details_page.html",
                locationImage: "img/Intersection 23.png",
                LatLng: [{
                  lat:29.6664, lng:-82.1184
                }]
            },
            {
                placeName: "Gainesville (1)",
                details: "Gainesville Details Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.",
                moreDetailsURL: "/details_page.html",
                locationImage: "img/Intersection 23.png",
                LatLng: [{
                  lat:29.6516, lng:-82.3248
                }]
            }
        ];
 
        window.onload = function () {
            initMap();
        };
 
        function addMarkerInfo() {
            for (var i = 0; i < markersOnMap.length; i++) {
                var contentString = '<div id="content" class="marker-info"><div class="marker-text"><h2>' + markersOnMap[i].placeName +
                    '</h2><p>'  + markersOnMap[i].details + '</p></div><div class="marker-image"><a href="'  + markersOnMap[i].moreDetailsURL + '"> <img src="'  + markersOnMap[i].locationImage + '"/></a></div></div></div>';
 
                const marker = new google.maps.Marker({
                    position: markersOnMap[i].LatLng[0],
                    map: map
                });
 
                const infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 400
                });
 
                marker.addListener('click', function () {
                    closeOtherInfo();
                    infowindow.open(marker.get('map'), marker);
                    InforObj[0] = infowindow;
                });
                // marker.addListener('mouseover', function () {
                //     closeOtherInfo();
                //     infowindow.open(marker.get('map'), marker);
                //     InforObj[0] = infowindow;
                // });
                // marker.addListener('mouseout', function () {
                //     closeOtherInfo();
                //     infowindow.close();
                //     InforObj[0] = infowindow;
                // });
            }
        }
 
        function closeOtherInfo() {
            if (InforObj.length > 0) {
                /* detach the info-window from the marker ... undocumented in the API docs */
                InforObj[0].set("marker", null);
                /* and close it */
                InforObj[0].close();
                /* blank the array */
                InforObj.length = 0;
            }
        }
 
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 11,
                center: centerCords
            });
            addMarkerInfo();
        }