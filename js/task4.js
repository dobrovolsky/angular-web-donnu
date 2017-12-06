var app = angular.module('myApp', []);

app.controller('testingCtrl', function($scope) {
    $scope.sequenceCounter = 0;
    $scope.questionList = [
        {sequence: 1, question: '2+2 = ?', answer:[
                {id: 1, text: '1', is_correct: false},
                {id: 2, text: '2', is_correct: false},
                {id: 3, text: '3', is_correct: false},
                {id: 4, text: '4', is_correct: true}
            ]
        },
        {sequence: 2, question: '2+1 = ?', answer:[
                {id: 1, text: '1', is_correct: false},
                {id: 2, text: '2', is_correct: false},
                {id: 3, text: '3', is_correct: true},
                {id: 4, text: '4', is_correct: false}
            ]
        },
        {sequence: 3, question: '2+0 = ?', answer:[
                {id: 1, text: '1', is_correct: false},
                {id: 2, text: '2', is_correct: true},
                {id: 3, text: '3', is_correct: false},
                {id: 4, text: '4', is_correct: false}
            ]
        },
        {sequence: 4, question: '2-1 = ?', answer:[
                {id: 1, text: '1', is_correct: true},
                {id: 2, text: '2', is_correct: false},
                {id: 3, text: '3', is_correct: false},
                {id: 4, text: '4', is_correct: false}
            ]
        },
        {sequence: 5, question: '2-1 = ?', answer:[
                {id: 1, text: '1', is_correct: false},
                {id: 2, text: '2', is_correct: false},
                {id: 3, text: '3', is_correct: false},
                {id: 4, text: 'without right answers', is_correct: true}
            ]
        }

    ];
    $scope.currentQuestin = getQuestion();
    $scope.viewDisplay = 'questions';
    $scope.scoreResult = 0;
    $scope.answer = {};
    $scope.processAnswer = function () {
        if (is_correct()) {
            $scope.scoreResult++
        }
        var new_question = getQuestion();
        if (new_question){
            $scope.currentQuestin = new_question
        }
        else {
            $scope.viewDisplay = 'result';
        }

    };

    function getQuestion () {
        var item = $scope.questionList[$scope.sequenceCounter];
        $scope.sequenceCounter++;
        return item
    }

    function is_correct() {
        if ($scope.answer.answerId){
            return $scope.currentQuestin.answer[$scope.answer.answerId-1].is_correct
        }

    }
});
