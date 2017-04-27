// THIS FILE SHOULD NOT BE MODIFIED

function initialize() {
    // Private Interface
    var data = [
        {
            id: 1,
            name: "Apple",
            colour: "red",
            soldInStores: [
                {
                    name: "Safeway",
                    price: 2
                },
                {
                    name: "Walmart",
                    price: 1,
                },
                {
                    name: "Save On Foods",
                    price: 1.25
                }
            ]
        },
        {
            id: 2,
            name: "Orange",
            colour: "orange",
            soldInStores: [
                {
                    name: "Safeway",
                    price: 3
                },
                {
                    name: "Walmart",
                    price: 1.75,
                },
                {
                    name: "Save On Foods",
                    price: 1.25
                }
            ]

        },
        {
            id: 3,
            name: "Pepper",
            colour: "green",
            soldInStores: [
                {
                    name: "IGA",
                    price: 1.80,
                },
                {
                    name: "Save On Foods",
                    price: 2.25
                }
            ]

        },
        {
            id: 4,
            name: "Blueberries",
            colour: "blue",
            soldInStores: [
                {
                    name: "Safeway",
                    price: 6
                },
                {
                    name: "IGA",
                    price: 4,
                },
                {
                    name: "Save On Foods",
                    price: 3.75
                }
            ]

        },
        {
            id: 5,
            name: "Lettuce",
            colour: "green",
            soldInStores: [
                {
                    name: "IGA",
                    price: 3.25
                }
            ]

        },
        {
            id: 6,
            name: "Grapefruit",
            colour: "orange",
            soldInStores: [
                {
                    name: "Safeway",
                    price: 3.15
                },
                {
                    name: "Walmart",
                    price: 2.20,
                },
                {
                    name: "Save On Foods",
                    price: 2.20
                }
            ]

        },
        {
            id: 7,
            name: "Tomato",
            colour: "red",
            soldInStores: [
                {
                    name: "Safeway",
                    price: 2.25
                },
                {
                    name: "Walmart",
                    price: 1.75,
                }
            ]

        },
        {
            id: 8,
            name: "Celery",
            colour: "green",
            soldInStores: [
                {
                    name: "Safeway",
                    price: 2
                },
                {
                    name: "Walmart",
                    price: 2,
                },
                {
                    name: "Save On Foods",
                    price: 2
                }
            ]

        },
        {
            id: 9,
            name: "Strawberry",
            colour: "red",
            soldInStores: [
                {
                    name: "IGA",
                    price: 2.25
                },
                {
                    name: "Walmart",
                    price: 1.15,
                },
                {
                    name: "Safeway",
                    price: 3.25
                }
            ]

        },
        {
            id: 10,
            name: "Corn",
            colour: "yellow",
            soldInStores: [
                {
                    name: "Safeway",
                    price: 2.25
                },
                {
                    name: "Walmart",
                    price: 1.75,
                },
                {
                    name: "IGA",
                    price: 2.25
                }
            ]

        },
        {
            id: 11,
            name: "Spinach",
            colour: "green",
            soldInStores: [
                {
                    name: "Safeway",
                    price: 2.25
                },
                {
                    name: "Walmart",
                    price: 4,
                },
                {
                    name: "Save On Foods",
                    price: 4.25
                }
            ]

        },
        {
            id: 12,
            name: "Pomegranate",
            colour: "red",
            soldInStores: [
                {
                    name: "Safeway",
                    price: 7
                },
                {
                    name: "Walmart",
                    price: 8,
                },
                {
                    name: "Save On Foods",
                    price: 5.25
                }
            ]

        }
    ];

    var dataIndex;
    var dataStepSize;


    // Public Interface
    function DataSource() {
        dataIndex = 0;
        dataStepSize = 3;
    }

    DataSource.prototype.getNextPage = function() {
        var response = [];
        var endIndex = Math.min(dataStepSize + dataIndex, data.length);

        for (dataIndex; dataIndex < endIndex; ++dataIndex) {
            response.push(data[dataIndex]);
        }

        return response;
    }


    window.DataSource = DataSource;
};


initialize();
