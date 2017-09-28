angular.module('quizApp', [])
    .controller('QuizController', function($scope, $http) {
        $scope.yscore = 0;
        $scope.yguess = 0;
        $http({
            method: "GET",
            url: "http://d8headless.dd:8083/quiz"
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
                newCount = newCount.toString();
                $scope.current = $scope.items.find(item => item.field_question_number === newCount);
            }
            setCurrent();

            //console.log($scope.current.field_question);

            $scope.score = function($index) {
                $scope.yguess ++;
                selected = $index + 1;
                selected = selected.toString();

                if (selected === $scope.current.field_correct) {

                    // if the score is correct...
                    let currentID = $scope.current.field_question_number;
                    let newCount = currentID;
                    while (newCount === currentID) {
                        newCount = randItems(1, count);
                        newCount = newCount.toString();
                        $scope.current = $scope.items.find(item => item.field_question_number === newCount);
                    }

                    $scope.yscore++;

                } else {
                    var myEl = angular.element(document.querySelector('input#op'+ $index));
                    myEl.attr('disabled', 'disabled');
                    myEl.attr('checked', false);
                }

            }

            $scope.end = function() {
                console.log('ended');
                $scope.yscore = 0;
            }

        }, function bad(response) {
            $scope.items = response.statusText;
        });

    });
