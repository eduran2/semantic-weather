$.simpleWeather({location:99004,unit:"f",success:function(t){console.log(t),$(".temp").text(t.temp),$(".city").text(t.city),$(".image img").attr("src",t.image),$(".description p").text(t.text)},error:function(t){console.log("Look outside.")}}),$(".ui.accordion").accordion();