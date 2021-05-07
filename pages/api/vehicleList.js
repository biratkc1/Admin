export default (req, res) => {
    res.statusCode = 200;
    res.json([
        {
          "driver_name": "Berry Thomas [3]",
          "vehicle_id": "EV-0102",
          "mph": 55,
          "miles": 80,
          "total_miles": 280,  
          "status": "Going To Waypoint [2hr left]",
          "long": -84.386330,
          "lat": 33.753746,
        },
        {
          "driver_name": "Rick Perry [3]",
          "vehicle_id": "EV-0103",
          "mph": 70,
          "miles": 100,
          "total_miles": 290,  
          "status": "Arriving at Waypoint [.3hr left]",
          "long": -83.621157,
          "lat": 32.837698,
        },
        {
          "driver_name": "JinJin Lee [3]",
          "vehicle_id": "EV-0104",
          "mph": 60,
          "miles": 85,
          "total_miles": 250,  
          "status": "Break [1hr left]",
          "long": -84.355542,
          "lat": 33.912024,
        },
        {
          "driver_name": "Abigal Davis [3]",
          "vehicle_id": "EV-0105",
          "mph": 56,
          "miles": 72,
          "total_miles": 350,  
          "status": "Pickup [.1hr left]",
          "long": -84.352001,
          "lat": 33.913191,
        },
        {
          "driver_name": "Hakeem Mustafa [3]",
          "vehicle_id": "EV-0102",
          "mph": 72,
          "miles": "93",
          "total_miles": "580",  
           "status": "Pickup [.08hr left]",
           "long": -84.394321,
           "lat": 33.794841,
        },
      ]);
  };

  