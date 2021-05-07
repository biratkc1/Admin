export default (req, res) => {
    res.statusCode = 200;
    res.json({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.386330, 33.753746] },
          properties: {
            vehicle_id: "EV-0102",
            driver: "",
            generatedDescription: "This vehicle is moving at 56mph, going north-bound on i85 to it's destination at 58 Edgewood Ave NE, Atlanta, GA 30303",
          },
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-83.621157, 32.837698] },
          properties: {
            vehicle_id: "EV-0103",
            driver: "",
            generatedDescription: "This Vehicle is going 56mph, last going south-bound on peachtree road to it's destination at 58 Edgewood Ave NE, Atlanta, GA 30303",
          },
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.355542, 33.912024] },
          properties: {
            vehicle_id: "EV-0104",
            driver: "",
            generatedDescription: "This Vehicle is going STOPPED. Video shows [Pedestrian] in [Driver Side]. Stop Light is [RED]",
          },
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.352001, 33.913191] },
          properties: {
            vehicle_id: "EV-0105",
            driver: "",
            generatedDescription: "This Vehicle is going STOPPED. Video shows [INDOOR], [DRIVER NOT PRESENT]",
          },
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.394321, 33.794841] },
          properties: {
            vehicle_id: "EV-0106",
            driver: "",
            generatedDescription: "This Vehicle is going STOPPED. Video shows [Pedestrian] in [Driver Side]. Stop Light is [RED]",

          },
        },
      ],
      
    });
  };

  