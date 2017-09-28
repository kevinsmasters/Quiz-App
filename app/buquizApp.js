angular.module('quizApp', [])
    .controller('QuizController', function($scope, $http) {

        $http({
            method: "GET",
            url: "app/data.json"
        }).then(function good(response) {
            $scope.items = response.data;
            let myScore = 0;

            let count = $scope.items.length;
            function randItems(min,max)
                {
                    return Math.floor(Math.random()*(max-min+1)+min);
                }

            function setCurrent() {
                var newCount = randItems(1, count);
                $scope.current = $scope.items.find(item => item.id === newCount);
            }
            setCurrent();

            $scope.score = function($index) {

                if ($index === $scope.current.correct) {
                    // if the score is correct...
                    let currentID = $scope.current.id;
                    let newCount = currentID;
                    while (newCount === currentID) {
                        newCount = randItems(1, count);
                        $scope.current = $scope.items.find(item => item.id === newCount);
                    }

                } else {

                }


            }


        }, function bad(response) {
            $scope.items = response.statusText;
        });
        /*
        $scope.items = [
            {
                "id":1,
                "question":"How many steps are in SDLC?",
                answer:["infinite","six or five","seven","three"],
                get correct () {
                    return this.answer[2];
                }
            },
            {
                "id":2,
                "question":"What is usually the shortest step?",
                answer:["define requirements","testing","filing your taxes",
                "development"],
                get correct () {
                    return this.answer[3];
                }

            },
            {
                "id":3,
                "question":"Which of these is NOT a development Methodology?",
                answer:["Agile","Waterfall","Spiral","Fractal"],
                get correct () {
                    return this.answer[3];
                }
            }
        ];

        */

    });
